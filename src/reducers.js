import { SET_COLOR, SET_IMAGE } from './actions';
import { combineReducers } from 'redux';
import defaultImage from './default-image';

var combined;

function colorReducer(state = { color: 'red' }, action) {
  if (action.type === SET_COLOR) {
    return Object.assign({}, state, { color: action.color });
  }

  return state;
}

function imageReducer(state = { image: defaultImage }, action) {
  if (action.type === SET_IMAGE) {
    return Object.assign({}, state, { image: action.image })
  }

  return state;
}

export function mapStateToProps(store) {
  return {
    color: store.colorReducer.color,
    image: store.imageReducer.image
  };
}

combined = combineReducers({
  colorReducer,
  imageReducer
});

export { combined };
