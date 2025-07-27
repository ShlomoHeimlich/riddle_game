import express from "express";
const router = express.Router();
import { ReadAllQuestions, deleted, Create_riddle, update_riddle } from "../controler/controler.riddle.js"

router.get("/AllQuestions", async (req, res) => {
  const answer = await ReadAllQuestions();
  res.send(answer)
})

router.delete("/delete/:id", async (req, res) => {
  const answer = await deleted(req.params.id);
  res.send(answer)
})

router.post("/creat", async (req, res) => {
  const answer = await Create_riddle(req.body);
  res.send(answer)
})

router.put("/update_riddle", async (req, res) => {
  const answer = await update_riddle(req.body);
  res.send(answer)
})

export default router;