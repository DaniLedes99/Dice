import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./main.css";
import "./Components/Text.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <header>
      <div className="headerclass">Dice</div>
    </header>
    <App />
  </React.StrictMode>
);
