import React from "react";
import styled from "styled-components";

const Card = styled.div`
  background: black;
  color: white;
  margin: 2%;
  padding: 2%;
  border-radius: 30px;
`;

export const CharCard = props => {
  return (
    <Card>
      <h2>{props.name}</h2>
      <h3>Gender: {props.gender}</h3>
      <h3>Eye Color: {props.eyeColor}</h3>
      <h3>Mass: {props.mass}</h3>
    </Card>
  );
};
