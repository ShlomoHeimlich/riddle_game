import { ReadAllQuestions } from "../client/Questions/import_all_question.js"
import { writeFile } from 'fs/promises';
import readline from 'readline-sync';


export async function all_questions() {
    const all_questions = await ReadAllQuestions()
    console.log(all_questions);
}


export async function Create_riddle() {
    let all_questions = await ReadAllQuestions()
    const riddle={}
    riddle["id"]=all_questions.length+1;
    const new_riddle = readline.question('Enter the new riddle?');
    riddle["taskDescription"]=new_riddle
    const name = readline.question("Enter difficulty level")
    riddle["name"]=name
    const correctAnswer = readline.question('Enter the correctAnswer?');
    riddle["correctAnswer"]=correctAnswer 
    all_questions.push(riddle)
    all_questions = JSON.stringify(all_questions)
    Writing_To_DB("./Questions/Questions.json", all_questions)
}


export async function update_riddle() {
    let all_questions = await ReadAllQuestions()
    let id = false;
    let id_yuser;
    while (id != true) {
        id_yuser = readline.question('Enter the id?')
        all_questions.forEach(q => { if (q.id == id_yuser) { id =true } })
    }
    const new_riddle = readline.question('Enter the new riddle?');
    const correctAnswer = readline.question('Enter the correctAnswer?');
    const name = readline.question("Enter difficulty level")
    all_questions.forEach(q => {
    if (q.id == id_yuser) {
        q.taskDescription = new_riddle;
        q.correctAnswer = correctAnswer;
        q.name = name;
        all_questions = JSON.stringify(all_questions)
        Writing_To_DB("./Questions/Questions.json", all_questions)
    }
}
)
}


export async function delet(){
   let all_questions = await ReadAllQuestions()
    let id = false;
    let id_yuser;
    while (id != true) {
        id_yuser = readline.question('Enter the id to delet?')
        all_questions.forEach(q => { if (q.id == id_yuser) { id =true } })
    }
    const index=all_questions.findIndex(obj => obj.id == id_yuser)
    all_questions.splice(index,1)
    all_questions = JSON.stringify(all_questions)
    Writing_To_DB("./Questions/Questions.json", all_questions)
}




export async function Writing_To_DB(file_name, input) {
    try {
        await writeFile(file_name, input)
        console.log('The operation was successful.');
    } catch (err) {
        console.log(err.message);
    }
}


