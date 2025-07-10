import { Manager } from "./services/Manager.menu.js"
import { play_game } from "./play.js";
import readline from 'readline-sync';

const user_name = readline.question('What is your name?');
console.log('hi:', user_name);
if (user_name == 1234) {
   Manager()
}
else {
   try {
      const new_game = play_game(await fetch("http://localhost:4545/AllQuestions"))
      console.log(await new_game);
   } catch (err) {
      console.log(err.message)
   }
}





