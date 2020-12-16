import React from "react";
import './style.css';
import TILUser from '../TILUser'

class UserPage extends React.Component {
    constructor(props) {
        super(props);

    }
    
	render() {
		return (
            <div>
                <TILUser />
            </div>
		)
	}
}
export default UserPage;