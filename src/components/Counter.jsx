/* eslint-disable react/prop-types */
import React from "react";

export default function Counter(props) {
    return (
        <div className="roll-count">
            <p>Number of rolls:</p>
            <h3>{props.rolls}</h3>
        </div>
    )
}