import React from "react";
import styles from "../css/About.module.css";
// import landingPic from "../images/rtx-3090.jpg";

const About = (props) => {
    return (
        <div className={styles.container}>
            <main>
                <section
                    // style={{ backgroundImage: `url(${landingPic})` }}
                    className={styles.background}
                >
                    <h1 className={styles.s1Title}>Welcome to About</h1>

                </section>
            </main>
        </div>
    );
};

export default About;