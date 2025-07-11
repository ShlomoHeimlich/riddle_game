import express from 'express';
import router_crud from './routes/router.js';
const server = express()
server.use(express.json())
server.use(router_crud);
server.listen(4545, () => { console.log('4545'); })