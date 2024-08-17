import * as React from "react";
import "../styles/MainStyles.scss";
import Evidences from "../components/Evidences";
import Ghosts from "../components/Ghosts";

export default function MainPage({ t, i18n }) {
  return (
    <main className="content">
      <Evidences t={t} i18n={i18n}></Evidences>
      <Ghosts t={t} i18n={i18n}></Ghosts>
    </main>
  );
}
