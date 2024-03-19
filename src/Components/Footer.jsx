import "./Footer.css";

import React from "react";

function Footer({ historial }) {
  return (
    <footer className="marquee textclass">
      <span>Tus últimos números :{" " + historial.join(" - ")}</span>
    </footer>
  );
}

export default Footer;
