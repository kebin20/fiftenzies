import React from "react"
import Die from './Die'
import { v4 as uuidv4 } from 'uuid';
import Confetti from 'react-confetti'

export default  function App() {
const [dice,setDice] = React.useState(allNewDice())
const [tenzies, setTenzies] = React.useState(false)

React.useEffect(()=> {
const allHeld = dice.every(die => die.isHeld)
const firstValue = dice[0].value
const allSameValue  = dice.every(die => die.value === firstValue)
if(allHeld && allSameValue) {
  setTenzies(true)
}
},[dice])

function getNewDice() {
 return {
  id: uuidv4(),
  value: Math.ceil(Math.random() *6),
  isHeld: false
 }
}

  function allNewDice() {
    const newDice = []
    for (let i = 0; i < 15; i++) {
      newDice.push(getNewDice())
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

function holdDice(id) {
  setDice(oldDice => oldDice.map(die => {
    return die.id === id ? {...die, isHeld: !die.isHeld} : die
  }))
}

function rollDice() {
  if (!tenzies) {
    setDice(oldDice => oldDice.map(die => {
      return die.isHeld ? die : getNewDice()
    }))
  } else {
    setTenzies(false)
    setDice(allNewDice())
  }

}

const diceElements = dice.map(die => <Die value={die.value} holdDice={() => holdDice(die.id)} key={die.id} isHeld={die.isHeld}/>)

return (
  <div className="container">
    <div className="description">
      <h1>Fiftenzies</h1>
      <p>Roll until all dice are the same. Click each die to freeze it at its current value between rolls</p>
    </div>
    <div className="dice-container">
      {diceElements}
    </div>
    <button onClick={rollDice}>{tenzies ? "New Game" : "Roll"}</button>
    {tenzies && <Confetti />}
  </div>
)
}


