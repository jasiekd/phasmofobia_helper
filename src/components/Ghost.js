import React, { useState } from "react";
import "../styles/MainStyles.scss";
import "../styles/Ghost.scss";
import Modal from "./Modal";
import GhostTip from "./GhostTip";

export default function Ghost({ ghost, evidences, t }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
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
        
        className={`ghost ${shouldStrikeGhostName() ? 'strikethrough' : ''}`}
        onClick={handleOpenModal}
      >
        {ghost.name}
        <GhostTip t={t} ghost={ghost}/>
      </div>
      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        <h2>To jest modalne okno</h2>
        <p>Tu można umieścić dowolną treść.</p>
      </Modal>
    </div>
  );
}
