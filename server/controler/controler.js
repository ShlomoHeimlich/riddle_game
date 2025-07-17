import { readFile, writeFile } from "node:fs/promises"
import conn from "../db/riddle.db.js"

export async function ReadAllQuestions() {
    try {
        let all_questions = await conn.collection("riddles").find().toArray()
        return all_questions
    } catch (err) {
        console.log(err.message)
    }
}

export async function Create_riddle(obj) {
    let all_questions = await ReadAllQuestions()
    try {
        obj["id"] = all_questions.length + 1;
        await conn.collection("riddles").insertOne(obj)
        return 'success'
    } catch (err) {
        console.log(err.message)
    }
}

export async function update_riddle(obj) {
    try {
        const result = conn.collection("riddles").findOne({ id: obj.id })
        if (result) {
            await conn.collection("riddles").updateOne({ id: obj.id }, { $set: obj })
            return 'success'
        }
        else {
            return "id not defind"
        }
    } catch (error) {
        console.log(error);
    }
}

export async function deleted(id_yuser) {
    try {
        id_yuser = parseInt(id_yuser)
        const result = await conn.collection("riddles").findOne({ id: id_yuser })
        if (result) {
            await conn.collection("riddles").deleteOne({ id: id_yuser })
            return 'success'
        }
        else {
            return "id not defind"
        }
    } catch (error) {
        console.log(error);
    }
}



export async function Writing_To_DB(file_name, input) {
    try {
        await writeFile(file_name, input)
    } catch (err) {
        console.log(err.message);
    }
}

