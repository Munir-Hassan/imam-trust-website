import './styles.css';
import React from 'react';
import LandingPage from './components/LandingPage';
import NavBar from './components/Navigations/NavBar';
import Footer from './components/Navigations/Footer';
import UserDashBoard from './components/AuthPage/UserDashBoard';
import { About, Cause, Donate, Fundraise, SignIn } from './components/WebPages';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
	return (
		<Router basename='/'>
			<div className='App'>
				<NavBar />
				<main className='main-body'>
					<Switch>
						<Route exact path='/imam-trust-website' component={LandingPage} />
						<Route exact path='/cause' component={Cause} />
						<Route exact path='/about' component={About} />
						<Route exact path='/donate' component={Donate} />
						<Route exact path='/fundraise' component={Fundraise} />
						<Route exact path='/sign-in' component={SignIn} />
						<Route exact path='/dashboard' component={UserDashBoard} />
					</Switch>
				</main>
				<Footer />
			</div>
		</Router>
	);
}

export default App;
