import React, { useState, setstate } from "react";
import { Link } from "react-router-dom";
import styles from "../css/Header.module.css";
import Icon from '@mdi/react';
import { mdiShoppingOutline, mdiSeedOutline } from '@mdi/js';

const Header = (props) => {

    const cartNum = props.cartNum() ? props.cartNum() : 0
    return (
        <header title="header">
            <p className={styles.logoHeader} >Nate's farm</p>
            <Link to='/'><Icon path={mdiSeedOutline} className={styles.logo} /> </Link>
            <nav>
                <Link to='about' className={styles.navItem}>About</Link>
                <Link to='learn' className={styles.navItem}>Learn</Link>
                <Link to='contact' className={styles.navItem}>Contact</Link>
                <Link to='shop' className={styles.navItem}>Shop</Link>
                <Link to='cart'><Icon path={mdiShoppingOutline} className={styles.shoppingcart} /></Link>
                <span className={styles.cartQuantity} title='cartNum'>{cartNum ? cartNum : 0}</span>
            </nav>

        </header>
    );
};

export default Header;