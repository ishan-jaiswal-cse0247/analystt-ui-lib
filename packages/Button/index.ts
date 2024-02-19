//Button Component using Snabbdom
import { h } from 'snabbdom';

export function createButton(label, onClick) {
  return h('button', { on: { click: onClick } }, label);
}

//Meathod for State Sanagement
export function updateState(state, newState) {
  return { ...state, ...newState };
}

//Lifecycle Hook
export function useMountEffect(callback) {
  callback();
}
