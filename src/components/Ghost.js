import React, { useState } from "react";
import "../styles/MainStyles.scss";
import "../styles/Ghost.scss";
import Modal from "./Modal";
import GhostTip from "./GhostTip";

export default function Ghost({ ghost, evidences, t, org }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  const isForcedEvidence = (value) => {
    return value === ghost.forcedEvidence;
  };
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
    <div>
      <div
        className={`ghost ${shouldStrikeGhostName() ? "strikethrough" : ""}`}
        onClick={handleOpenModal}
      >
        {ghost.name}
        <GhostTip t={t} ghost={ghost} />
      </div>
      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        <h2>
          {t("infoGhost")}
          {ghost.name}
        </h2>
        <div style={{ textAlign: "left" }}>
          <ul>
            {t("info_" + org)
              .split("\n")
              .filter(Boolean)
              .map((line, index) => (
                <li key={index}>{line}</li>
              ))}
          </ul>
          <div style={{ paddingInlineStart: "40px" }}>
            {t("evidence")}:
            {ghost.evidences.map((value) => {
              return (
                <div
                  className={isForcedEvidence(value) ? "forcedEvidence" : null}
                >
                  - {t(value)}
                </div>
              );
            })}
            <div>
              {t("attack")}: {ghost.hunt}
            </div>
            <div>
              {t("specialMovement")}:{" "}
              {ghost.specialMovement ? t("yes") : t("no")}
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
}
