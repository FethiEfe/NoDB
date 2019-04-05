import React, { Component } from "react"
import axios from "axios"
import "./Dishes.css"
// import MyPost from "./myPost"
// import Box from './Box'

export default class Dishes extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [],
            myTryList: [],
            show: false,
            name: "",
            
        
        }
        this.addToList = this.addToList.bind(this)
        this.updatePost = this.updatePost.bind(this)
        this.toggle = this.toggle.bind(this)
    }

    // display dishes in server on homepage
    componentDidMount() {
        axios
            .get("/api/posts")
            .then(res => {
                this.setState({
                    posts: res.data
                })
            })

    }

    handleChange(e) {
        this.setState({
            name: e.target.value,
            

        })
    }
    // add dishes on my homepage to my try list
    // value is dishes coming from map loop
    addToList(element) {

        axios
            .post("/api/myTryList", element)
            .then(res => {

                this.setState({
                    myTryList: res.data

                })

            })
    }

    toggle() {
        const { show } = this.state;
        this.setState({ show: !show })
    }

    updatePost(element) {
        console.log(element)
        axios
            .put("/api/posts/", { name: this.state.name, id: element.name })
            .then(res => {
                this.setState({
                    posts: res.data
                })
            })


    }

    render() {
        // map through posts array in order to display
        let myPost = this.state.posts.map((element, i) => {
            return (
                <div className="foodContainer">
                    <img src={element.img} alt="" />
                    <h5 onClick={this.toggle} >{element.name}</h5>
                    {(this.state.show !== false) ? (<input onChange={(e) => this.handleChange(e)} placeholder="Enter new value" />) : null}

                    <h5 onClick={this.toggle}>Ingrendients: {element.ingredients}</h5>
                    {/* {(this.state.show !== false)? (<input onChange = {(e) => this.handleChange(e)} placeholder = "Enter new value"/>): null} */}

                    <h5 onClick={this.toggle} >Restaurant: {element.restaurantName}</h5>
                    {/* {(this.state.show !== false)? (<input onChange = {(e) => this.handleChange(e)} placeholder = "Enter new value"/>): null} */}

                    <h5 onClick={this.toggle} >Address: {element.address}</h5>
                    {/* {(this.state.show !== false)? (<input onChange = {(e) => this.handleChange(e)} placeholder = "Enter new value"/>): null} */}

                    <button onClick={() => this.addToList(element)}>Add My List</button>
                    <button onClick={() => this.updatePost(element)}>Update</button>



                </div>

            )
        })

        return (
            <div className="flexbox">


                {myPost}


            </div>

        )
    }
}
