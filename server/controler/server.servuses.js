/////import_all_question.js/////

import { readFile } from "node:fs/promises"

export async function ReadAllQuestions() {
    try {
        let all_questions = await readFile("../server/db/Questions.json", "utf8")
        all_questions = JSON.parse(all_questions)
        return all_questions
    } catch (err) {
        console.log(err.message)
    }
}

// /////Crud_services.js/////

// // import { ReadAllQuestions } from "../client/Questions/import_all_question.js"
// import { writeFile } from 'fs/promises';
// import readline from 'readline-sync';
// export async function all_questions() {
//     const all_questions = await ReadAllQuestions()
//     console.log(all_questions);
// }

// export async function Create_riddle() {
//     let all_questions = await ReadAllQuestions()
//     const riddle = {}
//     riddle["id"] = all_questions.length + 1;
//     const new_riddle = readline.question('Enter the new riddle?');
//     riddle["taskDescription"] = new_riddle
//     const name = readline.question("Enter difficulty level")
//     riddle["name"] = name
//     const correctAnswer = readline.question('Enter the correctAnswer?');
//     riddle["correctAnswer"] = correctAnswer
//     all_questions.push(riddle)
//     all_questions = JSON.stringify(all_questions)
//     Writing_To_DB("./Questions/Questions.json", all_questions)
// }

// export async function update_riddle() {
//     let all_questions = await ReadAllQuestions()
//     let id = false;
//     let id_yuser;
//     while (id != true) {
//         id_yuser = readline.question('Enter the id?')
//         all_questions.forEach(q => { if (q.id == id_yuser) { id = true } })
//     }
//     const new_riddle = readline.question('Enter the new riddle?');
//     const correctAnswer = readline.question('Enter the correctAnswer?');
//     const name = readline.question("Enter difficulty level")
//     all_questions.forEach(q => {
//         if (q.id == id_yuser) {
//             q.taskDescription = new_riddle;
//             q.correctAnswer = correctAnswer;
//             q.name = name;
//             all_questions = JSON.stringify(all_questions)
//             Writing_To_DB("./Questions/Questions.json", all_questions)
//         }
//     }
//     )
// }

// export async function delet() {
//     let all_questions = await ReadAllQuestions()
//     let id = false;
//     let id_yuser;
//     while (id != true) {
//         id_yuser = readline.question('Enter the id to delet?')
//         all_questions.forEach(q => { if (q.id == id_yuser) { id = true } })
//     }
//     const index = all_questions.findIndex(obj => obj.id == id_yuser)
//     all_questions.splice(index, 1)
//     all_questions = JSON.stringify(all_questions)
//     Writing_To_DB("./Questions/Questions.json", all_questions)
// }

// export async function Writing_To_DB(file_name, input) {
//     try {
//         await writeFile(file_name, input)
//         console.log('The operation was successful.');
//     } catch (err) {
//         console.log(err.message);
//     }
// }

// ////////riddle.services.js////////
// import { Riddle } from "../client/classes/Riddle.js";
// import { readFile, writeFile } from 'fs/promises';
// import readline from 'readline-sync';
// import { Writing_To_DB } from "./Crud_services.js"
// import { json } from "stream/consumers";

// export function function_play(arr_questions) {
//     const list_Questions = creat_Questions(arr_questions);
//     const arr_time = []
//     list_Questions.forEach(q => play(q, arr_time))
//     let time = 0;
//     arr_time.forEach(t => (time += t))
//     return time;
// }

// export function creat_Questions(arr_questions) {
//     const arr = [];
//     arr_questions.forEach(q => arr.push(new Riddle(q)))
//     return arr;
// }

// export function play(q, arr_time) {
//     let flag = false;
//     while (!flag) {
//         const start = new Date();
//         console.log(q.taskDescription)
//         const answer_yser = readline.question('What is your answer?');
//         if (answer_yser == q.correctAnswer) {
//             flag = true
//             const stop = new Date();
//             arr_time.push((stop - start) / 1000)
//             return;
//         }
//     }
// }

// export async function Player_registration(name, time) {
//     let player = {};
//     player["name"] = name
//     player["the all time is"] = time
//     player["The average time to answer a question is"] = time / 3
//     let dbPlayer = await readFile("./player/player.json", "utf8")
//     dbPlayer = JSON.parse(dbPlayer)
//     dbPlayer.push(player)
//     Writing_To_DB("./player/player.json", JSON.stringify(dbPlayer))
// }




