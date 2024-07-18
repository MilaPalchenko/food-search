export default function FoodItem({food}) { 

    return(<div>
        <img src={food.image} alt="" />
        <h1>{food.title}</h1>
        <h2>{food.missedIngredient}</h2>
    </div>);
}