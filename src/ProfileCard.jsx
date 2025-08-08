function ProfileCard({ name, image, bio }) {
  return (
    <div style={{
      border: "1px solid #ddd",
      borderRadius: "10px",
      padding: "15px",
      maxWidth: "250px",
      textAlign: "center",
      fontFamily: "sans-serif"
    }}>
      <img
        src={image}
        alt={name}
        style={{ width: "100px", height: "100px", borderRadius: "50%" }}
      />
      <h2>{name}</h2>
      <p>{bio}</p>
    </div>
  );
}

export default ProfileCard;
