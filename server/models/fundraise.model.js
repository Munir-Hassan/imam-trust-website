import mongoose from 'mongoose';

const fundraisePosts = mongoose.Schema({
	id: String,
	title: String,
	description: String,
	amount: Number,
	category: String,
	imageFile: String,
	createdAt: {
		type: Date,
		default: new Date()
	}
});

const FundraisePosts = mongoose.model('FundraisePosts', fundraisePosts);

export default FundraisePosts;
