import readline from 'readline-sync';
export async function Manager() {
  let answer;
  let riddle;
  console.log('To create riddle press 1');
  console.log('To update riddle press 2');
  console.log('To read riddle press 3');
  console.log('To delete riddle press 4');
  let choice = readline.question('What is your choice?');
  switch (choice) {


    case "1":
      try {
        riddle = {};
        riddle["level"] = readline.question("Enter difficulty level")
        riddle["riddle"] = readline.question('Enter the new riddle?');
        riddle["correctAnswer"] = readline.question('Enter the correctAnswer?');
        answer = await fetch('http://localhost:4545/creat', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(riddle) })
          .then(res => res.text())
        console.log(answer);
      } catch (error) {
        console.log(error.message);
      }
      break;


    case "2":
      try {
        riddle = {};
        riddle["level"] = readline.question("Enter difficulty level")
        riddle["riddle"] = readline.question('Enter the new riddle?');
        riddle["correctAnswer"] = readline.question('Enter the correctAnswer?');
        riddle["id"] = parseInt(readline.question("Enter the ID of the riddle you want to update."))
        answer = await fetch('http://localhost:4545/update_riddle', { method: 'PUT', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(riddle) })
          .then(res => res.text())
        console.log(answer);
      } catch (error) {
        console.log(error.message);
      }
      break;


    case "3":
      try {
        answer = await fetch("http://localhost:4545/AllQuestions").then(res => res.json())
        console.log(answer);
        break;
      } catch (error) {
        console.log(error.message);
      }


    case "4":
      try {
        const id = readline.question("Enter the ID of the riddle you want to delete.")
        answer = await fetch(`http://localhost:4545/delete/${id}`, { method: 'DELETE', })
          .then(res => res.text())
        console.log(answer);
      } catch (error) {
        console.log(error.message);
      }
      break;
  }
}






