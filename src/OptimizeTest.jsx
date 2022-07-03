import React, { useState, useEffect } from "react";

const CounterA = ({ count }) => {
  return <div>{count}</div>;
};

const CounterB = ({ obj }) => {
  return <div>{obj.count}</div>;
};

const OptimizeTest = () => {
  const [count, setCount] = useState(0);
  const [obj, setObj] = useState({
    count: 1,
  });

  return (
    <div style={{ padding: 50 }}>
      <div>
        <h2>Counter A</h2>
        <button
          onClick={() => {
            setCount(count);
          }}
        >
          A Button
        </button>
      </div>
      <div>
        <h2>Counter B</h2>
        <button
          onClick={() => {
            setObj({
              count: obj.count,
            });
          }}
        >
          B Button
        </button>
      </div>
    </div>
  );
};

export default OptimizeTest;
