import React from 'react';

const Causes = () => {
	const cards = [ 1, 2, 3, 4, 5, 6 ];
	return (
		<div className='causes'>
			<div className='search-bar-cause' />
			<div className='cause-grid'>
				<div className='cause-card'>
					<h2>Education</h2>
				</div>
				<div className='cause-card'>
					<h2>Education</h2>
				</div>
				<div className='cause-card'>
					<h2>Education</h2>
				</div>
				<div className='cause-card'>
					<h2>Education</h2>
				</div>
				<div className='cause-card'>
					<h2>Education</h2>
				</div>
				<div className='cause-card'>
					<h2>Education</h2>
				</div>
			</div>
		</div>
	);
};

export default Causes;
