
// dishes that i want to display on my home page
let posts = [
    {   id: '1',
        img: 'https://hips.hearstapps.com/wdy.h-cdn.co/assets/16/31/1470238884-unspecified.jpg?crop=0.682xw:0.768xh;0.00170xw,0.0651xh&resize=980:*',
        name: 'Resto',
        ingredients: 'Eggplant, Garbanzo, Saffron,',
        restaurantName: "Pondicheri's",
        address: '2800 Kirby Dr B132, Houston, TX 77098'
    },
    {   id: '2',
        img: 'https://www.skinnytaste.com/wp-content/uploads/2016/12/Chickpea-Tomato-Soup-1-2.jpg',
        name: 'Chickpea Soup',
        ingredients: 'Chickpea, Pecoriono Cheese, Garlic,',
        restaurantName: 'Onion Creek',
        address: '3106 White Oak Dr Houston TX'
    },
    {   id: '3',
        img: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/caponata-flatbread-1532029138.jpg?crop=0.807xw:0.806xh;0.0829xw,0.106xh&resize=768:*',
        name: 'Caponata Flatbread',
        ingredients: 'Caper, Peppers, Red wine,',
        restaurantName: 'Baba Yega',
        address: '2607 Grant St Houston Tx'
    },
    {   id: '4',
        img: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/spring-minestrone-soup-wdy-0418-1523631294.jpg?crop=1xw:0.99975xh;center,top&resize=768:*',
        name: 'Minestrone Soup',
        ingredients: 'Asparagus, White Beans, Dill,',
        restaurantName: 'Les Givral',
        address: '2704 Milam St Ste 2 Houston TX'
    },
    {   id: '5',
        img: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/pasta-broccoli-pesto-1519423658.jpg?crop=1xw:1xh;center,top&resize=768:*',
        name: 'Fusilli With Broccolli',
        ingredients: 'Fusilli, Broccolli, Almond,',
        restaurantName: 'Les Givral',
        address: '2704 Milam St Ste 2 Houston TX'
    },
    {   id: '6',
        img: 'https://hips.hearstapps.com/wdy.h-cdn.co/assets/17/42/1280x1919/gallery-1508445881-roasted-cauliflower-salad-1117.jpg?resize=*:2031',
        name: 'Roasted Caulifflower',
        ingredients: 'Caulifflower, Scallions, Arugula,',
        restaurantName: 'Aladdin Cuisine',
        address: '912 Westheimer Rd Houston TX'
    },
    {   id: '7',
        img: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/scrambled-egg-tacos-wdy-0318-1518120893.jpg?crop=1xw:0.99975xh;center,top&resize=980:*',
        name: 'Egg Tacos',
        ingredients: 'Beans, Spinach, Egg,',
        restaurantName: 'Local Foods',
        address: '2555 Kirby Dr Houston TX'
    },
    {   id: '8',
        img: 'https://hips.hearstapps.com/wdy.h-cdn.co/assets/17/25/1498258193-summer-salads-ratatouille-salad-0717-0817.jpg?crop=1xw:0.99975xh;center,top&resize=768:*',
        name: 'Ratatouille Salad',
        ingredients: 'Eggplant, Zucchini, Garlic,',
        restaurantName: 'Brasil Cafe',
        address: '2604 Dunlavy St Houston TX'
    },
    {   id: '9',
        img: 'https://hips.hearstapps.com/wdy.h-cdn.co/assets/17/14/1491338721-recipes-cheesy-shells-greens-0517.jpg?crop=1xw:0.99975xh;center,top&resize=768:*',
        name: 'Chessy Shells and Greens',
        ingredients: 'Pasta Shells, Cheddar, Pinch Cayenne,',
        restaurantName: 'Kiran',
        address: '2925 Richmond Ave Houston TX'
    },
    {   id: '10',
        img: 'https://hips.hearstapps.com/wdy.h-cdn.co/assets/17/09/1488551880-recipe-carrot-fritter-0417.jpg?crop=1.0xw:1xh;center,top&resize=768:*',
        name: 'Spiced Carrot Fritters',
        ingredients: 'Eggs, Carrot, Scallions,',
        restaurantName: 'Loving Hut',
        address: '2825 S Kirkwood Rd Ste 100 Houston TX'
    },
]
// dishes that i added to my To-Eat list
let myTryList = [];

// display  posts (get request)
const printAllDishes = (req, res) => {
    res.send(posts)
}
// add & recommend new posts/ dishes (post request)
const postDishes = (req, res) => {
    posts.unshift(req.body);
    res.json(posts)
}
// display dishes in my To-Eat List (get request)
const printMyList = (req, res) => {
    // console.log(myTryList)
    res.json(myTryList)
}
// add dishes to my To-Eat list (post request)
const addToMyList = (req, res) => {
    // console.log(req.body)
    myTryList.unshift(req.body);
    res.json(myTryList)
}

// Delete dishes on my To-Eat Lost
const deleteList = (req, res) => {
    let index = myTryList.findIndex(name =>  name.id === req.params.id);
    myTryList.splice(index, 1)
    
    res.json(myTryList)
}


const updatePost = (req,res) =>{
    
    for(var i = 0; i < posts.length; i++){
        if(posts[i].id === req.body.id){
            posts[i].name = req.query.newName,
            posts[i].ingredients = req.query.newIng,
            posts[i].restaurantName = req.query.newRes,
            posts[i].address = req.query.newAdd
           
        }
    }
    
    res.status(200).send(posts);
}
//destructuring
module.exports = {
    printAllDishes,
    postDishes,
    printMyList,
    addToMyList,
    deleteList,
    updatePost
}

