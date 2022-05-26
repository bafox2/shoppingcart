import React from "react";
import { Link } from "react-router-dom";
import styles from "../css/HomePage.module.css";
// import landingPic from "../images/rtx-3090.jpg";

const Home = (props) => {
    return (
        <div className={styles.container}>
            <main>
                <section
                    // style={{ backgroundImage: `url(${landingPic})` }}
                    className={styles.background}
                >
                    <h1 className={styles.s1Title}>Welcome to </h1>
                    <p className={styles.s1Subtitle}>
                        Now available for preorder, shipping December, 2020.
                    </p>
                    <Link className={styles.s1Link} to="/shopping/allItems">
                        Shop now
                    </Link>
                </section>
            </main>
        </div>
    );
};

export default Home;