import { AUTH_SUCCESS, AUTH_FAILURE } from '../actions/auth'
const data = {
    access_token: localStorage.getItem('access_token') || null,
    error: null,
    user:{}
};

const reducer = (state = data, {type, payload}) => {
    switch (type) {
        case AUTH_SUCCESS: {
                return { ...state, access_token: payload, error: null };
            }
        case AUTH_FAILURE: {
                return { ...state, error: payload }
            }
        default:
            return state;
    }
};

export default reducer;