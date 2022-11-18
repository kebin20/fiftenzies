import React from "react"
import Die from './Die'

export default  function App() {

  function allNewDice() {
    const randomDiceArray = Array(10).fill().map(() => Math.floor(Math.random()*6) + 1)
    return console.log(randomDiceArray)
  }

return (
  <div className="container">
    <div className="description">
      <h1>Fiftenzies</h1>
      <p>Roll until all dice are the same. Click each die to freeze it at its current value between rolls</p>
    </div>
    <div className="dice-container">
        <Die />
    </div>
    <button>Roll</button>
  </div>
)
}


