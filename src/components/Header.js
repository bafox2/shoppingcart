import React from "react";
import { Link } from "react-router-dom";
import styles from "../css/Header.module.css";
// import landingPic from "../images/rtx-3090.jpg";

const Header = (props) => {
    return (
        <header >
            <p>header tab</p>
            <Link to='/'><p>logo</p></Link>
            <nav>
                <Link to='about'>About</Link>
                <Link to='contact'>Contact</Link>
                <Link to='Shop'>Shop</Link>
            </nav>
        </header>
    );
};

export default Header;