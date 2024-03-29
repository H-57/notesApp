import express from "express"
import 'dotenv/config'
import cors from "cors"
import dbConnect from "./src/database/dbConnect.js"

// custom routes
import notesRoutes from "./src/routes/notes.js"

const app = express()
const port=process.env.PORT||4000
app.use(express.json())
app.use(cors());
dbConnect()
.then(() => {


app.use("/api/notes",notesRoutes)
app.all("*",(req,res)=>{
    res.status(400).json({messsage:"invalid route"})
})

    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
      });
}).catch((err) => {
    console.error("Failed to connect to MongoDB:", err);
});




