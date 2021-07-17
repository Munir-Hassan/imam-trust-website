import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { GoogleLogin } from 'react-google-login';
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

	const googleLoginSuccess = async (response) => {
		const result = response && response.profileObj;
		const token = response && response.tokenId;
		console.log(result);
		const profileData = { result, token };
		console.log(profileData);

		try {
			localStorage.setItem('profile', JSON.stringify({ ...profileData }));
			props.history.push('/imam-trust-website');
		} catch (error) {
			console.log(error);
		}
	};

	const googleLoginFailure = async (error) => {
		console.log(error);
		console.log('Google login failed');
	};
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

					{errors.confirmPassword &&
					errors.confirmPassword !== errors.password && (
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
								name='confirmPassword'
								type='password'
								placeholder='Repeat Password'
								ref={register({ required: true, minLength: 6 })}
							/>
						)}
					</div>

					<div className='google-facebook-auth-container'>
						<GoogleLogin
							clientId='159725840776-sc86o8if6kpa53p70sraeaf70ri0o2jo.apps.googleusercontent.com'
							render={(renderProps) => (
								<button
									className='form-row-buttons-auth google-btn'
									type='submit'
									onClick={renderProps.onClick}
									disabled={renderProps.disabled}
								>
									Sign In with Google
								</button>
							)}
							onSuccess={googleLoginSuccess}
							onFailure={googleLoginFailure}
							cookiePolicy='single_host_origin'
						/>
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
