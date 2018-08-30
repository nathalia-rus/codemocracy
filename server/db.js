

const mongoose = require('mongoose');


// const dbURL = 'mongodb://localhost:27017/topics';

const dbURL = 'mongodb://localhost:27017/topics';

mongoose.connect(dbURL, { useNweUrlParser: true })
  .then(() => console.log('connected to database!'))
  .catch( (e) => {
    console.err(e)
  })

