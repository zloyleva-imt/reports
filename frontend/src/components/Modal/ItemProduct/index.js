import React from 'react';
import {connect} from "react-redux";
import {Col, Row, Button, Table} from 'reactstrap';

import ProductItem from "./ItemProduct";

import { fetchOrdersProducts, setSearchParams, hideProductList } from '../../../actions/orders';
import {showCreateProductOrder} from "../../../actions/modals"

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const AddItemProduct = (props) => {
    const { showCreateProductOrder, items, modalTranslate, token } = props;

    return (
        <div>
            <Row>
                <Col md={7}><h3>{modalTranslate.addProduct.titleAddProduct}:</h3></Col>
                <Col md={5} ><Button outline size="sm" color="success" onClick={showCreateProductOrder}>{modalTranslate.addProduct.btnProduct}<FontAwesomeIcon icon={faPlus} className="ml-2"/></Button></Col>
            </Row>
            <hr className="my-2"/>

            <Table hover>
                <thead>
                <tr>
                    <th>#</th>
                    <th>{modalTranslate.addProduct.label.name}</th>
                    <th>{modalTranslate.addProduct.label.price}</th>
                    <th>{modalTranslate.addProduct.label.amount}</th>
                </tr>
                </thead>
                {
                    items.map((item, index) => (
                        <ProductItem edit={false} item={item} index={index} key={index} token={token}/>
                    ))
                }
            </Table>
        </div>
    )
}

// const createNewItemProduct = (productData, id, createItem, token) => {
//     createItem(productData, id, token)
// }

export default connect(
    state => ({
        item: state.orders.newItem,
        order: state.orders.selectedOrder,
        id: state.orders.selectedOrder.id,
        products: state.orders.products,
        access_token: state.auth.access_token,
        showList: state.orders.showList,
        pasteValue: state.orders.pasteValue,
        showCreateItem: state.modals.showCreateItem,
        modalTranslate: state.orders.translate.modals,
    }),
    dispatch => ({
        hideProductList: () => {dispatch(hideProductList())},
        fetchOrdersProducts: (token,searchParams = '') => dispatch(fetchOrdersProducts(token,searchParams)),
        setSearchParams: searchParams => dispatch(setSearchParams(searchParams)),
        showCreateProductOrder: () => dispatch(showCreateProductOrder()),
        // createItem: (productData, id, token) => dispatch(createItem(productData, id, token)),
    })
)(AddItemProduct);
