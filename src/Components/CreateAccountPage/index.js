import React from "react";
import './style.css';
import CreateAccountForm from "../CreateAccountForm"
import HomepageHeader from "../HomepageHeader";

class CreateAccountPage extends React.Component {
	render() {
		return (
            <div className="bodyContent">
            <HomepageHeader />
            <CreateAccountForm />
            </div>
		)
	}
}
export default CreateAccountPage;