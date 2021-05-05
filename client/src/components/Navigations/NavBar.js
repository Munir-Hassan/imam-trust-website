import { React, useState } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.styles.css';

const NavBar = () => {
	const [ isHidden, setIsHidden ] = useState(false);
	const user = true;
	return (
		<nav className='navbar'>
			<Link to='/' className={'brand-title'}>
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
					{user ? (
						<Link to='/sign-in' className={'menu-links'}>
							<li>Sign In</li>
						</Link>
					) : (
						<li>Logout</li>
					)}
				</ul>
			</div>
		</nav>
	);
};

export default NavBar;
