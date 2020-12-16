import React from "react";
import './style.css';
import knowsysLogo from "./knowsysLogo.png";

class NavBar extends React.Component {
	render() {
		return (
            <div className="navBar">
                <div className="navLogoBackground">
                    <img className="logoImage" src={knowsysLogo} alt="Logo of a brain" />
                    <h3>KNOWSY</h3>
                </div>
                <button className="myProfileButton">MY PROFILE</button>
                <button className="signOutButton">LOG OUT</button>
            </div>
		)
	}
}
export default NavBar;