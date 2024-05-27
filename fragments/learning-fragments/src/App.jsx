import React from "react";
import FoodItems from "./components/FoodItems";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  let foodItems = ["Dal", "meal", "Eggs", "Chicken", "purnpoli", "rohit"];
  //let foodItems =[];

  let emptyMessage = foodItems.length === 0 ? <h1>No Food Items</h1> : null;

  return (
    <React.Fragment>
      <h1>Health Food</h1>
      {emptyMessage};

      <FoodItems></FoodItems>

    </React.Fragment>
  );
}

export default App;
