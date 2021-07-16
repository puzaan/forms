import mongoose from 'mongoose'
import dotenv from 'dotenv';
import colors from 'colors'
import users from './data/users.js';

import User from './models/userModel.js';
import Form from './models/formModel.js';
import connectDB from './config/db.js'


dotenv.config();
connectDB()


const importData = async ()=> {
try {

    await User.deleteMany();
    await Form.deleteMany();

const createdUser = await User.insertMany(users);
const adminUser = createdUser[0]._id;
console.log('data Imported!'.green)
} catch (e) {
    console.error(`$(e)`.red.inverse);
    process.exit(1)

}
}

importData();