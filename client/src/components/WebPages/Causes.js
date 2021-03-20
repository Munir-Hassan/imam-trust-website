import React from 'react';
import axios from 'axios';

const Causes = () => {
	const cards = [ 1, 2, 3, 4, 5, 6 ];
	const posturl = 'http://localhost:5000';

	const handleClick = async () => {
		await axios
			.get(posturl + '/cause/education', 'sending education request!')
			.then((res) => {
				console.log('we got a education response!', res);
			})
			.catch((error) => {
				console.log(error);
			});
	};
	return (
		<div className='causes'>
			<div className='search-bar-cause' />
			<div className='cause-grid'>
				<div className='cause-card'>
					<h2>Education</h2>
				</div>
				<div className='cause-card'>
					<h2>Health</h2>
				</div>
				<div className='cause-card'>
					<h2>Orphanage</h2>
				</div>
				<div className='cause-card'>
					<h2>Poor & Needy</h2>
				</div>
				<div className='cause-card'>
					<h2>Food</h2>
				</div>
				<div className='cause-card'>
					<h2>Mosque</h2>
				</div>
			</div>
		</div>
	);
};

export default Causes;
