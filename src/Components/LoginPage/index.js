import React from "react";
import './style.css';
import HomepageHeader from "../HomepageHeader";

class LoginPage extends React.Component {
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
						<button>LOG IN</button>
						</div>
					</form>
				</div>
            </div>
		)
	}
}
export default LoginPage;