import React from "react";
import './style.css';
import { Route, Link, BrowserRouter as Router, Switch} from 'react-router-dom';
import knowsysLogo from "./knowsysLogo.png";

class NavBar extends React.Component {
	render() {
		return (
            <div className="navBar">
                <div className="navLogoBackground">
                    <img className="logoImage" src={knowsysLogo} alt="Logo of a brain" />
                    <h3>KNOWSY</h3>
                </div>
                    <Link to="/user" className="myProfileButton">MY PROFILE</Link>
                    <Link to ="/login" className="logOutButton">LOG OUT</Link>
                </div>

		)
	}
}
export default NavBar;