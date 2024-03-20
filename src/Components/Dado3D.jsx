import "./Dado.css";

/*
  TODO: 
    - Cada lado tendria que se su propio componente, que reciba el angulo de giro, color y cantidad de puntos, y encargarse de generar todo eso.

*/

function Dado3D({ degrees }) {
  return (
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
  );
}

export default Dado3D;
