module.exports = (app) => {
    const pokemon = require('../controllers/pokemon.controller.js');


    // // Create a new user
    // app.post('/pokemon', pokemon.create);

    // Retrieve all pokemon
    app.get('/pokemon', pokemon.findAll);

    // Retrieve a single pokemon based on id
    app.get('/pokemon/:id', pokemon.findOne);

    //  Retreive pokemon based on generation id 
    app.get('/pokemon/gen/:GenId', pokemon.findByGen);

}