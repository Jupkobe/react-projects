import { useState, useEffect } from 'react';
import Die from './Die';
import Confetti from './Confetti';

export default function App() {
  const [tenzies, setTenzies] = useState(false);
  const [dice, setDice] = useState(initializeDices());

  useEffect(() => {
    const firstValue = dice[0].value;
    const isAllSame = dice.every(die => die.value === firstValue);
    const isAllHeld = dice.every(die => die.isHeld);

    if (isAllSame && isAllHeld) {
      setTenzies(true);
    }
  }, dice);

  function createNewDie(i) {
    return {
      id: i,
      value: Math.ceil(Math.random() * 6),
      isHeld: false,
    }
  }

  function initializeDices() {
    const newDice = [];
    
    for(let i = 0; i < 10; i++) {
      newDice.push(createNewDie(i));
    };

    return newDice;
  };

  function rollDice() {
    setDice(prevDice => {
      return prevDice.map(die => die.isHeld ? die : createNewDie(die.id));
    });
  }

  function hold(id) {
    setDice(prevDice => prevDice.map(prevDie => {
      if (prevDie.id === id) return {
        ...prevDie,
        isHeld: !prevDie.isHeld,
      };
      else return prevDie;
    }));
  }

  function newGame() {
    setDice(initializeDices());
    setTenzies(false);
  }

  const dieElems = dice.map(die => (
    <Die 
      key={die.id}
      id={die.id}
      isHeld={die.isHeld} 
      value={die.value}
      hold={hold} 
    />
  ));

  return (
    <div className='bg-slate-800 p-4 h-screen flex items-center justify-center'>
      {tenzies && <Confetti />}
      <main className='bg-gray-200 min-h-[50%] max-w-sm rounded-md flex flex-col items-center justify-center px-4'>
        <h2 className='text-4xl font-semibold m-4'>Tenzies</h2>
        <p className='text-gray-600 w-11/12 mb-2'>Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
        <div className='grid grid-cols-5 grid-rows-2 p-4 gap-2 sm:gap-4'>
          {dieElems}
        </div>
        <button 
          className='bg-blue-600 p-3 rounded text-lg font-bold text-white m-2'
          onClick={tenzies ? newGame : rollDice} 
        >
          {tenzies ? "New Game" : "Roll the dice!"}
        </button>
      </main>
    </div>
  )
}
