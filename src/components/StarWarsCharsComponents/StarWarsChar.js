import React from 'react';

import './StarWarsChars.css';

class StarWarsChar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      films: []
    };

    props.charFilms.forEach(film => this.fetchFilms(film));
  }

  fetchFilms = link => {
    let film = "";
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
        {/* <div>
          <span className="char-field">Homeworld: </span>{props.charHomeworld}
        </div>       */}
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
        {/* <h3>Species:</h3>
        <ul>
          {props.charSpecies.map(species => <li>{species}</li>)}
        </ul> */}
        <h3 className="char-list-start">Films:</h3>
        <ul>
          {this.state.films.map(film => <li>{film}</li>)}
        </ul>
      </div>
    );
  } 
  
};

export default StarWarsChar;