import { createStore } from 'redux';
import evidenceReducer from './reducers/evidenceReducer';

const store = createStore(evidenceReducer);

export default store;
