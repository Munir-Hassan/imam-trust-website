import React from 'react';
import imgAvater from '../../images/img_avatar.png';

const CardComponent = () => {
	return (
		<div className='card'>
			<img id='card-img' src={imgAvater} alt='avatar' />
			<div className='container'>
				<h4>This is a Card Component</h4>
				<div className='progress'>
					<div className='bar' />
				</div>
				<div className='fundraise-info'>
					<div>Fundraise</div>
					<div>
						10<b>&#2547;</b>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CardComponent;
