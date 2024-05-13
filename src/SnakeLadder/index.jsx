import Board from "./Board"
import Player from "./Player"
import GameProvider from "./context/GameProvider";
import "./index.css"

const SnakeAndLadder = () =>{
    return (
        <GameProvider>
            <Board/>
            <Player/>
        </GameProvider>
    )
}

export default SnakeAndLadder