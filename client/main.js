
import { start_game } from "./services/play_game.js";
import readline from 'readline-sync';
import {User_definition} from "./services/servis.login.js"

const user_name = readline.question('What is your name?');
console.log('hi:', user_name);
const user=await User_definition(user_name)
let input;
if(user=="New player" || user=="You are not registered" ||user =="Verified manager" ||user=="manager"){
   console.log(user);
}
else {
   do{
   await start_game(user,user_name)
   console.log("To exit press 1")
   console.log("Otherwise press 2")
   input = readline.question('What is your choice?');
   }while (input!="1")
}


// if (user_name == 1234) {
//    Manager()
// }
// async function start_game(){
//    try {
//       const time_login = new Date;
//       const questions = await fetch("http://localhost:4545/AllQuestions")
//       const new_game = await flow_game(questions)
//       if(user!="Guest")Data_entry(time_login,new_game)
//    } catch (error) {
//       console.log(error);
//    }
// }


// async function Data_entry(time_login,new_game) {
//    const Data_entry = fetch("http://localhost:4545/player/creat", {
//          method: "POST",
//          headers: {
//             "Content-Type": "application/json"
//          },
//          body: JSON.stringify(
//             {
//                name: user_name,
//                time_to_solve: new_game,
//                time_login: time_login
//             }
//          )
//       }).then(Data_entry => Data_entry.text()).then(data => { console.log(data); })
// }

// else if (game) {
//    try {
      // const time_login = new Date;
//       const questions = await fetch("http://localhost:4545/AllQuestions")
//       const new_game = await flow_game(questions)
      //    const Data_entry = fetch("http://localhost:4545/player/creat", {
      //    method: "POST",
      //    headers: {
      //       "Content-Type": "application/json"
      //    },
      //    body: JSON.stringify(
      //       {
      //          name: user_name,
      //          time_to_solve: new_game,
      //          time_login: time_login
      //       }
      //    )
      // }).then(Data_entry => Data_entry.text()).then(data => { console.log(data); })

//    } catch (error) {
//       console.log(error);
//    }
// }









