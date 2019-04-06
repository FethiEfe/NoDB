import React, { Component } from 'react';
import Buttons from "./component/Buttons"
import Navigation from "./component/Navigation"
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
        {/* first stataless function */}
        <Buttons changeTab = {this.changeTab}/> 

        {/* second stateless function */}
        <Navigation changeTab = {this.changeTab}  tab = {this.state.tab} />
      </main>

    )
  }
}

export default App;
