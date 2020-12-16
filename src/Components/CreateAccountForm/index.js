import React from "react";
import './style.css';
import { Link, Redirect } from "react-router-dom";

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

    validateBio = (validateBio) => {
        console.log(validateBio)
        if(validateBio.length <500) {
            return true
        }
        else {
            alert("Bio does not meet requirements")
            return false;
        }
    }

    validateUsername = (validateUsername) => {
        console.log(validateUsername)
        if(validateUsername.length <14) {
            return true
        }
        else {
            alert("Bio does not meet requirements")
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
                    <p className="requirementsHeader">Password must:</p>
                    <div className="requirementsText">
                        <p>+ Be between 6 to 20 characters</p>
                        <p>+ Contain at least one number</p>
                        <p>+ Contain at lease one Uppercase and Lowercase character</p>
                    </div>
                    <div>
                    <label>@</label>
                    <input className="usernameInput" type="text" placeholder="Username:"></input>
                    </div>
                    <p className="requirementsHeader">Username must:</p>    
                    <div className="requirementsText">
                        <p className="requirementsText">+ Be between 1 and 14 characters</p>
                        <p className="requirementsText">+ Be unique (not already taken)</p>
                    </div>                
                    <label>Add a bio (Optional)</label>
                    <textarea placeholder="Max 500 characters"></textarea>
                    <div className="createAccountButtonContainer">
                    <Link to="/user" className="confirmFormSubmit" type="submit">SUBMIT</Link>
                    <Link to="/login" className="cancelFormSubmit">CANCEL</Link>
                    </div>
                </form>
            </div>
	    )
    }
}

export default CreateAccountForm;