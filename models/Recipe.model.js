const mongoose = require('mongoose');

//getting an error about StrictQuery
//To prepare for Mongoose 7
mongoose.set('strictQuery', false);

const Schema = mongoose.Schema;




const recipeSchema = new Schema({
  // TODO: write the schema
  title: {
    type: String,
    required: true,
    unique: true
  },
  level: {
    type: String,
    enum: ['Easy Peasy', 'Amateur Chef', 'UltraPro Chef']
  },
  ingredients: [ String ],
  cuisine: {
    type: String,
    required: true
  },
  dishType: {
    type: String,
    emu: ['breakfast', 'main_course', 'soup', 'snack', 'drink', 'dessert', 'other']
  },
  image: {
    type: String,
    default: "https://images.media-allrecipes.com/images/75131.jpg"
  },
  duration: {
    type: Number,
    min: 0
  },
  creator: String,
  created: {
    type: Date,
    default: Date.now
  }




});

const Recipe = mongoose.model('Recipe', recipeSchema);

module.exports = Recipe;



//getting an error about the MaxListenersExceededWarning
//To increase maximum number of event listeners for the Bus emitter
const EventEmitter = require('events');
const bus = new EventEmitter();
bus.setMaxListeners(20);