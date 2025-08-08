import { useState, useEffect } from "react";

function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://randomuser.me/api/")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((data) => {
        setUser(data.results[0]);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p style={{ fontFamily: "sans-serif", textAlign: "center", marginTop: "50px" }}>Loading...</p>;
  }

  if (error) {
    return <p style={{ fontFamily: "sans-serif", textAlign: "center", marginTop: "50px", color: "red" }}>Error: {error}</p>;
  }

  return (
    <div style={{ fontFamily: "sans-serif", textAlign: "center", marginTop: "50px" }}>
      <h1>Random User</h1>
      <img src={user.picture.large} alt="User" style={{ borderRadius: "50%" }} />
      <h2>{user.name.first} {user.name.last}</h2>
      <p>Email: {user.email}</p>
      <p>Location: {user.location.city}, {user.location.country}</p>
    </div>
  );
}

export default App;
