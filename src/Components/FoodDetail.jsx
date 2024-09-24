import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import "../Styles/style.css"

export default function FoodDetail({ foodId }) {
    const [food, setFood] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const URL = `https://api.spoonacular.com/recipes/${foodId}/information`
    const API_KEY = "PUT_YOUR_API_KEY_HERE";

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

    return (<div id="recipe-start"
                 className="food-detail food-detail__wrap">
        <div className="food-detail__preview">
            <h1 className="food-detail__title">{food.title}</h1> <br />
            <img className="food-detail__img" src={food.image} alt="recipe image" /> <br />
            <div className="food-detail__short-info">
                <strong className="food-detail__readyIn">Ready In {food.readyInMinutes} minutes</strong><br />
                <strong className="food-detail__servings">👨‍👩‍👧‍👦 {food.servings} servings </strong>
                <strong className="food-detail__dish-type">{food.vegetarian ? "🥕 Vagetarion" : "🍖 Non-Vegetarion"} / {food.vegan ? "🐄 Vegan" : "Non-Vegan"}</strong>
            </div>
        </div>
        <div className="food-detail__info">
            <div className="food-detail__ingredients">
                <h2 className="food-detail__ingredients--title">Ingredients:</h2>
                <ItemList food={food} isLoading={isLoading} />
            </div>
            <div className="food-detail__instructions">
                <h2 className="food-detail__instructions--title">Instructions:</h2>
                {isLoading ? (<p>Loading...</p>) : (food.analyzedInstructions[0].steps.map((step) =>
                (<li key={step.number}
                    className="food-detail__instructions--steps">{step.step}</li>)))}
            </div>
        </div>
    </div>)
}