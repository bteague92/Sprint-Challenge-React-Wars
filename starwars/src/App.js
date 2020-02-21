import React, { useState, useEffect } from "react";
import "./App.css";
import { Char } from "./Cards/char.js";
import styled from "styled-components";

const Flex = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const App = props => {
  return (
    <Flex>
      <h1 className="Header">React Wars</h1>
      <Char />
    </Flex>
  );
};

export default App;

// Try to think through what state you'll need for this app before starting. Then build out
// the state properties here.

// Fetch characters from the star wars api in an effect hook. Remember, anytime you have a
// side effect in a component, you want to think about which state and/or props it should
// sync up with, if any.
