import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';

const posturl = 'http://localhost:5000';

const Fundraise = () => {
	const { register, handleSubmit, errors } = useForm();

	const categoryList = [ 'Education', 'Health', 'Orphanage', 'Mosque', 'Poor & Needy', 'Food' ];
	const imageObject = new FormData();
	const uploadImage = (e) => {
		const imageValue = e.target.files[0];
		console.log(imageValue);
		imageObject.append('imageFile', imageValue);
	};
	const handleFormSubmit = async (data) => {
		console.log(data.imagefile[0]);

		const formData = {
			title: data.title,
			description: data.description,
			amount: data.amount,
			category: data.category,
			imagefile: { imageObject }
		};

		await axios
			.post(posturl + '/fundraise', formData)
			.then((res) => {
				console.log('fundraise form posted!');
				console.log(res);
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
							accept='image/png, image/jpeg'
							onChange={uploadImage}
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
