import React, { Component } from "react";
import axios from "axios"
import "./RecomendDishes.css"

export default class RecomendDishes extends Component {
    constructor(props) {
        super(props);
        this.state = {
            image: "",
            name: "",
            ingredients: "",
            restaurant: "",
            address: ""
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    //get the information from input
    handleChange(e) {

        this.setState({
            [e.target.name]: e.target.value
        })

    }

    // store input info to server
    handleSubmit(e) {
        e.preventDefault();

        axios
            .post("/api/posts", {
                img: this.state.image,
                name: this.state.name,
                ingredients: this.state.ingredients,
                restaurantName: this.state.restaurant,
                address: this.state.address,


            })
            .then(response => {
                alert("Thanks for offering dishes")
                this.props.changeTab("dishes")
            })



    }
    render() {
        return (
            <form className = "form"onSubmit={this.handleSubmit}>
                <label>Image</label>
                <input type="text"

                    name="image"
                    value={this.state.image}
                    onChange={this.handleChange}
                    required
                />
                <br />
                <label>Name</label>
                <input type="text"

                    name="name"
                    value={this.state.name}
                    onChange={this.handleChange}
                    required
                />
                <br />
                <label>Ingredients</label>
                <input type="text"

                    name="ingredients"
                    value={this.state.ingredients}
                    onChange={this.handleChange}
                    required
                />
                <br />
                <label>Restaurant</label>
                <input type="text"

                    name="restaurant"
                    value={this.state.restaurant}
                    onChange={this.handleChange}
                    required
                />
                <br />
                <label>Address</label>
                <input type="text"

                    name="address"
                    value={this.state.address}
                    onChange={this.handleChange}
                    required
                />
                <br />
                <button className = "PostButton" type="submit" >Post</button>
            </form>
        )
    }
}