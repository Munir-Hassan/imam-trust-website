import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import router from './routes/routes.js';
import connectDatabase from './database.js';
const app = express();

// Intermediate Middleware
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
dotenv.config();

// Routes
app.use(router);

//MongoBD Connection
connectDatabase();

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
	console.log('Server listening on port: ', PORT);
});
