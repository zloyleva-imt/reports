import React from 'react';
import {connect} from "react-redux";
import { NavLink } from "react-router-dom";
import { Nav, NavItem } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faSitemap, faCube, faUserCircle } from '@fortawesome/free-solid-svg-icons';

import './sideBar.scss'

const Sidebar = (props) => {
    const { modalTranslate } = props;
    return (
        <div className="sidebar">
            <div className="sidebar-header">
                <h3>{modalTranslate.title}</h3>
            </div>
            <div className="side-menu">
                <Nav vertical className="list">
                    <NavItem>
                        <NavLink exact activeClassName="selected" className="navLink" to="/" >
                            <span className="iconBox"><FontAwesomeIcon icon={faShoppingCart} /></span>{modalTranslate.order}
                        </NavLink>
                    </NavItem>

                    <NavItem>
                        <NavLink exact activeClassName="selected" className="navLink" to="/clients" >
                            <span className="iconBox"><FontAwesomeIcon icon={faUserCircle} className="mr-3"/></span>{modalTranslate.client}
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink exact activeClassName="selected" className="navLink" to="/products" >
                            <span className="iconBox"><FontAwesomeIcon icon={faCube} className="mr-3"/></span>{modalTranslate.product}
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink exact activeClassName="selected" className="navLink" to="/categories" >
                            <span className="iconBox"><FontAwesomeIcon icon={faSitemap} className="mr-3"/></span>{modalTranslate.category}
                        </NavLink>
                    </NavItem>
                </Nav>
            </div>
        </div>
    )
};

const mapStateToProps = state => ({
    modalTranslate: state.orders.translate.menu,
});

export default connect(
    mapStateToProps
)(Sidebar);