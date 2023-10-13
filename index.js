const mongoose = require('mongoose');

// Import of the model Recipe from './models/Recipe.model.js'
const Recipe = require('./models/Recipe.model');
// Import of the data from './data.json'
const data = require('./data');

const MONGODB_URI = 'mongodb://127.0.0.1:27017/recipe-app';

// Connection to the database "recipe-app"
mongoose
  .connect(MONGODB_URI)
  .then(x => {
    console.log(`Connected to the database: "${x.connection.name}"`);
    // Before adding any recipes to the database, let's remove all existing ones
    return Recipe.deleteMany()
  })
  .then(() => {
    // Run your code here, after you have insured that the connection was made
    //Defining recipe details

    const newRecipe = {
      title: "Chocolate Billionaires",
      level: "Easy Peasy",
      ingredients: ["pecans", "chocolate chips", "rice crispies"],
      cuisine: "choco cuisine",
      dishType: "snacks",
      image: "https://bakeitwithlove.com/wp-content/uploads/2022/12/Chocolate-Billionaires-sq.jpg.webp",
      duration: 45,
      creator: "Taste of Home",

    };

    return Recipe.create(newRecipe);

  })

  .then ((recipe) => {
    console.log(`New Recipe with title: ${recipe.title}`);
  })
  
  .catch(error => {
    console.error('Error connecting to the database', error);
  });
