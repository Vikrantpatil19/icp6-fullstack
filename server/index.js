import express from 'express';
import cors from 'cors';
import mongoose, { connect } from 'mongoose';
import dotenv  from 'dotenv';
dotenv.config();

import Payment from './models/paymentpage_model.js'

const app = express();
app.use(cors());
app.use(express.json());

<<<<<<< HEAD
 const connectDB = async () => {
     mongoose.connect(process.env.MONGODB_URL)
     console.log('Database Connected');
 }

 connectDB();
=======
const connectDB = async () => {
    mongoose.connect(process.env.MONGODB_URL)
    console.log('Database Connected');
}

connectDB();
>>>>>>> 314dd6b2dac39e8d3ce41c747ff939166cd83d14


const PORT = 5000;

app.get("/health", (req,res) =>{
    res.json({
        success : true,
        message : "Server is Running",
        data : null
    })
});

<<<<<<< HEAD
app.post("/payment" , async(req , res) =>{

    const {First_Name , Last_Name , Date_of_Birth , Phone_Number , Email , City , Zip  } = req.body;

    const newPayment  = await Payment.create({

        "First_Name": First_Name,
        "Last_Name" : Last_Name,
        "Date_of_Birth" : Date_of_Birth,
        "Phone_Number" : Phone_Number,
        "Email": Email,
        "City": City,
        
        "Zip": Zip


       
=======
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
>>>>>>> 314dd6b2dac39e8d3ce41c747ff939166cd83d14
    })

    res.json({
        success: true,
<<<<<<< HEAD
        message: "data added successfully",
        data: newPayment
    })
});


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
=======
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
>>>>>>> 314dd6b2dac39e8d3ce41c747ff939166cd83d14
})