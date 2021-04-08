import express from 'express';

const router = express.Router();

router.post('/signup', (req, res) => {
	try {
		console.log('A response to your request!');
		console.log(req.body);
		res.status(200).send('we got your response');
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

export default router;
