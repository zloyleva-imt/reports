import {authFetchData} from "../helpers/authFetchData";
import routes from "../routes";
import {reset} from "redux-form";

import {
    hideCreateProductModal,
    hideUpdateProductModal,
    showProductModal,
    showUpdateProductModal
} from "./modals";

import {push} from "react-router-redux";

export const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS';
export const SET_SEARCH_PARAMS_PRODUCT = 'SET_SEARCH_PARAMS_PRODUCT';
export const SET_SEARCH_PARAMS_CATEGORY_PRODUCT = 'SET_SEARCH_PARAMS_CATEGORY_PRODUCT';
export const SET_PRODUCT_TO_EDIT = 'SET_PRODUCT_TO_EDIT';
export const SET_TO_EDIT_PICTURE = 'SET_TO_EDIT_PICTURE';

//****************************************************************

export const fetchProduct = (token, searchParams) => dispatch => {
    searchParams = searchParams ?`?${searchParams}`:'';
    console.log('fetchProduct >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>',searchParams);
    authFetchData({
        token,
        method:'get',
        url: routes.products + searchParams,
    })
        .then(res => {
            dispatch(fetchProductsSuccess(res))
            dispatch(push({
                pathname: '/products',
                search: `${searchParams}`
            }));
        })
        .catch(err => console.log("Error"));
}

export const fetchProductsSuccess = products => ({
    type: FETCH_PRODUCTS_SUCCESS, payload: products
})

export const setSearchParams = searchParams => ({
    type: SET_SEARCH_PARAMS_PRODUCT, payload: searchParams
})
export const addProduct = (product, token) => dispatch => {
    authFetchData({
        token,
        method:'post',
        url: routes.products,
        data: product
    })
        .then(() => {
            dispatch(reset('createProductsForm'))
            dispatch(fetchProduct(token))
            dispatch(hideCreateProductModal())
        })
        .catch(err => console.log("Errror"));
}
export const updateProduct = (product, productId, token) => dispatch => {
    authFetchData({
        token,
        method:'post',
        url: routes.products + productId,
        data: product
    })
        .then(() => {
            dispatch(reset('updateProductsForm'))
            dispatch(fetchProduct(token))
            dispatch(hideUpdateProductModal())
        })
        .catch(err => console.log("Errror"));
}
export const deleteProduct = (product, token) => dispatch => {
    authFetchData({
        token,
        method:'delete',
        url: routes.products + product.id,
        data: product
    })
        .then(() => {
            dispatch(fetchProduct(token))
        })
        .catch(err => console.log("Errror"));
}
export const showProduct = product => dispatch => {
    dispatch(setProductToEdit(product))
    dispatch(showProductModal());
}
export const editProduct = product => dispatch => {
    dispatch(setProductToEdit(product))
    dispatch(showUpdateProductModal());
}
export const setProductToEdit = product => ({
    type: SET_PRODUCT_TO_EDIT,
    payload: product
})
export const showPicture = () => dispatch => {
    dispatch(setToEditPicture());
}
export const setToEditPicture = ()  => ({
    type: SET_TO_EDIT_PICTURE
})