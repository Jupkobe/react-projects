import { useState } from "react";
import { checkDiagonal, checkVertical, checkHorizontal, checkDraw } from "./checkFuncs";


export default function GameBoard({ id, onPlay, player, isPlayable, recordWinner }) {
    const [board, setBoard] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0]);

    function handleClick(e, index) {
        e.stopPropagation();
        if (!isPlayable) return;
        else if (board[index] !== 0) return;

        playMove(index);
        isOver();
    
        onPlay(index);
    };

    function playMove(index) {
        setBoard(prevBoard => {
            prevBoard[index] = player;
            return prevBoard;
        });
    };

    function isOver() {        
        if (checkHorizontal(board) || checkVertical(board) || checkDiagonal(board)) {
            recordWinner(id, player);
        }
        else if (checkDraw(board)) {
            recordWinner(id, "D");
        }
    }

    const boardStyles = {backgroundColor: isPlayable ? "#131780" : "#0b0d40"}
    const buttonStyles = {backgroundColor: isPlayable ? "white" : "lightgray"}

    const buttonElems = board.map((value, index) => (
        <div
            key={index}
            onClick={(e) => handleClick(e, index)}
            className='flex items-center justify-center w-full text-3xl font-bold rounded-sm aspect-square'
            style={buttonStyles}
        >
            {value === 0 ? "" : value}
        </div>
    ))

    return (
        <div style={boardStyles} className='grid w-full grid-cols-3 gap-1 p-1 rounded-md aspect-square'>
            {buttonElems}
        </div>
    )
  }