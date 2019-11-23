import React from 'react';
import { Row, Col } from 'reactstrap';
import {unAuthorizeUser} from "../../actions/auth";
import {connect} from "react-redux";
import LogoutForm from "../Header/LogoutForm";

import './style.scss';

const Header = (props) => {
    const { unAuthorizeUser, logoutUrl, token, location } = props;
    return (
        <Row className="header">
            <Col xs="2" className="logo">
                <h2 className="text-center">Report Panel</h2>
            </Col>
            <Col xs="10" className="header-box">
                {
                    location !== "/login" &&
                    <LogoutForm onSubmit={() => submitLogout( unAuthorizeUser, logoutUrl, token )} />
                }
            </Col>
        </Row>
    )
};

const submitLogout = ( unAuthorizeUser, logoutUrl, token ) => {
    unAuthorizeUser( logoutUrl, token )
};

const mapStateToProps = state => ({
    token: state.auth.access_token,
    modalTranslate: state.orders.translate.menu,
    logoutUrl: state.routes.logout,
    location: state.router.location.pathname,
});

const mapActionsToProps = dispatch => ({
    unAuthorizeUser: (logoutUrl, token) => dispatch(unAuthorizeUser(logoutUrl, token))
});

export default connect(
    mapStateToProps, mapActionsToProps
)(Header);