import React from "react";
import './style.css';
import { Link, Redirect } from "react-router-dom";


class CreateAccountForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inputNewEmail: "",
            inputNewPassword: "",
            inputNewUsername: "",
            inputNewBio: ""
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        // this.handleInputChange = this.handleInputChange.bind(this);
        // this.handleInputChange = this.handleInputChange.bind(this);
        // this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value,
            // inputNewEmail: event.target.value,
        });

    }


    validateEmail = (submittedEmail) => {
        let validEmail = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);

        if (submittedEmail.match(validEmail)) {
            return true
        } else {
            alert("Email does not meet requirements")
            return false;
        }
    }

    validatePassword = (submittedPassword) => {
        let validPassword = new RegExp(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/);

        if (submittedPassword.match(validPassword)) {
            return true
        } else {
            alert("Password does not meet requirements")
            return false;
        }
    }

    validateBio = (validateBio) => {

        if (validateBio.length <= 500) {
            return true
        } else {
            alert("Bio does not meet requirements")
            return false;
        }
    }

    validateUsername = (validateUsername) => {

        if (validateUsername.length < 14) {
            return true
        } else {
            alert("Bio does not meet requirements")
            return false;
        }
    }


    formSubmission = (e) => {
        e.preventDefault()

        let validE = this.validateEmail(e.target[0].value)
        let validP = this.validatePassword(e.target[1].value)
        let validU = this.validateUsername(e.target[2].value)
        let validB = this.validateBio(e.target[3].value)

        if (validE && validP && validU && validB) {

            //add user to db then  redirect to next page?

            let inputEmail = this.state.inputNewEmail;
            let inputPassword = this.state.inputNewPassword;
            let inputUsername = this.state.inputNewUsername;
            let inputBio = this.state.inputNewBio;

            const queryStringAddUser = `
                mutation {
                    addUser(
                        email: "${inputEmail}"
                        username: "${inputUsername}"
                        password: "${inputPassword}"
                        bio: "${inputBio}") {
                            _id
                            email
                            username
                            password
                            bio
                            access_token
                        }
                    }
			    `;


            //fetch one user
            fetch('http://localhost:4005/graphql', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({query: queryStringAddUser})
            }).then((response) => {

                return response.json()
            }).then((dataObject) => {

                //need to cheeck if whats returned is an error or valid user?


                if (!dataObject.errors) {
                    localStorage.clear();
                    localStorage.setItem('username', inputUsername);
                    localStorage.setItem('access_token', this.state.userToken);

                    this.setState({
                        userToken: dataObject.data.addUser.access_token,
                        newLearner: dataObject.data.addUser,
                        redirect: true
                    })

                    // newUser.access_token = token;
                    return dataObject.data;
                }

                //ELSE theres some issues with the data returned from the query
                else {
                    //update alert or similar
                    let customError = dataObject.errors[0].message
                    alert(customError);

                    return false;
                }
            })
        }
    }

        render() {
            return (
                <div className="createUserForm">
                    <form onSubmit={this.formSubmission}>
                        <h2>Create Account</h2>
                        <input className="emailInput" type="text" placeholder="Email:" name="inputNewEmail"
                               value={this.state.inputNewEmail} onChange={this.handleInputChange}></input>
                        <input className="passwordInput" type="password" placeholder="Password:" name="inputNewPassword"
                               value={this.state.inputNewPassword} onChange={this.handleInputChange}></input>
                        <p className="requirementsHeader">Password must:</p>
                        <div className="requirementsText">
                            <p>+ Be between 6 to 20 characters</p>
                            <p>+ Contain at least one number</p>
                            <p>+ Contain at lease one Uppercase and Lowercase character</p>
                        </div>
                        <div>
                            <label>@</label>
                            <input className="usernameInput" type="text" placeholder="Username:" name="inputNewUsername"
                                   value={this.state.inputNewUsername} onChange={this.handleInputChange}></input>
                        </div>
                        <p className="requirementsHeader">Username must:</p>
                        <div className="requirementsText">
                            <p className="requirementsText">+ Be between 1 and 14 characters</p>
                            <p className="requirementsText">+ Be unique (not already taken)</p>
                        </div>
                        <label>Add a bio (Optional)</label>
                        <textarea placeholder="Max 500 characters" name="inputNewBio" value={this.state.inputNewBio}
                                  onChange={this.handleInputChange}></textarea>
                        <div className="createAccountButtonContainer">
                            {/*<Link to="/user" className="confirmFormSubmit" type="submit">SUBMIT</Link>*/}
                            <button type="submit" value="Submit" className="confirmFormSubmit">SUBMIT</button>
                            {(this.state.redirect) ? <Redirect to={{
                                pathname: '/user'
                            }}/> : ""}

                            <Link to="/login" className="cancelFormSubmit">CANCEL</Link>
                        </div>
                    </form>
                </div>
            )
        }

}

export default CreateAccountForm;