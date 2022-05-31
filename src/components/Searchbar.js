import React from "react";
import { Link } from "react-router-dom";
import styles from "../css/Header.module.css";
// import landingPic from "../images/rtx-3090.jpg";

const Searchbar = (props) => {
    return (
        <div>
            <input
                type='input'
                placeholder='new project title'
                onChange={props.handleChange}
                name='project'
                value={props.state.project}
                onSubmit={props.onSubmit()}
            />
        </div>
    );
};

export default Searchbar;