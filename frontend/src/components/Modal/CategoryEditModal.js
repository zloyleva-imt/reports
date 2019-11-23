import React from 'react';
import {connect} from "react-redux";
import {Field, reduxForm} from "redux-form";
import {Modal, ModalHeader, ModalBody, ModalFooter, Button, Form, FormGroup, Label, Col} from 'reactstrap'

import { hideEditCategoryModal } from '../../actions/modals';
import {required, validateImageEditRequired, validateImageFormat, validateImageSize} from "../../helpers/Validators/validators";
import Image from "../Molecules/Molecule/Image";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPen} from "@fortawesome/free-solid-svg-icons";
import {showPicture} from "../../actions/categories";
import {InputField} from "../Molecules/FormsControls/InputField";
import {FileInput} from "../Molecules/FormsControls/FileInputField";

const CategoryEditModal = (props) => {
    const { handleSubmit, editsCategory, toggle, className, pristine, submitting, showPicture, initialValues, setToUpdatePicture, modalTranslate} = props;

    return (
        <Modal isOpen={editsCategory} toggle={toggle} className={className}
               modalTransition={{ timeout: 300 }} backdropTransition={{ timeout: 700 }}>
            <Form onSubmit={handleSubmit} encType='multipart/form-data'>
                <ModalHeader toggle={toggle}>{modalTranslate.body.titleEdit}</ModalHeader>
                <ModalBody>
                    <Field name="_method" type='hidden' component='input' defaultValue="put"/>
                    <Field type="text" name="name" id="name" placeholder={modalTranslate.label.name} component={InputField} validate={[required]}/>
                    <Field type="text" name="description" id="description" placeholder={modalTranslate.label.description} component={InputField} validate={[required]}/>
                    <FormGroup row>
                        {!setToUpdatePicture && <Label for='preloadPic' sm={3}>{modalTranslate.label.picture}</Label>}
                        <Col sm={ !setToUpdatePicture ? 9 : 12}>
                            <div className={!setToUpdatePicture ? '' : 'text-center'}>
                                <Image image={initialValues.picture} id="preloadPic"/>
                                <Button outline className='ml-5' onClick={() => showPicture()} color={!setToUpdatePicture ? 'success' : 'secondary'}>{!setToUpdatePicture ? 'Редактировать ' : ' Скрыть '} <FontAwesomeIcon className='ml-2' icon={faPen} /></Button>{' '}
                            </div>
                        </Col>
                    </FormGroup>
                    {
                        setToUpdatePicture && <Field type="file" name="picture" id="picture" placeholder={modalTranslate.label.picture} component={FileInput} warn={validateImageEditRequired} validate={[ validateImageFormat, validateImageSize ]}/>
                    }
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" disabled={pristine || submitting}>{modalTranslate.body.btnEdit}</Button>
                    <Button color="secondary" onClick={toggle}>{modalTranslate.body.btnCancel}</Button>
                </ModalFooter>
            </Form>
        </Modal>
    )
};

const editCategoryForm = reduxForm({
    form: 'editCategory',
    enableReinitialize: true
})(CategoryEditModal);

export default connect(
    state => ({
        initialValues: state.categories.selectedCategory,
        editsCategory: state.modals.showEditCategoryModal,
        setToUpdatePicture: state.categories.setToUpdatePicture,
        modalTranslate: state.categories.translate.modals,
    }),
    dispatch => ({
        toggle: () => dispatch(hideEditCategoryModal()),
        showPicture: () => dispatch(showPicture()),
    })
)(editCategoryForm);
