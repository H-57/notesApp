import {Notes} from "../models/notes.js"

export async function getNotes(req,res){
try {
    const data=await Notes.find()
    res.json({success:true,data,message:"all data get success"})
} catch (error) {
    res.status(400).json({success:false,message:"server error"})
}
}


export async function getNoteById(req,res){
try {
    const {id}=req.params;
    const data=await Notes.findById(id)
    res.json({success:true,data,message:"data get success"})


} catch (error) {
    res.status(400).json({success:false,message:"server error"})
}
}

export async function setNotes(req,res){
try {
    const {title,content}=req.body;
   
    if(!title||!content){
      return  res.status(400).json({success:false,message:"all fields are required"})
    }
    const existNote=await Notes.find({title})
   
    if(existNote.length>0){
     return   res.status(400).json({success:false,message:"note allredy exist with this title"})


    }
    
    const data=await Notes.create({title,content})
    if(data){
        res.json({
            success:true,message:"notes created success"
        })
    }
} catch (error) {
    res.status(400).json({success:false,message:"server error"})
}
}


export async function updateNotes(req,res){
try {
    const {id}=req.params;
    const {title,content}=req.body;
  
    if(!title||!content){
      return  res.status(400).json({success:false,message:"all fields are required"})
    }
const data=await Notes.findByIdAndUpdate(id,{title,content})
if(data){
    res.json({
        success:true,message:"notes updated success"
    })
}
    
} catch (error) {
    res.status(400).json({success:false,message:"error in update"})
}
}


export async function deleteNotes(req,res){
try {
    const {id}=req.params;
    const data=await Notes.findByIdAndDelete(id)
    if(data){
        res.json({
            success:true,message:"notes deleted success"
        })
    }
} catch (error) {
    res.status(400).json({success:false,message:"server error"})
}
}
