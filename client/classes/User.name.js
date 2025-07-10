import readline from 'readline-sync';


export class User {
  constructor() {
    this.userName = this.getUserName();
  }
  getUserName() {
    return readline.question('What is your name?');
  }
  
}

