const Pokemon = require('../models/pokemon.model.js');

exports.findAll = (req, res) => {
    Pokemon.find()
        .then(pokemons => {
            res.send(pokemons);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving pokemons."
            });
        });
};

exports.find = (req, res) => {
    Pokemon.findById(req.params.id)
        .then(pokemon => {
            if (!pokemon) {
                return res.status(404).send({
                    message: "Pokemon not found with id " + req.params.id
                });
            }
            res.send(pokemon);
        })
        .catch(err => {
            if (err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: "Pokemon not found with id " + req.params.id
                });
            }
            return res.status(500).send({
                message: "Error retrieving pokemon with id " + req.params.id
            });
        }
}
}