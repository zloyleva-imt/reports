import React, {Component} from 'react';
import {connect} from "react-redux";
import { Field, reduxForm } from 'redux-form'

import {Modal, ModalHeader, ModalBody, ModalFooter, Button, Form, FormGroup, Col} from 'reactstrap'

import { hideAddUserModal } from '../../actions/modals';
import { emailTest, required, phoneNumber } from "../../helpers/Validators/validators";

import 'react-phone-number-input/style.css';
import {InputField} from "../Molecules/FormsControls/InputField";
import {PhoneInput} from "../Molecules/FormsControls/PhoneInputField";

class ClientCreateModal extends Component {

    render() {
        const { showAddUserModal, hideAddUserModal, handleSubmit, className, pristine, submitting, modalTranslate } = this.props;

        return (
            <Modal isOpen={showAddUserModal} toggle={hideAddUserModal} className={className}
                   modalTransition={{ timeout: 300 }} backdropTransition={{ timeout: 700 }}>
                <Form onSubmit={handleSubmit}>
                    <ModalHeader toggle={hideAddUserModal}>{modalTranslate.body.titleCreate}</ModalHeader>
                    <ModalBody>
                        <h3 className="py-2">{modalTranslate.body.subTitle}:</h3>
                        <Field type="text" name="name" id="name" placeholder={modalTranslate.label.name} component={InputField} validate={[required]} />
                        <Field type="email" name="email" id="email" placeholder={modalTranslate.label.email} component={InputField} validate={[required, emailTest]} />
                        <Field type="text" name="phone" id="phone" placeholder="380 (xx) xxx-xx-xx" component={PhoneInput} validate={[phoneNumber, required]} />
                        <Field type="text" name="address" id="address" placeholder={modalTranslate.label.address} component={InputField} validate={[required]} />
                    </ModalBody>
                    <ModalFooter>
                        <FormGroup>
                            <Col sm={12}>
                                <Button color="primary" disabled={pristine || submitting} >{modalTranslate.body.btnCreate}</Button>{' '}
                                <Button color="secondary" onClick={hideAddUserModal}>{modalTranslate.body.btnCancel}</Button>
                            </Col>
                        </FormGroup>
                    </ModalFooter>
                </Form>
            </Modal>
        )
    }
}

const createNewUser = reduxForm({form: 'newUser'})(ClientCreateModal)

export default connect(
    state => ({
        showAddUserModal: state.modals.showAddUserModal,
        modalTranslate: state.clients.translate.modals,
    }),
    dispatch => ({
        hideAddUserModal: () => dispatch(hideAddUserModal()),
    })
)(createNewUser);
