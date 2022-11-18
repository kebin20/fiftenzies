/* eslint-disable react/prop-types */
import React from "react";

export default function Die(props) {
 return (
    <div className="die-face">
        <h2 key={props.id}>{props.value}</h2>
        </div>
 )
}