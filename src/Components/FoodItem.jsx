import "../Styles/style.css"

export default function FoodItem({ food, setFoodId }) {

    return (<div className="food-item food-item__wrap">
        <img className="food-item__img" src={food.image} alt="" />
        <h1 className="food-item__title">{food.title}</h1>
        <button className="food-item__btn" onClick={() => setFoodId(food.id)}
        >View recipe</button>
    </div>);
}