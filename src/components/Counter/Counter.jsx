"use client";
import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>This is Counter component.</h1>
      <b>Count: {count}</b>
      <div>
        <button
          onClick={() => setCount(count - 1)}
          className="btn btn-outline btn-secondary"
        >
          Decrement
        </button>
        <span> </span>

        <button
          onClick={() => setCount(count + 1)}
          className="btn btn-outline btn-accent"
        >
          Increment
        </button>
      </div>
    </div>
  );
};

export default Counter;
