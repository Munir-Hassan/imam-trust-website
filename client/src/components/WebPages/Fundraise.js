import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';

const posturl = 'http://localhost:5000';

const Fundraise = () => {
	const { register, handleSubmit, errors } = useForm();

	const categoryList = [ 'Education', 'Health', 'Orphanage', 'Mosque', 'Poor & Needy', 'Food' ];
	const handleFormSubmit = async (data) => {
		console.log(data);

		await axios
			.post(posturl + '/fundraise', data)
			.then(() => {
				console.log('fundraise form posted!');
			})
			.catch((error) => {
				console.log(error);
			});
	};
	return (
		<div>
			<div className='form-container'>
				<h1>Fundraise</h1>
				<form method='POST' className='fundraise-form' onSubmit={handleSubmit(handleFormSubmit)}>
					<div className='form-row'>
						<input name='title' type='text' placeholder='Title' ref={register({ required: true })} />
					</div>
					<div className='form-row text-area'>
						<textarea
							name='description'
							type='text'
							placeholder='Fundraise Description'
							className='fundraise-textarea'
							wrap='on'
							ref={register({ required: true })}
						/>
					</div>
					<div className='form-row description	'>
						<input
							name='amount'
							type='number'
							placeholder='Amount - $0'
							ref={register({ required: true })}
						/>
					</div>
					<label htmlFor=''>Choose type of fundraise</label>
					<div className='form-row'>
						<select name='category' id='countries' ref={register({ required: true })}>
							{/* {countryList.map(({ name, code }) => {
								return (
									<option value={name} key={code}>
										{name} ({code})
									</option>
								);
							})} */}
							<option value='none' selected>
								Select a fundraise type
							</option>
							{categoryList.map((type, index) => {
								return (
									<option key={index} value={type}>
										{type}
									</option>
								);
							})}
						</select>
					</div>
					<div className='form-row'>
						<input
							type='file'
							name='imagefile'
							multiple='false'
							accept='image/png, image/jpeg'
							ref={register({ required: true })}
						/>
					</div>
					<button className='form-row-buttons' type='submit'>
						Submit
					</button>
				</form>
			</div>
		</div>
	);
};

export default Fundraise;
