import React from "react"
import Die from './Die'
import { v4 as uuidv4 } from 'uuid';

export default  function App() {
const [dice,setDice] = React.useState(allNewDice())

  function allNewDice() {
    const newDice = []
    for (let i = 0; i < 15; i++) {
      newDice.push({
        id: uuidv4(),
        value: Math.ceil(Math.random() *6),
        isHeld: false
      })
    }
    // const newDice = Array(10).fill().map((array) => {
    //    return array.push({
    //     value: Math.ceil(Math.random()*6),
    //     isHeld: false,
    //     id: uuidv4()
    //   })
    // })
    return newDice
  }

function rollDice() {
  setDice(allNewDice())
}

  const diceElements = dice.map(die => <Die value={die.value} key={die.id} isHeld={die.isHeld}/>)

return (
  <div className="container">
    <div className="description">
      <h1>Fiftenzies</h1>
      <p>Roll until all dice are the same. Click each die to freeze it at its current value between rolls</p>
    </div>
    <div className="dice-container">
      {diceElements}
    </div>
    <button onClick={rollDice}>Roll</button>
  </div>
)
}


