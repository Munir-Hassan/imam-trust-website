import mongoose from 'mongoose';

const mongoURI =
	'mongodb+srv://imamtrust:imamtrust123@imamtrustcluster.savbm.mongodb.net/imamTrustDB?retryWrites=true&w=majority';

const connectionParamsDB = {
	useNewUrlParser: true,
	useCreateIndex: true,
	useUnifiedTopology: true
};

const connectDatabase = () => {
	mongoose
		.connect(mongoURI, connectionParamsDB)
		.then(() => {
			console.log('Connected to Mongoose Database!');
		})
		.catch((error) => {
			// console.log(error);
			console.log('Database Connection Failed');
		});
};

export default connectDatabase;
