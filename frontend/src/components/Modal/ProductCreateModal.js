import React, {Component} from 'react';
import {connect} from "react-redux";
import {Modal, ModalHeader, ModalBody, ModalFooter, Button, Form, FormGroup, Input, Label, Col, ListGroup, ListGroupItem} from 'reactstrap';
import {change, Field, reduxForm} from "redux-form";
import {
    required,
    validateImageRequired,
    validateImageFormat,
    validateImageSize,
    alphaNumeric
} from "../../helpers/Validators/validators";
import {hideCreateProductModal} from "../../actions/modals";

import '../Molecules/FormsControls/progressBar.scss'
import {InputField} from "../Molecules/FormsControls/InputField";
import {FileInput} from "../Molecules/FormsControls/FileInputField";

class ProductCreateModal extends Component {

    constructor(props) {
        super(props);
        this.state = {
            users: this.props.categories,
            result: this.props.categories,
        };
    }

    render() {
        const { handleSubmit, submitting, pristine, hideCreateProductModal, className, categories, showCreateProductModal, setValueIdCategory, modalTranslate } = this.props;
        const getCategoryList = (e) => {
            const nameCategory = e.target.innerText;
            const idCategory = e.target.id;
            document.getElementById('searchCategory').value = nameCategory;
            setValueIdCategory(idCategory);
            this.setState({result: []})
        };
        const filterList = (e) => {
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
            <Modal isOpen={showCreateProductModal} toggle={hideCreateProductModal} className={className}
                   modalTransition={{ timeout: 300 }} backdropTransition={{ timeout: 700 }}>
                <Form onSubmit={handleSubmit} encType='multipart/form-data' id='my-form'>
                    <ModalHeader toggle={hideCreateProductModal}>{modalTranslate.body.titleCreate}</ModalHeader>
                    <ModalBody>
                        {/*<h3 className="py-2">{modalTranslate.body.subTitle}:</h3>*/}
                        <Field type="text" name="name" id="name" placeholder={modalTranslate.label.name} component={InputField} validate={[required]} autoComplete="off" />
                        <Field name="category_id" type='hidden' component='input'/>
                        <FormGroup row className="formGrup">
                            <Label style={{fontSize: 14}} for="searchCategory" sm={3}>{modalTranslate.label.category}</Label>
                            <Col sm={8}>
                                <Input type="text" name="category" id="searchCategory" placeholder={modalTranslate.label.category} className="inputGrup" autocomplete="off" style={{border: '1px solid #959595',width: 300, height: 35}} onChange={filterList} />
                                {this.state.result.length > 0 &&
                                    <div className='listOver'>
                                        <ListGroup className='listGrup' style={{maxHeight: 270}}>
                                            {this.state.result.length > 0 && this.state.result.map((item, index) => (
                                                    <ListGroupItem key={index} id={item.id} action onClick={getCategoryList}>{item.name}</ListGroupItem>
                                                ))}
                                        </ListGroup>
                                    </div>}
                            </Col>
                        </FormGroup>
                        <Field type="text" name="description" id="description" placeholder={modalTranslate.label.description} autoComplete="off" component={InputField} validate={[required]} />
                        <Field type="text" name="price" id="price" placeholder={modalTranslate.label.price} component={InputField} autoComplete="off" warn={required} validate={[alphaNumeric]} />
                        <Field type="file" name="picture" id="picture" placeholder={modalTranslate.label.picture} component={FileInput} autoComplete="off" warn={validateImageRequired} validate={[ validateImageFormat, validateImageSize ]}/>

                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" disabled={pristine || submitting}>{modalTranslate.body.btnCreate}</Button>
                        <Button color="secondary" onClick={hideCreateProductModal}>{modalTranslate.body.btnCancel}</Button>
                    </ModalFooter>
                </Form>

            </Modal>
        )
    }
}

const createProductsForm = reduxForm({
    form: 'createProductsForm',
    enableReinitialize: true,
})(ProductCreateModal);

export default connect(
    state => ({
        // initialValues: state.products.newProduct,
        categories: state.products.categories,
        token: state.auth.access_token,
        showListCategoryProduct: state.products.showListCategoryProduct,
        pasteValue: state.products.pasteValue,
        showCreateProductModal: state.modals.showCreateProductModal,
        modalTranslate: state.products.translate.modals,
    }),
    dispatch => ({
        setValueIdCategory: (val) => dispatch(change('createProductsForm', 'category_id', val)),
        hideCreateProductModal: () => dispatch(hideCreateProductModal()),
    })
)(createProductsForm);
