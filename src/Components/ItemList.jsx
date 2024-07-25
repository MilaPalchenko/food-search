import "../Styles/style.css"

export default function ItemList({ food, isLoading }) {

    return (<div className="food-item-list food-item-list__wrap">
        {isLoading ? (<p>Loading...</p>) : (food.extendedIngredients.map((item) =>
            <div key={item.id} className="food-item-list__item">
                <img className="food-item-list__img" src={`https://spoonacular.com/cdn/ingredients_100x100/` + item.image} alt="" />
                <h3>
                    <span className="food-item-list__amount"> {item.amount} </span> 
                    <span className="food-item-list__unit">{item.unit} </span> <br />
                    <span className="food-item-list__name">{item.name}</span> 
                    </h3>
            </div>))}
    </div>);
}