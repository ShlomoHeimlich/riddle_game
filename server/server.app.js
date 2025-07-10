import express from 'express';
import router from './routes/router.js';
const server=express()
server.use(express.json())
server.use(router);
server.listen(4545,()=>{console.log('4545');})