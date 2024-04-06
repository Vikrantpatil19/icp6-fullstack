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

app.use(bodyParser.json());

app.post('/api/train-time-slots', (req, res) => {
  const { departureCity, destinationCity, date } = req.body;
  // Assuming data is fetched from database or some other source
  const timeSlots = trainTimeSlots[departureCity]?.[destinationCity] || [];
  res.json(timeSlots);
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));