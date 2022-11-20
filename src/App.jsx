import React from "react"

import Die from './components/Die'
import Counter from './components/Counter'

import { v4 as uuidv4 } from 'uuid';
import Confetti from 'react-confetti'
import Timer from './components/Timer'


export default  function App() {
// Timer function
const [isActive, setIsActive] = React.useState(false);
const [isPaused, setIsPaused] = React.useState(true);
const [time, setTime] = React.useState(0);

React.useEffect(() => {
	let interval = null;

	if (isActive && isPaused === false) {
	interval = setInterval(() => {
		setTime((time) => time + 10);
	}, 10);
	} else {
	clearInterval(interval);
	}
	return () => {
	clearInterval(interval);
	};
}, [isActive, isPaused]);

const handleStart = () => {
	setIsActive(true);
	setIsPaused(false);
};

const pauseTime = () => {
	setIsActive(false);
	setIsPaused(true);
};

const handleReset = () => {
	setIsActive(false);
	setTime(0);
};

// Main dice function
const [dice,setDice] = React.useState(allNewDice())
const [tenzies, setTenzies] = React.useState(false)
const [rolls, setRolls] = React.useState(0)

React.useEffect(()=> {
const allHeld = dice.every(die => die.isHeld)
const firstValue = dice[0].value
const allSameValue  = dice.every(die => die.value === firstValue)
if(allHeld && allSameValue) {
  setTenzies(true)
  pauseTime()
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
    return newDice
  }

function holdDice(id) {
  setDice(oldDice => oldDice.map(die => {
    return die.id === id ? {...die, isHeld: !die.isHeld} : die
  }))
  handleStart()
}

function rollDice() {
  if (!tenzies) {
    setDice(oldDice => oldDice.map(die => {
      return die.isHeld ? die : getNewDice()
    }))
    setRolls(rolls + 1)
  } else {
    setTenzies(false)
    setDice(allNewDice())
    setRolls(0)
    handleReset()
  }

}

const diceElements = dice.map(die => <Die value={die.value} holdDice={() => holdDice(die.id)} key={die.id} isHeld={die.isHeld}/>)

return (
  <div className="container">
    {tenzies && <Confetti />}
    <div className="description">
      <h1>Fiftenzies</h1>
      <p>Roll until all dice are the same. Click each die to freeze it at its current value between rolls</p>
    </div>
    <div className="dice-container">
      {diceElements}
    </div>
    <div className="container__bottom-row">
      <Counter rolls={rolls}/>
      <button onClick={rollDice}>{tenzies ? "New Game" : "Roll"}</button>
      <Timer time={time}/>
    </div>
    {tenzies && <Confetti />}
  </div>
)
}


