import React from "react";
import './style.css';
import { Route, Link, BrowserRouter as Router, Switch} from 'react-router-dom';
import knowsysLogo from "./knowsysLogo.png";
import BurgerMenu from "../BurgerMenu";


class NavBar extends React.Component {
	render() {
		return (
            <div class="navMenu">
                <BurgerMenu />
                <MenuModal />
                <div className="navBar">
                    <div className="navLogoBackground">
                        <img className="logoImage" src={knowsysLogo} alt="Logo of a brain" />
                        <h3>KNOWSY</h3>
                    </div>
                    <Link to ="/addTil" className="newTILButton">ADD TIL</Link>
                    <Link to="/user" className="myProfileButton">MY PROFILE</Link>
                    <Link to ="/login" className="logOutButton">LOG OUT</Link>
                </div>
            </div>
		)
	}
}
export default NavBar;