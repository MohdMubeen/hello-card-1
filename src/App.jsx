import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div style={{
      fontFamily: "sans-serif",
      textAlign: "center",
      marginTop: "50px",
    }}>
      <h1>Counter App</h1>
      <p style={{ fontSize: "2rem" }}>{count}</p>
      <button
        onClick={() => setCount(count + 1)}
        style={{
          padding: "10px 20px",
          fontSize: "1rem",
          marginRight: "10px",
          cursor: "pointer",
        }}
      >
        Increase
      </button>
      <button
        onClick={() => setCount(count - 1)}
        style={{
          padding: "10px 20px",
          fontSize: "1rem",
          cursor: "pointer",
        }}
      >
        Decrease
      </button>
    </div>
  );
}

export default App;
