import { MongoClient } from "mongodb";

const client = new MongoClient(process.env.mongo_url)

export async function connectToMongo() {
    try {
        await client.connect()
        console.log('connectet to DB');
    } catch (error) {
        console.log(error);
    }
}
const conn = client.db("questions")
export default conn