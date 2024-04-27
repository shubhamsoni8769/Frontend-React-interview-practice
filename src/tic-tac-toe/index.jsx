import React, { useState } from 'react';
import './index.css'; // Import the CSS file

export const TicTacToe = () => {
  const size = 5; // Change this to adjust the board size
  const initialBoard = Array(size).fill(Array(size).fill(null));
  const [board, setBoard] = useState(initialBoard);
  const [player, setPlayer] = useState('X');


  const getWinner = () => {
    const rowCountX = Array(size).fill(0);
    const rowCountO = Array(size).fill(0);
    const colCountX = Array(size).fill(0);
    const colCountO = Array(size).fill(0);
    let diag1X = 0;
    let diag1O = 0;
    let diag2X = 0;
    let diag2O = 0;

    for (let i = 0; i < size; i++) {
      for (let j = 0; j < size; j++) {
        if (board[i][j] === 'X') {
          rowCountX[i]++;
          colCountX[j]++;
          if (i === j) diag1X++;
          if (i + j === size - 1) diag2X++;
        } else if (board[i][j] === 'O') {
          rowCountO[i]++;
          colCountO[j]++;
          if (i === j) diag1O++;
          if (i + j === size - 1) diag2O++;
        }
      }
    }

    for (let i = 0; i < size; i++) {
      if (rowCountX[i] === size || colCountX[i] === size) return 'X';
      if (rowCountO[i] === size || colCountO[i] === size) return 'O';
    }
    if (diag1X === size || diag2X === size) return 'X';
    if (diag1O === size || diag2O === size) return 'O';

    return null;
  };

  const handleClick = (row, col) => {
    if (board[row][col] || getWinner()) {
      return;
    }

    const newBoard = board.map((rowArray, rowIndex) =>
      rowArray.map((cell, colIndex) =>
        rowIndex === row && colIndex === col ? player : cell
      )
    );
    console.log(board);

    setBoard(newBoard);
    setPlayer(player === 'X' ? 'O' : 'X');
  };

  const renderCell = (row, col) => (
    <div key={`${row}-${col}`} className="cell1" onClick={() => handleClick(row, col)}>
      {board[row][col]}
    </div>
  );

  const renderRow = (row, index) => (
    <div key={index} className="row">
      {row.map((_, colIndex) => renderCell(index, colIndex))}
    </div>
  );

  const winner = getWinner();

  return (
    <div className="game">
      <h1>Tic Tac Toe</h1>
      <div className="board">
        {board.map((row, index) => renderRow(row, index))}
      </div>
      {winner && <div className="winner">Winner: {winner}</div>}
    </div>
  );
};



// TicTacToe -> Board -> square