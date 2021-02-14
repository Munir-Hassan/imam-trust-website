import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
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
					<Link to='/sign-in' className={'menu-links'}>
						<li>Sign In</li>
					</Link>
				</ul>
			</div>
		</nav>
	);
};

export default NavBar;
