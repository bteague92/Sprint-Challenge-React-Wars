import React, { useState, useEffect } from "react";

export const Char = props => {
  return (
    <div>
      <div>
        <img src={props.img}></img>
      </div>
      <div>
        <h2>{props.name}</h2>
      </div>
    </div>
  );
};
