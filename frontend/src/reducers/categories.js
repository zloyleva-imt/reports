import data from '../initData/dataCategories';
import {
    FETCH_CATEGORY_SUCCESS, SET_SEARCH_PARAMS_CATEGORY, SET_CATEGORY_TO_SHOW,
    SET_CATEGORY_TO_EDIT, SET_TO_EDIT_PICTURE
} from '../actions/categories';

const reducer = (state = data, { type,payload }) => {
    switch (type) {

        case FETCH_CATEGORY_SUCCESS:
            return {...state, ...payload};
        case SET_SEARCH_PARAMS_CATEGORY:
            return {...state, searchParams: { ...state.searchParams, ...payload }};
        case SET_CATEGORY_TO_SHOW:
            return {...state, selectedCategory: payload};
        case SET_CATEGORY_TO_EDIT:
            return {...state, selectedCategory: payload};
        case SET_TO_EDIT_PICTURE:
            return { ...state, setToUpdatePicture: !state.setToUpdatePicture };

        default:
            return state;
    }
};

export default reducer;