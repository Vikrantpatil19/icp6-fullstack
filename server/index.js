import express from 'express';
import cors from 'cors';
import mongoose, { connect } from 'mongoose';
import dotenv  from 'dotenv';
dotenv.config();

import Payment from './models/paymentpage_model.js'

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


       
    })

    res.json({
        success: true,
        message: "data added successfully",
        data: newPayment
    })
});


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})