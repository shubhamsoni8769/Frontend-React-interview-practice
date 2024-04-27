import { useState } from "react";

const initialState = new Array(9).fill(null);

export const useTicTacToe = () => {
  const [board, setBoard] = useState(initialState);
  const [isXTurn, setIsXTurn] = useState(true);
  const WINNER_CONDITION = [];
  const getWinner = (board) => {};
  const handlleClick = (index) => {
    //check winner
    const winner = getWinner(board)

    if(winner || board[index]) return;
    const newBoard = [...board];
    newBoard[index] = isXTurn ? "X" : "O";
    setBoard(newBoard);
    setIsXTurn(!isXTurn)
  };
  const getstatusMessage = () => {};
  const resetGame = () => {};
  return { board, handlleClick, getWinner, getstatusMessage, resetGame };
};
