import React, { useEffect, useState } from 'react';
import "../Styles/test.css"

const URL = 'https://api.spoonacular.com/recipes/findByIngredients'
const API_KEY = "5d0c983c19e84ec484f1a59babeaac86";

export default function Search({foodData, setFoodData}) {
    
    const [query, setQuery] = useState("pizza");

    useEffect(() => { 
        async function fetchFood() { 
        const res = await fetch(`${URL}complexSearch?query=${query}&apiKey=${API_KEY}`);
        const data = await res.json();

        }
        async function withIngredients() { 
            const rest = await fetch(`${URL}?ingredients=${query}&apiKey=${API_KEY}`);
            const data = await rest.json();
            console.log(data);
            setFoodData(data);
        }
        withIngredients();
    }, 
    [query]); 
    
    return (<div>
        <input type="text"
            value={query} onChange={(e) => setQuery(e.target.value)}/>
    </div>)
}