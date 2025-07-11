import readline from 'readline-sync';


export async function flow_game(all_questions) {
    all_questions = await all_questions.json()
    const start = new Date();
    all_questions.forEach(q => play(q))
    const stop = new Date();
    const all_time = (stop - start) / 1000
    return all_time;
}


export function play(q) {
    let flag = false;
    while (!flag) {
        console.log(q.riddle)
        const answer_user = readline.question('What is your answer?');
        if (answer_user == q.correctAnswer) { flag = true }
    }
}

