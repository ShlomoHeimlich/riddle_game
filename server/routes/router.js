import express from "express";
const router = express.Router();

import {ReadAllQuestions,delete} from "../controler/server.servuses.js"


router.get("/AllQuestions",async (req,res)=>{const questions = await ReadAllQuestions();
  res.send(questions)})

  router.delete("/delete:id",async(req,res)=>{ await delete(); res.send('succeeded') })
  export default router;