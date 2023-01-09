import express from 'express';
import cors from 'cors';
import { auth } from '../api/auth/auth.controller.js'
import middleware from './middleware.js';
import router from './router.js';
import * as dotenv from 'dotenv';
import * as DB from './database/database.connection.js';

dotenv.config();
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cors({origin: 'http://localhost:5173'}));
app.use(auth);
app.use(middleware);
app.use(router);

const server = app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});

process.on("unhandledRejection", err => {
  console.error(`An error occurred: ${err}`)
  server.close(() => process.exit(1))
})

DB.connectMongoDB('main');
DB.connectMySQL('main');
