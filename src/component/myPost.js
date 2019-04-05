import React , {Component} from "react"

export default function  MyPost(props){
    
        let {img,name,ingredients,restaurantName,address} = props.post
            return (
                <div>


                    <div className="foodContainer">
                        <img src={img} alt="" />
                        <h5 >{name}</h5>
                        <h5>Ingrendients: {ingredients}</h5>
                        <h5>Restaurant: {restaurantName}</h5>
                        <h5>Address: {address}</h5>
                        <button onClick={() => props.addToList(props.post)}>Add My List</button>
                        <button onClick ={() => props.updatePost(props.post)}>Update</button>
                    </div>
                    
                </div>
            )
 }
    
