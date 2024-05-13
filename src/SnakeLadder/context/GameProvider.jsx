import { createContext, useState } from "react";

const GameContext = createContext();

const GameProvider = ({ children }) => {
  const [currentPlayer, setCurrentPlayer] = useState(1);
  const [dice, setDice] = useState(null);
  const [playerPosition, setPlayerPosition] = [0, 0];
  const [winner, setWinner] = useState(null);

  const movePlayer = () => {};

  const rollDice = () => {};

  const checkWinner = () => {};

  const contextValue = {movePlayer, rollDice, checkWinner}

  return <GameContext.Provider value={contextValue}>{children}</GameContext.Provider>;
};

export default GameProvider;
