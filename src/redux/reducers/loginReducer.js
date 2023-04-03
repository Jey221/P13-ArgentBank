import { GET_LOGIN } from '../actions/loginAction';

const initialState = {};

export default function loginReducer(state = initialState, action) {
  switch (action.type) {
    case GET_LOGIN:
      return [action.payload, localStorage.getItem('token')];

    default:
      return state;
  }
}
