const mongoose = require('mongoose');

const PokemonSchema = mongoose.Schema({
    generation: Number,
    pokedex_number: Number,
    name: String,
    description: String,
    species: String,
    type_1: String,
    type_2: String,
    height_m: Number,
    weight_kg: Number,
    ability_1: String,
    ability_2: String,
    ability_hidden: String,
    stat_total: Number,
    hp: Number,
    attack: Number,
    defense: Number,
    sp_attack: Number,
    sp_defense: Number,
    speed: Number,
    sound_link: String,
    image_link: String
});


module.exports = mongoose.model('Pokemons', PokemonSchema);


// example object
// {
//     "generation": 8,
//     "pokedex_number": 887,
//     "name": "Dragapult",
//     "description": "When it isn\u2019t battling, it keeps Dreepy in the holes on its horns. Once a fight starts, it launches the Dreepy like supersonic missiles.",
//     "species": "Stealth Pok\u00e9mon",
//     "type_1": "Dragon",
//     "type_2": "Ghost",
//     "height_m": 3.0,
//     "weight_kg": 50.0,
//     "ability_1": "Clear Body",
//     "ability_2": "Infiltrator",
//     "ability_hidden": "Cursed Body",
//     "stat_total": 600.0,
//     "hp": 88.0,
//     "attack": 120.0,
//     "defense": 75.0,
//     "sp_attack": 100.0,
//     "sp_defense": 75.0,
//     "speed": 142.0,
//     "sound_link": "https://play.pokemonshowdown.com/audio/cries/dragapult.mp3",
//     "image_link": "https://projectpokemon.org/images/normal-sprite/dragapult.gif",
//     "__v": 0
// }