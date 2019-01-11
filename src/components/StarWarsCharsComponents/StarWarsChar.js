import React from 'react';

import './StarWarsChars.css';

const StarWarsChar = props => {
  const fetchFilm = link => {
    // alert(link)
    let film = "";
    fetch(link)
      .then(res => {
        return res.json();
      })
      .then(data => {
        film = data.title;
      })
      .catch(err => {
        throw new Error(err);
      });
    return film;
  }

  return (
    <div className="char-item">
    {/* {alert(props.charName)} */}
      <h1>{props.charName}</h1>
      <div>
        <span className="char-field">Birth Year: </span>{props.charBirthYear}
      </div>      
      {/* <div>
        <span className="char-field">Homeworld: </span>{props.charHomeworld}
      </div>       */}
      <div>
        <span className="char-field">Gender: </span>{props.charGender}
      </div>      
      <div>
        <span className="char-field">Hair color: </span>{props.charHairColor}
      </div>
      <div>
        <span className="char-field">Sking color: </span>{props.charSkinColor}
      </div>      
      <div>
        <span className="char-field">Height: </span>{props.charHeight}
      </div>      
      <div>
        <span className="char-field">Mass: </span>{props.charMass}
      </div>      
      {/* <h3>Species:</h3>
      <ul>
        {props.charSpecies.map(species => <li>{species}</li>)}
      </ul> */}
      <h3 className="char-list-start">Films:</h3>
      <ul>
        {props.charFilms.map(film => <li>{fetchFilm(film)}</li>)}
      </ul>
    </div>
  );
};

export default StarWarsChar;