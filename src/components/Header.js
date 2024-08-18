import * as React from "react";
import "../styles/Header.scss";
import "../styles/MainStyles.scss";
import logo from "../resources/icon.png";

export default function Header({ t, i18n }) {
  const handleLanguageChange = (lng) => {
    i18n.changeLanguage(lng);
  };
  return (
    <header className="App-header">
      <div style={{display: "flex", marginLeft: "10px"}}>
        {/* <img className="logo" src={logo} alt="Logo" style={{maxHeight:"90px"}}/> */}
        <h1>Phasmofobia Helper</h1>
      </div>
      <div>
        <button onClick={() => handleLanguageChange("en")}>English</button>
        <button onClick={() => handleLanguageChange("pl")}>Polski</button>
      </div>
    </header>
  );
}
