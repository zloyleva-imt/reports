import {authFetchData} from '../helpers/authFetchData'
import routes from '../routes'
import {push} from "react-router-redux";
import {reset} from 'redux-form';

import {hideEditCategoryModal, hideCreateCategoryModal, showEditCategoryModal} from "./modals";

export const FETCH_CATEGORY_SUCCESS = 'FETCH_CATEGORY_SUCCESS';
export const SET_SEARCH_PARAMS_CATEGORY = 'SET_SEARCH_PARAMS_CATEGORY';
export const SET_CATEGORY_TO_SHOW = 'SET_CATEGORY_TO_SHOW';
export const SET_CATEGORY_TO_EDIT = 'SET_CATEGORY_TO_EDIT';
export const SET_TO_EDIT_PICTURE = 'SET_TO_EDIT_PICTURE';


export const fetchCategories = (token,searchParams) => dispatch => {
    searchParams = searchParams?`?${searchParams}`:''
    authFetchData({
        token,
        method:'get',
        url: routes.categories + searchParams
    })
        .then(res => {
            dispatch(fetchCategorySuccess(res))
            dispatch(push({
                pathname: '/categories',
                search: `${searchParams}`
            }));
        })
};
export const fetchCategorySuccess = category => ({
    type: FETCH_CATEGORY_SUCCESS, payload: category
});
export const addCategory = (category, token) => dispatch => {
    authFetchData({
        token,
        method:'post',
        url: routes.categories,
        data: category
    })
        .then(() => {
            dispatch(reset('createCategory'))
            dispatch(fetchCategories(token))
            dispatch(hideCreateCategoryModal())
        })
        .catch(err => console.log("Errror"));
};
export const updateCategory = (category, categoryId, token) => dispatch => {
    authFetchData({
        token,
        method:'post',
        url: routes.categories + categoryId,
        data: category
    })
        .then(() => {
            dispatch(reset('editCategory'));
            dispatch(fetchCategories(token))
            dispatch(hideEditCategoryModal())
        })
        .catch(err => console.log("Errror"));
};
export const deleteCategory = (category, token) => dispatch => {
    authFetchData({
        token,
        method:'delete',
        url: routes.categories + category.id,
        data: category
    })
        .then(() => {
            dispatch(fetchCategories(token))
        })
        .catch(err => console.log("Errror"));
};

export const setSearchParamsCategory = searchParams => ({
    type: SET_SEARCH_PARAMS_CATEGORY, payload: searchParams
});

export const editCategory = category => dispatch => {
    dispatch(setCategoryToEdit(category))
    dispatch(showEditCategoryModal());
};

export const setCategoryToEdit = category => ({
    type: SET_CATEGORY_TO_EDIT,
    payload: category
});
export const showPicture = () => dispatch => {
    dispatch(setToEditPicture());
};
export const setToEditPicture = ()  => ({
    type: SET_TO_EDIT_PICTURE
});