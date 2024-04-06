<<<<<<< HEAD
// server.js
import  express from 'express';
import bodyParser from 'body-parser';
import axios from 'axios';
// const express = require('express');
// const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 5000;

// Dummy data for demonstration
const trainTimeSlots = {
  'New York': {
    'Los Angeles': ['8:00 AM', '11:00 AM', '2:00 PM'],
    'Chicago': ['9:00 AM', '12:00 PM', '3:00 PM']
  }
  // Add more cities and time slots as needed
};
=======
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
>>>>>>> 5001997818b362ac6dfc9569f7680dd51c506483

app.use(bodyParser.json());

app.post('/api/train-time-slots', (req, res) => {
  const { departureCity, destinationCity, date } = req.body;
  // Assuming data is fetched from database or some other source
  const timeSlots = trainTimeSlots[departureCity]?.[destinationCity] || [];
  res.json(timeSlots);
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));