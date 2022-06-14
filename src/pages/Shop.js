import { AnimatePresence } from "framer-motion";
import React, { useState } from "react";
// import styles from "../css/Shop.module.css";
import Item from "../components/Item"
import Sidebar from "../components/Sidebar";
import items from "../itemData/allItems.js";

const Shop = (props) => {
    // won't work because the original list has to stay available
    const [list, setList] = useState([]);
    const [filterList, setFilterList] = React.useState({
        produce: '',
        flowers: '',
        microgreens: '',
        sort: 'priceHigh',
        search: ''
    })

    const shoplist = displayResults(filterList, items).map(item => <Item name={item.name} picture={item.imageref} price={item.price} amount={item.amount} category={item.category} key={item.name} id={item.id} role='item' />)

    //might want better error handling with all boxes/noboxes checked
    function displayFilter(filterConds, itemArr) {
        const nextList = []
        for (const filterVar in filterConds) {
            if (filterList[filterVar] === true) {
                nextList.push(...Array.from(itemArr.filter(item => item.category === filterVar)))
            }
        }
        return nextList.length > 0 ? nextList : itemArr
    }

    function displaySearch(filterList, itemArr) {
        //might 
        const nextList = []
        nextList.push(...itemArr.filter(item => item.name.toLowerCase().includes(filterList.search.toLowerCase())))
        return (nextList)
    }

    //is only working when there are filtered selections
    function displayResults(filterList) {
        const searchResults = displaySearch(filterList, items)
        const filteredSearchResults = displayFilter(filterList, searchResults)
        return filteredSearchResults
    }

    const handleFilterChange = (event) => {
        const { name, value, type, checked } = event.target
        setFilterList((prevOptions) => {
            return {
                ...prevOptions,
                [name]: type === 'checkbox' ? checked : value,
            }
        })
    }

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
            <AnimatePresence>
                {shoplist}
            </AnimatePresence>
        </div>
    );
};

export default Shop;