import data from '../initData/dataProducts';

import {
    FETCH_PRODUCTS_SUCCESS, SET_SEARCH_PARAMS_CATEGORY_PRODUCT, SET_SEARCH_PARAMS_PRODUCT,
    SET_PRODUCT_TO_EDIT, SET_TO_EDIT_PICTURE
} from '../actions/products';

const reducer = (state = data, { type,payload }) => {
    switch (type) {
        case FETCH_PRODUCTS_SUCCESS:
            return {...state, ...payload};
        case SET_SEARCH_PARAMS_PRODUCT:
            return {...state, searchParams: { ...state.searchParams, ...payload }};
        case SET_SEARCH_PARAMS_CATEGORY_PRODUCT:
            return {...state, searchParamsCategoryProduct: { ...state.searchParamsCategoryProduct, ...payload }};
        case SET_PRODUCT_TO_EDIT:
            return {...state, selectedProduct: payload};
        case SET_TO_EDIT_PICTURE:
            return { ...state, setToUpdatePicture: !state.setToUpdatePicture };

        default:
            return state;
    }
};

export default reducer;