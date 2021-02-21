import React from 'react';
import WelcomeMessage from './LandingPage/WelcomeMessage';
import HowItWorks from './LandingPage/HowItWorks';
import CauseCategoryBox from './LandingPage/CauseCategoryBox';
import CallToAction from './LandingPage/CallToAction';

const LandingPage = () => {
	return (
		<div>
			<WelcomeMessage />
			<CauseCategoryBox />
			{/* <HowItWorks /> */}
			<CallToAction />
		</div>
	);
};

export default LandingPage;
