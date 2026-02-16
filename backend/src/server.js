import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import Config from './config/index.js';

const app = express();

app.use(cors());
app.use(express.json());

// connect to MongoDB and start the server
const start = async () => {
  try {
    await mongoose.connect(Config.mongoUri);
    console.log(`Connected to Database...`);

    app.listen(Config.port, () => {
      console.log(`Server listening on port ${Config.port}...`);
    });
  } catch (error) {
    console.log(`Could not connect to database... ${error.message}`);
    process.exit(1);
  }
};

start();
