import { UPDATE_EVIDENCE } from "../actions/evidenceActions";

const initialState = {
  evidences: {
    emf: 0,
    dots: 0,
    fingerprint: 0,
    orbs: 0,
    ghost_writing: 0,
    spirit_box: 0,
    freezing: 0,
  },
  ghosts: {
    spirit: {
      name: "Spirit",
      evidences: ["emf", "spirit_box", "ghost_writing"],
      forcedEvidence: "",
      status: 0,
    },
    wraith: {
      name: "Wraith",
      evidences: ["emf", "spirit_box", "dots"],
      forcedEvidence: "",
      status: 0,
    },
    phantom: {
      name: "Phantom",
      evidences: ["spirit_box", "fingerprint", "dots"],
      forcedEvidence: "",
      status: 0,
    },
    poltergeist: {
      name: "Poltergeist",
      evidences: ["spirit_box", "fingerprint", "ghost_writing"],
      forcedEvidence: "",
      status: 0,
    },
    banshee: {
      name: "Banshee",
      evidences: ["fingerprint", "orbs", "dots"],
      forcedEvidence: "",
      status: 0,
    },
    jinn: {
      name: "Jinn",
      evidences: ["emf", "fingerprint", "freezing"],
      forcedEvidence: "",
      status: 0,
    },
    mare: {
      name: "Mare",
      evidences: ["spirit_box", "orbs", "ghost_writing"],
      forcedEvidence: "",
      status: 0,
    },
    revenant: {
      name: "Revenant",
      evidences: ["orbs", "ghost_writing", "freezing"],
      forcedEvidence: "",
      status: 0,
    },
    shade: {
      name: "Shade",
      evidences: ["emf", "ghost_writing", "freezing"],
      forcedEvidence: "",
      status: 0,
    },
    demon: {
      name: "Demon",
      evidences: ["fingerprint", "ghost_writing", "freezing"],
      forcedEvidence: "",
      status: 0,
    },
    yurei: {
      name: "Yurei",
      evidences: ["orbs", "freezing", "dots"],
      forcedEvidence: "",
      status: 0,
    },
    oni: {
      name: "Oni",
      evidences: ["emf", "freezing", "dots"],
      forcedEvidence: "",
      status: 0,
    },
    yokai: {
      name: "Yokai",
      evidences: ["spirit_box", "orbs", "dots"],
      forcedEvidence: "",
      status: 0,
    },
    hantu: {
      name: "Hantu",
      evidences: ["fingerprint", "orbs", "freezing"],
      forcedEvidence: "freezing",
      status: 0,
    },
    goryo: {
      name: "Goryo",
      evidences: ["emf", "fingerprint", "dots"],
      forcedEvidence: "dots",
      status: 0,
    },
    myling: {
      name: "Myling",
      evidences: ["emf", "fingerprint", "ghost_writing"],
      forcedEvidence: "",
      status: 0,
    },
    onryo: {
      name: "Onryo",
      evidences: ["spirit_box", "orbs", "freezing"],
      forcedEvidence: "",
      status: 0,
    },
    twins: {
      name: "The Twins",
      evidences: ["emf", "spirit_box", "freezing"],
      forcedEvidence: "",
      status: 0,
    },
    raiju: {
      name: "Raiju",
      evidences: ["emf", "orbs", "dots"],
      forcedEvidence: "",
      status: 0,
    },
    obake: {
      name: "Obake",
      evidences: ["emf", "fingerprint", "orbs"],
      forcedEvidence: "fingerprint",
      status: 0,
    },
    mimic: {
      name: "The Mimic",
      evidences: ["spirit_box", "fingerprint", "freezing", "orbs"],
      forcedEvidence: "orbs",
      status: 0,
    },
    moroi: {
      name: "Moroi",
      evidences: ["spirit_box", "ghost_writing", "freezing"],
      forcedEvidence: "spirit_box",
      status: 0,
    },
    deogen: {
      name: "Deogen",
      evidences: ["spirit_box", "ghost_writing", "dots"],
      forcedEvidence: "",
      status: 0,
    },
    thaye: {
      name: "Thaye",
      evidences: ["orbs", "ghost_writing", "dots"],
      forcedEvidence: "",
      status: 0,
    },
  },
};

const evidenceReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_EVIDENCE:
      const { key, value } = action.payload;
      return {
        ...state,
        evidences: {
          ...state.evidences,
          [key]: value,
        },
      };
    default:
      return state;
  }
};

export default evidenceReducer;
