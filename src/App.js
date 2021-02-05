import './styles.css';
import React from 'react';
import LandingPage from './components/LandingPage';
import NavBar from './components/Navigations/NavBar';
import Footer from './components/Navigations/Footer';
import { About, Cause, Donate, Fundraise, SignIn } from './components/WebPages';
import { Switch, Route } from 'react-router-dom';

function App() {
	return (
		<div className='App'>
			<NavBar />
			<main className='main-body'>
				<Switch>
					<Route exact path='/' component={LandingPage} />
					<Route exact path='/cause' component={Cause} />
					<Route exact path='/about' component={About} />
					<Route exact path='/donate' component={Donate} />
					<Route exact path='/fundraise' component={Fundraise} />
					<Route exact path='/sign-in' component={SignIn} />
				</Switch>
			</main>
			<Footer />
			{/* 
			create the new pages
			1. Our causes
			2. About Us
			3. Sign-In
			4. Donate
			5. Fundraise
       */}
		</div>
	);
}

export default App;
