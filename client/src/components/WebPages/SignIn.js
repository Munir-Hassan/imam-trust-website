import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';

const posturl = 'http://localhost:5000';

const SignIn = (props) => {
	const [ btnResponse, setBtnResponse ] = useState('');

	const { register, handleSubmit, errors } = useForm();

	const handleFormSubmit = async (data) => {
		// event.preventDefault();
		console.log('handle form submit button works');
		console.log(data);
		await axios
			.post(posturl + '/signup', data)
			.then((res) => {
				console.log('Server responded back!');
				console.log(res);
				setBtnResponse('success!');
				props.history.push('/dashboard');
			})
			.catch((error) => {
				console.log(error);
				setBtnResponse('failed');
			});
	};

	const handleFormChange = (event) => {};
	return (
		<div>
			<h1>Sign In</h1>
			<div className='form-container'>
				<div>{btnResponse}</div>
				<form method='POST' className='signup-form' onSubmit={handleSubmit(handleFormSubmit)}>
					<div className='form-row'>
						<input
							name='firstname'
							type='text'
							placeholder='First Name'
							ref={register({ required: true })}
							onChange={handleFormChange}
						/>
						<input name='lastname' type='text' placeholder='Last Name' ref={register({ required: true })} />
					</div>
					<div className='form-row'>
						<input
							name='email'
							type='text'
							placeholder='Email'
							ref={register({ required: true, pattern: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/ })}
						/>
						{errors.email &&
						errors.email.type === 'required' && <p className='errorMsg'>Email is required.</p>}
						{errors.email &&
						errors.email.type === 'pattern' && <p className='errorMsg'>Email is not valid.</p>}
					</div>
					<div className='form-row'>
						<input
							name='password'
							type='password'
							placeholder='Password'
							ref={register({ required: true, minLength: 6 })}
						/>
						{errors.password &&
						errors.password.type === 'required' && <p className='errorMsg'>Password is required.</p>}
						{errors.password &&
						errors.password.type === 'minLength' && (
							<p className='errorMsg'>Password should be at-least 6 characters.</p>
						)}
						<input
							name='repeatpassword'
							type='password'
							placeholder='Repeat Password'
							ref={register({ required: true, minLength: 6 })}
						/>
						{errors.repeatpassword &&
						errors.repeatpassword !== errors.password && <p className='errorMsg'>Password do not match.</p>}
					</div>
					<button type='submit'>Sign In</button>
				</form>
			</div>
		</div>
	);
};

export default SignIn;
