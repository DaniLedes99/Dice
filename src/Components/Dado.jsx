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

  //TODO: Syntax de HTML, como esta es tu pantalla principal, podes reemplazar el div de mas arriba por main o article, los hijos de los articles son de 3 tipos: header, section y footer.
  /*
    En este caso: 
    main
      - article
        - section
          - div
          .
          .
          .
        - section
          -table
      - footer
  */
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
          {/* TODO: La tabla podria mostrarse mientras se sigue tirando el dado, es mas estetico el cambio que otra cosa */}
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
