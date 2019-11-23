import React from 'react';
import './App.css';
import { Container, Row } from 'reactstrap';
import {Route} from "react-router-dom";

import {addOrder, createItem, updateOrder, updateProductItem} from '../../actions/orders';
import { addClient,updateClient } from '../../actions/clients'
import { updateCategory, addCategory } from '../../actions/categories'
import { addProduct, updateProduct } from '../../actions/products'

import Header from '../Header';
import Orders from '../Orders';
import Clients from '../Clients';
import Products from '../Products';
import Categories from '../Categories';
import Login from '../Login';
import OrderCreateModal from '../Modal/OrderCreateModal';
import OrderEditModal from '../Modal/OrderEditModal';
import ClientEditModal from '../Modal/ClientEditModal';
import ClientCreateModal from '../Modal/ClientCreateModal';
import ProductEditModal from '../Modal/ProductEditModal';
import CategoryEditModal from '../Modal/CategoryEditModal';
import CategoryCreateModal from '../Modal/CategoryCreateModal';
import ProductCreateModal from "../Modal/ProductCreateModal";
import {connect} from "react-redux";
import ItemUpdateProduct from "../Modal/ItemProduct/ItemUpdateProduct";
import ItemCreateProduct from "../Modal/ItemProduct/ItemCreateProduct";
import Sidebar from "../Sidebar";

let App = ({token, addClient, addOrder, updateClient, updateOrder, updateProductItem, createItem, orderId, productId, categoryId, updateCategory, addCategory, addProduct, updateProduct, modalTranslate, logoutUrl}) => (

    <Container fluid style={{height: 100 + 'vh'}}>
        <Sidebar modalTranslate={modalTranslate} logoutUrl={logoutUrl} token={token}/>
        <Header/>

        <Row className="d-flex justify-content-end">
            <Route path="/" component={Orders} exact/>
            <Route path="/clients" component={Clients} />
            <Route path="/categories" component={Categories} />
            <Route path="/products" component={Products} />
            <Route path="/login" component={Login} />
        </Row>

        <OrderEditModal onSubmit={value => editOrder(value,updateOrder,token)}/>
        <OrderCreateModal onSubmit={value => createNewOrder(value,addOrder, token)}/>
        <ItemUpdateProduct onSubmit={value => editItem(value, updateProductItem, orderId, token)}/>
        <ItemCreateProduct onSubmit={value => createNewItemProduct(value, orderId, createItem, token)}/>
        <ClientEditModal onSubmit={value => editUser(value,updateClient,token)}/>
        <ClientCreateModal onSubmit={value => createNewUser(value,addClient, token)} />
        <ProductCreateModal onSubmit={value => createProduct(value,addProduct,token)}/>
        <ProductEditModal onSubmit={value => editProduct(value, productId, updateProduct, token)}/>
        <CategoryCreateModal onSubmit={value => createCategory(value,addCategory,token)}/>
        <CategoryEditModal onSubmit={value => editCategory(value, categoryId, updateCategory, token)}/>
    </Container>
);

const createNewUser = (userData, addClient, token) => {
  addClient(userData, token)
};
const editUser = (userData, updateClient, token) => {
    updateClient(userData, token)
};

const createNewOrder = (orderData, addOrder, token) => {
    addOrder(orderData, token)
};
const editOrder = (orderData, updateOrder, token) => {
    const newOrderData = { ...orderData, status: orderData.status.value };
    updateOrder(newOrderData, token)
};

const editItem = (itemData, updateProductItem, orderId, token) => {
    updateProductItem(itemData, orderId, token)
};
const createNewItemProduct = (productData, id, createItem, token) => {
    createItem(productData, id, token)
};

const editCategory = (categoryData, categoryId, updateCategory, token) => {
    let formDataCategoryEdit = new FormData();
    formDataCategoryEdit.append('picture', categoryData.picture);
    formDataCategoryEdit.append('name', categoryData.name);
    formDataCategoryEdit.append('description', categoryData.description);
    formDataCategoryEdit.append('_method', 'put');
    updateCategory(formDataCategoryEdit, categoryId, token)
};
const createCategory = (categoryData, addCategory, token) => {
    let formDataCategory = new FormData();
    formDataCategory.append('picture', categoryData.picture);
    formDataCategory.append('name', categoryData.name);
    formDataCategory.append('description', categoryData.description);
    addCategory(formDataCategory, token)
};

const createProduct = ( productData, addProduct, token) => {
    let formDataProduct = new FormData();
    formDataProduct.append('picture', productData.picture);
    formDataProduct.append('category_id', productData.category_id);
    formDataProduct.append('name', productData.name);
    formDataProduct.append('description', productData.description);
    formDataProduct.append('price', productData.price);
    addProduct(formDataProduct, token)
};
const editProduct = (productData, productId, updateProduct, token) => {
    let formDataProductEdit = new FormData();
    formDataProductEdit.append('picture', productData.picture);
    formDataProductEdit.append('category_id', productData.category_id);
    formDataProductEdit.append('name', productData.name);
    formDataProductEdit.append('description', productData.description);
    formDataProductEdit.append('price', productData.price);
    formDataProductEdit.append('_method', 'put');
    updateProduct(formDataProductEdit, productId, token)
};

App = connect(
  state => ({
    token: state.auth.access_token,
    orderId: state.orders.selectedOrder.id,
    productId: state.products.selectedProduct.id,
    categoryId: state.categories.selectedCategory.id,
    modalTranslate: state.orders.translate.menu,
    logoutUrl: state.routes.logout
  }),
  dispatch => ({
    addClient: (userData,token) => dispatch(addClient(userData,token)),
    addOrder: (orderData,token) => dispatch(addOrder(orderData,token)),
    updateClient: (userData,token) => dispatch(updateClient(userData,token)),
    updateOrder: (orderData,token) => dispatch(updateOrder(orderData,token)),
    updateProductItem: (itemData, orderId, token) => dispatch(updateProductItem(itemData, orderId, token)),
    createItem: (productData, id, token) => dispatch(createItem(productData, id, token)),
    updateCategory: (categoryData, id, token) => dispatch(updateCategory(categoryData, id, token)),
    addCategory: (categoryData,token) => dispatch(addCategory(categoryData,token)),
    addProduct: (productData,token) => dispatch(addProduct(productData,token)),
    updateProduct: (productData, id, token) => dispatch(updateProduct(productData, id, token)),
  })
)(App);

export { App }
