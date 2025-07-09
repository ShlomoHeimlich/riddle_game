import readline from 'readline-sync';
import { function_play } from "./riddle.services.js";
import {all_questions ,Create_Puzzles,update_riddle}from "./Manager_services.js"
export async function Manager(){
    console.log('To create riddle press 1');
    console.log('To update riddle press 2');
    console.log('To read riddle press 3');
    console.log('To delete riddle press 4');
    let choice= readline.question('What is your choice?');
         switch (choice) {
  case "1":
    Create_Puzzles()

    break;
  case "2":
    update_riddle();
    break;
  case "3":
    all_questions()
    break;
  case "4":
    // deleteAnRiddle()
    break;

}
}






