import React ,{Component} from "react";

function Button(props){
    return (
        <div className="navbarImage">
          <h1>MY VEGETARIAN FOOD</h1>
          <h2>Find or Recommend Vegetarian Dishes in Houston</h2>
          <div className="buttons">
            <button className="buttonDishes"
              onClick={() => props.changeTab("dishes")}>Dishes</button>
            <button className="buttonTry"
              onClick={() => props.changeTab("try")}>My To-Eat List</button>
            <button className="buttonRecomend"
              onClick={() => props.changeTab("recommend")}>Recommend Dish</button>
          </div>
        </div> 
    )
}

export default Button