import express from 'express';
import cors from 'cors';  // <-- ייבוא cors
import router_crud from './routes/router.crud.js';
import router_player from './routes/router.player.js';
import { connectToMongo } from './db/riddle.db.js';
import creat_table from './db/Players.db.js';

const server = express();

// מאפשר לכל המקורות לגשת לשרת
server.use(cors());

// JSON middleware
server.use(express.json());

// routers
server.use(router_crud);
server.use('/player', router_player);

// הפעלת שרת
server.listen(4545, () => {
  console.log('Server listening on 4545');
});

// התחברות למסד נתונים
await connectToMongo();
await creat_table();
