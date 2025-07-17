import express from 'express';
import router_crud from './routes/router.crud.js';
import {connectToMongo} from './db/riddle.db.js'
// import creat from './db/Players.db.js';
const server = express()
server.use(express.json())
server.use(router_crud);
server.listen(4545, () => { console.log('4545'); })
await connectToMongo()
// creat()