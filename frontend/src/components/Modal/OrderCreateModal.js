import React, {Component} from 'react';
import {connect} from "react-redux";
import {change, Field, reduxForm} from 'redux-form'
import {store} from "../../configureStore";
import queryString from "query-string";
import { Modal, ModalHeader, ModalBody, ModalFooter, Button, Form, FormGroup, Label, Input, Col, ListGroup, ListGroupItem} from 'reactstrap';
import {hideProductList, fetchCreateClientOrder, setSearchParamsClients} from "../../actions/orders";
import {hideCreateOrderModal, showCreateProductOrder } from "../../actions/modals"
import {InputField} from "../Molecules/FormsControls/InputField";

import '../Modal/ItemProduct/itemCreateProduct.scss';

class OrderCreateModal extends Component {

    render() {
        const { showCreateOrderModal, handleSubmit, modalTranslate, hideCreateOrderModal, hideProductList, clients, status, showListClientsOrder, pristine, submitting, pasteValue, setValueIdClient } = this.props;
        let statuses = [];
        for(let i = 0; i < status.length; i++) {
            statuses.push({ 'label': status[i], 'value': status[i] });
        }

        const handleSearchEvent = event => {
            const { setSearchParamsClients, fetchCreateClientOrder, access_token } = this.props;
            setSearchParamsClients({
                [event.target.name]: event.target.value
            })

            const { searchParamsClient } = store.getState().orders;
            const stringyField = queryString.stringify(searchParamsClient);

            fetchCreateClientOrder(access_token, stringyField);
        };
        const getClientList = (e) => {
            const nameClient = e.target.innerText;
            const idClient = e.target.id;
            const addressClient = e.target.getAttribute('data-address');
            const emailClient = e.target.getAttribute('data-email');
            const phoneClient = e.target.getAttribute('data-phone');

            document.getElementById('searchClient').value = nameClient;
            document.getElementById('address').value = addressClient;
            document.getElementById('email').value = emailClient;
            document.getElementById('phone').value = phoneClient;

            setValueIdClient(idClient);
            hideProductList();
        };
        return (
            <Modal isOpen={showCreateOrderModal} toggle={hideCreateOrderModal}
                   modalTransition={{ timeout: 300 }} backdropTransition={{ timeout: 700 }}>
                <Form onSubmit={handleSubmit}>
                    <ModalHeader toggle={hideCreateOrderModal}>{modalTranslate.body.titleCreate}</ModalHeader>
                    <ModalBody>
                        <h3 className="py-2">{modalTranslate.body.subTitle}:</h3>
                        <FormGroup row className="formGrup">
                            <Field name="client_id" type='hidden' component='input'/>
                            <Label style={{fontSize: 14}} for="customer" sm={3}>{modalTranslate.label.customer}</Label>
                            <Col sm={8}>
                                { !pasteValue ? (
                                        <Input type="text" name="name" id="searchClient" placeholder={modalTranslate.label.customer} style={{width: 300, height: 35}}
                                               className="inputGrup" autoComplete="off" onChange={handleSearchEvent}/>
                                    ) : (
                                        <input
                                            type="text" name="name" id="searchClient" className="inputGrup form-control" style={{width: 300, height: 35}}
                                            placeholder={modalTranslate.label.customer} autoComplete="off" onChange={handleSearchEvent}/>
                                    )
                                }
                                { showListClientsOrder &&
                                    <div className='listOver'>
                                        <ListGroup className='listGrup'>
                                            { clients.length > 0 && clients.map((item, index) => (
                                                    <ListGroupItem key={index} id={item.id} data-address={item.address} data-phone={item.phone}
                                                                   data-email={item.email} action onClick={getClientList}>{item.name}</ListGroupItem>))
                                            }
                                        </ListGroup>
                                    </div>
                                }
                            </Col>
                        </FormGroup>
                        <Field type="text" name="phone" id="phone" placeholder={modalTranslate.label.phone} component={InputField} disabled />
                        <Field type="text" name="email" id="email" placeholder={modalTranslate.label.email} component={InputField} disabled />
                        <Field type="text" name="address" id="address" placeholder={modalTranslate.label.address} component={InputField} disabled />
                        {/*<Field type="text" name="status" placeholder={modalTranslate.label.status} component={SelectField} options={statuses} validate={[required]} />*/}
                    </ModalBody>
                    <ModalFooter>
                        <FormGroup>
                            <Col sm={12}>
                                <Button color="primary" disabled={pristine || submitting}>{modalTranslate.body.btnCreate}</Button>{' '}
                                <Button color="secondary" onClick={hideCreateOrderModal}>{modalTranslate.body.btnCancel}</Button>
                            </Col>
                        </FormGroup>
                    </ModalFooter>
                </Form>
            </Modal>
        )
    }
}

const createNewOrder = reduxForm({
    form: 'createNewOrder',
    enableReinitialize: true
})(OrderCreateModal);

export default connect(
    state => ({
        clients: state.orders.client,
        status: state.orders.statuses,
        items: state.orders.selectedOrder.items,
        showListClientsOrder: state.orders.showListClientsOrder,
        pasteValue: state.orders.pasteValue,
        showCreateProduct: state.orders.showCreateProduct,
        showCreateOrderModal: state.modals.showCreateOrderModal,
        modalTranslate: state.orders.translate.modals,
        access_token: state.auth.access_token,
    }),
    dispatch => ({
        setValueIdClient: (val) => dispatch(change('createNewOrder', 'client_id', val)),
        fetchCreateClientOrder: (token,searchParams = '') => dispatch(fetchCreateClientOrder(token,searchParams)),
        setSearchParamsClients: searchParams => dispatch(setSearchParamsClients(searchParams)),
        showCreateProductOrder: () => dispatch(showCreateProductOrder()),
        hideCreateOrderModal: () => dispatch(hideCreateOrderModal()),
        hideProductList: () => {dispatch(hideProductList())},
    })
)(createNewOrder);
