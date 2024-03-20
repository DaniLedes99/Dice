import generateNewTransformValue from "./GenerateNewTransformValue";

function TirarDado({
  lados,
  valor,
  setValor,
  setContador,
  contador,
  setHistorial,
  historial,
  cantidadDeTiradas,
  setCantidadDeTiradas,
  setTirando,
  tirando,
  setDegrees,
}) {
  const tirarDado = () => {
    if (!tirando) {
      setTirando(true);
      setDegrees("");
      //TODO: 'Math.floor(Math.random() * lados + 1)' es extraño, estaria interesante que sea una funcion aparte
      const nuevoValor = Math.floor(Math.random() * lados + 1);
      const diceRotation = generateNewTransformValue(nuevoValor, valor);
      setDegrees(diceRotation);

      //TODO: Para mayor legibilidad, el callback deberia ser una funcion aparte
      setTimeout(() => {
        setCantidadDeTiradas(cantidadDeTiradas + 1);
        setValor(nuevoValor);

        if (cantidadDeTiradas < 10) {
          setHistorial([...historial, nuevoValor]);
          const nuevoContador = [...contador];
          nuevoContador[nuevoValor - 1] = nuevoContador[nuevoValor - 1] + 1;
          setContador(nuevoContador);
        } else {
          historial.shift();
          //TODO: Tanto arriba como abajo, es el mismo codigo salvo por la linea de arriba, esto se puede llegar a hacer una funcion aparte.
          setHistorial([...historial, nuevoValor]);
          const nuevoContador = [...contador];
          nuevoContador[nuevoValor - 1] = nuevoContador[nuevoValor - 1] + 1;
          setContador(nuevoContador);
        }

        setTirando(false);
      }, 1000);
    }
  };

  return tirarDado;
}

export default TirarDado;
