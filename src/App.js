import React, { Component } from 'react';

import './App.css';

import StarWarsCharsList from './components/StarWarsCharsComponents/StarWarsCharsList';

class App extends Component {
  constructor() {
    super();
    this.state = {
      prevPage: "",
      nextPage: "",
      starwarsChars: []
    };
  }

  componentDidMount() {
    this.getCharacters('https://swapi.co/api/people/');
  }

  getCharacters = URL => {
    // feel free to research what this code is doing.
    // At a high level we are calling an API to fetch some starwars data from the open web.
    // We then take that data and resolve it our state.
    fetch(URL)
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState({ 
          nextPage: data.next,
          prevPage: data.previous,
          starwarsChars: data.results 
        });
      })
      .catch(err => {
        throw new Error(err);
      });
  };

  nextPage = () => {
    this.getCharacters(this.state.nextPage);
  }

  prevPage = () => {
    this.getCharacters(this.state.prevPage);
  }

  render() {
    return (
      <div className="App">
        <h1 className="Header">React Wars</h1>
        <div className="PageButtons">
          <button disabled={!this.state.prevPage} onClick={this.prevPage}>Previous</button>
          <button disabled={!this.state.nextPage} onClick={this.nextPage}>Next</button>
        </div>
        <StarWarsCharsList 
          starwarsChars={this.state.starwarsChars}/>
      </div>
    );
  }
}

export default App;
