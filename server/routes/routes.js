import express from 'express';
import Users from '../models/users.model.js';

const router = express.Router();

router.post('/signup', async (req, res) => {
	const { email, password, firstname, lastname } = req.body;
	try {
		console.log('A response to your request!');
		console.log(req.body);

		const oldUser = await Users.findOne({ email });
		if (oldUser) {
			console.log('User Already Exists');
			res.status(400).send({ message: 'User already exists' });
		}
		const result = await Users.create({
			email: email,
			password: password,
			name: {
				firstName: firstname,
				lastName: lastname
			}
		});

		console.log(result);
		res.status(201).json({ result: result });
		// res.status(200).send('we got your response');
	} catch (error) {
		console.log('No incoming response');
		res.status(404).send('We did not et the request');
	}
});

router.get('/cause/education', (res, req) => {
	try {
		res.status(200).send('education route working!');
	} catch (error) {
		res.status(404).send('education route not working');
	}
});

router.post('/fundraise', (req, res) => {
	console.log(req.body);
	res.status(200).send(req.body);
	// console.log(req.body.imagefile[0]);
});

export default router;
