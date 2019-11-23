import React, {Component} from 'react';
import {connect} from "react-redux";
import {Modal, ModalHeader, ModalBody, ModalFooter, Button, Form, FormGroup, Label, Input, Col, ListGroup, ListGroupItem} from 'reactstrap'

import {hideUpdateProductModal} from "../../actions/modals";
import {change, reduxForm, Field} from "redux-form";
import {
    required,
    validateImageFormat,
    validateImageSize,
    alphaNumeric
} from "../../helpers/Validators/validators";
import Image from "../Molecules/Molecule/Image";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPen} from "@fortawesome/free-solid-svg-icons";
import { showPicture } from "../../actions/products";
import {InputField} from "../Molecules/FormsControls/InputField";
import {FileInput} from "../Molecules/FormsControls/FileInputField";

class ProductEditModal extends Component {

    constructor(props) {
        super(props);
        this.state = {
            users: this.props.categories,
            result: this.props.categories,
        };
    }

    render() {
        const {handleSubmit, className, initialValues, showUpdateProductModal, showPicture, setToUpdatePicture, hideUpdateProductModal, setValueIdCategory, categories, picture, modalTranslate} = this.props;

        const getCategoryListEdit = (e) => {
            const nameCategory = e.target.innerText;
            const idCategory = e.target.id;
            document.getElementById('searchCategory').value = nameCategory;
            setValueIdCategory(idCategory);
            this.setState({result: []})
        };
        const filterListEdit = (e) => {
            let value = e.target.value;
            let category = categories, result=[];
            result = category.filter((categories)=>{
                return categories.name.toLowerCase().search(value) !== -1;
            });
            if(value !== '') {
                this.setState({result});
            } else {this.setState({result: []});}
        };

        return (
            <Modal isOpen={showUpdateProductModal} toggle={hideUpdateProductModal} className={className}
                   modalTransition={{ timeout: 300 }} backdropTransition={{ timeout: 700 }}>
                <Form onSubmit={handleSubmit} encType='multipart/form-data'>
                    <ModalHeader toggle={hideUpdateProductModal}>{modalTranslate.body.titleEdit}</ModalHeader>
                    <ModalBody>
                        {/*<h3>Product details:</h3>*/}
                        <Field type="text" name="name" id="name" placeholder={modalTranslate.label.name} component={InputField} validate={[required]} />
                        <Field name="category_id" type='hidden' component='input'/>
                        <Field name="_method" type='hidden' component='input' defaultValue="put"/>
                        <FormGroup row className="formGrup">
                            <Label style={{fontSize: 14}} for="searchCategory" sm={3}>{modalTranslate.label.category}</Label>
                            <Col sm={8}>
                                <Input type="text" name="category.name" id="searchCategory" placeholder={modalTranslate.label.category}
                                       className="inputGrup" autoComplete="off" defaultValue={initialValues.category.name.toLowerCase()}
                                       style={{border: '1px solid #959595',width: 300, height: 35,overflow: "hidden"}} onChange={filterListEdit}
                                />
                                {
                                    this.state.result.length > 0 &&
                                    <div className='listOver'>
                                        <ListGroup className='listGrup' style={{maxHeight: 270}}>
                                            {
                                                this.state.result.length > 0 && this.state.result.map((item, index) => (
                                                    <ListGroupItem key={index} id={item.id} action onClick={getCategoryListEdit}>{item.name}</ListGroupItem>
                                                ))
                                            }
                                        </ListGroup>
                                    </div>
                                }
                            </Col>
                        </FormGroup>
                        <Field type="text" name="description" id="description" placeholder={modalTranslate.label.description} autoComplete="off" component={InputField} validate={[required]} />
                        <Field type="text" name="price" id="price" placeholder={modalTranslate.label.price} component={InputField} autoComplete="off" warn={required} validate={[alphaNumeric]} />
                        <FormGroup row>
                            {!setToUpdatePicture && <Label style={{fontSize: 14}} for='preloadPic' sm={3}>{modalTranslate.label.picture}</Label>}
                            <Col sm={ !setToUpdatePicture ? 9 : 12}>
                                <div className={!setToUpdatePicture ? '' : 'text-center'}>
                                    <Image image={picture.picture} id="preloadPic"/>
                                    <Button outline className='ml-5' onClick={() => showPicture()} color={!setToUpdatePicture ? 'success' : 'secondary'}>{!setToUpdatePicture ? 'Редактировать ' : ' Скрыть '} <FontAwesomeIcon className='ml-2' icon={faPen} /></Button>{' '}
                                </div>
                            </Col>
                        </FormGroup>
                        {
                            setToUpdatePicture && <Field type="file" name="picture" id="picture" placeholder={modalTranslate.label.picture} component={FileInput} validate={[ validateImageFormat, validateImageSize ]}/>
                        }
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary">{modalTranslate.body.btnEdit}</Button>
                        <Button color="secondary" onClick={hideUpdateProductModal}>{modalTranslate.body.btnCancel}</Button>
                    </ModalFooter>
                </Form>
            </Modal>
        )
    }
}

const updateProductsForm = reduxForm({
    form: 'updateProductsForm',
    enableReinitialize: true
})(ProductEditModal);

export default connect(
    state => ({
        initialValues: state.products.selectedProduct,
        picture: state.products.selectedProduct,
        categories: state.products.categories,
        access_token: state.auth.access_token,
        editProduct: state.products.editProduct,
        showUpdateProductModal: state.modals.showUpdateProductModal,
        setToUpdatePicture: state.products.setToUpdatePicture,
        modalTranslate: state.products.translate.modals,
    }),
    dispatch => ({
        setValueIdCategory: (val) => dispatch(change('updateProductsForm', 'category_id', val)),
        hideUpdateProductModal: () => dispatch(hideUpdateProductModal()),
        showPicture: () => dispatch(showPicture()),
    })
)(updateProductsForm);