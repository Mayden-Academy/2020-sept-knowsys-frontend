import React from "react";
import './style.css'
import burgerMenu from "./BurgerMenu.png";
import { Link } from "react-router-dom";

class BurgerMenu extends React.Component {
    render() {
      return (
        <Link to = "/burger">
          <img className="burgerMenuButton" src= {burgerMenu} alt= 'icon' />
        </Link>
      )
    }
  }

  export default BurgerMenu