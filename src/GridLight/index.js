import { useState } from "react";
import "./index.css";

const Cell = ({ filled, onClick, isDisabled, label }) => {
  return (
    <button
      onClick={onClick}
      disabled={isDisabled}
      aria-label={label}
      className={filled ? `cells cell-activated` : "cells"}
    ></button>
  );
};

const GridLight = () => {
  const [order, setOrder] = useState([]);
  const [isDeActivating, setIsDeActivating] = useState(false);

  const config = [
    [1, 1, 1],
    [1, 0, 0],
    [1, 1, 1],
  ];

  const deactivateCell = () => {
    setIsDeActivating(true);

    const timer = setInterval(() => {
      setOrder((order) => {
        const newOrder = order.slice();
        newOrder.pop();
        if (newOrder.length === 0) {
          clearInterval(timer);
          setIsDeActivating(false);
        }
        return newOrder;
      });
    }, 200);
  };

  const activatedCell = (index) => {
    if (isDeActivating) return;
    const newOrder = [...order, index];
    setOrder(newOrder);

    if (newOrder.length === config.flat(1).filter(Boolean).length) {
      deactivateCell();
    }
  };

  return (
    <div className="wrapper">
      <div
        className="grid"
        style={{
          gridTemplateColumns: `repeat(${config[0].length}, 1fr)`,
        }}
      >
        {config
          .flat(1)
          .map((val, index) =>
            val ? (
              <Cell
                key={index}
                label={`Cell ${index}`}
                isDisabled={order.includes(index) || isDeActivating}
                filled={order.includes(index)}
                onClick={() => activatedCell(index)}
              />
            ) : (
              <span></span>
            )
          )}
      </div>
    </div>
  );
};

export default GridLight;
