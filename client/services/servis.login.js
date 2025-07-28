import readline from 'readline-sync';
import { flow_game } from "../services/play_game.js";
import { Manager } from "../services/Manager.menu.js"
export async function User_definition(user_name) {
    console.log('1.Administrator');
    console.log('2.Guest');
    console.log('3.login');
    console.log('4.New player')
    let Password;
    let res;
    const user = readline.question('Choose a number who you are');
    switch (user) {
        case "1":
            Password = readline.question('enter ure password');
            res  =await fetch("http://localhost:4545/player/checkMeniger", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(
                    {
                        name: user_name,
                        password: Password
                    }
                )
            })
            const name = await res.text();
            if(name=="is not Verified manager"){
                return "is not Verified manager"}
            else
                {await Manager(name)}
            break;
        case "2":
            return "Guest";
        case "3":
            Password = readline.question('enter ure password');
            res  =await fetch("http://localhost:4545/player/check", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(
                    {
                        name: user_name,
                        password: Password
                    }
                )
            })
            const check = await res.text();
            if (check==="You are not registered"){
                return "You are not registered"}else return "success"
        case "4":
            Password = readline.question('Create a password');
            const Data_entry = fetch("http://localhost:4545/player/creatnewplayer", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(
                    {
                        name: user_name,
                        password: Password
                    }
                )
            }).then(Data_entry => Data_entry.text()).then(data => { console.log(data); })
            return "New player"
            break;
    }

}




