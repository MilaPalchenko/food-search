import { useState } from "react"
import Nav from "./Components/Nav"
import Search from "./Components/Search"
import FoodList from "./Components/FoodList";
import FoodDetail from "./Components/FoodDetail";



function App() {

  const [foodData, setFoodData] = useState([]);
  const [foodId, setFoodId] = useState("641122");
  return (
    <>
      <Nav className="nav-sticky-index"/>
      <Search foodData={foodData} setFoodData={setFoodData} />
      <main className="page-wrap">
        <FoodList foodData={foodData} setFoodId={setFoodId} />
        <FoodDetail foodId={foodId} />
      </main>
    </>
  )
}

export default App
