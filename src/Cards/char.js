import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { CharCard } from "./charCard.js";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
`;

export const Char = props => {
  const [data, setData] = useState([]);

  useEffect(() => {
    let array = [];
    for (let i = 1; i < 10; i++) {
      axios
        .get(`https://swapi.co/api/people/?page=${i}`)
        .then(async res => {
          res.data.results.map(i => {
            array.push(i);
          })
          if (array.length > 86) {
            setData(array)
            console.log(array)
          } else {
            console.log("array isnt long enough yet")
          }
        });
    }
  }, [])

  return (
    <Container>
      {data.map(i => {
        return <CharCard data={i} />
      })}
    </Container>
  );
};
