# Retro Pokemon Game Api

## Contributors

* Ariel Guerrero - Lead Developer

![](https://projectpokemon.org/images/normal-sprite/scizor.gif) ![](https://projectpokemon.org/images/normal-sprite/blaziken.gif) ![](https://projectpokemon.org/images/normal-sprite/tyranitar.gif) ![](https://projectpokemon.org/images/normal-sprite/darkrai.gif) ![](https://projectpokemon.org/images/normal-sprite/lucario.gif) ![](https://projectpokemon.org/images/normal-sprite/greninja.gif)

***API URL***
[https://retro-pokemon-game-api-k6cgale4bq-uc.a.run.app/](https://retro-pokemon-game-api-k6cgale4bq-uc.a.run.app/)

## Endpoints

### ***/pokemon***

gets ***all pokemon*** in database

### ***/pokemon/:id***

gets a ***specific pokemon*** by pokedex number

    :id is the pokedex number of the pokemon you wish to receive
        returns a json pokemon object

### ***/pokemon/gen/:GenId***

gets all pokemon in a ***specific generation***

        :GenId is the generation number of the pokemon generation you wish to receive
            returns a list of json pokemon object

### ***Schema***

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

___

### Sample Endpoints

        Get all pokemon 

***<https://retro-pokemon-game-api-k6cgale4bq-uc.a.run.app/pokemon>***

        Get pokemon with pokedex number of 6

***<https://retro-pokemon-game-api-k6cgale4bq-uc.a.run.app/pokemon/6>***

        Get all pokemon from gen 2

***<https://retro-pokemon-game-api-k6cgale4bq-uc.a.run.app/pokemon/gen/2>***
