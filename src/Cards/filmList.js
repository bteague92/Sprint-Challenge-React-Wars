import React, { useState, useEffect } from "react";
import axios from "axios"



const FilmList = props => {
    const [films, setFilms] = useState([])
    let array = [];
    useEffect(() => {
        if (props.data.films.length > 0) {
            props.data.films.map(i => {
                axios
                    .get(`${i}`)
                    .then(res => {
                        array.push(res.data.title)
                        if (array.length > 0) {
                            setFilms(array)
                        }
                    })
            })
        } else {
            setFilms(["none"])
        }
    }, [])

    return (
        <div>
            <h3>Films:</h3>
            {films.map(i => {
                return <h3>{i}</h3>
            })}
        </div>
    );
};

export default FilmList;
