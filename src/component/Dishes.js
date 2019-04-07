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
            index1: "3",
            newInput: "",
            // I put clearInput because everytime i click update button without entering a value, 
            // it was updating it with the value of newInput so in updatePost function, i am updating newInput with empty string
            clearInput: ''
        
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
            .catch(() => {
                alert('failed to get info from server');
            })

    }

    handleChange(e) {
        this.setState({newInput: e.target.value})

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
            .catch(() => {
                alert('failed to add');
                 })
    }

    

    toggle(id) {
        
        // destructuring
        const { show,} = this.state;
        this.setState({ show: !show, 
                        index1: id})
    }

    updatePost(element) {
        console.log(element)
        axios
            .put("/api/posts/", { newInput: this.state.newInput, id: element.id })
            .then(res => {
                this.setState({
                    posts: res.data,
                    newInput: this.state.clearInput,
                })
            })
            .catch(() => {
                alert('failed to update');
            })


    }

   

    render() {
        // map through posts array in order to display
        let myPost = this.state.posts.map((element, index) => {
            return (
                    // sementic html here
                    <main key = {element.id}  className = "foodContainer">
                        <div className= "contonents">
                            <img src={element.img} alt="" />
                            
                             <h5 onClick={() => this.toggle(index)} >{element.name} </h5>
                            {(this.state.show !== false && this.state.index1 ===index)? (<input onChange = {(e) => this.handleChange(e) } type='text'required
                                                                  placeholder = "Enter new value"/>): null}
                            
                            <h5 onClick={() => this.toggle(index)} >Ingrendients: {element.ingredients}</h5>
                            {(this.state.show !== false && this.state.index1 ===index)? (<input onChange = {(e) => this.handleChange(e)} placeholder = "Enter new value"/>): null}
                            
                            <h5 onClick={() => this.toggle(index)} >Restaurant: {element.restaurantName}</h5>
                            {(this.state.show !== false && this.state.index1 ===index)? (<input onChange = {(e) => this.handleChange(e)} placeholder = "Enter new value"/>): null}

                            <h5 onClick={() => this.toggle(index)}  >Address: {element.address}</h5>
                            {(this.state.show !== false && this.state.index1 ===index)? (<input onChange = {(e) => this.handleChange(e)} placeholder = "Enter new value"/>): null}

                            <button onClick={() => this.addToList(element)}>Add My List</button>
                            <button onClick={() => this.updatePost(element)}>Update</button>



                        </div>
                    </main>
                 

            )
        })

        return (
            // sementic html here
            <main className="Body">


                {myPost}


            </main >

        )
    }
}
