
import { Riddle } from "../classes/Riddle.js"; 

import readline from 'readline-sync';

export function function_play(arr_questions) {
    const list_Questions = creat_Questions(arr_questions);
    const arr_time = []
    list_Questions.forEach(q => play(q, arr_time))
    let time = 0;
    arr_time.forEach(t => (time += t))
    return time;
}

export function creat_Questions(arr_questions) {
    const arr = [];
    arr_questions.forEach(q => arr.push(new Riddle(q)))
    return arr;
}

export function play(q, arr_time) {
    let flag = false;
    while (!flag) {
        const start = new Date();
        console.log(q.taskDescription)
        const answer_yser = readline.question('What is your answer?');
        if (answer_yser == q.correctAnswer) {
            flag = true
            const stop = new Date();
            arr_time.push((stop - start) / 1000)
            return;
        }
    }
}

