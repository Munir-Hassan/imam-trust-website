import React from 'react';
import imgAvater from '../../images/img_avatar.png';

const CardComponent = () => {
	return (
		<div className='card'>
			<img id='card-img' src={imgAvater} alt='avatar' />
			<div className='card-container'>
				<h4>This is a Card Component</h4>
				<div className='progress'>
					<div className='bar' />
				</div>
				<div className='fundraise-info'>
					<p>
						Fundraise: <br /> 200 TK
					</p>
					<p>
						Left: <br /> 10 <b>Taka</b>
					</p>
				</div>
				<button className='card-donate-btn'>Donate</button>
			</div>
		</div>
	);
};

export default CardComponent;
