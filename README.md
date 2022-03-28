# Retro Pokemon Game Api

***API URL***
[https://retro-pokemon-game-api-k6cgale4bq-uc.a.run.app/](https://retro-pokemon-game-api-k6cgale4bq-uc.a.run.app/)

## Endpoints

### /pokemon

gets all pokemon in database

### /pokemon/:id

gets a specific pokemon by pokedex number

    :id is the pokedex number of the pokemon you wish to receive
        returns a json pokemon object

### /pokemon/gen/:GenId

gets all pokemon in a specific generation

        :GenId is the generation number of the pokemon generation you wish to receive
            returns a list of json pokemon object

### Schema

    pokedex_number: Number,
    generation: Number,
    name: String,
    description: String,
    sound_name: String,
    image_name: String
