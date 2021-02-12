import React from 'react';
import img from '../../images/img_avatar.png';

const WelcomeMessage = () => {
	return (
		<section className='welcome-message'>
			<div className='welcome-initial'>
				<div className='welcome-img'>
					<img src={img} alt='welcome-img' width='50%' height='50%' />
				</div>
				<div className='welcome-headline'>
					<i>Make Donations.</i> <br /> <i>Change Lives Everywhere.</i>
				</div>
			</div>

			<div className='welcome-para-div'>
				<div className='img-icon'>image</div>
				<p>Support the cause that matters to you.</p>
				<div className='img-icon'>image</div>
				<p>Hear stories about the people you have helped.</p>
			</div>
		</section>
	);
};

export default WelcomeMessage;
