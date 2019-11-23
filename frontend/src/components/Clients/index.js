import React, {Component} from 'react';
import { store } from '../../configureStore'
import queryString from 'query-string'
import {connect} from "react-redux";
import {Col, Table} from "reactstrap";
import ClientTableItem from '../ClientTableItem';
import PaginationComponent from "../Pagination";

import {fetchClients, setSearchParams} from "../../actions/clients";
import { showAddUserModal } from '../../actions/modals'

import withAuthRedirect from "../../hoc/withAuthRedirect";
import SearchRow from "./SearchRow";
import Button from "react-bootstrap/Button";

class Clients extends Component {
    handleSearchEvent = event => {
        if(event.target.value === '') {
            const { fetchClients, setSearchParams, access_token } = this.props;
            setSearchParams({
                page: 1
            });
            const { searchParams } = store.getState().clients;
            let params = searchParams;
            let prop = event.target.name;
            delete params[prop];
            const stringyField = queryString.stringify(params);
            fetchClients(access_token, stringyField);
        } else {
            const { setSearchParams, fetchClients, access_token } = this.props;
            setSearchParams({
                [event.target.name]: event.target.value,
                page: 1
            });
            const { searchParams } = store.getState().clients;
            const stringyField = queryString.stringify(searchParams);
            fetchClients(access_token, stringyField);
        }
    };
    handlePagination = (e) => {
        const { setSearchParams, fetchClients, access_token } = this.props;
        setSearchParams({
            page: e.target.id
        });
        const { searchParams } = store.getState().clients;
        const stringyField = queryString.stringify(searchParams);
        fetchClients(access_token, stringyField);
    };

    componentDidMount = () => {
        const { setSearchParams, fetchClients, access_token } = this.props;
        const search = window.location.search && window.location.search.slice(1);
        fetchClients(access_token, search);

        setSearchParams(queryString.parse(search))
    };

    // componentDidUpdate = (prevProps) => {
    //     const {searchState} = this.props
    //     if(prevProps.location.search != searchState){
    //         //todo clear searchState if {} state!
    //         const searchX = window.location.search && window.location.search.slice(1);
    //         const search = searchState && searchState.slice(1);
    //         this.props.fetchClients(this.props.access_token, search);
    //     }
    // };

    render = () => {
        const { clients, searchParams, showAddUserModal, meta, modalTranslate } = this.props;
        return (
            <Col xs="10" className="workSpace">
                <div className={'alert alert-primary'}>
                    <Button color="primary" onClick={showAddUserModal}>{modalTranslate.body.titleCreate}</Button>
                </div>
                <Table bordered style={{marginBottom: 80}} size="sm">
                    <thead>
                    <tr className='alert-dark'>
                        <th></th>
                        <th className="text-center">#</th>
                        <th>{modalTranslate.label.name}</th>
                        <th>{modalTranslate.label.address}</th>
                        <th>{modalTranslate.label.phone}</th>
                        <th>{modalTranslate.label.email}</th>
                        <th className="text-center"></th>
                    </tr>
                    </thead>
                    <tbody>
                        <SearchRow store={store} modalTranslate={modalTranslate} handleSearchEvent={this.handleSearchEvent} />
                    {
                        clients.length && clients.map((item, i) =>
                            <ClientTableItem
                                client={item}
                                key={item.id}
                                i={i}/>
                        )
                    }
                    </tbody>
                </Table>
                <div className={'col-12 mb-0 fixed-bottom d-flex justify-content-end'}>
                    <div className={'col-10 mb-2 alert alert-secondary'}>
                        <PaginationComponent handleSearch={this.handlePagination} metaData={meta} searchData={searchParams} />
                    </div>
                </div>
            </Col>
        );
    };
}


const mapStateToProps = state => ({
    meta: state.clients.meta,
    searchParams: state.clients.searchParams,
    clients: state.clients.data,
    access_token: state.auth.access_token,
    searchState: state.router.location.search,
    modalTranslate: state.clients.translate.modals,
});

const mapActionsToProps = dispatch => ({
    fetchClients: (token,searchParams = '') => dispatch(fetchClients(token,searchParams)),
    setSearchParams: searchParams => dispatch(setSearchParams(searchParams)),
    showAddUserModal: () => dispatch(showAddUserModal()),
});

export default connect(
    mapStateToProps, mapActionsToProps
)(withAuthRedirect(Clients));
