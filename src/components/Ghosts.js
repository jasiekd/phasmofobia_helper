import * as React from "react";
import "../styles/MainStyles.scss";
import "../styles/Ghosts.scss";
import { useSelector } from "react-redux";
import Ghost from "./Ghost.js";

export default function Ghosts({ t, i18n }) {
  const ghosts = useSelector((state) => state.ghosts);
  const evidences = useSelector((state) => state.evidences);

  return (
    <div>
      <h1>{t("ghosts")}</h1>
      <div className="ghosts">
        {Object.entries(ghosts).map(([key, value]) => (
          <Ghost key={key} ghost={value} evidences={evidences}/>
        ))}
      </div>
    </div>
  );
}
