import React, { Component } from 'react';
import Dishes from "./component/Dishes"
import ToTry from "./component/ToTry"
import RecomendDishes from "./component/RecomendDishes"

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tab: "dishes",

    }
    this.changeTab = this.changeTab.bind(this)
  }

  changeTab(tab) {
    this.setState({
      tab: tab
    })
  }


  render() {
    return (
      <main>
        <div className="navbarImage">
          <h1>MY VEGETARIAN FOOD</h1>
          <h2>Find or Recomend Vegetarian Dishes in Houston</h2>
          <div className="buttons">
            <button className="buttonDishes"
              onClick={() => this.changeTab("dishes")}>Dishes</button>
            <button className="buttonTry"
              onClick={() => this.changeTab("try")}>My To-Eat List</button>
            <button className="buttonRecomend"
              onClick={() => this.changeTab("recommend")}>Recommend Dish</button>
          </div>
        </div>



        <section >
          <div>
            {
              this.state.tab === "dishes" ? (
                <Dishes />
              ) : this.state.tab === "recommend" ? (
                <RecomendDishes changeTab = {this.changeTab}/>
              ) : this.state.tab === "try" ? (
                <ToTry />
              ) :

                    <p>Page Not Found</p>

            }



          </div>

        </section>



      </main>

    )
  }
}

export default App;
