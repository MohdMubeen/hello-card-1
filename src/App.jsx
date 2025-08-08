import ProfileCard from "./ProfileCard";

function App() {
  return (
    <div style={{
      display: "flex",
      gap: "20px",
      justifyContent: "center",
      marginTop: "50px"
    }}>
      <ProfileCard
        name="Mohammed Mubeen"
        image="https://randomuser.me/api/portraits/men/32.jpg"
        bio="React developer in the making 🚀"
      />
      <ProfileCard
        name="Jane Doe"
        image="https://randomuser.me/api/portraits/women/44.jpg"
        bio="UI/UX designer & coffee lover ☕"
      />
    </div>
  );
}

export default App;
