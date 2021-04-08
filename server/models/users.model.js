import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
	name: {
		first: String,
		last: String
	},
	email: {
		type: String,
		required: true
	},
	password: {
		type: String,
		required: true
	},
	address: {
		city: String,
		country: String
	},
	creaatedAt: {
		type: Date,
		default: new Date()
	}
});

const Users = mongoose.model('Users', userSchema);

export default Users;
