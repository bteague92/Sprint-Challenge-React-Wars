import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { CharCard } from "./charCard.js";

export const Char = props => {
  const [data, setData] = useState([]);
  //   const [name, setName] = useState("");
  //   const [mass, setMass] = useState("");
  //   const [eyeColor, setEyeColor] = useState("");
  //   const [gender, setGender] = useState("");

  useEffect(() => {
    axios
      .get(`https://swapi.co/api/people/`)
      .then(response => {
        console.log(response);
        setData(response.data.results);
        // const { name, mass, eye_color, gender } = response.data.results;
        // setName(name);
        // setMass(mass);
        // setEyeColor(eye_color);
        // setGender(gender);
      })
      .catch(error => {
        console.log("the data was not return", error);
      });
  }, []);

  return (
    <div>
      {data.map(char => {
        return (
          <CharCard
            key={char.created}
            name={char.name}
            mass={char.mass}
            eyeColor={char.eye_color}
            gender={char.gender}
          />
        );
      })}
    </div>
  );
};
