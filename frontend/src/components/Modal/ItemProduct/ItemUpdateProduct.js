import React from 'react';
import {connect} from "react-redux";
import {Field, reduxForm} from "redux-form";
import {Button, Form, Modal, ModalBody, ModalFooter, ModalHeader} from "reactstrap";

import { hideEditItemProduct } from "../../../actions/modals";
import {InputField} from "../../Molecules/FormsControls/InputField";
import {alphaNumeric, required} from "../../../helpers/Validators/validators";

const ItemUpdateProduct = (props) => {
    const { showEditItem, handleSubmit, modalTranslate, className, pristine, submitting, hideEditItemProduct} = props;
        return (
            <Modal isOpen={showEditItem} toggle={hideEditItemProduct} className={className} modalTransition={{ timeout: 300 }} backdropTransition={{ timeout: 700 }}>
                <Form onSubmit={handleSubmit}>
                    <ModalHeader toggle={hideEditItemProduct}>{modalTranslate.editProduct.titleEditProduct}</ModalHeader>
                    <ModalBody>
                        <Field type="text" name="product.name" id="product" placeholder={modalTranslate.editProduct.label.name} component={InputField} disabled />
                        <Field type="text" name="price" id="price" placeholder={modalTranslate.editProduct.label.price} component={InputField} disabled />
                        <Field type="text" name="count" id="count" placeholder={modalTranslate.editProduct.label.amount} component={InputField} warn={required} validate={[alphaNumeric]} />
                    </ModalBody>
                    <ModalFooter>
                        <Button disabled={pristine || submitting} color="primary">{modalTranslate.editProduct.btnEdit}</Button>
                        <Button color="secondary" onClick={hideEditItemProduct}>{modalTranslate.editProduct.btnCancel}</Button>
                    </ModalFooter>
                </Form>
            </Modal>
        );
};

const editItemProductForm = reduxForm({
    form: 'editItemProduct',
    enableReinitialize: true
})(ItemUpdateProduct);

export default connect(
    state => ({
        initialValues: state.orders.selectedItem,
        selectedItem: state.orders.selectedItem,
        showEditItem: state.modals.showEditItem,
        modalTranslate: state.orders.translate.modals,
    }),
    dispatch => ({
        hideEditItemProduct: () => dispatch(hideEditItemProduct()),
    })
)(editItemProductForm);