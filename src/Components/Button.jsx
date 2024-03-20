import "./Button.css";


// TODO: No esta mal, capaz para hacerlo mas generico, podes mandar el texto por props, pero para que no quede tan atado a la implementacion, igualmente bien
function Button({ onClick, disabled, tirando }) {
  return (
    <button className="button" onClick={onClick} disabled={disabled}>
      {tirando ? "Lanzando..." : "Tirar dado"}
    </button>
  );
}

export default Button;
