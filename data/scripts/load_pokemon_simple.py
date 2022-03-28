# %%
import pandas as pd
import json
import numpy as np
import re
# import helper_functions

# columns we want

# getting only the columns of data necessary from the data set
colnames = ['generation', 'pokedex_number', 'name', 'description', 'species',
            'type_1', 'type_2', 'height_m', 'weight_kg', 'ability_1', 'ability_2', 'ability_hidden',
            'stat_total', 'hp', 'attack', 'defense', 'sp_attack', 'sp_defense', 'speed']

# %%

""" return first string unless name contains Mr. Jr. Tapu or Type: """


def get_primary_name(name):
    if 'Mr.' in name:
        return name
    elif 'Type:' in name:
        return name
    elif 'Jr.' in name:
        return name
    elif 'Tapu' in name:
        return name
    else:
        return name.split(' ')[0]


# %%
# setting up pokemon dataframe to use for analysis, api, speech recognition etc.

# dataset 1 - main dataset
pokemon = pd.read_csv('../in/pokedex.csv')
pokemon = pokemon.rename(columns={"total_points": "stat_total"})

# dataset 2 - used to get descriptions of pokemon
descriptions = pd.read_excel('../in/pokedex2.xlsx')[0:890]

# get only unique pokedex numbers
pokemon = pokemon.drop_duplicates(keep="first", subset='pokedex_number')
pokemon.reset_index(drop=True, inplace=True)

# add the description to the dataset
pokemon['description'] = descriptions['description']

# setting the name to the pokemons primary name
pokemon['name'] = pokemon['name'].apply(get_primary_name)

# setting the df to the specified columns
pokemon = pokemon[colnames]

audio_re = '[^A-z0-9]'
image_re = '[^A-z0-9-]'

# "https://play.pokemonshowdown.com/audio/cries/[sound_name].mp3"
pokemon['sound_link'] = "https://play.pokemonshowdown.com/audio/cries/" + pokemon['name'].replace(
    audio_re, '', regex=True).str.lower() + '.mp3'

# "https://projectpokemon.org/images/normal-sprite/[image_name].gif"
pokemon['image_link'] = "https://projectpokemon.org/images/normal-sprite/" + pokemon['name'].replace(
    image_re, '', regex=True).str.lower() + '.gif'
pokemon.reset_index(drop=True, inplace=True)

# %%
# write df to csv
pokemon.to_csv('../out/pokemon_data.csv', index=False)

# %%

#  writing df to json
# adding versioning for mongo db
pokemon['__v'] = 0
# convert dataframe to json
pokemon_json = pokemon.to_json(orient='records')
# remove null values from json
pokemon_json = json.loads(pokemon_json)
# write json to file
with open('../out/pokemon_data.json', 'w') as outfile:
    json.dump([row.dropna().to_dict()
              for index, row in pokemon.iterrows()], outfile)

# %%
# writing pokemon names to a file, used for speech recognition

# extract pokemon names and write to file
pokemon_names = pokemon['name'].to_list()
with open('../out/pokemon_names.json', 'w') as outfile:
    json.dump(pokemon_names, outfile)

# %%
