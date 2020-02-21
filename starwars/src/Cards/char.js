import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { CharCard } from "./charCard.js";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const Char = props => {
  const [data, setData] = useState([]);
  let array = [];

  useEffect(() => {
    axios
      .get(`https://swapi.co/api/people/`)
      .then(res => {
        console.log(res.data.results)
        setData(res.data.results)
        axios
          .get(`https://swapi.co/api/people/?page=2`)
          .then(res => {
            console.log(res.data.results)
            res.data.results.map((i) => {
              setData([...data, i])
            })
            console.log(data)
            axios
              .get(`https://swapi.co/api/people/?page=3`)
              .then(res => {
                console.log(res.data.results)
                res.data.results.map((i) => {
                  setData([...data, i])
                })
              })
              .catch(error => {
                console.log("the data was not return", error);
              });
          })
          .catch(error => {
            console.log("the data was not return", error);
          });
      })
      .catch(error => {
        console.log("the data was not return", error);
      });
  }, []);

  // useEffect(() => {
  //   for (let i = 1; i <= 87; i++) {
  //     axios
  //       .get(`https://swapi.co/api/people/${i}`)
  //       .then(res => {
  //         console.log(res.data);
  //         setData([...data, ...res.data])
  //         array.push(res.data)
  //       })
  //       .catch(error => {
  //         console.log("the data was not return", error);
  //       });
  //   }
  // }, []);

  // const click = (e) => {
  //   e.preventDefault();
  //   setData(data)
  // }

  return (
    <Container>

      {/* <button onClick={click}>Click</button> */}

      {data.map(i => {
        return (
          <CharCard
            key={i.name}
            name={i.name}
            mass={i.mass}
            eyeColor={i.eye_color}
            gender={i.gender}
          />
        );
      })}
    </Container>
  );
};
