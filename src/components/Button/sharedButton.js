const SharedButton = ({ onClick, children }) => {
  return (
    <button
      style={{
        backgroundColor: "#303841",
        color: "white",
        padding: "10px 40px",
        border: "none",
        borderRadius: "10px",
        cursor: "pointer",
        fontSize: "1.4rem",
        outline: "none",
        margin: "1rem 0",
        fontFamily: "Anton, sans-serif",
      }}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default SharedButton;
