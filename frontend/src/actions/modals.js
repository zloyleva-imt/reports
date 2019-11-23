export const SHOW_ADD_USER_MODAL = 'SHOW_ADD_USER_MODAL';
export const HIDE_ADD_USER_MODAL = 'HIDE_ADD_USER_MODAL';
export const SHOW_EDIT_CLIENT_MODAL = 'SHOW_EDIT_CLIENT_MODAL';
export const HIDE_EDIT_CLIENT_MODAL = 'HIDE_EDIT_CLIENT_MODAL';

export const SHOW_CREATE_ORDER_MODAL = 'SHOW_CREATE_ORDER_MODAL';
export const SHOW_EDIT_ORDER_MODAL = 'SHOW_EDIT_ORDER_MODAL';
export const SHOW_ORDER_MODAL = 'SHOW_ORDER_MODAL';
export const SHOW_CREATE_PRODUCT_ORDER = 'SHOW_CREATE_PRODUCT_ORDER';
export const HIDE_CREATE_ORDER_MODAL = 'HIDE_CREATE_ORDER_MODAL';
export const HIDE_EDIT_ORDER_MODAL = 'HIDE_EDIT_ORDER_MODAL';
export const HIDE_SHOW_ORDER_MODAL = 'HIDE_SHOW_ORDER_MODAL';
export const HIDE_CREATE_PRODUCT_ORDER = 'HIDE_CREATE_PRODUCT_ORDER';
export const SHOW_EDIT_ITEM_PRODUCT = 'SHOW_EDIT_ITEM_PRODUCT';
export const HIDE_EDIT_ITEM_PRODUCT = 'HIDE_EDIT_ITEM_PRODUCT';

export const SHOW_CATEGORY_MODAL = 'SHOW_CATEGORY_MODAL';
export const HIDE_SHOW_CATEGORY_MODAL = 'HIDE_SHOW_CATEGORY_MODAL';
export const SHOW_EDIT_CATEGORY_MODAL = 'SHOW_EDIT_CATEGORY_MODAL';
export const HIDE_EDIT_CATEGORY_MODAL = 'HIDE_EDIT_CATEGORY_MODAL';
export const SHOW_CREATE_CATEGORY_MODAL = 'SHOW_CREATE_CATEGORY_MODAL';
export const HIDE_CREATE_CATEGORY_MODAL = 'HIDE_CREATE_CATEGORY_MODAL';

export const SHOW_CREATE_PRODUCT_MODAL = 'SHOW_CREATE_PRODUCT_MODAL';
export const HIDE_CREATE_PRODUCT_MODAL = 'HIDE_CREATE_PRODUCT_MODAL';
export const SHOW_UPDATE_PRODUCT_MODAL = 'SHOW_UPDATE_PRODUCT_MODAL';
export const HIDE_UPDATE_PRODUCT_MODAL = 'HIDE_UPDATE_PRODUCT_MODAL';
export const SHOW_PRODUCT_MODAL = 'SHOW_PRODUCT_MODAL';
export const HIDE_PRODUCT_MODAL = 'HIDE_PRODUCT_MODAL';

//---------------------------------------------------------CLIENTS
export const showAddUserModal = () => ({
  type: SHOW_ADD_USER_MODAL
})

export const hideAddUserModal = () => ({
  type: HIDE_ADD_USER_MODAL
})

export const showEditClientModal = () => ({
  type: SHOW_EDIT_CLIENT_MODAL
})
export const hideEditClientModal = () => ({
  type: HIDE_EDIT_CLIENT_MODAL
})
//---------------------------------------------------------ORDERS
export const showEditOrderModal = () => ({
  type: SHOW_EDIT_ORDER_MODAL
})
export const hideEditOrderModal = () => ({
  type: HIDE_EDIT_ORDER_MODAL
})
//---------------------------------------------------------
export const showOrderModal = () => ({
  type: SHOW_ORDER_MODAL
})
//---------------------------------------------------------
export const showCreateOrderModal = () => ({
  type: SHOW_CREATE_ORDER_MODAL
})
export const hideCreateOrderModal = () => ({
  type: HIDE_CREATE_ORDER_MODAL
})
//---------------------------------------------------------ITEM_PRODUCT
export const editItem = () => ({
  type: SHOW_EDIT_ITEM_PRODUCT
})
export const hideEditItemProduct = () => ({
  type: HIDE_EDIT_ITEM_PRODUCT
})
export const showCreateProductOrder = () => ({
  type: SHOW_CREATE_PRODUCT_ORDER
})
export const hideCreateProductOrder = () => ({
  type: HIDE_CREATE_PRODUCT_ORDER
})
//---------------------------------------------------------CATEGORY
export const showEditCategoryModal = () => ({
  type: SHOW_EDIT_CATEGORY_MODAL
})
export const hideEditCategoryModal = () => ({
  type: HIDE_EDIT_CATEGORY_MODAL
})
export const showCreateCategoryModal = () => ({
  type: SHOW_CREATE_CATEGORY_MODAL
})
export const hideCreateCategoryModal = () => ({
  type: HIDE_CREATE_CATEGORY_MODAL
})
//---------------------------------------------------------PRODUCT
export const showCreateProductModal = () => ({
  type: SHOW_CREATE_PRODUCT_MODAL
})
export const hideCreateProductModal = () => ({
  type: HIDE_CREATE_PRODUCT_MODAL
})
export const showUpdateProductModal = () => ({
  type: SHOW_UPDATE_PRODUCT_MODAL
})
export const hideUpdateProductModal = () => ({
  type: HIDE_UPDATE_PRODUCT_MODAL
})
export const showProductModal = () => ({
  type: SHOW_PRODUCT_MODAL
})