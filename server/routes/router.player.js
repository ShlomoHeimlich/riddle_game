import express from 'express'
import {Allplayers,CreatPlayer,fastest} from '../controler/controler.players.js'

const router=express.Router();
router.get("/Allplayers",async(req,res)=>{
    const answer = await Allplayers();
    res.send(answer)
})

router.post("/creat",async(req,res)=>{
    try{
    const answer=await CreatPlayer(req.body)
    res.send(answer)
    }catch(error){
    console.log(error);
    }
})
router.get("/fastest",async(req,res)=>{
    const answer = await fastest();
    res.send(answer)
})





export default router