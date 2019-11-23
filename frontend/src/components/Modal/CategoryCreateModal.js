import React from 'react';
import {connect} from "react-redux";
import {Field, reduxForm} from "redux-form";
import {Modal, ModalHeader, ModalBody, ModalFooter, Button, Form} from 'reactstrap'

import { hideCreateCategoryModal } from '../../actions/modals';
import {required, maxLengthCreator, validateImageRequired, validateImageFormat, validateImageSize} from "../../helpers/Validators/validators";
import '../Molecules/FormsControls/progressBar.scss'
import {InputField} from "../Molecules/FormsControls/InputField";
import {Textarea} from "../Molecules/FormsControls/TextareaField";
import {FileInput} from "../Molecules/FormsControls/FileInputField";

const maxLength10 = maxLengthCreator(10);
const CategoryCreateModal = (props) => {
    const { handleSubmit,submitting, pristine, showCreateCategoryModal, toggle, className, modalTranslate} = props;
    return (
        <Modal isOpen={showCreateCategoryModal} toggle={toggle} className={className}
               modalTransition={{ timeout: 300 }} backdropTransition={{ timeout: 700 }}>
            <Form onSubmit={handleSubmit} encType='multipart/form-data'>
                <ModalHeader toggle={toggle}>{modalTranslate.body.titleCreate}</ModalHeader>
                <ModalBody>
                    <Field type="text" name="name" id="name" placeholder={modalTranslate.label.name} component={InputField} validate={[required, maxLength10]} />
                    <Field type="text" name="description" id="description" placeholder={modalTranslate.label.description} component={Textarea} validate={[required]} />
                    <Field type="file" name="picture" id="picture" placeholder={modalTranslate.label.picture} component={FileInput} warn={validateImageRequired} validate={[ validateImageFormat, validateImageSize ]}/>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" disabled={pristine || submitting}>{modalTranslate.body.btnCreate}</Button>
                    <Button color="secondary" onClick={toggle}>{modalTranslate.body.btnCancel}</Button>
                </ModalFooter>
            </Form>
        </Modal>
    )
};

const createCategoryForm = reduxForm({
    form: 'createCategory',
    enableReinitialize: true
})(CategoryCreateModal);

export default connect(
    state => ({
        showCreateCategoryModal: state.modals.showCreateCategoryModal,
        modalTranslate: state.categories.translate.modals,
    }),
    dispatch => ({
        toggle: () => dispatch(hideCreateCategoryModal()),
    })
)(createCategoryForm);
