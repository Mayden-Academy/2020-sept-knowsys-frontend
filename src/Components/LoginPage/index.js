import React from "react";
import './style.css';
import HomepageHeader from "../HomepageHeader";
import { Redirect } from "react-router-dom";

class LoginPage extends React.Component {
	componentDidMount() {
	// this.doThing
	}

	handleClick = () => {
		console.log('logging in')
		this.setState({
			// loggedIn: false
		})
	}

	doThing = () => {
		const queryString = `
			mutation {
				loginUserName(username: "Foxtrot", password: "passwordSix"){
					email
					bio
					_id
				}
			}
			`;

		//fetch one user
		fetch('http://localhost:4005/graphql', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			//add vars from Login Form
			body: JSON.stringify({query: queryString}),
			redirect: 'follow'
		}).
		then((response) => {
			console.log('theres json')
			return response.json()
		})
			.then((dataObject) => {
				console.log('inside LoginPage then stmt, value of dataObject.data:  ')

				// console.log('before setting state')
				// console.log(this.state.learners)
				this.setState({
					learners: dataObject.data.user
				})
				// console.log('after setting state')
				// console.log(this.state.learners)
				console.log(dataObject.data.user);

				return <Redirect to={{pathname: '/user'}} />

				// return $response->withHeader('Location', '/completedTasks')->withStatus(302);
			})

		//got   to next page??



	}

	render() {
		return (
            <div className="bodyContent">
                <HomepageHeader />
				<div class="loginForm">
					<form>
						<h2>Log In</h2>
                    	<input className="loginInputs" type="text" placeholder="Email:"></input>
                    	<input classname="loginInputs" type="password" placeholder="Password:"></input>
						<div className="loginPageButton">
							{/*//func is not being called!*/}
						<button onClick={ this.doThing }>LOG ME IN</button>

						</div>
					</form>
				</div>
            </div>
		)
	}
}
export default LoginPage;
