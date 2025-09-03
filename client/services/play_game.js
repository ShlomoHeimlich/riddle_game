import readline from 'readline-sync';

export async function start_game(user, user_name) {
   try {
      const time_login = new Date;
      await new Promise(resolve => setTimeout(resolve, 2000));
      const questions = await fetch("http://localhost:4545/AllQuestions")
      const new_game = await flow_game(questions)
      await new Promise(resolve => setTimeout(resolve, 1000));
      if (user !== "Guest") await Data_entry(time_login, new_game, user_name)
      return
   } catch (error) {
      console.log(error);
   }
}


async function Data_entry(time_login, new_game, user_name) {
   try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      const Data_entry = await fetch("http://localhost:4545/player/creat", {
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
      })
      const data = await Data_entry.text();
      return data;
   }
   catch (error) {
      console.log(error);
   }
}





export async function flow_game(all_questions) {
   all_questions = await all_questions.json()
   const start = new Date();
   all_questions.forEach(q => play(q))
   const stop = new Date();
   const all_time = (stop - start) / 1000
   console.log('all time is: ', all_time);
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




