import data from '../initData/dataOrders';

import {
    FETCH_ORDER_SUCCESS,
    FETCH_ORDER_PROD_SUCCESS,
    FETCH_CREATE_CLIENT_ORDER_SUCCESS,
    SET_SEARCH_PARAMS_ORDER,
    SET_SEARCH_PARAMS_CLIENT_ORDER,
    HIDE_PRODUCT_LIST,

    SET_ORDER_TO_EDIT, SET_ITEM_TO_EDIT,
    SET_ORDER_TO_SHOW, FETCH_CREATE_ITEM_SUCCESS,
    FETCH_DELETE_ITEM_SUCCESS, UPDATE_ITEM_SUCCESS,
} from '../actions/orders';

const reducer = (state = data, { type,payload }) => {
    switch (type) {
        case FETCH_ORDER_SUCCESS:
            return {...state, ...payload};
        case FETCH_ORDER_PROD_SUCCESS:
            return {...state, products: payload.data, showList: true };
        case FETCH_CREATE_CLIENT_ORDER_SUCCESS:
            return {...state, client: payload.data, showListClientsOrder: true };

        case FETCH_CREATE_ITEM_SUCCESS:
            return {...state, selectedOrder: {...state.selectedOrder, items: [...state.selectedOrder.items, payload.data]},data: [...state.data]};
        case FETCH_DELETE_ITEM_SUCCESS:
            let items = [...state.selectedOrder.items];
            items.splice(payload.id, 1);
            return {...state, selectedOrder: {...state.selectedOrder, items},data: [...state.data]};
        case UPDATE_ITEM_SUCCESS:
            const itemsArr = [...state.selectedOrder.items];
            itemsArr.splice(payload.id, 1);
            itemsArr.push(payload.data);
            return {...state, selectedOrder: {...state.selectedOrder, items: [...itemsArr]},data: [...state.data]};

        case HIDE_PRODUCT_LIST:
            return {...state, products: [], showList: false, showListClientsOrder: false};
        case SET_SEARCH_PARAMS_ORDER:
            return {...state, searchParams: { ...state.searchParams, ...payload }};
        case SET_SEARCH_PARAMS_CLIENT_ORDER:
            return {...state, searchParamsClient: { ...state.searchParamsClient, ...payload }};

        case SET_ORDER_TO_EDIT:
            const key = payload.status, newKey = 'status', statuses = [];
            statuses.push({ 'label': key, 'value': key });
            const newPayload = { ...payload, [newKey]: statuses }
            return {...state, selectedOrder: newPayload};
        case SET_ORDER_TO_SHOW:
            return {...state, selectedOrder: payload};
        case SET_ITEM_TO_EDIT:
            return {...state, selectedItem: payload};

        default:
            return state;
    }
};

export default reducer;