import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';

import './SignIn.styles.css';

const posturl = 'http://localhost:5000';

const SignIn = (props) => {
	const [ btnResponse, setBtnResponse ] = useState('');
	const [ isSignUp, setSignUp ] = useState(false);

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
				// props.history.push('/dashboard');
			})
			.catch((error) => {
				console.log(error);
				setBtnResponse('failed');
			});
	};

	const switchMode = () => {
		setSignUp((prevSignup) => !prevSignup);
	};

	const handleFormChange = (event) => {};
	return (
		<div>
			<div className='form-container'>
				<h1 className='signin-header'>{isSignUp ? 'Sign Up' : 'Sign In'}</h1>
				<div>{btnResponse}</div>
				<form method='POST' className='signup-form' onSubmit={handleSubmit(handleFormSubmit)}>
					{isSignUp && (
						<div className='form-row'>
							<input
								name='firstname'
								type='text'
								placeholder='First Name'
								ref={register({ required: true })}
								onChange={handleFormChange}
							/>
							<input
								name='lastname'
								type='text'
								placeholder='Last Name'
								ref={register({ required: true })}
							/>
						</div>
					)}

					{errors.email &&
					errors.email.type === 'required' && (
						<div className='form-row-error'>
							<p className='errorMsg'>Email is required.</p>
						</div>
					)}
					{errors.email &&
					errors.email.type === 'pattern' && (
						<div className='form-row-error'>
							<p className='errorMsg'>Email is not valid.</p>
						</div>
					)}
					<div className='form-row'>
						<input
							name='email'
							type='text'
							placeholder='Email'
							ref={register({ required: true, pattern: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/ })}
						/>
					</div>

					{errors.password &&
					errors.password.type === 'required' && (
						<div className='form-row-error'>
							<p className='errorMsg'>Password is required.</p>
						</div>
					)}
					{errors.password &&
					errors.password.type === 'minLength' && (
						<div className='form-row-error'>
							<p className='errorMsg'>Password should be at-least 6 characters.</p>
						</div>
					)}

					{errors.repeatpassword &&
					errors.repeatpassword !== errors.password && (
						<div className='form-row-error'>
							<p className='errorMsg'>Password do not match.</p>
						</div>
					)}
					<div className='form-row'>
						<input
							name='password'
							type='password'
							placeholder='Password'
							ref={register({ required: true, minLength: 6 })}
						/>

						{isSignUp && (
							<input
								name='repeatpassword'
								type='password'
								placeholder='Repeat Password'
								ref={register({ required: true, minLength: 6 })}
							/>
						)}
					</div>

					<div className='google-facebook-auth-container'>
						<button className='form-row-buttons-auth google-btn' type='submit'>
							Sign In with Google
						</button>
						<button className='form-row-buttons-auth facebook-btn' type='submit'>
							Sign In with Facebook
						</button>
					</div>

					<button className='form-row-buttons' type='submit'>
						{isSignUp ? 'Sign Up' : 'Sign In'}
					</button>
					<button className='form-row-buttons' type='button' onClick={switchMode}>
						{isSignUp ? 'Already have an account? Sign in' : "Don't have an account? Sign Up"}
					</button>
				</form>
			</div>
		</div>
	);
};

export default SignIn;
