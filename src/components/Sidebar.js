import React from "react";
import { Link } from "react-router-dom";
import styles from "../css/Header.module.css";
// might want to make the inputs generate programatically

const Sidebar = (props) => {
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
            <label>sort by </label>
            <select
                id='inputOptions'
                placeholder='placeholder'
                onChange={props.handleChange}
                name='sort'
                value={props.state.sort}
            >
                <option value=''>--</option>
                <option value='priceHigh'>High to low</option>
                <option value='priceLow'>Low to high</option>
            </select>

            <label>produce</label>
            <input
                type='checkbox'
                placeholder=''
                onChange={props.handleChange}
                name='produce'
                value={props.state.produce}
            />

            <label>flowers</label>
            <input
                type='checkbox'
                placeholder=''
                onChange={props.handleChange}
                name='flowers'
                value={props.state.flowers}
            />

            <label>microgreens</label>
            <input
                type='checkbox'
                placeholder=''
                onChange={props.handleChange}
                name='microgreens'
                value={props.state.microgreens}
            />

        </div>
    );
};

export default Sidebar;