import React from "react";
import './style.css';

class CreateAccountForm extends React.Component {
	render() {
		return (
            <div className="createUserForm">
                <form>
                    <input type="text" placeholder="Email:"></input>
                    <input type="password" placeholder="Password:"></input>
                    <p classname="passwordRequirements">Password must:</p>
                    <p className="passwordRequirements">+ Contain at least one upper and Lowercase character</p>
                    <div><label>@</label>
                    <input type="text" placeholder="Unique Username:"></input></div>
                    <label>Add a bio (Optional)</label>
                    <textarea placeholder="Max 500 characters"></textarea>
                    <button class="confirmSubmit" type="submit" label="CONFIRM" />
                </form>
            </div>
		)
	}
}
export default CreateAccountForm;