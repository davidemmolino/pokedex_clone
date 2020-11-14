import React from 'react';
import './App.css';
import Banner from './Banner';
import Navbar from './navbar';
import { Component } from 'react';
import PokemonContainer from './PokemonContainer';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      pokemonInfo : {
        name : '',
        forms : 0,
        id : 0,
        types : ''
      }, 
      queryInput : ''
    }
  }
  
  handleChange = (e) => {
    this.setState({ queryInput : e.target.value })
  }
  
  //on submit this will send the fetch req about the pokemon to the API
  handleSubmit = (e) => {
    e.preventDefault(); 
    const apiQuery = 'https://pokeapi.co/api/v2/pokemon/';
    fetch(`${apiQuery}${this.state.queryInput}`)
    .then(res => res.json())
    .then(data => {
      let typesArray;
      const types = data.types;
      // if there's only one type then just set types to that one type
      // if there are more then set it to an array of types
      const oneType = data.types[0].type.name;
      if (types.length > 1) {
        typesArray = types.map(el => el.type.name);
      }
      this.setState({
        pokemonInfo : {
          name : data.species.name,
          forms : data.forms.length,
          id : data.id,
          types : types.length > 1 ? typesArray : oneType,
        }
      })
      console.log(this.state.pokemonInfo)
    })
    .catch(() => console.log(`No such pokemon`))
  }
    


  render() {
    return (
      // clean this all up and put it in its own component
      <div className="App">
        <Banner info={this.state}/>
        <Navbar />
        <br/>
        <form onSubmit={this.handleSubmit}>
        <label>
          <input type="text" value={this.state.value} onChange={this.handleChange} placeholder="Search here!" />
        </label>
        <input type="submit" value="Submit" />
      </form>
      <br />
      <PokemonContainer pokemonSearch={this.state.pokemonInfo}/>
      </div>
    );
  }
}

export default App;
