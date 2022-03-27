# Retro Pokemon Game Api

***API URL***
[https://retro-pokemon-game-api-k6cgale4bq-uc.a.run.app/](https://retro-pokemon-game-api-k6cgale4bq-uc.a.run.app/)

## Endpoints

### /pokemon

gets all pokemon in database

### /pokemon/:id

gets a specific pokemon by pokedex number

### /pokemon/gen/:GenId

gets all pokemon in a specific generation

### Schema

    pokedex_number: Number,
    generation: Number,
    name: String,
    description: String,
    sound_name: String,
    image_name: String
