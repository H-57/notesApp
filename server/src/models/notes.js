import {Schema,model}from "mongoose"
const notesSchema = new Schema({
    title: String,
    content: String
},{timestamps:true})


export const Notes=model("notes",notesSchema)