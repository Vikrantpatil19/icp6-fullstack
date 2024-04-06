import express from 'express';
import cors from 'cors';
import mongoose, { connect } from 'mongoose';
import dotenv  from 'dotenv';
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const connectDB = async () => {
    mongoose.connect(process.env.MONGODB_URL)
    console.log('Database Connected');
}

connectDB();


const PORT = 5000;

app.get("/health", (req,res) =>{
    res.json({
        success : true,
        message : "Server is Running",
        data : null
    })
});

import Review from "./models/Review.js";

app.post("/review",async(req, res)=>{
    const {name, message} = req.body;

    if(!name){
        return res.json({
            success: false,
            message: "Name is required",
            data: null
        })
    }

    if(!message){
        return res.json({
            success: false,
            message: "Review is required",
            data: null
        })
    }

    const newReview = await Review.create({
        "name": name,
        "message": message
    })

    res.json({
        success: true,
        message: "Review added successfully",
        data: newReview
    })
})
app.get("/review",async(req, res)=>{

    const review = await Review.find();

    res.json({
        success: true,
        message: "Review featched successfully",
        data: review
    })
})
app.delete("/review/:id", async(req, res)=>{
    const {id} = req.params;

    await Review.deleteOne({ _id: id })

    res.json({
        success: true,
        message: "Review deleted successfully",
        data: null
    })
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})