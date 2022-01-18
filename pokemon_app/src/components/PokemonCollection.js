import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";
import { Fragment } from "react";

function PokemonCollection({pokemonArr}) {
  const pokemons = pokemonArr.map((pokemon, index) => <PokemonCard key={index} pokemon={pokemon}/>)
  return (
    <div>
      <h1>Hello From Pokemon Collection</h1>
      <Card.Group itemsPerRow={6}>
        {pokemons}
      </Card.Group>
    </div>
  );
}

export default PokemonCollection;
