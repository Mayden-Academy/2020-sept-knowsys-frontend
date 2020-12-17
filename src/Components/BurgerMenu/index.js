import React from "react";
import './style.css'
import burgerMenu from "./BurgerMenu.png";
import { Link } from "react-router-dom";

class BurgerMenu extends React.Component {
    render() {
      return (
          <button className="burgerMenuButton"><img class="burgerButtonImage" src= {burgerMenu} alt= 'icon' /></button>
  
      )
    }
  }

  export default BurgerMenu