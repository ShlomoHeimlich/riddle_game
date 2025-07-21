import database from "../db/riddle.db.js"

export async function ReadAllQuestions() {
    try {
        let all_questions = await database.collection("riddles").find().toArray()
        return all_questions
    } catch (err) {
        console.log(err.message)
    }
}

export async function Create_riddle(obj) {
    let all_questions = await ReadAllQuestions()
    try {
        obj["id"] = all_questions.length + 1;
        await database.collection("riddles").insertOne(obj)
        return 'success'
    } catch (err) {
        console.log(err.message)
    }
}

export async function update_riddle(obj) {
    try {
        const result = await database.collection("riddles").findOne({ id: obj.id })
        console.log('result in redel', result);
        if (result) {
            await database.collection("riddles").updateOne({ id: obj.id }, { $set: obj })
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
        const result = await database.collection("riddles").findOne({ id: id_yuser })
        if (result) {
            await database.collection("riddles").deleteOne({ id: id_yuser })
            return 'success'
        }
        else {
            return "id not defind"
        }
    } catch (error) {
        console.log(error);
    }
}





