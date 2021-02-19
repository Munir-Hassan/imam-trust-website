import React from 'react';

const SignIn = () => {
	const handleFormSubmit = (event) => {
		event.preventDefault();
		console.log('handle form submit button works');
	};
	return (
		<div>
			<h1>Sign In</h1>
			<div className='form-container'>
				<form method='POST' className='signup-form' onSubmit={handleFormSubmit}>
					<div className='form-row'>
						<input type='text' placeholder='First Name' />
						<input type='text' placeholder='Last Name' />
					</div>
					<div className='form-row'>
						<input type='text' placeholder='Email' />
					</div>
					<div className='form-row'>
						<input type='text' placeholder='Password' />
						<input type='text' placeholder='Repeat Password' />
					</div>
					<button>Sign In</button>
				</form>
			</div>
		</div>
	);
};

export default SignIn;
