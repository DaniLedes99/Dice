import { useState } from "react";
import "./Dado.css";

function Dado({ lados = 6 }) {
  const [valor, setValor] = useState();
  const [contador, setContador] = useState(Array(lados).fill(0));
  const [cantidadDeTiradas, setCantidadDeTiradas] = useState(0);
  const [historial, setHistorial] = useState([]);
  const [tirando, setTirando] = useState(false);
  const [degrees, setDegrees] = useState("");

  function generateNewTransformValue(nuevoValor) {
    if (nuevoValor == valor) {
      switch (nuevoValor) {
        case 1:
          return `rotateY(720deg) rotateZ(720deg) rotateX(720deg)`;
        case 2:
          return `rotateY(540deg) rotateZ(720deg) rotateX(720deg)`;
        case 3:
          return `rotateY(450deg) rotateZ(720deg) rotateX(360deg)`;
        case 4:
          return `rotateY(630deg) rotateZ(3600deg) rotateX(3600deg)`;
        case 5:
          return `rotateY(3600deg) rotateZ(3600deg) rotateX(450deg)`;
        case 6:
          return `rotateY(3600deg) rotateZ(3600deg) rotateX(630deg)`;
        default:
          return `rotateY(360deg) rotateZ(360deg) rotateX(360deg)`;
      }
    } else {
      switch (nuevoValor) {
        case 1:
          return `rotateY(360deg) rotateZ(360deg) rotateX(360deg)`;
        case 2:
          return `rotateY(180deg) rotateZ(360deg) rotateX(3600deg)`;
        case 3:
          return `rotateY(90deg) rotateZ(360deg) rotateX(360deg)`;
        case 4:
          return `rotateY(270deg) rotateZ(360deg) rotateX(360deg)`;
        case 5:
          return `rotateY(360deg) rotateZ(360deg) rotateX(90deg)`;
        case 6:
          return `rotateY(360deg) rotateZ(360deg) rotateX(270deg)`;
        default:
          return `rotateY(360deg) rotateZ(0deg) rotateX(360deg)`;
      }
    }
  }

  const tirarDado = () => {
    if (!tirando) {
      setTirando(true);
      setDegrees("");
      const nuevoValor = Math.floor(Math.random() * lados + 1);
      const diceRotation = generateNewTransformValue(nuevoValor);
      setDegrees(diceRotation);
      setTimeout(() => {
        setCantidadDeTiradas(cantidadDeTiradas + 1);
        setValor(nuevoValor);

        if (cantidadDeTiradas < 10) {
          setHistorial([...historial, nuevoValor]);
          const nuevoContador = [...contador]; // si no pongo los ... no se actualiza el valor
          nuevoContador[nuevoValor - 1] = nuevoContador[nuevoValor - 1] + 1;
          setContador(nuevoContador);
        } else {
          historial.shift();
          setHistorial([...historial, nuevoValor]);
          const nuevoContador = [...contador];
          nuevoContador[nuevoValor - 1] = nuevoContador[nuevoValor - 1] + 1;
          setContador(nuevoContador);
        }

        setTirando(false);
      }, 1000); // Cambia este valor para ajustar la duración del "lanzamiento"
    }
  };

  return (
    <div>
      <div className="espacio3D">
        <div style={{ transform: degrees }} className={`cubo3D`}>
          <div className={`cara cara1`}>
            <span className="dot"></span>
          </div>
          <div className={`cara cara2`}>
            <span className="dot"></span>
            <span className="dot"></span>
          </div>
          <div className={`cara cara3`}>
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot"></span>
          </div>

          <div className={`cara cara4`}>
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot"></span>
          </div>
          <div className={`cara cara5`}>
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot"></span>
          </div>
          <div className={`cara cara6`}>
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot"></span>
          </div>
        </div>
      </div>

      <button onClick={tirarDado} disabled={tirando}>
        {tirando ? "Lanzando..." : "Tirar dado"}
      </button>
      {!tirando && <h1>Te salio el numero {valor}</h1>}
      {!tirando && (
        <h1>
          Cantidad de Tiradas: {cantidadDeTiradas} y tus últimos números fueron:
          {historial.join(" ")}
        </h1>
      )}
      <ul>
        {contador.map((count, index) => (
          <li key={index + 1}>
            Cantidad de {index + 1} tirados: {count}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Dado;
