import React from "react";
import './style.css';

class CreateAccountForm extends React.Component {
	render() {
		return (
            <div className="createUserForm">
                
                <form onsubmit="">
                    <h2>Create Account</h2>
                    <input className="emailInput" type="text" placeholder="Email:"></input>
                    <input className="passwordInput"  type="password" placeholder="Password:"></input>
                    <p className="passwordRequirementsHeader">Password must:</p>
                    <p className="passwordRequirementsText">+ Contain at least one upper and Lowercase character</p>

                    <div >
                        <label>@</label>
                        <input className="usernameInput" type="text" placeholder="Unique Username:"></input>
                    </div>
                    <p className="usernameRequirements">Max 14 characters</p>

                    <label>Add a bio (Optional)</label>
                    <textarea placeholder="Max 500 characters"></textarea>
                    <div class="createAccountButtonContainer">
                        <button class="cancelFormSubmit">CANCEL</button>
                        <button url="hello.com" class="confirmFormSubmit" type="submit" text="text">SUBMIT</button>
                    </div>
                </form>
            </div>
		)
	}
}
export default CreateAccountForm;