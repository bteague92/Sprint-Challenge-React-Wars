import React, { useState, useEffect } from "react";
import axios from "axios"



const Starships = props => {
    const [starships, setStarships] = useState([])
    let array = [];
    useEffect(() => {
        if (props.data.starships.length > 0) {
            props.data.starships.map(i => {
                axios
                    .get(`${i}`)
                    .then(res => {
                        array.push(res.data.name)
                        if (array.length > 0) {
                            setStarships(array)
                        }
                    })
            })
        } else {
            setStarships(["none"])
        }
    }, [])

    return (
        <div>
            <h3>Starships:</h3>
            {starships.map(i => {
                return <h3>{i}</h3>
            })}
        </div>
    );
};

export default Starships;