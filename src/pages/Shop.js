import React, { useState } from "react";
// import styles from "../css/Shop.module.css";
import Item from "../components/Item"
import Sidebar from "../components/Sidebar";
import items from "../itemData/allItems.js";

const Shop = (props) => {
    console.log(props)
    const shoplist = items.map(item => <Item name={item.name} picture={item.imageref} price={item.price} amount={item.amount} category={item.category} key={item.name} id={item.id} role='item' />)
    // won't work because the original list has to stay available
    const [list, setList] = useState([]);
    const [filterList, setFilterList] = React.useState({
        produce: true,
        flowers: true,
        microgreens: true,
        sort: 'priceHigh',
        search: ''
    })

    const handleFilterChange = (event) => {
        console.log(event)
        const { name, value, type, checked } = event.target
        setFilterList((prevOptions) => {
            return {
                ...prevOptions,
                [name]: type === 'checkbox' ? checked : value,
            }
        })
    }

    const produce = items.filter(item => item.category === 'produce')
    const filteredList = items.filter(item => item)


    function handleSort(props) {
        const nextList = [...list];
        if (props.filters.sort === 'priceHigh') {
            //high to low
            nextList.sort(function (a, b) { return b.price - a.price });
        }
        setList(nextList);
    }

    return (
        <div>
            <h1 title="shopHeader">shop</h1>
            <Sidebar handleChange={handleFilterChange} state={filterList}></Sidebar>
            {shoplist}
        </div>
    );
};

export default Shop;