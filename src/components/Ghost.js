import * as React from "react";
import "../styles/MainStyles.scss";
import "../styles/Ghost.scss";
import { useDispatch } from "react-redux";

export default function Ghost({ ghost, evidences }) {
  const dispatch = useDispatch();

  const handleUpdate = () => {};
  const shouldStrikeGhostName = () => {
    // 1. Sprawdź, czy jakikolwiek dowód ducha jest wykluczony
    const hasExcludedEvidence = ghost.evidences.some(
      (evidence) => evidences[evidence] === 2
    );

    // 2. Sprawdź, czy jest jakikolwiek potwierdzony dowód, którego duch nie ma
    const hasIncompatibleConfirmedEvidence = Object.entries(evidences).some(
      ([evidence, status]) =>
        status === 1 && !ghost.evidences.includes(evidence)
    );

    return hasExcludedEvidence || hasIncompatibleConfirmedEvidence;
  };
  return (
    <div
      style={{
        textDecoration: shouldStrikeGhostName() ? "line-through" : "none",
        textDecorationColor: shouldStrikeGhostName() ? "red" : "inherit",
      }}
      className="ghost"
      onClick={() => handleUpdate()}
    >
      {ghost.name}
    </div>
  );
}
