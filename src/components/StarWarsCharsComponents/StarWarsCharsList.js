import React from 'react';

import './StarWarsChars.css';

import StarWarsChar from './StarWarsChar.js';

const StarWarsCharsList = props => {
  return (
    <div className="char-list">
      {props.starwarsChars.map((char, i, arr) => {
        // alert(arr.length);
        return <StarWarsChar
          key={i}
          charName={char.name}
          charBirthYear={char.birth_year}
          charHomeworld={char.homeworld}
          charGender={char.gender}
          charHairColor={char.hair_color}
          charSkinColor={char.skin_color}
          charHeight={char.height}
          charMass={char.mass}
          charStarships={char.starships}
          charFilms={char.films}
          charSpecies={char.species} />
      })}
    </div>
  );
};

export default StarWarsCharsList;