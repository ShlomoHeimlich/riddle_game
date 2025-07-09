import { ReadAllQuestions } from "../questions/import_all_question.js"
import { writeFile } from 'fs/promises';
import readline from 'readline-sync';


export async function all_questions() {
    const all_questions = await ReadAllQuestions()
    console.log(all_questions);
}


export async function Create_Puzzles() {
    let all_questions = await ReadAllQuestions()
    let new_riddle = readline.question('Enter the riddle?');
    new_riddle = JSON.parse(new_riddle)
    all_questions.push(new_riddle)
    all_questions = JSON.stringify(all_questions)
    Writing_To_DB("C:\\Users\\HP\\Desktop\\javascript\\Projects\\game\\questions\\Questions.json", all_questions)
}


export async function update_riddle() {
    let all_questions = await ReadAllQuestions()
    const id_yuser = readline.question('Enter the id?');
    const new_riddle = readline.question('Enter the new riddle?');
    const correctAnswer=readline.question('Enter the correctAnswer?');
    all_questions.forEach(q => {
        if (q.id == id_yuser) {
            q.taskDescription = new_riddle
            q.correctAnswer=correctAnswer
    all_questions = JSON.stringify(all_questions)
    Writing_To_DB("C:\\Users\\HP\\Desktop\\javascript\\Projects\\game\\questions\\Questions.json", all_questions)      
        }
    }
    )
}


async function Writing_To_DB(file_name, input) {
    try {
        writeFile(file_name, input, "utf8")
        console.log('The operation was successful.');
    } catch (err) {
        console.log(err.message);
    }
}


