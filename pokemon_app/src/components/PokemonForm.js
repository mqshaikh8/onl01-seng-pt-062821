import {useState} from "react";
import { Form } from "semantic-ui-react";

function PokemonForm(props) {
  const {addPokemon} = props

  const [formData, setFormData] = useState({
    name:'',
    hp: 0,
    front:'',
    back:''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) =>{
    //e.preventDefault = we do not need it because of semantic ui react form
    const {name, hp, front, back} = formData
    const newPokemon = {
      name,
      hp,
      sprites:{
        front,
        back
      }
    }
    const config={
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify(newPokemon)
    }

    fetch('http://localhost:3001/pokemon',config)
    .then(res => res.json())
    .then(addPokemon)
  }
  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form
        onSubmit={handleSubmit}
      >
        <Form.Group widths="equal">
          <Form.Input fluid label="Name" placeholder="Name" name="name" value={formData.name} onChange={handleChange}/>
          <Form.Input fluid label="hp" placeholder="hp" name="hp"  value={formData.hp} onChange={handleChange}/> 
          <Form.Input
            fluid
            label="Front Image URL"
            placeholder="url"
            name="front"
            value={formData.front}
            onChange={handleChange}
          />
          <Form.Input
            fluid
            label="Back Image URL"
            placeholder="url"
            name="back"
            value={formData.back}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;
