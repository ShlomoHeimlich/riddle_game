import { players_database } from "../db/Players.db.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken"

export async function Allplayers() {
    try {
        const all_players = await players_database.findAll({ raw: true })
        return all_players
    } catch (error) { console.log(error); }
}

export async function CreatPlayer(obj) {
    try {
        const all_players = await Allplayers()
        let playerFound = all_players.find(p => p.Name == obj.name);
        if (playerFound) {
            if (playerFound.Time_to_solve === null || obj.time_to_solve < playerFound.Time_to_solve) {
                await players_database.update(
                    {
                        Time_to_solve: obj.time_to_solve,
                        Time_login: obj.time_login
                    },
                    { where: { Name: obj.name } }
                );
            } else {
                await players_database.update(
                    { Time_login: obj.time_login },
                    { where: { Name: obj.name } }
                );
            }
        } else {
            await players_database.create({
                Name: obj.name,
                Time_login: obj.time_login,
                Time_to_solve: obj.time_to_solve
            });
        }
    } catch (error) {
        console.log(error);
    }
    return 'success';
}



export async function fastest() {
    const all_players = await Allplayers();
    let name_faste = null;
    for (const name of all_players) {
        if (name.Time_to_solve == null) continue;
        if (name_faste == null || name_faste.Time_to_solve == null || name.Time_to_solve < name_faste.Time_to_solve) {
            name_faste = name;
        }
    }
    return name_faste;
}


export async function CreatNewPlayer(obj) {
    const { name, password } = obj;
    const hashedPassword = await bcrypt.hash(password, 12);
    try {
        const new_plyer = await players_database.create({
            Name: name,
            Password: hashedPassword,
            Time_login: null,
            Time_to_solve: null
        })
        return 'success'
    } catch (error) {
        return error
    }

}

export async function check(obj) {
    const { name, password } = obj;
    const all_players = await Allplayers()
    for (const row of all_players) {
        if (name == row.Name) {
            const passwordMatch = await bcrypt.compare(password, row.Password)
            if (passwordMatch) {
                return name
            }
        }
    }
    return "You are not registered"
}

export async function checkMeniger(obj) {
    const name = await check(obj)
    if (name) {
        const meniger = await players_database.findOne({ where: { Name: name } })
        if (meniger && meniger.manager === "true") {
            const SECRET_KEY = process.env.SECRET_KEY
            console.log(SECRET_KEY);
            const payload = {
                name: name,
                role: 'manager'
            }
            const token = jwt.sign(payload, SECRET_KEY, { expiresIn: '60s' })
            return token
        }
        else {
            return `is not Verified manager`
        }
    }
    else return `is not Verified manager`
}

