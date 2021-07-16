import express from 'express'
import connectDB from './config/db.js';
import cors from 'cors'
import dotenv from 'dotenv'
import colors from 'colors'
import formRouts from './routs/formRouts.js'
import userRouts from './routs/userRouts.js'
import { notFound, errorHandler } from './middlewares/errorMiddleware.js';

const app = express();
dotenv.config();
app.use(cors());

connectDB();



app.get('/', (req, res) => {
    res.send('API server is working');
})
app.use('/api/customerForm', formRouts);
app.use('/api/users', userRouts);


app.use(notFound);
app.use(errorHandler);





const PORT = process.env.PORT || 5000;

app.listen(5000, console.log(`Server is running on port ${PORT}`.yellow.bold))
