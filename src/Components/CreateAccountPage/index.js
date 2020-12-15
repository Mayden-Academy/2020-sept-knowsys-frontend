import React from "react";
import './style.css';
import CreateAccountPageHeader from "../CreateAccountPageHeader"
import CreateAccountForm from "../CreateAccountForm"

class CreateAccountPage extends React.Component {
	render() {
		return (
            <div className="bodyContent">
            <CreateAccountPageHeader />
            <CreateAccountForm />

            </div>
		)
	}
}
export default CreateAccountPage;