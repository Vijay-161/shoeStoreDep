const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.LOCAL_DATABASE_URI);

    console.log(
      `MongoDB connected to : ${conn.connection.host}`.white.underline.bold
    );
  } catch (error) {
    console.error(`MongoDB connection error: ${error}`.red.underline.bold);
  }
};

module.exports = connectDB;



// LOCAL_DATABASE_URI='mongodb://127.0.0.1:27017/shoeStore'