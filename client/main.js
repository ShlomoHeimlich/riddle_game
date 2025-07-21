import { Manager } from "./services/Manager.menu.js"
import { flow_game } from "./services/play_game.js";
import readline from 'readline-sync';

const user_name = readline.question('What is your name?');
console.log('hi:', user_name);
if (user_name == 1234) {
   Manager()
}
else {
   try {
      const time_login = new Date;
      const questions = await fetch("http://localhost:4545/AllQuestions")
      const new_game =await flow_game(questions)
            const answer=fetch("http://localhost:4545/player/creat", {
               method: "POST",
               headers: {
                  "Content-Type": "application/json"
               },
               body: JSON.stringify(
                  {
                     name: user_name,
                     time_to_solve: new_game,
                     time_login: time_login
                  }
               )
            }).then(answer =>  answer.text()).then(data=>{console.log(data);})
            
   } catch (error) {
      console.log(error);
   }
}









