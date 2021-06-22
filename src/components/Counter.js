import React, { useState } from "react";

export const Counter = () => {
  const [count, setCount] = useState(0);

  const increament = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const decreament = () => {
    setCount((prevCount) => prevCount - 1);
  };

  const double = () => {
    setCount((prevCount) => prevCount * 2);
  };

  const half = () => {
    setCount((prevCount) => Math.round(prevCount / 2));
  };

  return (
    <div className="counter">
      <h1>{count}</h1>
      <button onClick={increament}>Increament!</button>
      <button onClick={decreament}>Decreament</button>
      <button onClick={double}>Double Count</button>
      <button onClick={half}>Half Count</button>
      <button onClick={() => setCount(0)}> Reset</button>
    </div>
  );
};
