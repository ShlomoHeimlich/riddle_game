import { players_database } from "../db/Players.db.js";

export async function Allplayers() {
    try {
        const all = await players_database.findAll({ raw: true })
        return all
    } catch (error) { console.log(error); }
}

export async function CreatPlayer(obj) {
    let is_in = true;
    try {
        const all_players = await Allplayers()
        for (const player of all_players) {
            if (player.Name == obj.name) {
                is_in = false
                if (player.Time_to_solve < obj.time_to_solve) {
                    break;
                }
                else {
                    await players_database.update(
                        { Time_to_solve: obj.time_to_solve },
                        { where: { Name: obj.name } })
                    break;
                }
            }
        }
        if (is_in) {
            const new_plyer = await players_database.create({
                Name: obj.name,
                Time_login: obj.time_login,
                Time_to_solve: obj.time_to_solve
            })
        }
    } catch (error) { console.log(error); }
    return 'success'
}


export async function fastest() {
    const all = await Allplayers()
    let name_faste = all[0]
    for (const name of all) {
        if (name.Time_to_solve < name_faste.Time_to_solve) {
            name_faste = name
        }
    }
    return name_faste
}