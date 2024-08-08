import React, { useEffect, useState } from 'react';
import "../Styles/style.css"

const URL = 'https://api.spoonacular.com/recipes/'
const API_KEY = "5d0c983c19e84ec484f1a59babeaac86";

export default function Search({ foodData, setFoodData }) {

    const [query, setQuery] = useState("chocolate");

    //fix one of the functions here
    useEffect(() => {

        // // search by query e.g. "pizza" gives pizzas
        // async function fetchFood() {
        //     const res = await fetch(`${URL}complexSearch?query=${query}&apiKey=${API_KEY}`);
        //     const data = await res.json();
        //     console.log(data.results);
        //     setFoodData(data.results);
        // }

        // // search by ingredients (has complex recipes)
        // async function fetchFood() {
        //     const res = await fetch(`${URL}complexSearch?includeIngredients=${query}&apiKey=${API_KEY}`);
        //     const data = await res.json();
        //     console.log(data.results);
        //     setFoodData(data.results);
        // }
        
        // search by ingredients you have reqiring as few additional ingredients as possible  !!also limited to showing just 2 results!!
        async function fetchFood() {

            const res = await fetch(`${URL}findByIngredients?ingredients=${query.replace(/ /g, ",")}&number=6&apiKey=${API_KEY}`);
            const data = await res.json();
            console.log(data);
            setFoodData(data);
        }
        fetchFood();
    },
        [query]);

    return (<div className='input input__wrap'>
        <input className="input input__search" type="text"
            value={query} onChange={(e) => setQuery(e.target.value)} />
    </div>)
}