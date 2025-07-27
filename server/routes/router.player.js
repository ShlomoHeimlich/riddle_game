import express from 'express'
import {Allplayers,CreatPlayer,fastest,CreatNewPlayer,check,checkMeniger} from '../controler/controler.players.js'

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

router.post("/creatnewplayer",async(req,res)=>{
    try{
    const answer=await CreatNewPlayer(req.body)
    res.send(answer)
    }catch(error){
    console.log(error);
    }
})

router.post("/check",async(req,res)=>{
    try{
    const answer=await check(req.body)
    res.send(answer)
    }catch(error){
    console.log(error);
    }
})

router.post("/checkMeniger",async(req,res)=>{
    try{
    const answer=await checkMeniger(req.body)
    res.send(answer)
    }catch(error){
    console.log(error);
    }
})



export default router