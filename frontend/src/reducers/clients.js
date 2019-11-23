import data from '../initData/dataClients';

import {
    FETCH_CLIENT_SUCCESS,
    SET_CLIENT_TO_EDIT,
    DESELECT_CLIENT_FROM_MODAL,
    SET_SEARCH_PARAMS_CLIENT,
} from '../actions/clients';

const reducer = (state = data, { type,payload }) => {
    switch (type) {

        case FETCH_CLIENT_SUCCESS:
            return {...state, ...payload};
        case SET_SEARCH_PARAMS_CLIENT:
            return {...state, searchParams: { ...state.searchParams, ...payload }};
        case SET_CLIENT_TO_EDIT:
            return {...state, selectedClient: payload};
        case DESELECT_CLIENT_FROM_MODAL:
            return {...state};
        default:
            return state;
    }
};

export default reducer;