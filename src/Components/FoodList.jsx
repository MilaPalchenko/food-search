import FoodItem from "./FoodItem";
import "../Styles/style.css"

export default function FoodList({ foodData, setFoodId }) {
    return (<div className="food-list">
        {foodData.map((food) => (

            // fix so the container won't disappear while typing
            <FoodItem key={food.id}
                setFoodId={setFoodId}
                food={food} />
        ))}
    </div>)
}