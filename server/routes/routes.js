import express from 'express';
import Users from '../models/users.model.js';
import FundraisePosts from '../models/fundraise.model.js';

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

router.post('/fundraise', async (req, res) => {
	const { title, description, amount, category, imagefile } = req.body;

	try {
		const newFundraisePost = await FundraisePosts.create({
			title: title,
			description: description,
			amount: amount,
			category: category,
			imageFile: imagefile
		});
		console.log(newFundraisePost);
		res.status(201).json({ result: newFundraisePost });
	} catch (error) {
		console.log(error);
		res.status(404).send('Fundraise Post not created!');
	}
});

router.get('/donate', async (req, res) => {
	try {
		const allFundraisePosts = await FundraisePosts.find();
		res.status(200).send(allFundraisePosts);
	} catch (error) {
		console.log(error);
		res.status(500).send(error);
	}
});

export default router;
