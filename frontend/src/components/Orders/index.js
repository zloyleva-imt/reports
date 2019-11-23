import React, {Component} from 'react';
import {store} from "../../configureStore";
import queryString from "query-string";
import {connect} from "react-redux";
import withAuthRedirect from "../../hoc/withAuthRedirect";
import SearchRowOrder from "./SearchRowOrder";
import {Col, Table, Button} from "reactstrap";
import OrderTableItem from '../OrderTableItem';
import PaginationComponent from '../Pagination';

import {fetchOrders, setSearchParams,} from "../../actions/orders";
import {showEditOrderModal, showOrderModal, showCreateOrderModal, hideEditOrderModal,} from '../../actions/modals'

class Orders extends Component {
    handleSearchEventOrder = event => {
        if(event.target.value === '') {
            const { fetchOrders, setSearchParams, access_token } = this.props;
            setSearchParams({
                page: 1
            });
            const { searchParams } = store.getState().orders;
            let params = searchParams;
            let prop = event.target.name;
            delete params[prop];
            const stringyField = queryString.stringify(params);
            fetchOrders(access_token, stringyField);
        } else {
            const { setSearchParams, fetchOrders, access_token } = this.props;
            setSearchParams({
                [event.target.name]: event.target.value,
                page: 1
            });
            const { searchParams } = store.getState().orders;
            const stringyField = queryString.stringify(searchParams);
            fetchOrders(access_token, stringyField);
        }
    };
    handleInputChange = (inputValue) => {
        if(inputValue.value === '') {
            const { fetchOrders, access_token } = this.props;
            const { searchParams } = store.getState().orders;
            let params = searchParams;
            let prop = "status";
            delete params[prop];
            const stringyField = queryString.stringify(params);
            fetchOrders(access_token, stringyField);
        } else {
            const { setSearchParams, fetchOrders, access_token } = this.props;
            setSearchParams({
                status: inputValue.value,
                page: 1
            });
            const { searchParams } = store.getState().orders;
            const stringyField = queryString.stringify(searchParams);
            fetchOrders(access_token, stringyField);
        }
    };
    handlePagination = (e) => {
        const { setSearchParams, fetchOrders, access_token } = this.props;
        setSearchParams({
            page: e.target.id
        });
        const { searchParams } = store.getState().orders;
        const stringyField = queryString.stringify(searchParams);
        fetchOrders(access_token, stringyField);
    };

    componentDidMount = () => {
        const { setSearchParams, fetchOrders, access_token } = this.props;
        const search = window.location.search && window.location.search.slice(1);
        fetchOrders(access_token, search);
        setSearchParams(queryString.parse(search))
    };

    componentWillUnmount = () => {

    }
    // componentDidUpdate = (prevProps) => {
    //     const {searchState} = this.props;
    //     console.log('componentDidUpdate>>>>>>>>>>>>>>>>>>>>>>>>!' ,prevProps.location.search !== searchState)
    //     if(prevProps.location.search !== searchState){
    //         //todo clear searchState if {} state!
    //         const searchX = window.location.search && window.location.search.slice(1);
    //         const search = searchState && searchState.slice(1);
    //         // this.props.fetchOrders(this.props.access_token, search);
    //     }
    // };

    render = () => {
        const { orders, status, access_token, showCreateOrderModal, modalTranslate, meta, searchParams } = this.props;
        let statuses = [{ 'label': 'Выбрать', 'value': '' }];
        for(let i = 0; i < status.length; i++) {
            statuses.push({ 'label': status[i], 'value': status[i] });
        }
        return (
            <Col xs="10" className="workSpace">
                <div className={'alert alert-primary'}>
                    <Button color="primary" onClick={showCreateOrderModal}>{modalTranslate.body.titleCreate}</Button>
                </div>
                <Table bordered style={{marginBottom: 80}} size="sm">
                    <thead>
                    <tr className='alert-dark'>
                        <th></th>
                        <th className="text-center">#</th>
                        <th>{modalTranslate.label.customer}</th>
                        <th>{modalTranslate.label.date}</th>
                        <th>{modalTranslate.label.total}</th>
                        <th>{modalTranslate.label.phone}</th>
                        <th>{modalTranslate.label.status}</th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody className="mb-5">

                    <SearchRowOrder store={store} searchParams={searchParams} options={statuses} modalTranslate={modalTranslate} handleSearchEvent={this.handleSearchEventOrder} handleInputChange={this.handleInputChange} />
                    {
                        orders.length > 0 &&
                        orders.map((el, i) =>
                            <OrderTableItem
                                order={el}
                                i={i}
                                key={el.id}
                                token={access_token}
                                selectOrder={this.selectOrder}
                                meta={meta}
                            />
                        )
                    }
                    </tbody>
                </Table>
                <div className={'col-12 mb-0 fixed-bottom d-flex justify-content-end'}>
                    <div className={'col-10 mb-2 alert alert-secondary'}>
                        <PaginationComponent handleSearch={this.handlePagination} metaData={meta} searchData={searchParams} setSearchParams={setSearchParams} />
                    </div>
                </div>
            </Col>
        );
    };
}

const mapStateToProps = state => ({
    meta: state.orders.meta,
    searchParams: state.orders.searchParams,
    orders: state.orders.data,
    status: state.orders.statuses,
    access_token: state.auth.access_token,
    searchState: state.router.location.search,
    modalTranslate: state.orders.translate.modals,
});
const mapActionsToProps = dispatch => ({
    fetchOrders: (token,searchParams = '') => dispatch(fetchOrders(token,searchParams)),
    setSearchParams: searchParams => dispatch(setSearchParams(searchParams)),
    showCreateOrderModal: () => dispatch(showCreateOrderModal()),
    showEditOrderModal: () => dispatch(showEditOrderModal()),
    showOrderModal: () => dispatch(showOrderModal()),
    hideOrder: () => dispatch(hideEditOrderModal()),
});

export default connect(
    mapStateToProps, mapActionsToProps
)(withAuthRedirect(Orders));
