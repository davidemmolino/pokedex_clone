import React from 'react';
import './App.css';
import Container from './Container';
import Navbar from './navbar';
import { Component } from 'react';
// import Pokemon from './Pokemon';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      pokemonInfo : {
        name : '',
        forms : 0,
        id : 0,
        types : ''
      }

    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  
  handleChange(e) {
    this.setState({ pokemonInfo : {
      name: e.target.value
    }}
    )
  }
  
  //on submit this will send the fetch req about the pokemon to the API
  handleSubmit(e) {

    console.log(this.state.pokemonInfo)
    fetch(`https://pokeapi.co/api/v2/pokemon/${this.state.pokemonInfo.name}`)
    .then(res => res.json())
    .then(data => {
      console.log(data)
      this.setState({
        pokemonInfo : {
          name : data.species.name,
          forms : data.forms.length,
          id : data.id,
          types : data.types.name,
        }
      })
    })
    .catch(() => console.log(`No such pokemon`))
    console.log(this.state.pokemonInfo)
    e.preventDefault(); 
  }
    


  render() {
    return (
      <div className="App">
        <Container info={this.state}/>
        <Navbar />
        <br/>
        <form onSubmit={this.handleSubmit}>
        <label>
          <input type="text" value={this.state.value} onChange={this.handleChange} placeholder="Search here!" />
        </label>
        <input type="submit" value="Submit" />
      </form>
      </div>
    );
  }
}

export default App;
