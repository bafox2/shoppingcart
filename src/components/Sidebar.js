import React from "react";
import { Link } from "react-router-dom";
import styles from "../css/Header.module.css";
// might want to make the inputs generate programatically

const Sidebar = (props) => {
    return (
        <div>
            <ul>
                <li>
                    <label></label>
                    <input
                        type='checkbox'
                        placeholder=''
                        onChange={props.handleChange}
                        name='default'
                        value={props.state.default}
                    />
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;