import React from 'react';
import './App.css';
import Banner from './Banner';
import Navbar from './Navbar';
import Form from './components/Form';

const App = () => {
    return (
      <div className="App">
        <Banner />
        <Navbar />
        <Form placeholder="Search here!" />
      </div>
    );
  }


export default App;
