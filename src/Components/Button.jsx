import "./Button.css";

function Button({ onClick, disabled, tirando }) {
  return (
    <button className="button" onClick={onClick} disabled={disabled}>
      {tirando ? "Lanzando..." : "Tirar dado"}
    </button>
  );
}

export default Button;
