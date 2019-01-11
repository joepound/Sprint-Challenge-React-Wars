import React from 'react';

import './StarWarsChars.css';

class StarWarsChar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      homeworld: "",
      species: "",
      vehicles: [],
      ships: [],
      films: []
    };

    [
      this.charName,
      this.charBirthYear,
      this.charGender,
      this.charHairColor,
      this.charSkinColor,
      this.charHeight,
      this.charMass
    ] = [
      props.charName,
      props.charBirthYear,
      props.charGender,
      props.charHairColor,
      props.charSkinColor,
      props.charHeight,
      props.charMass
    ];

    this.fetchHomeworld(props.charHomeworld);
    this.fetchSpecies(props.charSpecies);
    props.charVehicles.forEach(vehicle => this.fetchVehicles(vehicle));
    props.charStarships.forEach(ship => this.fetchShips(ship));
    props.charFilms.forEach(film => this.fetchFilms(film));
  }

  fetchHomeworld = link => {
    fetch(link)
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState({
          homeworld: data.name
        })
      })
      .catch(err => {
        throw new Error(err);
      });
  }

  fetchSpecies = link => {
    fetch(link)
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState({
          species: data.name
        })
      })
      .catch(err => {
        throw new Error(err);
      });
  }
  
  fetchVehicles = link => {
    fetch(link)
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState({
          vehicles: [...this.state.vehicles, data.name]
        })
      })
      .catch(err => {
        throw new Error(err);
      });
  }

  fetchShips = link => {
    fetch(link)
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState({
          ships: [...this.state.ships, data.name]
        })
      })
      .catch(err => {
        throw new Error(err);
      });
  }

  fetchFilms = link => {
    fetch(link)
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState({
          films: [...this.state.films, `Episode ${data.episode_id}: ${data.title}`]
        })
      })
      .catch(err => {
        throw new Error(err);
      });
  }

  render() {
    return (
      <div className="char-item">
      {/* {alert(props.charName)} */}
        <h1>{this.charName}</h1>
        <div>
          <span className="char-field">Birth Year: </span>{this.charBirthYear}
        </div>      
        <div>
          <span className="char-field">Homeworld: </span>{this.state.homeworld}
        </div>      
        <div>
          <span className="char-field">Species: </span>{this.state.species}
        </div>      
        <div>
          <span className="char-field">Gender: </span>{this.charGender}
        </div>      
        <div>
          <span className="char-field">Hair color: </span>{this.charHairColor}
        </div>
        <div>
          <span className="char-field">Skin color: </span>{this.charSkinColor}
        </div>      
        <div>
          <span className="char-field">Height: </span>{this.charHeight}
        </div>      
        <div>
          <span className="char-field">Mass: </span>{this.charMass}
        </div>      
        <h3 className="char-list-start">Vehicles:</h3>
        <ul>
          {this.state.vehicles.length ? 
            this.state.vehicles.map(vehicle => <li>{vehicle}</li>) :
            "[NONE]"}
        </ul>
        <h3 className="char-list-start">Starships:</h3>
        <ul>
          {this.state.ships.length ? 
            this.state.ships.map(ship => <li>{ship}</li>) :
            "[NONE]"}
        </ul>
        <h3 className="char-list-start">Films:</h3>
        <ul>
          {this.state.films.map(film => <li>{film}</li>)}
        </ul>
      </div>
    );
  } 
  
};

export default StarWarsChar;