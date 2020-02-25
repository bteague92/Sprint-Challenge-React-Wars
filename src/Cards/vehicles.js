import React, { useState, useEffect } from "react";
import axios from "axios"



const Vehicles = props => {
    const [vehicles, setVehicles] = useState([])
    let array = [];
    useEffect(() => {
        if (props.data.vehicles.length > 0) {
            props.data.vehicles.map(i => {
                axios
                    .get(`${i}`)
                    .then(res => {
                        array.push(res.data.name)
                        if (array.length > 0) {
                            setVehicles(array)
                        }
                    })
            })
        } else {
            setVehicles(["none"])
        }
    }, [])

    return (
        <div>
            <h3>Vehicles:</h3>
            {vehicles.map(i => {
                return <h3>{i}</h3>
            })}
        </div>
    );
};

export default Vehicles;