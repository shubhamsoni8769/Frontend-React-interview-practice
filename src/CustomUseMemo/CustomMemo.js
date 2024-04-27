import React, { useState } from "react"
import useCustomMemo from "./useCustomMemo"
import useCustomEffect from "./useCustomEffect"
const CustomMemo = () => {
    const [counter , setCounter] = useState(0)
    const [counter2 , setCounter2] = useState(100)

    const square = () => {
        console.log("square called");
        return counter*counter
    }

    // useCustomEffect(() => {
    //     console.log("useCustomEffect calling", counter2);
    //     return () => {
    //         console.log("unmounting");
    //     }
    // },[counter2])

    const memoisedSquareValue = useCustomMemo(square, [counter])

    return (
        <div>
            <h2>Counter {counter}</h2>
            <h2>Square Counter {memoisedSquareValue}</h2>
            <button onClick={(e) => setCounter(counter + 1)}>Click</button>
            <h2>Counter {counter2}</h2>
            <button onClick={(e) => setCounter2(counter2 -1)}>Click</button>

        </div>
    )

}
export default CustomMemo