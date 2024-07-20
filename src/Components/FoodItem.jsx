export default function FoodItem({ food, setFoodId }) {

    return (<div>
        <img src={food.image} alt="" />
        <h1>{food.title}</h1>
        <h2>{food.missedIngredient}</h2>
        <button onClick={() => setFoodId(food.id)}
        >View recipe</button>
    </div>);
}