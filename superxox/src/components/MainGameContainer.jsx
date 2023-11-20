import React, { useState, useEffect, useRef } from 'react';
import { checkDiagonal, checkVertical, checkHorizontal } from "./checkFuncs";
import { generateBoardIdArray, generateEmptyBoardArray} from './resetFuncs';
import GameBoard from './GameBoard';
import Confetti from './Confetti';

// {
//   id: i,
//   winner: null,
//   game: [null, null, null, null, null, null, null, null, null]
//  [O, D, X,
//   X, D, O,
//   X, D, D]
// }

export default function MainGameContainer() {
  const [mainGame, setMainGame] = useState(() => generateEmptyBoardArray());
  const [nextPlayArray, setNextPlayArray] = useState([]);
  const [lastPlay, setLastPlay] = useState(null);
  const [winner, setWinner] = useState(null);
  const [player, setPlayer] = useState("X");
  const modal = useRef(null);


  useEffect(() => {
    const winnerArray = mainGame.map(item => item.winner);
    if (isOver(winnerArray)) {
      gameOver();
    }
    else {
      if (lastPlay) {
        calcNextPlay();
        changePlayer();      
      } else {
        setNextPlayArray(generateBoardIdArray());
      }
    }        
  }, [lastPlay]);
  
  function onPlay(gameId, result, index) {
    setMainGame(prevMainGame => (prevMainGame.map(item => (
        item.id === gameId ? item = result : item
      )))
    );
    setLastPlay([gameId, index]);
  };

  function calcNextPlay() {
    let nextPlay = [];
    const lastPlayedGame = lastPlay[1];
    
    if (mainGame[lastPlayedGame].winner === null) nextPlay = [lastPlayedGame];
    else {
      nextPlay = mainGame.filter(item => item.winner === null).map(item => item.id);
    }
    setNextPlayArray(nextPlay);
  };
  
  function changePlayer() {
    player === "X" ? setPlayer("O") : setPlayer("X");
  };

  function isOver(board) {        
    if (checkHorizontal(board) || checkVertical(board) || checkDiagonal(board)) {
      setWinner(player);
      return true;
    }
    else if (board.every(item => item !== null)) {
      const xCount = board.filter(item => item === "X").length;
      const oCount = board.filter(item => item === "O").length;
      console.log(xCount, oCount)
      if (xCount > oCount) setWinner("X");
      else if (oCount > xCount) setWinner("O");
      else {
        setWinner("DRAW");
      }
      return true;
    }
    return false;
  };

  function resetGame() {    
    setMainGame(generateEmptyBoardArray());
    setLastPlay(null);
    setPlayer("X");
    setWinner(null);
    closeModal();
  };

  function gameOver() {
    setNextPlayArray([]);
    openModal();
  };

  function openModal() {
    modal.current.showModal();
  };

  function closeModal() {
    modal.current.close();
  };

  // Debug purposes only
  // function makeitdraw() {
  //   const emptyBoard = [];
  //   for (let i = 0; i < 7; i++) {
  //     emptyBoard.push({
  //       id: i,
  //       winner: "D",
  //       game: ["X", "O", "X", "X", "O", "X", "O", "X", "O"]
  //     });
  //   }
  //   emptyBoard.push({
  //     id: 7,
  //     winner: "X",
  //     game: ["X", "O", "X", "X", "O", "X", "O", "X", "O"]
  //   })
  //   emptyBoard.push({
  //     id: 8,
  //     winner: "X",
  //     game: ["X", "O", "X", "X", "O", "X", "O", "X", "O"]
  //   })
  //   setMainGame(emptyBoard)
  //   setLastPlay([-1, -1])
  // }
  
  const gameBoardElems = mainGame.map(item => {
    return (
    <GameBoard 
      key={item.id}
      id={item.id}
      game={item.game}
      winner={item.winner}
      player={player}
      isPlayable={nextPlayArray.includes(item.id)}
      onPlay={onPlay}
    />)
  });
  
  return (
    <>
      {winner && <Confetti />}
      <main className='flex flex-col items-center justify-center w-full min-h-screen p-3'>
        <h2 className='mb-6 text-5xl font-bold text-[#0b0d40]'>{player}'s Turn</h2>
        <section className='w-full sm:w-[37.75rem] sm:h-[37.75rem] p-1 sm:p-3 sm:justify-center sm:items-center bg-[#5068AB] rounded-md'>
          <div className='grid grid-cols-3 gap-1 sm:gap-2 aspect-square'>
            {gameBoardElems}
          </div>
        </section>
      </main>
      <dialog ref={modal}>
        <div className="flex flex-col items-center justify-center p-4 border border-black rounded w-80">
          <div className="w-full leading-6 text-[#0b0d40]">
            <h3 className="text-5xl font-bold text-center">{winner === "DRAW" ? "DRAW" : `${winner} wins!`}</h3>
            {winner === "DRAW" && <p className='mt-2 text-center'>You did it! You managed to break the game... almost.</p>}
          </div>
          <button onClick={resetGame} className="p-1 px-2 mt-6 border border-black">Reset</button>
        </div>
      </dialog>
    </>
  )
}