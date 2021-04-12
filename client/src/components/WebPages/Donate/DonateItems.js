import React from 'react';
import img from '../../../images/img_avatar.png';
import './DonateItems.styles.css';

const DonateItems = () => {
	return (
		<div className='donate-item-card'>
			<div className='donate-id-img-container'>
				<img src={img} alt='profile Name' />
			</div>
			<div className='donate-info-container'>
				<div className='donate donate-id-info'>
					<div className='donate-info-right'>
						<h2>Name</h2>
						<h3>Title</h3>
						<h3>Location</h3>
					</div>
					<div className='donate-info-left'>
						<h3>Amount</h3>
						<h3>Donated</h3>
					</div>
				</div>
				<div className='donate donate-id-info-description'>
					<h5>Description</h5>
					<h5>
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio aspernatur, perferendis unde
						accusamus modi ipsum ullam expedita neque distinctio obcaecati a, voluptatum eveniet natus enim,
						soluta et voluptatibus cum dolores. Lorem ipsum dolor, sit amet consectetur adipisicing elit.
						Optio aspernatur, perferendis unde accusamus modi ipsum ullam expedita neque distinctio
						obcaecati a, voluptatum eveniet natus enim, soluta et voluptatibus cum dolores.
					</h5>
				</div>
				<div className='donate donation-progress'>
					<p>donation progress - - - - -</p>
				</div>
				<div className='donate-item-card-buttons'>
					<div className='donate-react-button'>
						<p>Like icon</p>
						<p>Comment icon</p>
						<p>Share icon</p>
					</div>
					<button>Donate</button>
				</div>
			</div>
		</div>
	);
};

export default DonateItems;
