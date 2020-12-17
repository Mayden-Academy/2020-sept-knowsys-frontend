import React from "react";
import './style.css';
import CreateAccountForm from "../CreateAccountForm"
import HomepageHeader from "../HomepageHeader";

class CreateAccountPage extends React.Component {
	render() {
		return (
            <div>
            <HomepageHeader />
            <div className="bodyContent">
            <CreateAccountForm />
            </div>
            </div>
		)
	}
}
export default CreateAccountPage;