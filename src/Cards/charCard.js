import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios"
import FilmList from "./filmList.js";
import Starships from "./starships.js";
import Vehicles from "./vehicles.js";

const Card = styled.div`
  background: black;
  color: white;
  margin: 2%;
  padding: 0%;
  border-radius: 10px;
  border: 2px solid yellow;
  width: 35%;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media(max-width: 800px){
    width: 85%;
  }

  h1{
    color: yellow;
    border-bottom: 1px solid yellow;
    font-family: 'Girassol';
    font-size: 3vw;

    @media(max-width: 800px){
      font-size: 5vw;
    }
  }
  h3{
    font-family: 'Courier Prime';
    line-height: 0.5px;
    font-size: 1.5vw;

    @media(max-width: 800px){
      font-size: 3vw;
    }
  }
`;

export const CharCard = props => {
  const [species, setSpecies] = useState({})
  const [films, setFilms] = useState([])

  useEffect(() => {
    axios
      .get(`${props.data.species}`)
      .then(res => {
        setSpecies(res.data);
      })
  }, [])

  return (
    <Card>
      <h1>{props.data.name}</h1>
      <h3>Gender: {props.data.gender}</h3>
      <h3>Species: {species.name}</h3>
      <h3>Eye Color: {props.data.eye_color}</h3>
      <h3>Mass: {props.data.mass}</h3>
      <h3>Height: {props.data.height}</h3>
      <h3>Hair Color: {props.data.hair_color}</h3>
      <h3>Skin Color: {props.data.skin_color}</h3>
      <h3>Birth Year: {props.data.birth_year}</h3>
      <FilmList data={props.data} />
      <Starships data={props.data} />
      <Vehicles data={props.data} />
    </Card>
  );
};
