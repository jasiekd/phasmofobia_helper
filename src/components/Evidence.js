import * as React from "react";
import "../styles/MainStyles.scss";
import "../styles/Evidence.scss";
import { useDispatch } from "react-redux";
import { updateEvidence } from "../actions/evidenceActions";

export default function Evidence({ name, value, org }) {
  const dispatch = useDispatch();

  const handleUpdate = (key, value) => {
    const newValue = value === 2 ? 0 : value + 1;
    dispatch(updateEvidence(key, newValue));
  };

  return (
    <div className="evidence" onClick={() => handleUpdate(org, value)}>
      <div
        style={{
          textDecoration: value === 2 ? "line-through" : "none",
          border: value === 1 ? "2px solid #FFF" : "none",
          borderRadius: "50px",
          padding: "2px 8px",
          width: "fit-content"
        }}
      >
        {name}
      </div>
    </div>
  );
}
