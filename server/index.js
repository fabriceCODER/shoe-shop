// server.js
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = process.env.PORT || 4001; 

// Connect to MongoDB
mongoose.connect('mongodb://localhost/shoeapp', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

// Create a Shoe model
const Shoe = mongoose.model('Shoe', {
  name: String,
  price: Number,
  description: String,
  imageUrl: String,
});

// Middleware for JSON parsing
app.use(express.json());

// Set up CORS for handling requests from your Next.js frontend (if needed)
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

// API endpoint to get the list of shoe products
app.get('/api/products', async (req, res) => {
  try {
    const shoes = await Shoe.find();
    res.json(shoes);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
