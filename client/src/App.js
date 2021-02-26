import './styles.css';
import React from 'react';
import LandingPage from './components/LandingPage';
import NavBar from './components/Navigations/NavBar';
import Footer from './components/Navigations/Footer';
import { About, Cause, Donate, Fundraise, SignIn } from './components/WebPages';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
	return (
		<Router basename='/'>
			<div className='App'>
				<NavBar />
				<main className='main-body'>
					<Switch>
						<Route exact path='/'>
							<LandingPage />
						</Route>
						<Route exact path='/cause'>
							<Cause />
						</Route>
						<Route exact path='/about'>
							<About />
						</Route>
						<Route exact path='/donate'>
							<Donate />
						</Route>
						<Route exact path='/fundraise'>
							<Fundraise />
						</Route>
						<Route exact path='/sign-in'>
							<SignIn />
						</Route>
					</Switch>
				</main>
				<Footer />
			</div>
		</Router>
	);
}

export default App;
