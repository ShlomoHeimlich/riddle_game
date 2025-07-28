import express from "express";
import jwt from "jsonwebtoken"
const router = express.Router();
import { ReadAllQuestions, deleted, Create_riddle, update_riddle } from "../controler/controler.riddle.js"

router.get("/AllQuestions", async (req, res) => {
  const answer = await ReadAllQuestions();
  res.send(answer)
})

router.delete("/delete/:id",midel, async (req, res) => {
  const answer = await deleted(req.params.id );
  res.send(answer)
})

router.post("/creat",async (req, res) => {
  const answer = await Create_riddle(req.body);
  res.send(answer)
})

router.put("/update_riddle", async (req, res) => {
  const answer = await update_riddle(req.body);
  res.send(answer)
})

function midel(req,res,next){
  try {
  const authHeader = req.headers['authorization'];
  const token = authHeader.split(' ')[1];
   const pilotr = jwt.verify(token,process.env.SECRET_KEY)
   if (pilotr.role=="manager"){
    next()
   }
  } catch (error) {
    console.log(error);
  }
}
export default router;