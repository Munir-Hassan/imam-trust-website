import React from 'react';
import { Link } from 'react-router-dom';
import './CallToAction.styles.css';

const CallToAction = () => {
	return (
		<section className='call-to-action'>
			<p>
				Make a
				<Link to='/donate' className={'menu-links'}>
					<span className='btn'>Donation</span>
				</Link>
			</p>
			<hr />
			<p className='para-fundraise-cta'>
				<Link to='/fundraise' className={'menu-links'}>
					<span className='btn'>Fundraise</span>
				</Link>
				Your Need
			</p>
		</section>
	);
};

export default CallToAction;
