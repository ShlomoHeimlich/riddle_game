import readline from 'readline-sync';
export async function Manager() {
  let answer;
  let riddle;
  let exit = false
  do {
    console.log('To create riddle press 1');
    console.log('To update riddle press 2');
    console.log('To read all riddles press 3');
    console.log('To delete riddle press 4');
    console.log('To read all players press 5');
    console.log('To read the The fast player press 6');
    console.log('TO exsit press 7');
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
        break
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
          answer = await fetch("http://localhost:4545/AllQuestions")
            .then(res => res.json())
          console.log(answer);
          break;
        } catch (error) {
          console.log(error.message);
        }
        break
      case "4":
        try {
          const id = readline.question("Enter the ID of the riddle you want to delete.")
          answer = await fetch(`http://localhost:4545/delete/${id}`, { method: 'DELETE', })
            .then(res => res.text())
          console.log(answer);
          break
        } catch (error) {
          console.log(error.message);
        }
        break
      case "5":
        {
          try {
            const all_players = await fetch("http://localhost:4545/player/Allplayers")
              .then(res => res.json())
            console.log(all_players);
          } catch (error) { console.log(error); }
        }
        break
      case "6": {
        try {
          const response = await fetch("http://localhost:4545/player/fastest");
          const data = await response.json();
          console.log("The fastest player is:", data);
        } catch (error) {
          console.log("Error:", error.message);
        }
        break;
      }

      case "7": {
        exit = true
      }
        break
    }

  } while (!exit)
  return "manager"
}







