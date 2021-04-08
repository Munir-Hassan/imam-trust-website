import mongoose from 'mongoose';

const fundraisePosts = mongoose.Schema({
	description: String,
	amount: Number,
	deadLine: Date,
	causeType: String,
	createdAt: {
		type: Date,
		default: new Date()
	}
});

const FundraisePosts = mongoose.model('FundraisePosts', fundraisePosts);

export default FundraisePosts;
