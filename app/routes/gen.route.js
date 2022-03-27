module.exports = (app) => {
    const gen = require('../controllers/gen.controller.js');

    // Retrieve all gens
    app.get('/gens', gen.findAll);

    // Retrieve a single gen
    app.get('/gen/:id', gen.findOne);
}