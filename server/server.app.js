import express from 'express';
import router_crud from './routes/router.js';
// import router_plyer from
const server=express()
server.use(express.json())
server.use(router_crud);
// server.use("/plyer",router_plyer)
server.listen(4545,()=>{console.log('4545');})