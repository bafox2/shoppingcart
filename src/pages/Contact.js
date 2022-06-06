import React, { Component } from 'react';
import styles from "../css/Contact.module.css";
import Icon from '@mdi/react';
import { mdiInstagram, mdiGoogle, mdiTwitter, mdiPhone, mdiEmail } from '@mdi/js';

const Contact = (props) => {
    return (
        <div>
            <main>
                <h1>Welcome to Conttact</h1>
                <h2>
                    <ul>
                        <li>Insta
                            <Icon path={mdiInstagram} size={1} color='blue' /></li>
                        <li>Google Review</li><Icon path={mdiGoogle} size={1} color='blue' />
                        <li>Twitter</li><Icon path={mdiTwitter} size={1} />
                        <li>Phone</li><Icon path={mdiPhone} size={1} />
                        <li>Email</li><Icon path={mdiEmail} size={1} />
                    </ul>
                </h2>
                <h2>
                    <ul>
                        <li>Hours</li>
                        <li>Map</li>
                        <li>Address</li>
                    </ul>
                </h2>
            </main>
        </div>
    );
};

export default Contact;