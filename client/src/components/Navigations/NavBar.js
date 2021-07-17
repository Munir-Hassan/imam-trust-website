import { React, useState, useEffect } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import './NavBar.styles.css';

const NavBar = () => {
	const history = useHistory();
	const location = useLocation();
	const [ isHidden, setIsHidden ] = useState(false);
	const [ user, setUser ] = useState(JSON.parse(localStorage.getItem('profile')));
	const handleProfile = () => {
		history.push('/dashboard');
	};
	console.log(user);

	useEffect(
		() => {
			setUser(JSON.parse(localStorage.getItem('profile')));
		},
		[ location ]
	);
	return (
		<nav className='navbar'>
			<Link to='/imam-trust-website' className={'brand-title'}>
				<div>Imam Trust</div>
			</Link>
			<div className='toggle-btn'>
				<span className='toggle' />
				<span className='toggle' />
				<span className='toggle' />
			</div>
			<div className='nav-links'>
				<ul>
					<Link to='/cause' className={'menu-links'}>
						<li>Our Causes</li>
					</Link>
					<Link to='/about' className={'menu-links'}>
						<li>About Us</li>
					</Link>
					<Link to='/donate' className={'menu-links'}>
						<li>Donate</li>
					</Link>
					<Link to='/fundraise' className={'menu-links'}>
						<li>Fundraise</li>
					</Link>
					{user && user.result ? (
						<div className='navbar-profile' onClick={handleProfile}>
							<img className='navbar-profile-image' src={user.result.imageUrl} alt={user.result.name} />
							<h4>{user.result.name}</h4>
						</div>
					) : (
						<Link to='/sign-in' className={'menu-links'}>
							<li>Sign In</li>
						</Link>
					)}
				</ul>
			</div>
		</nav>
	);
};

export default NavBar;
