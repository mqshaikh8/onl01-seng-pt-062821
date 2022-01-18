import  {useState, useEffect} from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {
  const [pokemon, setPokemon] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  useEffect(() => {
      fetch('http://localhost:3000/pokemon')
      .then(res => res.json())
      .then(setPokemon)
  },[])

  const addNewPokemon = (newPokemon) => {
    setPokemon([...pokemon, newPokemon])
  }

  const filteredPokemon = pokemon.filter(p => p.name.toLowerCase().includes(searchTerm.toLowerCase()))
  
  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm  addPokemon={addNewPokemon} />
      <br />
      <Search term={searchTerm} searchFunc={setSearchTerm}/>
      <br />
      <PokemonCollection pokemonArr={filteredPokemon}/>
    </Container>
  );
}

export default PokemonPage;
