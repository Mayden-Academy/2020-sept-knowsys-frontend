import React from "react";
import './style.css';
import HomepageHeader from "../HomepageHeader";
import { Link, Redirect } from "react-router-dom";
import UserContext from "../../UserContext";

class LoginPage extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			learners: [],
			usernameValue: "",
			passwordValue: ""
		}
		this.handleChangeUsername = this.handleChangeUsername.bind(this);
		this.handleChangePassword = this.handleChangePassword.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChangeUsername(event) {

		this.setState({
			usernameValue: event.target.value,
		});
	}

	handleChangePassword(event) {
		this.setState({
			passwordValue: event.target.value
		});
	}


	handleSubmit(event) {
		alert('A name was submitted: ' + this.state.usernameValue);
		alert('A name was submitted: ' + this.state.passwordValue);
		event.preventDefault();
	}

	handleClick = () => {
		this.setState({
			redirect: false
			// loggedIn: false
		})
	}

	startLogin = (event) => {
		event.preventDefault();
		//get vars from form
		let inputUsername = this.state.usernameValue;
		let inputPassword = this.state.passwordValue;

		//fyi variables in query MUST be inside "" otherwise browser thinks its not a string & wont compile/render!
		const queryString = `
			mutation {
				loginUserName(username: "${inputUsername}", password: "${inputPassword}" ){
					email
					bio
					_id
					access_token
					}
				}
			`;

		//fetch one user
		// replace witih https://2020-sept-knowsys-api.dev.io-academy.uk/graphql
		fetch('https://2020-sept-knowsys-api.dev.io-academy.uk/graphql', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({query: queryString})
		}).
		then((response) => {
			return response.json()
		})
			.then((dataObject) => {
				//need to cheeck if whats returned is an error or valid user?
				if (!dataObject.errors) {

//clear previous local storage before setting state for new user!
					localStorage.clear();
					localStorage.setItem('username', inputUsername );

					localStorage.setItem('access_token', this.state.userToken);

					this.setState({
						userToken: dataObject.data.loginUserName.access_token,
						learners: dataObject.data.loginUserName,
						redirect: true
					})

					//Try to put access token in local storage so can get it later


					// Need to only redirect if user token matches!
					//this is not actually redirecting, its actualy line 130!
					return dataObject.data;
					// return <Redirect to={{pathname: '/user'}} />
				}
				//ELSE theres some issues with the data returned from the query
				else {
				}
			})

		}

	render() {
		return (
			<div>
			<HomepageHeader />
            <div className="bodyContent">
				<div class="loginForm">
					<form onSubmit={this.handleSubmit}>
						<h2>Log In</h2>
                    	<input className="loginInputs" id="inputUsername" name="inputUsername" type="text" placeholder="Username:" value={this.state.usernameValue} onChange={this.handleChangeUsername} ></input>
                    	<input classname="loginInputs" id="inputPassword" name="inputPassword" type="password" placeholder="Password:" value={this.state.passwordValue} onChange={this.handleChangePassword} ></input>

						<div className="loginPageButtons">
						<button class="loginButton" onClick={ this.startLogin }>LOG IN</button>
							{(this.state.redirect) ? <Redirect to={{
								pathname: '/user',
								state: { userToken: localStorage.getItem('access_token') }
							}} /> : "" }
							{/*<input type="submit" value="Submit" />*/}

							<div className="createAccountButton">
								<Link to="/createaccount">CREATE ACCOUNT</Link>
							</div>
						</div>
					</form>
				</div>
            </div>
			</div>
		)
	}
}
export default LoginPage;
