import express from 'express'
import connectDB from './config/db.js';
import cors from 'cors'
import dotenv from 'dotenv'
import colors from 'colors'

const app = express();
dotenv.config();
app.use(cors());

connectDB();

app.get('/', (req, res) => {
    res.send('API server is working');
})


const PORT = process.env.PORT || 5000;

app.listen(5000, console.log(`Server is running on port ${PORT}`.yellow.bold))
