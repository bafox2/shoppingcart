import React from "react";
import { Link } from "react-router-dom";
import styles from "../css/Header.module.css";
// might want to make the inputs generate programatically

const Sidebar = (props) => {
    console.log(props)
    return (
        <div>
            <p>{props.state.microgreens}</p>
            <p>{props.state.sort}</p>
            <input
                type='input'
                placeholder='new description'
                onChange={props.handleChange}
                name='search'
                value={props.state.search}
            />
            {/* <select
                id='inputOptions'
                placeholder='placeholder'
                onChange={props.handleChange}
                name='sort'
                value={props.state.sort}
            >
                <option value='priceHigh'>High to low</option>
                <option value='priceLow'>Low to high</option>
            </select> */}
            <ul>
                <li>
                    <label>produce</label>
                    <input
                        type='checkbox'
                        placeholder=''
                        onChange={props.handleChange}
                        name='produce'
                        value={props.state.produce}
                    />
                </li>
                <li>
                    <label>flowers</label>
                    <input
                        type='checkbox'
                        placeholder=''
                        onChange={props.handleChange}
                        name='flowers'
                        value={props.state.flowers}
                    />
                </li>
                <li>
                    <label>microgreens</label>
                    <input
                        type='checkbox'
                        placeholder=''
                        onChange={props.handleChange}
                        name='microgreens'
                        value={props.state.microgreens}
                    />
                </li>

            </ul>
        </div>
    );
};

export default Sidebar;