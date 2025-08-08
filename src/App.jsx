import { useState } from "react";

function App() {
  const [liked, setLiked] = useState(false);

  const handleClick = () => {
    setLiked(!liked);
  };

  return (
    <div style={{
      fontFamily: "sans-serif",
      textAlign: "center",
      marginTop: "50px",
    }}>
      <h1>Like Button</h1>
      <button
        onClick={handleClick}
        style={{
          padding: "10px 20px",
          fontSize: "1.2rem",
          cursor: "pointer",
          backgroundColor: liked ? "red" : "gray",
          color: "white",
          border: "none",
          borderRadius: "5px",
        }}
      >
        {liked ? "Liked ❤️" : "Like ♡"}
      </button>
    </div>
  );
}

export default App;
