import React, { useState } from "react";
import Count from "./Count";

const ReactMemo = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <div
        style={{
          backgroundColor: "skyblue",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "10px",
        }}
      >
        <div>ReactMemo</div>
        <h1>Count: {count}</h1>
        <button onClick={() => setCount((prev) => prev + 1)}>Increase</button>
      </div>
      <Count />
    </>
  );
};

export default ReactMemo;
