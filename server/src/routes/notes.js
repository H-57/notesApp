import express from "express"
import{getNotes,getNoteById,setNotes,updateNotes,deleteNotes}from "../controllers/notes.js"
const router = express.Router();

router.get("/",getNotes)
.post("/",setNotes)
.get("/:id",getNoteById)
.put("/:id",updateNotes)
.delete("/:id",deleteNotes)


export default router;




