export const UPDATE_EVIDENCE = 'UPDATE_EVIDENCE';

export const updateEvidence = (key, value) => ({
  type: UPDATE_EVIDENCE,
  payload: { key, value }
});
