const express = require("express");
const app = express()

//destructuring

const { printAllDishes, postDishes, printMyList, addToMyList, deleteList, updatePost } = require("./controller")
const PORT = 3001;

app.use(express.json());

// display  dishes on server
app.get("/api/posts", printAllDishes)

// add & recomend new dishes
app.post("/api/posts", postDishes)

// display dishes on my MyTryList
app.get("/api/myTryList", printMyList)

// add dishes to my To-Eat List
app.post("/api/myTryList", addToMyList)

// remove dishes from To-Eat List
app.delete("/api/myTryList/:id", deleteList)

// update informations of dishes on homepage
app.put("/api/posts/", updatePost)


app.listen(PORT, () => {
    console.log(`I am listening on ${PORT}`)
})