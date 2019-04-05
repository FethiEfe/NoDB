import React, { Component } from "react"
import axios from "axios"
import "./Dishes.css"
import MyPost from "./myPost"

export default class Dishes extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [],
            myTryList: []
        }
        this.addToList = this.addToList.bind(this)
        this.updatePost = this.updatePost.bind(this)
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

    updatePost(element){
        axios
        .put("/api/posts/" + element.name + '?restaurantName=' + this.state. )
        .then(res => {   
            this.setState({
                posts: res.data
            })
         })
    }   


    render() {
        // map through posts array in order to display
        let myPost = this.state.posts.map((element, i) => {
            return(
                <MyPost post={element}
                        addToList={this.addToList}
                        key={i} 
                        updatePost ={this.updatePost}/>

            )
        })
       
        return (
            <div className="flexbox">


                {myPost}

            </div>

        )
    }
}
