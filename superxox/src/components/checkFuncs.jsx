export function checkHorizontal(board) {
    for (let i = 0; i < 3; i++) {
        if (board[i * 3] !== 0) {
            if (board[i * 3] === board[i * 3 + 1] && board[i * 3 + 1] === board[i * 3 + 2]) {
                return true;
            }
        } continue;
    }
    return false;
}

export function checkVertical(board) {
    for (let i = 0; i < 3; i++) {
        if (board[i] !== 0) {
            if (board[i] == board[3 + i] && board[3 + i] == board[6 + i]) return true;
        } continue;
    }
    return false;
}

export function checkDiagonal(board) {
    if (board[4] !== 0) {
        if ((board[0] === board[4] && board[4] === board[8]) || (board[2] === board[4] && board[4] === board[6])) return true;
    } 
    return false;
}

export function checkDraw(board) {
    return board.every(value => value !== 0);
}


// function isGameOver(board, player) {
//     if (checkHorizontal(board) || checkVertical(board) || checkDiagonal(board)) {
//         console.log(player, " wins on board: " + board);
//         return player;
//     }
//     else if (checkDraw(board)) {
//         console.log("DRAW on board: ", board);
//         return "D";
//     }
//     else return null;
// }