function generateNewTransformValue(nuevoValor, valorActual) {
  if (nuevoValor === valorActual) {
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
        return `rotateY(3600deg) rotateZ(3600deg) rotateX(6300deg)`;
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

export default generateNewTransformValue;
