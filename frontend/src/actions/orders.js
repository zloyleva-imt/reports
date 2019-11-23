import {authFetchData} from "../helpers/authFetchData";
import routes from "../routes";
import {
    showEditOrderModal, hideEditOrderModal,
    editItem, hideEditItemProduct, hideCreateOrderModal
} from "./modals";
import {reset} from "redux-form";
import {push} from "react-router-redux";

export const FETCH_ORDER_SUCCESS = 'FETCH_ORDER_SUCCESS';
export const FETCH_CREATE_ITEM_SUCCESS = 'FETCH_CREATE_ITEM_SUCCESS';
export const FETCH_DELETE_ITEM_SUCCESS = 'FETCH_DELETE_ITEM_SUCCESS';
export const UPDATE_ITEM_SUCCESS = 'UPDATE_ITEM_SUCCESS';
export const FETCH_ORDER_PROD_SUCCESS = 'FETCH_ORDER_PROD_SUCCESS';
export const FETCH_CREATE_CLIENT_ORDER_SUCCESS = 'FETCH_CREATE_CLIENT_ORDER_SUCCESS';
export const SET_SEARCH_PARAMS_ORDER = 'SET_SEARCH_PARAMS_ORDER';
export const SET_SEARCH_PARAMS_CLIENT_ORDER = 'SET_SEARCH_PARAMS_CLIENT_ORDER';
export const SET_ORDER_TO_EDIT = 'SET_ORDER_TO_EDIT';
export const SET_ORDER_TO_SHOW = 'SET_ORDER_TO_SHOW';
export const HIDE_CREATE_PRODUCT_ORDER = 'HIDE_CREATE_PRODUCT_ORDER';
export const SET_ITEM_TO_EDIT = 'SET_ITEM_TO_EDIT';

export const fetchOrders = (token,searchParams) => dispatch => {
    searchParams = searchParams ?`?${searchParams}`:''
    authFetchData({
        token,
        method:'get',
        url: routes.orders + searchParams
    })
        .then(res => {
            console.log('res.status', res)
            dispatch(fetchOrderSuccess(res))
            dispatch(push({
                pathname: '/',
                search: `${searchParams}`
            }));
        })
};
export const fetchOrderSuccess = orders => ({
    type: FETCH_ORDER_SUCCESS, payload: orders
});

export const fetchOrdersProducts = (token,searchParams) => dispatch => {
    authFetchData({
        token,
        method:'get',
        url: routes.orders_products + `?${searchParams}`
    })
        .then(res => {
            dispatch(fetchOrderProdSuccess(res))
        })
};
export const fetchOrderProdSuccess = products => ({
    type: FETCH_ORDER_PROD_SUCCESS, payload: products
});
export const fetchCreateClientOrder = (token,searchParams) => dispatch => {
    authFetchData({
        token,
        method:'get',
        url: routes.clients + `?${searchParams}`
    })
        .then(res => {
            dispatch(fetchCreateClientOrderSuccess(res))
        })
};
export const fetchCreateClientOrderSuccess = clients => ({
    type: FETCH_CREATE_CLIENT_ORDER_SUCCESS, payload: clients
});


export const addOrder = (order, token) => dispatch => {
    authFetchData({
        token,
        method:'post',
        url: routes.orders,
        data: order
    })
        .then(() => {
            dispatch(reset('newItemProduct'))
            dispatch(fetchOrders(token))
            dispatch(hideCreateOrderModal())
        })
        .catch(err => console.log("Errror"));
};
export const deleteOrder = (order, token) => dispatch => {
    authFetchData({
        token,
        method:'delete',
        url: routes.orders + order.id,
        data: order
    })
        .then(() => {
            dispatch(fetchOrders(token))
        })
        .catch(err => console.log("Errror"));
};
export const updateOrder = (order, token) => dispatch => {
    authFetchData({
        token,
        method:'put',
        url: routes.orders + order.id,
        data: order
    })
        .then(() => {
            dispatch(reset('editOrder'))
            dispatch(fetchOrders(token))
            dispatch(hideEditOrderModal())
        })
        .catch(err => console.log("Errror"));
};
export const createItem = (order, id, token) => dispatch => {

    authFetchData({
        token,
        method:'post',
        url: routes.orders + id + '/items/',
        data: order
    })
        .then((res) => {
            dispatch(reset('newItemProduct'))
            dispatch(createItemSuccess(res))
            dispatch(hideCreateProductOrder())
        })
        .catch(err => console.log("Errror"));
};
export const createItemSuccess = orders => ({
    type: FETCH_CREATE_ITEM_SUCCESS, payload: orders
});
export const updateProductItem = (item, id, token) => dispatch => {
    authFetchData({
        token,
        method:'put',
        url: routes.orders + id + '/items/' + item.id,
        data: item
    })
        .then((res) => {
            dispatch(hideEditItemProduct())
            dispatch(updateItemSuccess(res))
        })
        .catch(err => console.log("Errror"));
};
export const updateItemSuccess = item => ({
    type: UPDATE_ITEM_SUCCESS, payload: item
});
export const deleteProductItem = (item, order, id, token) => dispatch => {
    authFetchData({
        token,
        method:'delete',
        url: routes.orders + id + '/items/' + item.id,
        data: item
    })
        .then((res) => {
            dispatch(deleteItemSuccess(res))
        })
        .catch(err => console.log("Errror"));
};
export const deleteItemSuccess = orders => ({
    type: FETCH_DELETE_ITEM_SUCCESS, payload: orders
});

export const setSearchParams = searchParams => ({
    type: SET_SEARCH_PARAMS_ORDER, payload: searchParams
});
export const setSearchParamsClients = searchParams => ({
    type: SET_SEARCH_PARAMS_CLIENT_ORDER, payload: searchParams
});

export const hideOrder = () => dispatch => {
    dispatch(hideEditOrderModal());
};

export const editOrder = order => dispatch => {
    dispatch(setOrderToEdit(order))
    dispatch(showEditOrderModal());
};

export const showEditItem = item => dispatch => {
    dispatch(setItemToEdit(item))
    dispatch(editItem());
};

export const setItemToEdit = item => ({
    type: SET_ITEM_TO_EDIT,
    payload: item
});

export const setOrderToEdit = order => ({
    type: SET_ORDER_TO_EDIT,
    payload: order
});

export const hideCreateProductOrder = () => ({
    type: HIDE_CREATE_PRODUCT_ORDER
});

export const ADD_ITEM = 'ADD_ITEM';
export const ADD_ITEM_SUCCESS = 'ADD_ITEM_SUCCESS';

export const HIDE_PRODUCT_LIST = 'HIDE_PRODUCT_LIST';

export function addItem(item, token, id, dispatch) {
    return {type: ADD_ITEM, payload: {item: item, token:token, id: id, dispatch:dispatch}}
}
export function addItemSuccess(item) {
    return {type: ADD_ITEM_SUCCESS, payload: {item:item}}
}

export function hideProductList() {
    return {type: HIDE_PRODUCT_LIST, payload: null}
}