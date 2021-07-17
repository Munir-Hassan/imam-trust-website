import React, { useState } from 'react';
import img from '../../../images/img_avatar.png';
import './DonateItems.styles.css';

const DonateItems = ({ title, description, amount, category, imagefile }) => {
	const [ toggle, setToggle ] = useState(false);
	const handleToggleClick = (e) => {
		setToggle((prevToggle) => !prevToggle);
	};
	return (
		<div className='donate-item-card'>
			<div className='donate-id-img-container'>
				<img src={img} alt={title} />
			</div>
			<div className='donate-info-container'>
				<div className='donate-three-dot-menu' onClick={handleToggleClick}>
					<span className='dot' />
					<span className='dot' />
					<span className='dot' />
				</div>
				<div className='donate-three-dot-menu-content' style={{ display: toggle ? 'flex' : 'none' }}>
					<button>Edit</button>
					<button>Save</button>
				</div>
				<div className='donate-info-headings'>
					<h1>Title</h1>
					<h3>Name</h3>
					<h3>Category</h3>
					<h3>Date</h3>
				</div>
				<div className='donate-description'>
					<h3>Description</h3>
					<p>
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error corrupti neque, itaque aliquam
						facere ipsum cumque, dignissimos iusto fugit accusantium ad accusamus modi. Repellat natus
						dignissimos nobis, aliquid consequuntur maxime! Sequi fuga consequatur minima laudantium,
						accusamus aliquid blanditiis tenetur excepturi dolorem voluptatem dolorum dignissimos nihil ad a
						commodi maxime quisquam adipisci, perferendis officiis quis veniam eveniet? Sed culpa magni
						voluptatibus. Quidem distinctio consequuntur maiores hic tenetur et, ea excepturi ut laboriosam
						doloribus eaque dicta eos sunt! Officiis nam consectetur tempore facilis, fugiat rerum suscipit
						nisi, impedit animi vitae vero pariatur! Eaque a magni eveniet quod distinctio praesentium ex
						dolores nihil provident, quo consectetur laborum ratione at ullam expedita fuga adipisci omnis
						labore fugiat. Numquam harum ducimus quisquam ut iure in. Eius doloremque enim, consequatur a,
						quisquam atque non itaque, impedit ratione asperiores illo tempora cumque deserunt error vero
						totam veniam autem. Asperiores suscipit debitis cum voluptates beatae ratione tempore
						accusantium. Reiciendis corporis, cumque provident voluptates iure consequuntur
					</p>
				</div>
				<div className='donate-percentage-funded'>
					<p>
						<span>25%</span> Funded
					</p>
					<p>$650.00 to go</p>
				</div>
				<div className='donate-progress-bar'>
					<div className='donate-progress-indicator' />
				</div>
				<div className='donate-total-amount'>
					<p>Total: $895</p>
				</div>
				<div className='donate-btn'>
					<button>Share</button>
					<button>Donate</button>
				</div>
			</div>
		</div>
	);
};

export default DonateItems;
