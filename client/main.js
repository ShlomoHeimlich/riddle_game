import { start_game } from "./services/play_game.js";
import readline from 'readline-sync';
import { User_definition } from "./services/servis.login.js"

const user_name = readline.question('What is your name?');
console.log('hi:', user_name);
const user = await User_definition(user_name)
let input;
if (user == "New player" || user == "You are not registered" || user == "Verified manager" || user == "manager") {
      console.log(user);
}

else {
      do {
            await start_game(user, user_name)
            console.log("To exit press 1")
            console.log("Otherwise press 2")
            input = readline.question('What is your choice?');
      } while (input != "1")
}







