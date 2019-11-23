
import {
  SHOW_ADD_USER_MODAL, HIDE_ADD_USER_MODAL,
  SHOW_EDIT_CLIENT_MODAL, HIDE_EDIT_CLIENT_MODAL
} from '../actions/modals';
import {
  SHOW_CREATE_ORDER_MODAL, SHOW_CREATE_PRODUCT_ORDER, SHOW_EDIT_ORDER_MODAL, SHOW_ORDER_MODAL,
  HIDE_EDIT_ORDER_MODAL,HIDE_CREATE_ORDER_MODAL,  HIDE_SHOW_ORDER_MODAL, HIDE_CREATE_PRODUCT_ORDER,
  HIDE_EDIT_ITEM_PRODUCT, SHOW_EDIT_ITEM_PRODUCT
} from '../actions/modals';
import {
  SHOW_CATEGORY_MODAL, HIDE_SHOW_CATEGORY_MODAL,
  SHOW_EDIT_CATEGORY_MODAL, HIDE_EDIT_CATEGORY_MODAL,
  SHOW_CREATE_CATEGORY_MODAL, HIDE_CREATE_CATEGORY_MODAL
} from '../actions/modals';

import {SHOW_CREATE_PRODUCT_MODAL, HIDE_CREATE_PRODUCT_MODAL,
  SHOW_UPDATE_PRODUCT_MODAL, HIDE_UPDATE_PRODUCT_MODAL,
  SHOW_PRODUCT_MODAL, HIDE_PRODUCT_MODAL} from "../actions/modals";

const data = {
  showAddUserModal: false,
  showEditOrderModal: false,
  showCreateOrderModal: false,
  showOrder: false,
  showCreateItem: false,
  showEditItem: false,
  showCategory: false,
  showEditCategoryModal: false,
  showCreateCategoryModal: false,
  showEditClientModal: false,
  showEditProductModal: false,
  showAddProductModal: false,
  showCreateProductModal: false,
  showUpdateProductModal: false,
  showProductModal: false,
};

const reducer = (state = data, {type, payload}) => {
  switch (type) {
      //---------------------------------------------------------CLIENTS
    case SHOW_ADD_USER_MODAL: {
      return { ...state, showAddUserModal: true };
    }
    case HIDE_ADD_USER_MODAL: {
      return { ...state, showAddUserModal: false };
    }
    case SHOW_EDIT_CLIENT_MODAL: {
      return { ...state, showEditClientModal: true };
    }
    case HIDE_EDIT_CLIENT_MODAL: {
        return { ...state, showEditClientModal: false };
    }
      //---------------------------------------------------------ORDERS
    case SHOW_EDIT_ORDER_MODAL: {
      return { ...state, showEditOrderModal: true };
    }
    case HIDE_EDIT_ORDER_MODAL:
      return { ...state, showEditOrderModal: false };
    case SHOW_CREATE_ORDER_MODAL: {
      return { ...state, showCreateOrderModal: true };
    }
    case HIDE_CREATE_ORDER_MODAL:
      return { ...state, showCreateOrderModal: false };
    case SHOW_ORDER_MODAL: {
      return { ...state, showOrder: true };
    }
    case HIDE_SHOW_ORDER_MODAL:
      return { ...state, showOrder: false };
      //---------------------------------------------------------ITEM_PRODUCT
    case SHOW_EDIT_ITEM_PRODUCT:
      return { ...state, showEditItem: true };
    case HIDE_EDIT_ITEM_PRODUCT:
      return { ...state, showEditItem: false };
    case HIDE_CREATE_PRODUCT_ORDER:
      return { ...state, showCreateItem: false };
    case SHOW_CREATE_PRODUCT_ORDER:
      return { ...state, showCreateItem: true };
      //---------------------------------------------------------CATEGORY
    case SHOW_CATEGORY_MODAL: {
      return { ...state, showCategory: true };
    }
    case HIDE_SHOW_CATEGORY_MODAL:
      return {...state, showCategory: false};
    case SHOW_EDIT_CATEGORY_MODAL: {
      return { ...state, showEditCategoryModal: true };
    }
    case HIDE_EDIT_CATEGORY_MODAL:
      return { ...state, showEditCategoryModal: false };
    case SHOW_CREATE_CATEGORY_MODAL: {
      return { ...state, showCreateCategoryModal: true };
    }
    case HIDE_CREATE_CATEGORY_MODAL:
      return { ...state, showCreateCategoryModal: false };

      //---------------------------------------------------------PRODUCT
    case SHOW_CREATE_PRODUCT_MODAL:
      return { ...state, showCreateProductModal: true  };
    case HIDE_CREATE_PRODUCT_MODAL:
      return { ...state, showCreateProductModal: false  };
    case SHOW_UPDATE_PRODUCT_MODAL:
      return { ...state, showUpdateProductModal: true  };
    case HIDE_UPDATE_PRODUCT_MODAL:
      return { ...state, showUpdateProductModal: false  };
    case SHOW_PRODUCT_MODAL:
      return { ...state, showProductModal: true  };
    case HIDE_PRODUCT_MODAL:
      return { ...state, showProductModal: false  };

    default:
      return state;
  }
};

export default reducer;