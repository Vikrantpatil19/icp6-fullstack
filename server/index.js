import express from 'express';
import cors from 'cors';
import mongoose, { connect } from 'mongoose';
import dotenv  from 'dotenv';
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// const connectDB = async () => {
//     mongoose.connect(process.env.MONGODB_URL)
//     console.log('Database Connected');
// }

// connectDB();


const PORT = 5000;

app.get("/health", (req,res) =>{
    res.json({
        success : true,
        message : "Server is Running",
        data : null
    })
});


app.listen(PORT, () => {
w    console.log(`Server is running on port ${PORT}`)
})