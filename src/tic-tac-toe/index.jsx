import React, { useRef, useState } from "react";
import "./index.css"; // Import the CSS file

const Cell = React.memo(({ row, rowIndex, handleUpdate }) => {
  return row.map((col, colIndex) => {
    return (
      <div
        key={colIndex}
        className="cell"
        onClick={(e) => {
          handleUpdate(e, rowIndex, colIndex);
        }}
      >
        {col ? col : ""}
      </div>
    );
  });
});


export const Board = ({ size }) => {
  const [board, setBaord] = useState(
    [...new Array(size)].map((ele) => new Array(size).fill(""))
  );
  const winner = useRef(false);
  const [currentPlayer, setCurrentPlayer] = useState("X");

  const getWinner = (board, rowI, colI) => {
    const checkRow = (arr) => {
      console.log(arr);
      return arr.every((ele, index) => ele !== "" && ele === arr[0]);
    };
    //check row
    if (checkRow(board[rowI])) {
      return true;
    }

    //check col
    const col = board.map((row, index) => board[index][colI]);
    if (checkRow(col)) {
      console.log("Col");

      return true;
    }

    if (rowI === colI) {
      //check \ diagonal
      const diagonalRight = board.map((row, index) => row[index]);
      if (checkRow(diagonalRight)) {
        return true;
      }

      // check / digonal
      const diagonalLeft = board.map((row, index) => row[size-index -1]);
      if (checkRow(diagonalLeft)) {
        return true;
      }
    }

    return false;
  };

  const handleUpdate = (e, rowI, colI) => {

    if (board[rowI][colI] || winner.current) return;
    const newBoard = board.map((row) => row.slice());
    newBoard[rowI][colI] = currentPlayer;

    if (getWinner(newBoard , rowI, colI)) {
      winner.current = true;
    } else {
      setCurrentPlayer(currentPlayer === "X" ? "O" : "X");
    }
    setBaord(newBoard)

  };

  const handleReset = () => {
    const newBoard = board.map((row) => row.slice());
    setBaord(newBoard)
  };

  return (
    <div className="board">
      {board.map((row, index) => {
        return (
          <div className="row" key={index}>
            <Cell
              row={row}
              rowIndex={index}
              handleUpdate={handleUpdate}
            />
          </div>
        );
      })}
      <button onClick={handleReset}>Reset</button>
      {winner.current && <div>Winner: {currentPlayer}</div>}
    </div>
  );
};

export const TicTacToe = () => {
  return <Board size={5} />;
};

// TicTacToe -> Board -> square
