import React from "react";
import { useState, useEffect } from "react";
import useWindowSize from "react-use-window-size";
import "./App.css";
import Die from "./components/Die";
import { nanoid } from "nanoid";
import Confetti from "react-confetti";

function App() {
  const { width, height } = useWindowSize();

  const [dice, setDice] = useState(allNewDice());
  // array of objects; holds the dice
  const [tenzies, setTenzies] = useState(false);
  // sets gamestate

  useEffect(() => {
    const allHeld = dice.every((die) => die.isHeld);
    //returns true if every die isHeld
    const firstValue = dice[0].value;
    const allSame = dice.every((die) => die.value === firstValue);
    if (allHeld && allSame) {
      setTenzies(true);
    }
    // game won if every die held and is same value
  }, [dice]);
  // triggers re-rerender on dependency array; check gamestate

  function generateNewDie() {
    return {
      value: Math.ceil(Math.random() * 6),
      isHeld: false,
      id: nanoid(),
    };
    // die object generated
  }

  function allNewDice() {
    const newDice = [];
    for (let i = 0; i < 10; i++) {
      newDice.push(generateNewDie());
    }
    // 10 function calls for 10 dice
    return newDice;
    // set using setDice above
  }

  function rollDice() {
    if (!tenzies) {
      setDice((oldDice) =>
        oldDice.map((die) => {
          return die.isHeld ? die : generateNewDie();
          // returns same die if isHeld is true otherwise replace with new die in same array place
        })
      );
    } else {
      setTenzies(false);
      setDice(allNewDice());
      // runs when game is over
      // handles both rolling dice and resetting game
    }
  }

  function holdDice(id) {
    setDice((oldDice) =>
      oldDice.map((die) => {
        return id === die.id ? { ...die, isHeld: !die.isHeld } : die;
        // iterates over array; reverses isHeld property if clicked die matches to id
      })
    );
  }

  const diceElements = dice.map((die) => {
    return (
      <Die
        key={die.id}
        value={die.value}
        handleClick={() => holdDice(die.id)}
        isHeld={die.isHeld}
      />
      // for every elem in dice array, create separate die components
    );
  });

  return (
    <div className='App'>
      <main>
        {tenzies && <Confetti width={width} height={height} />}
        <h1 className='title'>Tenzies</h1>
        <p className='instructions'>
          Roll until all dice are the same. Click each die to freeze it at its
          current value between rolls.
        </p>
        <div className='dice-container'>{diceElements}</div>
        <button className='roll-dice' onClick={rollDice}>
          {tenzies ? "Again?" : "Roll"}
        </button>
      </main>
    </div>
  );
}

export default App;
