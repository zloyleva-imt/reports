import React, {Component} from 'react';
import {connect} from "react-redux";

import { PaginationItem } from 'reactstrap';

import './style.scss';

class PaginationLink extends Component {

    render() {
        const {metaData, handleSearch} = this.props;

        return [...new Array(metaData.last_page)].map((item, index) => (
            <PaginationItem key={index}>
                <div style={{cursor: "pointer"}} className="page-link" onClick={handleSearch} id={index + 1}>
                    {index + 1}
                </div>
            </PaginationItem>
        ))
    };
}

const mapStateToProps = state => ({
    searchState: state.router.location.search,
    access_token: state.auth.access_token,
});

export default connect(
    mapStateToProps
)(PaginationLink);
