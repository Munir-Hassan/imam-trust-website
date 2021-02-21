import React from 'react';
import { Link } from 'react-router-dom';
import img from '../../images/img_avatar.png';

const WelcomeMessage = () => {
	return (
		<section className='welcome-message'>
			<div className='welcome-img'>
				<img src={img} alt='welcome-img' />
			</div>

			<div className='welcome-initial'>
				<div className='welcome-headline'>
					<h1>Make Donations,</h1> <br /> <h1>Change Lives Everywhere.</h1>
				</div>

				<div className='welcome-para-div'>
					<div className='img-icon'>
						<img src='#' alt='icon' />
						<p>Support the cause that matters to you.</p>
					</div>

					<div className='img-icon'>
						<img src='#' alt='icon' />
						<p>Hear stories about the people you have helped.</p>
					</div>
				</div>

				<Link to='/cause' className={'cause-btn menu-links'}>
					<span className='btn'>Our Causes</span>
				</Link>
			</div>
		</section>
	);
};

export default WelcomeMessage;
