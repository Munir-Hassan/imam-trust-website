import React, { useState, useEffect } from 'react';
import DonateItems from './DonateItems';
import axios from 'axios';

const geturl = 'http://localhost:5000';

const Donate = () => {
	const [ donateData, setDonateData ] = useState([]);

	useEffect(() => {
		const getDonateData = async () => {
			await axios
				.get(geturl + '/donate')
				.then((res) => {
					console.log(res.data);
					setDonateData(res.data);
					console.log(donateData);
				})
				.catch((error) => {
					console.log(error);
				});
		};

		getDonateData();
	}, []);

	return (
		<div>
			<h1>Donate</h1>
			<p>Donation list to be included</p>
			<DonateItems />
			{/* {donateData &&
				donateData.map((data, index) => {
					return (
						<DonateItems
							key={index}
							title={data.title}
							description={data.description}
							amount={data.amount}
							category={data.category}
							imagefile={data.imageFile}
						/>
					);
				})} */}
		</div>
	);
};

export default Donate;
