import express from 'express';
import router_crud from './routes/router.crud.js';
import router_player from './routes/router.player.js'
import {connectToMongo} from './db/riddle.db.js'
import creat_table from './db/Players.db.js';
const server = express()
server.use(express.json())
server.use(router_crud);
server.use('/player',router_player)
server.listen(4545, () => { console.log('4545'); })
await connectToMongo()
await creat_table()
