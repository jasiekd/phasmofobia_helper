import * as React from "react";
import "../styles/MainStyles.scss";
import "../styles/Evidences.scss";
import Evidence from "./Evidence.js";
import { useSelector } from "react-redux";

export default function Evidences({ t, i18n }) {
  const evidences = useSelector((state) => state.evidences);

  return (
    <div style={{ marginLeft: "10px", marginRight: "10px" }}>
      <h1>{t("evidence")}</h1>
      <div className="evidences">
        {Object.entries(evidences).map(([key, value]) => (
          <Evidence key={key} org={key} name={t(key)} value={value}></Evidence>
        ))}
      </div>
    </div>
  );
}
