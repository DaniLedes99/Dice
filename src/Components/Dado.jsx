import { useState } from "react";
import "./Button.css";
import "./Text.css";
import "./Table.css";
import "./Organizador.css";
import Footer from "./Footer";
import Table from "./Table";
import Button from "./Button";
import Dado3D from "./Dado3D";
import TirarDado from "./TirarDado";

function Dado({ lados = 6 }) {
  const [valor, setValor] = useState();
  const [contador, setContador] = useState(Array(lados).fill(0));
  const [cantidadDeTiradas, setCantidadDeTiradas] = useState(0);
  const [historial, setHistorial] = useState([]);
  const [tirando, setTirando] = useState(false);
  const [degrees, setDegrees] = useState("");

  const tirarDado = TirarDado({
    lados,
    valor,
    setValor,
    setContador,
    contador,
    setHistorial,
    historial,
    cantidadDeTiradas,
    setCantidadDeTiradas,
    tirando,
    setTirando,
    setDegrees,
  });

  return (
    <div>
      <div className={`container ${tirando ? "tirando" : ""}`}>
        <div className="izquierda">
          <Dado3D degrees={degrees}></Dado3D>
          <Button onClick={tirarDado} disabled={tirando} tirando={tirando} />
        </div>
        <div className="derecha textclass">
          {!tirando && <h1>Te salió el numero: {valor}</h1>}
          {!tirando && <h1>Cantidad de Tiradas: {cantidadDeTiradas}</h1>}
          {!tirando && (
            <Table contador={contador} cantidadDeTiradas={cantidadDeTiradas} />
          )}
        </div>
      </div>
      <Footer historial={historial} />
    </div>
  );
}

export default Dado;
