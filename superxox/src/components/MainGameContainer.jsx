import React, { useState, useEffect, useRef } from 'react';
import { checkDiagonal, checkVertical, checkHorizontal, checkDraw } from "./checkFuncs";
import { generateBoardIdArray, generateEmptyBoardArray} from './resetFuncs';
import GameBoard from './GameBoard';


export default function MainGameContainer() {
  const [mainGame, setMainGame] = useState(() => generateEmptyBoardArray());
  const [nextPlayArray, setNextPlayArray] = useState(() => generateBoardIdArray());
  const [winner, setWinner] = useState(0);
  const [player, setPlayer] = useState("X");
  const modal = useRef(null);


  function recordWinner(gameId, winner) {
    setMainGame(prevMainGame => {
      prevMainGame[gameId] = winner;
      return prevMainGame;
    });
  }

  function resetGame() {    
    setMainGame(generateEmptyBoardArray());
    setNextPlayArray(generateBoardIdArray());
    setPlayer("X");
    setWinner(0);
  }
  
  function onPlay(game) {
    if (isOver(mainGame)) {
      openModal();
      setNextPlayArray([]);
    } else {
      calcNextPlay(game);
      changePlayer();
    }
  }

  function calcNextPlay(game) {
    const nextPlay = [];

    if (mainGame[game] === 0) nextPlay.push(game)  
    else {      
      mainGame.forEach((winner, index) => {
        if (winner === 0) {
          nextPlay.push(index);
        }
      })
    }
    setNextPlayArray(nextPlay);
  }
  
  function changePlayer() {
    player === "X" ? setPlayer("O") : setPlayer("X");
  }

  function isOver(board) {        
    if (checkHorizontal(board) || checkVertical(board) || checkDiagonal(board)) {
      console.log(player, " wins");
      setWinner(player);
      return true;
    }
    else if (checkDraw(board)) {
      console.log("DRAW");
      setWinner("DRAW");
      return true;
    } 
    else return false;
  }

  function openModal() {
    modal.current.showModal();
  }

  function closeModal() {
    modal.current.close();
  }

  const gameBoardElems = mainGame.map((game, index) => (
    <GameBoard 
      key={index}
      id={index}
      player={player}
      isPlayable={nextPlayArray.includes(index)}
      onPlay={onPlay}
      recordWinner={recordWinner}
    />
  ));
  
  return (
    <>
      <main className='flex items-center justify-center w-full min-h-screen p-2'>
        <section className='w-full sm:w-[37.75rem] sm:h-[37.75rem] sm:p-2 mt- sm:justify-center sm:items-center bg-yellow-400'>
          <div className='grid grid-cols-3 gap-1 sm:gap-2 aspect-square'>
            {gameBoardElems}
          </div>
        </section>
      </main>
      <dialog ref={modal}>
        <div className="p-4 border border-black rounded w-80">
          <div className="w-full leading-6 text-black">
            <h3 className="text-3xl font-bold text-center">{`${winner} wins!`}</h3>
          </div>
          <button onClick={() => {
            resetGame();
            closeModal();
            }}>Reset</button>
          <button onClick={closeModal}>Close</button>
        </div>
      </dialog>
    </>
  )
}