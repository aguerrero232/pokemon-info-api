const mongoose = require('mongoose');

const PokemonSchema = mongoose.Schema({
    pokedex_number: Number,
    name: String,
    generation: Number,
    description: String,
    image_name: String,
    sound_name: String
})

module.exports = mongoose.model('Pokemon', PokemonSchema);