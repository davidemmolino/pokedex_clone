import React from 'react';
import './App.css';
import Banner from './Banner';
import Navbar from './Navbar';
import { Component } from 'react';
import Form from './components/Form';

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
  
  

    


  render() {
    return (
      // clean this all up and put it in its own component
      <div className="App">
        <Banner info={this.state}/>
        <Navbar />
        <Form placeholder="Search here!" />
      </div>
    );
  }
}

export default App;
