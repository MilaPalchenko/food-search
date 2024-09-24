import React, { useEffect, useState } from 'react';
import "../Styles/style.css"

const URL = 'https://api.spoonacular.com/recipes/'
const API_KEY = "PUT_YOUR_API_KEY_HERE";

export default function Search({ foodData, setFoodData }) {

    const [query, setQuery] = useState("chocolate");

    useEffect(() => {

        // // block one
        // // search by query e.g. "pizza" gives pizzas !! you can change number=6 for amount of displayed recipes!!
        // async function fetchFood() {
        //     const res = await fetch(`${URL}complexSearch?cuisine=${query.replace(/ /g, ",")}&number=6&apiKey=${API_KEY}`);
        //     const data = await res.json();
        //     console.log(data.results);
        //     setFoodData(data.results);
        // }

        // // block two
        // // search by ingredients (has complex recipes) !! you can change number=6 for amount of displayed recipes!!
        // async function fetchFood() {
        //     const res = await fetch(`${URL}complexSearch?includeIngredients=${query.replace(/ /g, ",")}&number=6&apiKey=${API_KEY}`);
        //     const data = await res.json();
        //     console.log(data.results);
        //     setFoodData(data.results);
        // }

        // block three
        // search by ingredients you have reqiring as few additional ingredients as possible  !! you can change number=6 for amount of displayed recipes!!
        async function fetchFood() {
            const res = await fetch(`${URL}findByIngredients?ingredients=${query.replace(/ /g, ",")}&number=6&apiKey=${API_KEY}`);
            const data = await res.json();
            console.log(data);
            setFoodData(data);
        }

        // comment out/remove one of the 3 functions from the above


        fetchFood();
    },
        [query]);

    return (<div className='input input__wrap'>
        <input className="input input__search" type="text"
            value={query} onChange={(e) => setQuery(e.target.value)} />
    </div>)
}