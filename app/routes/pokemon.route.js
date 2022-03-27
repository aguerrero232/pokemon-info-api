module.exports = (app) => {
    const pokemon = require('../controllers/pokemon.controller.js');

    // Retrieve all pokemon
    app.get('/pokemon', pokemon.findAll);

    // Retrieve a single pokemon based on id
    app.get('/pokemon/:id', pokemon.findOne);

    //  Retreive pokemon based on generation id 
    app.get('/pokemon/gen/:id', pokemon.findByGen);
}