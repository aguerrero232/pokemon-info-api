const Pokemon = require('../models/pokemon.model.js');

// Create and Save a new reservation
exports.create = (req, res) => {
    //Check for pre-existing emails
    console.log("tests")

    // Create a User.
    const pokemon = new Pokemon({
        pokedex_number: req.body.pokedex_number,
        generation: req.body.generation,
        name: req.body.name,
        description: req.body.description,
        sound_name: req.body.sound_name,
        image_name: req.body.image_name
    });

    // Save user in the database
    pokemon.save()
        .then(data => {
            res.send(data);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the user."
            });
        });

};


exports.findAll = (req, res) => {
    Pokemon.find()
        .then(pokemon => {
            res.send(pokemon);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving pokemon."
            });
        });
};

exports.findOne = (req, res) => {
    // mongoose find pokemon  by pokedex_number
    Pokemon.find({
        pokedex_number: req.params.id
    })
        .then(pokemon => {
            console.log(pokemon);
            console.log(req.params.id);
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
        });
};

// find pokemon based on gen id
exports.findByGen = (req, res) => {
    Pokemon.find({
        generation: req.params.GenId
    })
        .then(pokemon => {
            res.send(pokemon);
        })
        .catch(err => {
            if (err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: "Pokemon not found with gen id " + req.params.id
                });
            }
            return res.status(500).send({
                message: "Error retrieving pokemon with gen id " + req.params.id
            });
        });
}




// {
//     "pokedex_number": 1,
//     "generation": 1,
//     "name": Bulbasaur,
//     "description": "Bulbasaur can be seen napping in bright sunlight. There is a seed on its back. By soaking up the sun's rays, the seed grows progressively larger.",
//     "sound_name": bulbasaur,
//     "image_name": bulbasaur
// }