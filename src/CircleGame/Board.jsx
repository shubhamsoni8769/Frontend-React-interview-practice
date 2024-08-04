import { useState } from "react"
import "./style.css"
import { COLORS } from "./constant"
import { Circles } from "./Circles";
import Controls from "./Controls";


const Board = () => {
    const [circles, setCircle] = useState([]);
    const [history, setHistory] = useState([])

    const handleClick =(e) => {
        setCircle(prev => {
            return [
                ...prev,
                {
                    x: e.clientX,
                    y: e.clientY,
                    id: +new Date(),
                    bgColor: COLORS[Math.floor(Math.random() * COLORS.length)]
                }
            ]
        })

    }

    const handleUndo =() => {
        const copy = [...circles];
        const lastCircle = copy.pop();
        setHistory(prev => [...prev, lastCircle])
        setCircle(copy)
    }

    const handleRedo =() => {
        const copy = [...history];
        const lastHistory = copy.pop();
        setCircle(prev => [...prev, lastHistory])
        setHistory(copy)
    }

    const handleReset =() => {
        setCircle([])
        setHistory([])
    }
    return (
        <div className="board" onClick={handleClick}>
            <div className="circle"><Circles circles={circles}/></div>
            <Controls
            hasCircle={circles.length > 0}
            hasHistory={history.length > 0}
            handleUndo={handleUndo} handleReset={handleReset} handleRedo={handleRedo}/>
        </div>
    )
}

export default Board