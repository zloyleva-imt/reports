import React from 'react';
import {connect} from "react-redux";
import {Field, reduxForm} from "redux-form";
import { Modal, ModalHeader, ModalBody, ModalFooter, Button, Form, FormGroup, Col } from 'reactstrap';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlus} from "@fortawesome/free-solid-svg-icons";
import {hideEditOrderModal, showCreateProductOrder} from '../../actions/modals'
import AddItemProduct from './ItemProduct';
import {InputField} from "../Molecules/FormsControls/InputField";
import {SelectField} from "../Molecules/FormsControls/SelectField";
import 'bootstrap/dist/css/bootstrap.css';

const OrderEditModal = (props) => {
    const { handleSubmit,showEditOrderModal,className, items, status, modalTranslate, token, showCreateProductOrder, hideEditOrderModal} = props;
    let statuses = [];
    for(let i = 0; i < status.length; i++) {
        statuses.push({ 'label': status[i], 'value': status[i] });
    };
    return (
        <Modal isOpen={showEditOrderModal} toggle={hideEditOrderModal} className={className}
               modalTransition={{ timeout: 300 }} backdropTransition={{ timeout: 700 }}>
            <Form onSubmit={handleSubmit}>
            <ModalHeader toggle={hideEditOrderModal}>{modalTranslate.body.titleEdit}</ModalHeader>
            <ModalBody>
                <h3 className="py-3">{modalTranslate.body.subTitle}:</h3>
                <Field type="text" name="client.name" id="name" placeholder={modalTranslate.label.customer} component={InputField} disabled />
                <Field type="text" name="date" id="date" placeholder={modalTranslate.label.date} component={InputField} disabled />
                <Field type="text" name="client.phone" id="phone" placeholder={modalTranslate.label.phone} component={InputField} disabled />
                <Field type="text" name="client.email" id="email" placeholder={modalTranslate.label.email} component={InputField} disabled />
                <Field type="text" name="client.address" id="address" placeholder={modalTranslate.label.address} component={InputField} disabled />
                <Field type="text" name="price" id="total" placeholder={modalTranslate.label.total} component={InputField} disabled />
                <Field type="text" name="status" placeholder={modalTranslate.label.status} component={SelectField} options={statuses}/>
                {
                    items.length === 0 &&
                    <FormGroup check row>
                        <Col sm={{ size: 10, offset: 6 }}>
                            <Button outline size="sm" color="success" onClick={showCreateProductOrder}>{modalTranslate.addProduct.btnProduct}<FontAwesomeIcon icon={faPlus} className="ml-2"/></Button>
                        </Col>
                    </FormGroup>
                }
                {
                    items.length > 0 &&
                    <AddItemProduct items={items} token={token}/>
                }
            </ModalBody>
            <ModalFooter>
                <Button color="primary">{modalTranslate.body.btnEdit}</Button>
                <Button color="secondary" onClick={hideEditOrderModal}>{modalTranslate.body.btnCancel}</Button>
            </ModalFooter>
        </Form>
        </Modal>
    )
}

const editOrderForm = reduxForm({
    form: 'editOrder',
    enableReinitialize: true,
    keepDirtyOnReinitialize: true,
})(OrderEditModal);

export default connect(
    state => ({
        initialValues: state.orders.selectedOrder,
        selectedOrder: state.orders.selectedOrder,
        status: state.orders.statuses,
        items: state.orders.selectedOrder.items,
        access_token: state.auth.access_token,
        showCreateItem: state.modals.showCreateItem,
        showEditOrderModal: state.modals.showEditOrderModal,
        modalTranslate: state.orders.translate.modals,
    }),
    dispatch => ({
        showCreateProductOrder: () => dispatch(showCreateProductOrder()),
        hideEditOrderModal: () => dispatch(hideEditOrderModal()),
    })
)(editOrderForm);
