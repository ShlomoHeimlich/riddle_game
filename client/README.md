# riddle_game
# 🧠 Riddle Game – Math Quiz CLI App

A simple command-line math riddle game built with Node.js. The game asks the user three questions with increasing difficulty, measures the time taken to answer each one correctly, and then shows the total and average time.

---

## 📁 Project Structure

GAME/
├── classes/
│ ├── meniger_Questions.js # Game logic and timing
│ └── meniger_user.js # User input management
├── Questions/
│ ├── Questions1.js # Easy-level question
│ ├── Questions2.js # Medium-level question
│ ├── Questions3.js # Hard-level question
│ └── import_all_question.js # Centralized question importer
└── play.js # Main file to run the game

yaml
Copy
Edit

---

## ▶️ How to Run

1. Make sure [Node.js](https://nodejs.org/) is installed.
2. Navigate to the project folder:
   ```bash
   cd GAME
Install the required module:

bash
Copy
Edit
npm install readline-sync
Run the game:

bash
Copy
Edit
node play.js
🎮 How It Works
When the game starts, it asks for your name.

Then it presents 3 math riddles (easy, medium, hard).

You must answer each one correctly to proceed to the next.

The time it takes you to answer each question is measured.

At the end, the game shows:

Total time taken

Average time per question

📦 Code Overview
play.js
Imports all game components and starts the game.

classes/meniger_Questions.js
Contains the Riddle class for handling questions.

Defines function_play() to manage game flow and timing.

classes/meniger_user.js
Defines the yuser class, which:

Prompts the player for their name

Stores the user's answer times (optional for future features)

Questions/*.js
Each file exports a single question object with:

id

name

taskDescription

correctAnswer

Questions/import_all_question.js
Imports and re-exports all question files in one place.

🚀 Possible Improvements
Load questions from external JSON files

Save user scores to a file

Add multiplayer mode or time-based competition

Display final score based on accuracy and speed

✅ Requirements
Node.js (v14 or newer)

readline-sync module

🎲 Enjoy the game and test your math skills!

yaml
Copy
Edit
