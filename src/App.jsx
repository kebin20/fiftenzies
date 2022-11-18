import React from "react"
import Die from './Die'

export default  function App() {
return (
  <div className="container">
    <div className="description">
      <h1>Fiftenzies</h1>
      <p>Roll until all dice are the same. Click each die to freeze it at its current value between rolls</p>
    </div>
    <div className="dice-container">
        <Die />
        <Die />
        <Die />
        <Die />
        <Die />
        <Die />
        <Die />
        <Die />
        <Die />
        <Die />
        <Die />
        <Die />
        <Die />
        <Die />
        <Die />
    </div>
    <button>Roll</button>
  </div>
)
}


