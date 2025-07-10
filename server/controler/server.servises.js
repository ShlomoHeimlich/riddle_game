import { readFile, writeFile } from "node:fs/promises"

export async function ReadAllQuestions() {
    try {
        let all_questions = await readFile("../server/db/Questions.json", "utf8")
        all_questions = JSON.parse(all_questions)
        return all_questions
    } catch (err) {
        console.log(err.message)
    }
}

export async function Create_riddle(obj) {
    let all_questions = await ReadAllQuestions()
    try {
        obj["id"] = all_questions.length + 1;
        all_questions.push(obj)
        all_questions = JSON.stringify(all_questions)
        Writing_To_DB("../server/db/Questions.json", all_questions)
        return 'success'
    } catch (err) {
        console.log(err.message)
    }
}

export async function update_riddle(obj) {
    let all_questions = await ReadAllQuestions()
    try {
        let id_status = false
        all_questions.forEach(q => { if (q.id == obj.id) { id_status = true } })
        if (id_status != true) {
            return "the id is not defind";
        }
        else {
        }
        all_questions.forEach(q => {
            if (q.id == obj.id) {
                q.taskDescription = obj.new_riddle;
                q.correctAnswer = obj.correctAnswer;
                q.name = obj.level;
                all_questions = JSON.stringify(all_questions)
            }
        }
        )
        await Writing_To_DB("../server/db/Questions.json", all_questions);
        return "success"
    } catch (err) {
        console.log(err.message)
    }
}

export async function deleted(id_yuser) {
    let all_questions = await ReadAllQuestions()
    try {
        let id = false
        all_questions.forEach(q => { if (q.id == id_yuser) { id = true } })
        if (id != true) {
            return "the id is not defind";
        }
        else {
            const index = all_questions.findIndex(obj => obj.id == id_yuser)
            all_questions.splice(index, 1)
            all_questions = JSON.stringify(all_questions)
            Writing_To_DB("../server/db/Questions.json", all_questions)
            return 'success'
        }
    } catch (err) {
        console.log(err.message)
    }
}



export async function Writing_To_DB(file_name, input) {
    try {
        await writeFile(file_name, input)
    } catch (err) {
        console.log(err.message);
    }
}

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




