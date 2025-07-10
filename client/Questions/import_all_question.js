import { readFile} from "node:fs/promises"

export async function ReadAllQuestions(){
    try{
       let all_questions = await readFile("./questions/Questions.json","utf8")
       all_questions=JSON.parse(all_questions)
       return all_questions
    }catch (err){
            console.log(err.message)
    }
}

 
