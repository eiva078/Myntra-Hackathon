import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';
import items from './routes/items.js';
import avatarRoutes from './routes/avatars.js';
import userRoute from './routes/user.js'
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());
app.use(express.json());

app.use('/assets', express.static(path.join(__dirname, 'assets')));

app.use('/api/items', items);
app.use('/api/avatars', avatarRoutes); 
app.use('/api/users', userRoute);

const mongoURI = process.env.MONGO_URI;
mongoose.connect(mongoURI, {
  serverSelectionTimeoutMS: 5000,
  socketTimeoutMS: 45000,
})
  .then(() => console.log('MongoDB connected'))
  .catch(err => {
    console.error('MongoDB connection error:', err);
    process.exit(1);
  });

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
