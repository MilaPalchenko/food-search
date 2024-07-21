import { useEffect, useState } from "react";
import ItemList from "./ItemList";

export default function FoodDetail({ foodId }) {
    const [food, setFood] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const URL = `https://api.spoonacular.com/recipes/${foodId}/information`
    const API_KEY = "5d0c983c19e84ec484f1a59babeaac86";

    //check if this works correctly esp with `food useState`. ran out of daily quota
    useEffect(() => {
        async function fetchFood() {
            const res = await fetch(`${URL}?apiKey=${API_KEY}`);
            const data = await res.json();
            console.log(data);
            setFood(data);
            setIsLoading(false);
        }
        fetchFood();
    }, [foodId])

    return (<div>
        <div>
            <h1>{food.title}</h1> <br />
            <img src={food.image} alt="" /> <br />
            <strong>Ready In {food.readyInMinutes} minutes</strong> <br />
            <span>{food.vegetarian ? "🥕 Vagetarion" : "🍖 Non-Vegetarion"} {food.vegan ? "🐄" : ""}</span>
        </div>
        <div>
            <h2>Ingredients</h2>
           <ItemList food={food} isLoading={isLoading}/>
        </div>

        {/* key error here. figure out why it doesn't work */}
        <div>
            <h2>Instructions</h2>
            {isLoading ? (<p>Loading...</p>) : (food.analyzedInstructions[0].steps.map((step) => (<li key={step.id}>{step.step}</li>)))} 
        </div>

    </div>)

}