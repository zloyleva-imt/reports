import React, {Component} from 'react';
import {connect} from "react-redux";
import {Field, reduxForm} from "redux-form";
import { Button, Form, FormGroup, Col } from 'reactstrap';

import {required, minLengthCreator, emailTest} from "../../helpers/Validators/validators";
import { InputField } from "../Molecules/FormsControls/InputField";
import './loginForm.scss'

const minLength6 = minLengthCreator(6);

class LoginForm extends Component {
    state = {
        email: '',
        password: ''
    };
    render() {
        const {email, password} = this.state;
        const {handleSubmit} = this.props;
        return (
            <div className="loginPage">
                <div className="loginForm">
                    <div className="loginRow">
                        <Form className="my-2" onSubmit={handleSubmit}>
                            <Field type="email" name="email" id="email" placeholder="Логин"
                                   value={email} component={InputField} validate={[required, emailTest]}/>
                            <Field type="password" name="password" id="password" placeholder="Пароль"
                                   value={password} component={InputField} validate={[required, minLength6]}/>
                            <FormGroup check row className="mt-4 mx-auto">
                                <Col className="d-flex justify-content-center">
                                    <Button className="btnElem" outline size="sm">Войти</Button>{' '}
                                </Col>
                            </FormGroup>
                        </Form>
                    </div>
                </div>
            </div>
        )
    }
};

const loginUserForm = reduxForm({
    form: 'loginUserForm',
    enableReinitialize: true
})(LoginForm);

export default connect(
    state => ({
        loginUrl: state.routes.login
    }),
    dispatch => ({})
)(loginUserForm);
