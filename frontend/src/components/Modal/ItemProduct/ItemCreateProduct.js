import React, {Component} from 'react';
import {connect} from "react-redux";
import {change, Field, reduxForm} from "redux-form";
import {store} from "../../../configureStore";
import queryString from "query-string";
import { Button, Col, FormGroup, Input, Label, ListGroup, ListGroupItem, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";

import { hideCreateProductOrder } from "../../../actions/modals";
import {fetchOrdersProducts, hideProductList, setSearchParams} from "../../../actions/orders";

import './itemCreateProduct.scss';
import {InputField} from "../../Molecules/FormsControls/InputField";
import {alphaNumeric, required} from "../../../helpers/Validators/validators";

class ItemCreateProduct extends Component {
    handleSearchEvent = event => {
        const { setSearchParams, fetchOrdersProducts, access_token } = this.props;
        setSearchParams({
            [event.target.name]: event.target.value
        });
        const { searchParams } = store.getState().orders;
        const stringyField = queryString.stringify(searchParams);
        fetchOrdersProducts(access_token, stringyField);
    };
    render() {
        const {item, modalTranslate, toggle, hideProductList, showCreateProduct, handleSubmit, showList, pasteValue, products, className, pristine, submitting, setValue, setProdId} = this.props;
        const getValue = (e) => {
            const name = e.target.innerText;
            const idProduct = e.target.id;
            const priceProduct = e.target.getAttribute('data-price');

            document.getElementById('searchInput').value = name;
            document.getElementById('price').value = priceProduct;
            setValue(name);
            setProdId(idProduct);
            hideProductList()
        }
        return (
            <Modal isOpen={showCreateProduct} toggle={toggle} className={className} modalTransition={{ timeout: 300 }} backdropTransition={{ timeout: 700 }}>
                <form onSubmit={handleSubmit}>
                    <div className="my-2 rounded bg-docs-transparent-grid">
                        <ModalHeader toggle={toggle}>{modalTranslate.addProduct.titleCreateProduct}</ModalHeader>
                        <ModalBody>
                            <FormGroup row className="formGrup">
                                <Label for="searchInput" sm={3}>{modalTranslate.editProduct.label.name}</Label>
                                <Col sm={9}>
                                    <Field name="name" type='hidden' component='input'/>
                                    <Field name="product_id" type='hidden' component='input'/>
                                    {
                                        !pasteValue ? (
                                            <Input type="text" name="search" id="searchInput"
                                                   defaultValue={item.product.name} placeholder={modalTranslate.editProduct.label.name}
                                                   className="inputGrup" onChange={this.handleSearchEvent} autocomplete="off" style={{width: 300, height: 35}}
                                            />
                                        ) : (
                                            <input
                                                type="text" name="search" id="searchInput" className="inputGrup form-control"
                                                defaultValue={item.product.name} placeholder={modalTranslate.editProduct.label.name}
                                                onChange={this.handleSearchEvent} autocomplete="off" style={{width: 300, height: 35}}
                                            />
                                        )
                                    }
                                    {
                                        showList &&
                                        <div className='listOver'>
                                            <ListGroup className='listGrup'>
                                                {
                                                    products.length > 0 &&
                                                    products.map((item, index) => (
                                                        <ListGroupItem key={index} id={item.id} data-price={item.price} action
                                                                       onClick={getValue}>{item.name}</ListGroupItem>
                                                    ))
                                                }
                                            </ListGroup>
                                        </div>
                                    }
                                </Col>
                            </FormGroup>
                            <Field type="text" name="price" id="price" placeholder={modalTranslate.editProduct.label.price} component={InputField} disabled />
                            <Field type="text" name="count" id="count" placeholder={modalTranslate.editProduct.label.amount} component={InputField} warn={required} validate={[alphaNumeric]}/>
                        </ModalBody>
                        <ModalFooter>
                            <Button disabled={pristine || submitting} color="primary">{modalTranslate.editProduct.btnCreate}</Button>
                            <Button color="secondary" onClick={toggle}>{modalTranslate.editProduct.btnCancel}</Button>
                        </ModalFooter>
                    </div>
                </form>
            </Modal>

        );
    }
}

const createNewItemProduct = reduxForm({form: 'newItemProduct'})(ItemCreateProduct);

export default connect(
    state => ({
        initialValues: state.orders.selectedItem,
        showCreateProduct: state.modals.showCreateItem,
        item: state.orders.newItem,
        order: state.orders.selectedOrder,
        products: state.orders.products,
        access_token: state.auth.access_token,
        showList: state.orders.showList,
        pasteValue: state.orders.pasteValue,
        modalTranslate: state.orders.translate.modals,
    }),
    dispatch => ({
        toggle: () => dispatch(hideCreateProductOrder()),
        setValue: (val) => dispatch(change('newItemProduct', 'name', val)),
        setProdId: (val) => dispatch(change('newItemProduct', 'product_id', val)),
        hideProductList: () => {dispatch(hideProductList())},
        fetchOrdersProducts: (token,searchParams = '') => dispatch(fetchOrdersProducts(token,searchParams)),
        setSearchParams: searchParams => dispatch(setSearchParams(searchParams)),
    })
)(createNewItemProduct);