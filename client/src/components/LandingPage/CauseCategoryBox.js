import React from 'react';
import CardComponent from './CardComponent';
import './CauseCategoryBox.styles.css';

const CauseCategoryBox = () => {
	return (
		<div className='cause-category-box'>
			<h1 id='category-headline'>Supprt the causes you care about</h1>
			{/* <div className='tabs'>
				<li>Education</li>
				<li>Health</li>
				<li>Orphanage</li>
				<li>Poor & Needy</li>
			</div> */}
			<div className='card-section'>
				<CardComponent />
				<CardComponent />
				<CardComponent />
			</div>
		</div>
	);
};

export default CauseCategoryBox;
