import { useState } from "react"
import Search from "./Components/Search"
import FoodList from "./Components/FoodList";



function App() {

  const [foodData, setFoodData] = useState([]);

  return (
    <>
      <Search foodData={foodData} setFoodData={setFoodData}/>
      <FoodList foodData={foodData} />
    </>
  )
}

export default App
