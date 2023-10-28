
// db.js

const mongoose = require("mongoose");

const uri = "mongodb://localhost:27017"; // Replace with your MongoDB URI
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const connectToMongo = async () => {
  try {
    await mongoose.connect(uri, options);
    console.log('Connected to MongoDB');
    // Add any additional logic you need after successful connection
  } catch (error) {
    console.error('Error connecting to MongoDB:', error.message);
  }
};

module.exports = connectToMongo;




