import React, { Component } from "react"
import axios from "axios"


export default class ToTry extends Component {
    constructor(props) {
        super(props);
        this.state = {
            displayMyList: []
        }
        this.removeList = this.removeList.bind(this)

    }

    // display dishes i added to my To-Eat list
    componentDidMount() {
        axios
            .get("/api/myTryList")
            .then(res => {
                this.setState({
                    displayMyList: res.data
                })
            })
    }

    // remove dishes from my To-Eat List
    
    removeList(val){
        axios
        .delete(`/api/myTryList/${val.name}`)
        .then(res => {
            console.log(res);
            this.setState({
            displayMyList: res.data

            })
        })
    }




    render() {

        let myList = this.state.displayMyList.map((val, index) => {
            return (

                <section>
                    <div className="foodContainer" key={index}>
                        <img src={val.img} alt="" />
                        <h5 >Name:{val.name}</h5>
                        <h5>Ingrendients: {val.ingredients}</h5>
                        <h5>Restaurant: {val.restaurantName}</h5>
                        <h5>Address: {val.address}</h5>
                        <button onClick = {() => this.removeList(val)}>Remove</button>
                         {/* <button onClick = {alert("clicked")}>Remove</button> */}
                        
                    </div>
                </section>
            )
            
        })
        
        return (
            <div className="flexbox">
                    {myList}
            </div>

        )
    }
}
