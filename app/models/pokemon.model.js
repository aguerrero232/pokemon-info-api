const mongoose = require('mongoose');

const PokemonSchema = mongoose.Schema({
    pokedex_number: Number,
    generation: Number,
    name: String,
    description: String,
    sound_name: String,
    image_name: String

});


module.exports = mongoose.model('Pokemons', PokemonSchema);