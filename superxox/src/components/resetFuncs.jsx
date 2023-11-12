export function generateEmptyBoardArray() {
    const emptyBoard = [];
    for (let i = 0; i < 9; i++) {
      emptyBoard.push(0);
    }
    return emptyBoard;
}
  
export function generateBoardIdArray() {
    const emptyBoard = [];
    for (let i = 0; i < 9; i++) {
        emptyBoard.push(i);
    }
    return emptyBoard;
}
