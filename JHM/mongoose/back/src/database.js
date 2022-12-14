import mongoose from 'mongoose';
import * as dotenv from 'dotenv';

dotenv.config();

const { MONGO_DB_NAME, MONGO_URL } = process.env;
const connectionConfig = { dbName: MONGO_DB_NAME, autoIndex: true };
const connection = await mongoose.connect(MONGO_URL, connectionConfig);

if (connection) {
  console.log('Connection with mongo database successfully');
} else {
  console.error('Error to connect with mongo database');
}

// https://www.w3schools.com/nodejs/nodejs_mysql.asp
