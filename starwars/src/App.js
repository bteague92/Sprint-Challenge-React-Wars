import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  const [data, setData] = useState([]);
  const [name, setName] = useState("");
  const [mass, setMass] = useState("");
  const [eyeColor, setEyeColor] = useState("");
  const [gender, setGender] = useState("");

  useEffect(() => {
    axios
      .get(`https://swapi.co/api/people/`)
      .then(response => {
        console.log(response);
        response.data.results.forEach(() => {
          setData(response.data.results);
          setName(response.data.results.name);
          setMass(response.data.results.mass);
          setEyeColor(response.data.results.eye_color);
          setGender(response.data.results.gender);
        });
      })
      .catch(error => {
        console.log("the data was not return", error);
      });
  }, []);

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
    </div>
  );
};

export default App;
