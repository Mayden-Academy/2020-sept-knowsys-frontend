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
		// console.log(event.target.name);
		this.setState({
			usernameValue: event.target.value,
		});
		// console.log(this.state)
	}

	handleChangePassword(event) {
		console.log(event.target.name);
		this.setState({
			passwordValue: event.target.value
		});
		// console.log(this.state)
	}


	handleSubmit(event) {
		alert('A name was submitted: ' + this.state.usernameValue);
		alert('A name was submitted: ' + this.state.passwordValue);
		console.log(event.target);
		event.preventDefault();
	}

	handleClick = () => {
		console.log('logging in')
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
		console.log('function startLogin');

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
		fetch('http://localhost:4005/graphql', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({query: queryString})
		}).
		then((response) => {
			// console.log('theres json')
			return response.json()
		})
			.then((dataObject) => {
				console.log('inside LoginPage THEN stmt, value of dataObject.data:  ')
				//need to cheeck if whats returned is an error or valid user?
				console.log(dataObject.data);
				if (!dataObject.errors) {
					// console.log('before setting state')
					// console.log(this.state.learners)
					this.setState({
						userToken: dataObject.data.loginUserName.access_token,
						learners: dataObject.data.loginUserName,
						redirect: true
					})
					// console.log('after setting state')
					// console.log(this.state.learners)
					console.log(dataObject.data.loginUserName);
					console.log("value of state.learners")
					console.log(this.state.learners)

					//Try to put access token in local storage so can get it later
					localStorage.setItem('username', inputUsername );
					localStorage.setItem('access_token', this.state.userToken);
					console.log(`localStorage on LoginPage for inputUsername is: ${inputUsername}`)
					console.log(`localStorage on LoginPage for state userToken is: ${this.state.userToken}`)

					// Need to only redirect if user token matches!
					//this is not actually redirecting, its actualy line 130!
					return dataObject.data;
					// return <Redirect to={{pathname: '/user'}} />
				}
				//ELSE theres some issues with the data returned from the query
				else {
					console.log('some errors happened in LoginPage line 119');
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
                    	<input className="loginInputs" id="inputUsername" name="inputUsername" type="text" placeholder="Email:" value={this.state.usernameValue} onChange={this.handleChangeUsername} ></input>
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
