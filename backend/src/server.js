import mongoose from 'mongoose';
import Config from './config/index.js';
import app from './app.js';

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
