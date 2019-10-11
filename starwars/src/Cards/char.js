import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { CharCard } from "./charCard.js";

const Flex = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const Char = props => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(`https://swapi.co/api/people/`)
      .then(response => {
        console.log(response);
        setData(response.data.results);
      })
      .catch(error => {
        console.log("the data was not return", error);
      });
  }, []);

  return (
    <Flex>
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
    </Flex>
  );
};
