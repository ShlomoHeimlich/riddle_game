import readline from 'readline-sync';
// import Riddle  from './meniger.js';

export class User {
  constructor() {
    this.userName = this.getUserName();
  }

  getUserName() {
    return readline.question('What is your name?');
  }
  
}

