import "./Footer.css";

import React from "react";

// TODO: Recorda usar syntax ES6, const myFunc = () => {}
function Footer({ historial }) {
  return (
    <footer className="marquee textclass">
      <span>Tus últimos números :{" " + historial.join(" - ")}</span>
    </footer>
  );
}

export default Footer;
