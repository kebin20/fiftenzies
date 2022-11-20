/* eslint-disable react/prop-types */
import React from "react";

export default function Counter(props) {
    return (
        <div className="bottom-row__roll-count">
            <p>Number of rolls:</p>
            <p className="bottom-row__roll-counter">{props.rolls}</p>
        </div>
    )
}