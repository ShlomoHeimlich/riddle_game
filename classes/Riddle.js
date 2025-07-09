import readline from 'readline-sync';

export class Riddle {
    constructor(question) {
        this.id = question.id;
        this.name = question.name;
        this.taskDescription = question.taskDescription;
        this.correctAnswer = question.correctAnswer;
    }
}



