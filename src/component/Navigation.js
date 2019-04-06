import React ,{Component} from "react";
import Dishes from "./Dishes"
import ToTry from "./ToTry"
import RecomendDishes from "./RecomendDishes"


function Navigation(props){
    return (
        <div>
        {
          props.tab === "dishes" ? (
            <Dishes />
          ) : props.tab === "recommend" ? (
            <RecomendDishes changeTab = {this.changeTab}/>
          ) : props.tab === "try" ? (
            <ToTry />
          ) :

                <p>Page Not Found</p>
        }
      </div>
    )
}

export default Navigation