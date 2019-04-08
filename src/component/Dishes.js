import React, { Component } from "react"
import axios from "axios"
import "./Dishes.css"

export default class Dishes extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [],
            myTryList: [],
            show: false,
            index1: "",
            newName: "",
            newIng: "",
            newRes: "",
            newAdd: "",
        }
        this.addToList = this.addToList.bind(this)
        this.updatePost = this.updatePost.bind(this)
        this.toggle = this.toggle.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    // display dishes that is in server
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

    // add dishes to my To-Eat list
    // element is dishes coming from map loop
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


    // index1: it prevents input to pop-up on every dishes on my homepage
    // once i clicked, i am sending index of dishes  into toggle
    toggle(id) {

        // destructuring
        const { show } = this.state;
        this.setState({
                        show: !show,
                        index1: id
             })
    }


    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }


    updatePost(element) {
        
        
        axios
            .put(`/api/posts?newName=` + this.state.newName +'&newIng=' + this.state.newIng +'&newRes=' + this.state.newRes + '&newAdd=' + this.state.newAdd , {
                id: element.id,
            
            })
            .then(res => {
                this.setState({
                    posts: res.data,
                    newName: "",
                    newIng: "",
                    newRes: "",
                    newAdd: "",
                    
                })
            }).catch((e) => {
                console.log(e);
            })


    }



    render() {
        // map through posts array in order to display
        let myPost = this.state.posts.map((element, index) => {
            return (
                // sementic html here
                <main key={element.id} className="foodContainer">
                    <form className="contonents">
                        <img src={element.img} alt="" />

                        <h5 onClick={() => this.toggle(index)} >Name :{element.name} </h5>
                        {(this.state.show !== false && this.state.index1 === index) ? (<input type="text"
                                                                                        name="newName"
                                                                                        value={this.state.newName}
                                                                                        onChange={this.handleChange}
                                                                                        placeholder="Edit Name of The Food " required />) : null}

                        <h5 onClick={() => this.toggle(index)} >Ingrendients: {element.ingredients}</h5>
                        {(this.state.show !== false && this.state.index1 === index) ? (<input type="text"
                                                                                        name="newIng"
                                                                                        value={this.state.newIng}
                                                                                        onChange={this.handleChange}
                                                                                        placeholder="Edit Ingredients" required />) : null}

                        <h5 onClick={() => this.toggle(index)} >Restaurant: {element.restaurantName}</h5>
                        {(this.state.show !== false && this.state.index1 === index) ? (<input type="text"
                                                                                        name="newRes"
                                                                                        value={this.state.newRes}
                                                                                        onChange={this.handleChange}
                                                                                        placeholder="Edit Restaurant's Name" required />) : null}

                        <h5 onClick={() => this.toggle(index)}  >Address: {element.address}</h5>
                        {(this.state.show !== false && this.state.index1 === index) ? (<input type="text"
                                                                                        name="newAdd"
                                                                                        value={this.state.newAdd}
                                                                                        onChange={this.handleChange} placeholder="Edit Address" required />) : null}


                        <button onClick={() => this.addToList(element)}>Add My List</button>
                        {(this.state.show !== false && this.state.index1 === index) ? <button onClick={() => this.updatePost(element)}>Update</button> : null}


                    </form>
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
