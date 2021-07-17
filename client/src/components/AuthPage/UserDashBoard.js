import React from 'react';

const UserDashBoard = (props) => {
	const handleLogout = () => {
		localStorage.clear();
		props.history.push('/imam-trust-website');
	};
	return (
		<div>
			<h1>This is User Profile Dashboard</h1>
			<button onClick={handleLogout}>Logout</button>
		</div>
	);
};

export default UserDashBoard;
