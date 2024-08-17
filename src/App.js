import Home from "./pages/Home.js";
import "./styles/MainStyles.scss";
import './config/i18n';

import { useTranslation } from 'react-i18next';
import Header from "./components/Header.js";

function App() {
  const { t, i18n } = useTranslation();
  return (
    <div className="App">
      <Header t={t} i18n={i18n}></Header>
      <Home t={t} i18n={i18n}></Home>
    </div>
  );
}

export default App;
