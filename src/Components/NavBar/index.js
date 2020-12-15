import React from "react";
import './style.css';

class NavBar extends React.Component {
	render() {
		return (
            <div className="navBar">
                <div className="navLogoBackground">
                    <img className="logoImage" src="https://www.svgrepo.com/show/25187/brain.svg" alt="Logo of a brain" />
                    <h3>KNOWSY</h3>
                </div>
                <button className="myProfileButton">MY PROFILE</button>
                <button className="signOutButton">LOG OUT</button>
            </div>
		)
	}
}
export default NavBar;