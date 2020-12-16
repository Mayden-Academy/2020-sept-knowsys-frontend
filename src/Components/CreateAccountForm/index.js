import React from "react";
import './style.css';

class CreateAccountForm extends React.Component {

    validatePassword = (submittedPassword) => {
        let validPassword = new RegExp(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/);
        
        if(submittedPassword.match(validPassword)) {
            return true
        }
            else {
                alert("Password does not meet requirements")
                return false;
            }
        }

    formSubmission = (e) => {
        e.preventDefault()
        console.log(e.target[1].value)
        this.validatePassword(e.target[1].value)
        console.log(e)
    }

	render() {
	    return (
           <div className="createUserForm">
                <form onSubmit={this.formSubmission}>
                    <h2>Create Account</h2>
                    <input className="emailInput" type="text" placeholder="Email:"></input>
                    <input className="passwordInput"  type="password" placeholder="Password:"></input>
                    <p className="passwordRequirementsHeader">Password must:</p>
                    <div className="passwordRequirementsText">
                        <p>+ Be between 6 to 20 characters</p>
                        <p>+ Contain at least one number</p>
                        <p>+ Contain at lease one Uppercase and Lowercase character</p>
                    </div>
                    <div>
                    <label>@</label>
                    <input className="usernameInput" type="text" placeholder="Unique Username:"></input>
                    </div>                    
                    <p className="usernameRequirements">Max 14 characters</p>
                    <label>Add a bio (Optional)</label>
                    <textarea placeholder="Max 500 characters"></textarea>
                    <div className="createAccountButtonContainer">
                    <button className="cancelFormSubmit">CANCEL</button>
                    <button className="confirmFormSubmit" type="submit">SUBMIT</button>
                    </div>
                </form>
            </div>
	    )
    }
}

export default CreateAccountForm;