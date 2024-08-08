import "../Styles/style.css"

export default function ItemList({ food, isLoading }) {

    return (<div className="food-item-list food-item-list__wrap">
        
        {/* block disappears if ingredients are not listed. possibly look for fix later */}
        
        {isLoading ? (<p>Loading...</p>) : (food.extendedIngredients.map((item, index) =>
        // adding index here creates unique key-id and prevents key-id overlap error from before
        // index shared globally so it would never repeat itself even if used elsewhere for preventing same error
        // works by idea "id-index": "235235-1, 34234-2, 45345-3"
            <div key={`${item.id}-${index}`} className="food-item-list__item">
                <img className="food-item-list__img" src={`https://spoonacular.com/cdn/ingredients_100x100/` + item.image} alt={item.name} />
                <h3>
                    <span className="food-item-list__amount"> {item.amount} </span> 
                    <span className="food-item-list__unit">{item.unit} </span> <br />
                    <span className="food-item-list__name">{item.name}</span> 
                    </h3>
            </div>))}
    </div>);
}