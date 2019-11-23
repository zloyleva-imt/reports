import React, {Component} from 'react';
import {connect} from "react-redux";
import {reduxForm} from "redux-form";
import { Form, Button } from 'reactstrap';
import {faSignOutAlt} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

class LogoutForm extends Component {
    render() {
        const {handleSubmit} = this.props;
        return (
            <Form onSubmit={handleSubmit} className="d-flex justify-content-end h-100 mr-3">
                <Button color="white"><FontAwesomeIcon icon={faSignOutAlt} className="mr-2"/>logout </Button>{' '}
            </Form>
        )
    }
}

const logoutUserForm = reduxForm({
    form: 'logoutUserForm',
    enableReinitialize: true
})(LogoutForm);

export default connect(
    state => ({
        loginUrl: state.routes.login
    }),
)(logoutUserForm);
