import { useState } from "react"
import Search from "./Components/Search"
import FoodList from "./Components/FoodList";
import FoodDetail from "./Components/FoodDetail";



function App() {

  const [foodData, setFoodData] = useState([]);
  const [foodId, setFoodId] = useState("641122");
  return (
    <>
      <Search foodData={foodData} setFoodData={setFoodData}/>
      <FoodList foodData={foodData} setFoodId={setFoodId}/>
      <FoodDetail foodId={foodId}/> 
    </>
  )
}

export default App
