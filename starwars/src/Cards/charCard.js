import React from "react";
import styled from "styled-components";

const Card = styled.div`
  background: black;
  color: white;
  margin: 2%;
  padding: 2%;
  border-radius: 30px;
  width: 25%;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1{
    border-bottom: 1px solid white;
  }
`;

export const CharCard = props => {
  return (
    <Card key={props.name}>
      <h1>{props.name}</h1>
      <h3>Gender: {props.gender}</h3>
      <h3>Eye Color: {props.eyeColor}</h3>
      <h3>Mass: {props.mass}</h3>
    </Card>
  );
};
