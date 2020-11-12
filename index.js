const mongoose = require('mongoose');

// Import of the model Recipe from './models/Recipe.model.js'
const Recipe = require('./models/Recipe.model');
// Import of the data from './data.json'
const data = require('./data');

const MONGODB_URI = 'mongodb://localhost:27017/recipe-app';

// Connection to the database "recipe-app"
mongoose
  .connect(MONGODB_URI, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(self => {
    console.log(`Connected to the database: "${self.connection.name}"`);
  //   // Before adding any documents to the database, let's delete all previous entries
  //   return self.connection.dropDatabase();
  })
  .then(() => {
    // Run your code here, after you have insured that the connection was made
    
    // Recipe.insertMany(data).then(recipes => {
    //   console.log(recipes);
    // })
    
    // Recipe.updateOne({ title: 'Rigatoni alla Genovese' }, { duration: 100 })
    // .then(recipe => console.log(recipe))
    // .catch(error => {
    //   console.error('Error updating an db entry', error);
    // });

    Recipe.deleteOne({ title: 'Carrot Cake' })
    .then(recipe => console.log("We deleted it!"))
    .catch(error => {
      console.error('Error updating an db entry', error);
    });

  })
  .catch(error => {
    console.error('Error connecting to the database', error);
  });

 