import React, { useEffect, useState } from 'react';
import "../Styles/test.css"

const URL = 'https://api.spoonacular.com/recipes/'
const API_KEY = "5d0c983c19e84ec484f1a59babeaac86";

export default function Search({ foodData, setFoodData }) {

    const [query, setQuery] = useState("pizza");

    //fix one of the functions here
    useEffect(() => {

            // all input is case sensitive for ingredient search. figure out how to format user's input correctly

        // search by query e.g. "pizza" gives pizzas
        // async function fetchFood() {
        //     const res = await fetch(`${URL}complexSearch?query=${query}&apiKey=${API_KEY}`);
        //     const data = await res.json();
        //     console.log(data.results);
        //     setFoodData(data.results);
        // }

        // search by ingredients (has complex recipes)
        // async function fetchFood() {
        //     const res = await fetch(`${URL}complexSearch?includeIngredients=${query}&apiKey=${API_KEY}`);
        //     const data = await res.json();
        //     console.log(data.results);
        //     setFoodData(data.results);
        // }
        
        // search by ingredients you have reqiring as few additional ingredients as possible  !!also limited to showing just 2 results!!
        async function fetchFood() {

            // test the formatting if it works. reached daily quota
            // and ffs find better api to use than this weird ass 150limits per day -_-

            // !!documentation (?) for it!!
            // const paragraph = "I think Ruth's dog is cuter than your dog!";
            // console.log(paragraph.replace("Ruth's", 'my'));
            // // Expected output: "I think my dog is cuter than your dog!"
            // const regex = /Dog/i;
            // console.log(paragraph.replace(regex, 'ferret'));
            // // Expected output: "I think Ruth's ferret is cuter than your dog!"
            
            
            const res = await fetch(`${URL}findByIngredients?ingredients=${query.replace(/ /g, ",")}&number=2&apiKey=${API_KEY}`);
            const data = await res.json();
            console.log(data);
            setFoodData(data);
        }
        fetchFood();
    },
        [query]);

    return (<div>
        <input type="text"
            value={query} onChange={(e) => setQuery(e.target.value)} />
    </div>)
}