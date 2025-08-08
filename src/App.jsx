import { useState } from "react";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleToggle = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  return (
    <div style={{
      fontFamily: "sans-serif",
      textAlign: "center",
      marginTop: "50px"
    }}>
      <h1>{isLoggedIn ? "Welcome Back, User!" : "Please Login"}</h1>
      <button
        onClick={handleToggle}
        style={{
          padding: "10px 20px",
          fontSize: "1rem",
          cursor: "pointer",
          borderRadius: "5px",
          border: "none",
          backgroundColor: isLoggedIn ? "#4caf50" : "#f44336",
          color: "white"
        }}
      >
        {isLoggedIn ? "Logout" : "Login"}
      </button>
    </div>
  );
}

export default App;
