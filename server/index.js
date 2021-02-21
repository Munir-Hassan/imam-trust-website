import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import router from './routes/routes.js';

const app = express();

// Intermediate Middleware
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Routes
app.use(router);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
	console.log('Server listening on port: ', PORT);
});
