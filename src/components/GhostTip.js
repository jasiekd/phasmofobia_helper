import * as React from "react";
import "../styles/MainStyles.scss";
import "../styles/GhostTip.scss";
import "../styles/Variables.scss";

export default function GhostTip({ t, ghost }) {
  const isForcedEvidence = (value) => {
    return value === ghost.forcedEvidence;
  };

  return (
    <span className="ghost-tip">
      {t("evidence")}:
      {ghost.evidences.map((value) => {
        return (
          <div className={isForcedEvidence(value) ? "forcedEvidence" : null}>
            - {t(value)}
          </div>
        );
      })}
      <div>
        {t("attack")}: {ghost.hunt}
      </div>
      <div>
        {t("specialMovement")}: {ghost.specialMovement ? t("yes") : t("no")}
      </div>
    </span>
  );
}
