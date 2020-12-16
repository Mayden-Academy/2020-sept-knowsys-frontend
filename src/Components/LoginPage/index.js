import React from "react";
import './style.css';
import HomepageHeader from "../HomepageHeader";
import { Redirect } from "react-router-dom";
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
		console.log(event.target.name);
		this.setState({
			usernameValue: event.target.value,
		});
		console.log(this.state)
	}

	handleChangePassword(event) {
		console.log(event.target.name);
		this.setState({
			passwordValue: event.target.value
		});
		console.log(this.state)
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

	doThing = (event) => {
		event.preventDefault();
		//get vars from form
		let inputUsername = this.state.usernameValue;
		let inputPassword = this.state.passwordValue;

		console.log('CLICK');
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
			//add vars from Login Form
			body: JSON.stringify({query: queryString})
		}).
		then((response) => {
			console.log('theres json')

			return response.json()
		})
			.then((dataObject) => {
				console.log('inside LoginPage then stmt, value of dataObject.data:  ')
				//need to cehck if whats returned is an error or valid user?
				console.log(dataObject);
			if (!dataObject.errors) {
				// console.log('before setting state')
				// console.log(this.state.learners)
				this.setState({
					learners: dataObject.data.loginUserName,
					redirect: true
				})
				// console.log('after setting state')
				// console.log(this.state.learners)
				console.log(dataObject.data.loginUserName);
				console.log("LEARNER")
				console.log(this.state.learners)

				//try MIKE
				localStorage.setItem('username', inputUsername );
			console.log(`localStorage on LoginPage is: ${inputUsername}`)

				// only redirect if user matches!
				return <Redirect to={{pathname: '/user'}} />

				// return $response->withHeader('Location', '/completedTasks')->withStatus(302);

			}
			//slese ELES
				else {
					console.log('some errors happened LoginPage 109');
			}

			})

		//got   to next page??


	}

	render() {
		return (
            <div className="bodyContent">
                <HomepageHeader />
				<div class="loginForm">
					<form onSubmit={this.handleSubmit}>
						<h2>Log In</h2>
                    	<input className="loginInputs" id="inputUsername" type="text" placeholder="Email:" value={this.state.usernameValue} onChange={this.handleChangeUsername} ></input>
                    	<input classname="loginInputs" id="inputPassword"  type="password" placeholder="Password:" value={this.state.passwordValue} onChange={this.handleChangePassword} ></input>
						<div className="loginPageButton">
						<button onClick={ this.doThing }>LOG ME IN</button>
							{(this.state.redirect) ? <Redirect to={{pathname: '/user'}} /> : "" }
							<input type="submit" value="Submit" />
						</div>
					</form>
				</div>
            </div>

		)
	}
}
export default LoginPage;
