import React, { useState } from 'react';
import PokemonContainer from './PokemonContainer';


export default function Form() {
  
  const [state, setState ] = useState({
    pokemonInfo : {
      name : '',
      forms : 0,
      id : 0,
      types : ''
    }, 
    queryInput : ''
  });
  
  const handleChange = (e) => {
    setState({ queryInput : e.target.value })
  }
    
  //on submit this will send the fetch req about the pokemon to the API
  const handleSubmit = (e) => {
    e.preventDefault();
    const apiQuery = 'https://pokeapi.co/api/v2/pokemon/';
    fetch(`${apiQuery}${state.queryInput}`)
    .then(res => res.json())
    .then(data => {
      const types = data.types.map(el => el.type.name);
      setState({
        pokemonInfo : {
          name : data.species.name,
          forms : data.forms.length,
          id : data.id,
          types : types
        }
      })
    })
    .catch(() => console.log(`No such pokemon`))
  }

  return (
    <div>
        <form onSubmit={handleSubmit} >
          <label>
            <input type="text" placeholder="Search here!" value={state.value} onChange={handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
        <PokemonContainer pokemonSearch={state.pokemonInfo}/>
    </div>
  )
}
