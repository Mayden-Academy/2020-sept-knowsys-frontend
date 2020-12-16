import React from "react";
import './style.css';

class CreateAccountForm extends React.Component {

    validateEmail = (submittedEmail) => {
        let validEmail = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);

        if(submittedEmail.match(validEmail)) {
            return true
        }
            else {
                alert("Email does not meet requirements")
                return false;
            }
        }
    
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

    validateBio = (ValidateBio) => {
        console.log(ValidateBio)
        if(ValidateBio.length <500) {
            return true
        }
        else {
            alert("Bio does not meet requirments, Max 500 characters")
            return false;
        }
    }

    validateUsername = (ValidateUsername) => {
        console.log(ValidateUsername)
        if(ValidateUsername.length <14) {
            return true
        }
        else {
            alert("Bio does not meet requirments, Max 14characters")
            return false;
        }
    }


    formSubmission = (e) => {
        e.preventDefault()
        console.log(e)
        this.validateEmail(e.target[0].value)
        this.validatePassword(e.target[1].value)
        this.validateUsername(e.target[2].value)
        this.validateBio(e.target[3].value)
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