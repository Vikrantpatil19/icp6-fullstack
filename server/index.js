import express from "express";

<<<<<<< HEAD
import Payment from './models/paymentpage_model.js'

=======
>>>>>>> 857b75833836ebca55ecac60497d3610178bc078
const app = express();
const PORT = process.env.PORT || 5000;


import cors from "cors";
import mongoose, { connect } from "mongoose";
import dotenv from "dotenv";
dotenv.config();

app.use(cors());
app.use(express.json());

<<<<<<< HEAD
<<<<<<< HEAD
 const connectDB = async () => {
     mongoose.connect(process.env.MONGODB_URL)
     console.log('Database Connected');
 }

 connectDB();
=======
=======
>>>>>>> 857b75833836ebca55ecac60497d3610178bc078
const connectDB = async () => {
  mongoose.connect(process.env.MONGODB_URL);
  console.log("Database Connected");
};

connectDB();
<<<<<<< HEAD
>>>>>>> 314dd6b2dac39e8d3ce41c747ff939166cd83d14
=======
>>>>>>> 857b75833836ebca55ecac60497d3610178bc078

app.get("/health", (req, res) => {
  res.json({
    success: true,
    message: "Server is Running",
    data: null,
  });
});

<<<<<<< HEAD
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

app.post("/review", async (req, res) => {
  const { name, message } = req.body;
=======
// ==============   All APIs here  =============

// Review Api

import Review from "./models/Review.js";

app.post("/review", async (req, res) => {
  const { name, message, userPhoto } = req.body;
>>>>>>> 857b75833836ebca55ecac60497d3610178bc078

  if (!name) {
    return res.json({
      success: false,
<<<<<<< HEAD
      message: "Name is required",
=======
      message: "Login is required",
>>>>>>> 857b75833836ebca55ecac60497d3610178bc078
      data: null,
    });
  }

  if (!message) {
    return res.json({
      success: false,
      message: "Review is required",
      data: null,
    });
  }

<<<<<<< HEAD
<<<<<<< HEAD
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
=======
  const newReview = await Review.create({
    name: name,
    message: message,
=======
  const newReview = await Review.create({
    name: name,
    message: message,
    userPhoto: userPhoto
>>>>>>> 857b75833836ebca55ecac60497d3610178bc078
  });

  res.json({
    success: true,
    message: "Review added successfully",
    data: newReview,
  });
});
<<<<<<< HEAD
app.get("/review", async (req, res) => {
  const review = await Review.find();
>>>>>>> 63251321371e15a12cfcef6ce216c9590ffb67b5
=======

app.get("/review", async (req, res) => {
  const review = await Review.find();
>>>>>>> 857b75833836ebca55ecac60497d3610178bc078

  res.json({
    success: true,
    message: "Review featched successfully",
    data: review,
  });
});
app.delete("/review/:id", async (req, res) => {
  const { id } = req.params;

  await Review.deleteOne({ _id: id });

  res.json({
    success: true,
    message: "Review deleted successfully",
    data: null,
  });
});

<<<<<<< HEAD
<<<<<<< HEAD
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
=======
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
>>>>>>> 63251321371e15a12cfcef6ce216c9590ffb67b5
=======
// Login Api

import User from "./models/User.js"


app.post("/user", async (req, res) => {
  const { email, userName, userPhoto } = req.body;

  try {

    let existingUser = await User.findOne({ email });

    if (existingUser) {

      existingUser.isLoggedIn = true;
      await existingUser.save();

      res.json({
        success: true,
        message: "User logged in successfully",
        data: existingUser
      });
    } else {

      const newUser = await User.create({
        email,
        userName,
        userPhoto,
        isLoggedIn: true
      });

      res.json({
        success: true,
        message: "New user created and logged in successfully",
        data: newUser
      });
    }
  } catch (error) {
    console.error("Error creating or updating user:", error);
    res.status(500).json({
      success: false,
      message: "Internal server error",
      data: null
    });
  }
});


app.get("/user", async (req, res) => {
  try {

    const users = await User.find();

    res.json({
      success: true,
      message: "Users fetched successfully",
      data: users
    });
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).json({
      success: false,
      message: "Internal server error",
      data: null
    });
  }
});


// Logout Api


app.post("/user/logout", async (req, res) => {
  const { email } = req.body;

  try {

    let user = await User.findOne({ email });

    if (user) {

      user.isLoggedIn = false;
      await user.save();

      res.json({
        success: true,
        message: "User logged out successfully",
        data: user
      });
    } else {
      res.status(404).json({
        success: false,
        message: "User not found",
        data: null
      });
    }
  } catch (error) {
    console.error("Error logging out user:", error);
    res.status(500).json({
      success: false,
      message: "Internal server error",
      data: null
    });
  }
});

// Payment Api

import Payment from "./models/paymentpage_model.js";
import Booking from "./models/Booking.js";
import Contact from "./models/ContactUs.js";

app.post("/payment", async (req, res) => {
  const {
    First_Name,
    Last_Name,
    Date_of_Birth,
    Phone_Number,
    Email,
    City,
    Zip
  } = req.body;

  try {
    const newPayment = await Payment.create({
      First_Name: First_Name,
      Last_Name: Last_Name,
      Date_of_Birth: Date_of_Birth,
      Phone_Number: Phone_Number,
      Email: Email,
      City: City,
      Zip: Zip
    });

    res.status(201).json({
      message: "Payment created successfully",
      data: newPayment
    });
  } catch (error) {
    console.error("Error creating payment:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});


//Booking Api


app.post("/booking", async (req, res) => {
  const { name, phone, gender, seat, email } = req.body;

  try {
    const book = await Booking.create({ name, phone, email });
    res.json({
      success: true,
      message: "Details added Successfully",
      data: book
    });
  } catch (error) {
    console.error('Error creating booking:', error);
    res.status(500).json({
      success: false,
      message: "Error adding booking",
      error: error.message
    });
  }
});

app.get("/booking", async (req, res) => {
  try {
    const book = await Booking.find();
    res.json({
      success: true,
      message: "Booking Details fetched successfully",
      data: book
    });
  } catch (error) {
    console.error('Error fetching bookings:', error);
    res.status(500).json({
      success: false,
      message: "Error fetching bookings",
      error: error.message
    });
  }
});



// Contact Us Api

app.post("/contact", async (req, res) => {
  const { name, email, phone, message } = req.body;

  const contact = await Contact.create({ name, email, phone, message });

  res.json({
    success: true,
    message: "Your Message has been sent to the admin",
    data: contact
  });

});

app.get("/contact", async (req, res) => {

  const contacts = await Contact.find();

  res.json({
    success: true,
    message: "Contact Requests fetched successfully",
    data: contacts
  });

});









app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
>>>>>>> 857b75833836ebca55ecac60497d3610178bc078
