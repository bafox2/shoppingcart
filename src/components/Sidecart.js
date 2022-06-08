import React from "react";
import { Link } from "react-router-dom";
import styles from "../css/Header.module.css";
// state of cart stuff might be handled in the APP itself

const Sidecart = (props) => {
    console.log(props.cart)
    return (
        <div >
            <p>this is your cart</p>
            <ul>
                {props.cart}
            </ul>
        </div>
    );
};

export default Sidecart;