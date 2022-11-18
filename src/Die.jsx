/* eslint-disable react/prop-types */
import React from "react";

export default function Die(props) {

const styles = {backgroundColor: props.isHeld ? "#59E391" : "white"}

 return (
    <div className="die-face" style={styles}>
        <h2 key={props.id}>{props.value}</h2>
        </div>
 )
}