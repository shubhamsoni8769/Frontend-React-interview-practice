import React, { useEffect, useRef, useState } from "react";
import "./Styles.css";

export const Stopwatch = () => {
  const [timer, setIstimer] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const timerId = useRef(null);

  /*
  useEffect(() => {
    if (start) {
      timerId.current = setTimeout(() => {
        setCount(count + 1);
      }, 1000);
    }

    return () => clearTimeout(timerId.current)
  }, [count,start]);
  */

  const onStart = () => {
    if (isRunning) return;
    timerId.current = setInterval(() => {
      setIstimer((prevCount) => prevCount + 1);
    }, 10);
    setIsRunning(true);
  };

  const onStop = () => {
    // if (isRunning) return;
    clearInterval(timerId.current);
    setIsRunning(false);
  };

  const handleReset = () => {
    setIsRunning(false);
  };

  const timeFormatter = (timer) => {
    const minute = Math.floor(timer / 60000).toString().padStart(2, "0");
    const second = (Math.floor(timer / 1000) % 60).toString().padStart(2, "0");
    const milliSecond = (timer % 1000).toString().padStart(3, "0");

    return { minute, second, milliSecond };
  };
  const { minute, second, milliSecond } = timeFormatter(timer);

  return (
    <>
      <div className="stopwatch-container">
        <div className="time-container">
          <div className="time-box"> Minute {minute}</div>
          <div className="time-box"> Second {second}</div>
          <div className="time-box"> Millisecond {milliSecond}</div>
        </div>

        <div className="btn-container">
          <button onClick={onStart}>Start</button>
          <button onClick={onStop}>Stop</button>
          <button onClick={handleReset}>Stop</button>
        </div>
      </div>
    </>
  );
};
