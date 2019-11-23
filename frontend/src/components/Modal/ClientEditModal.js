import React, {Component} from 'react';
import {connect} from "react-redux";
import {Field, reduxForm} from "redux-form";

import {Modal, ModalHeader, ModalBody, Button, Form, FormGroup, Col, ModalFooter} from 'reactstrap'
import { hideEditClientModal } from '../../actions/modals';
import {emailTest, phoneNumber, required} from "../../helpers/Validators/validators";
import {InputField} from "../Molecules/FormsControls/InputField";
import {PhoneInput} from "../Molecules/FormsControls/PhoneInputField";

class ClientEditModal extends Component {

    render() {
        const {showEditClientModal,handleSubmit,pristine,submitting,toggle, className, modalTranslate } = this.props;
        return (
            <Modal isOpen={showEditClientModal} toggle={toggle} className={className}
                   modalTransition={{ timeout: 300 }} backdropTransition={{ timeout: 700 }}>
                <Form onSubmit={handleSubmit}>
                    <ModalHeader toggle={toggle}>{modalTranslate.body.titleEdit}</ModalHeader>
                    <ModalBody>
                        <Field type="text" name="name" id="name" placeholder={modalTranslate.label.name} component={InputField} validate={[required]} />
                        <Field type="email" name="email" id="email" placeholder={modalTranslate.label.email} component={InputField} validate={[required, emailTest]} />
                        <Field type="text" name="phone" id="phone" placeholder="380 (xx) xxx-xx-xx" component={PhoneInput} validate={[phoneNumber, required]} />
                        <Field type="text" name="address" id="address" placeholder={modalTranslate.label.address} component={InputField} validate={[required]} />
                    </ModalBody>
                    <ModalFooter>
                        <FormGroup>
                            <Col sm={12}>
                                <Button color="primary" disabled={pristine || submitting} >{modalTranslate.body.btnEdit}</Button>{' '}
                                <Button color="secondary" onClick={toggle}>{modalTranslate.body.btnCancel}</Button>
                            </Col>
                        </FormGroup>
                    </ModalFooter>
                </Form>
            </Modal>
        )
    }
}

const editClient = reduxForm({
    form: 'editClient',
    enableReinitialize: true
})(ClientEditModal)

export default connect(
    state => ({
        initialValues: state.clients.selectedClient,
        showEditClientModal: state.modals.showEditClientModal,
        modalTranslate: state.clients.translate.modals,
    }),
    dispatch => ({
        toggle: () => dispatch(hideEditClientModal()),
    })
)(editClient);
