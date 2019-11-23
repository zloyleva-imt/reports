import React, {Component} from 'react';
import {Col, Table} from "reactstrap";
import {connect} from "react-redux";
import queryString from "query-string";
import {store} from "../../configureStore";
import Button from "react-bootstrap/Button";
import SearchRowProduct from "./SearchRowProduct";
import ProductTableItem from '../ProductTableItem';
import PaginationComponent from '../Pagination';

import {fetchProduct, setSearchParams} from "../../actions/products";
import {showCreateProductModal,} from '../../actions/modals'
import '../ProductTableItem/style.scss';
import withAuthRedirect from "../../hoc/withAuthRedirect";

class Products extends Component {

    handleSearchEvent = (event) => {
        if(event.target.value === '') {
            const { fetchProduct, setSearchParams, access_token } = this.props;
            setSearchParams({
                page: 1
            });
            const { searchParams } = store.getState().products;
            let params = searchParams;
            let prop = event.target.name;
            delete params[prop];
            const stringyField = queryString.stringify(params);
            fetchProduct(access_token, stringyField);
        } else {
            const { setSearchParams, fetchProduct, access_token } = this.props;
            setSearchParams({
                [event.target.name]: event.target.value,
                page: 1
            });
            const { searchParams } = store.getState().products;
            const stringyField = queryString.stringify(searchParams);
            fetchProduct(access_token, stringyField);
        }
    };
    handleInputChange = (inputValue) => {
        if(inputValue.value === '') {
            const { fetchProduct, access_token } = this.props;
            const { searchParams } = store.getState().products;
            let params = searchParams;
            let prop = "category_id";
            delete params[prop];
            const stringyField = queryString.stringify(params);
            fetchProduct(access_token, stringyField);
        } else {
            const { setSearchParams, fetchProduct, access_token } = this.props;
            setSearchParams({
                category_id: inputValue.value,
                page: 1
            });
            const { searchParams } = store.getState().products;
            const stringyField = queryString.stringify(searchParams);
            fetchProduct(access_token, stringyField);
        }
    };
    handlePagination = (e) => {
        const { setSearchParams, fetchProduct, access_token } = this.props;
        setSearchParams({
            page: e.target.id
        });
        const { searchParams } = store.getState().products;
        const stringyField = queryString.stringify(searchParams);
        fetchProduct(access_token, stringyField);
    };
    componentDidMount = () => {
        const { setSearchParams, fetchProduct, access_token } = this.props;
        const search = window.location.search && window.location.search.slice(1);
        fetchProduct(access_token, search);

        setSearchParams(queryString.parse(search))
    };
    // componentDidUpdate = (prevProps) => {
    //     const {searchState} = this.props;
    //     if(prevProps.location.search != searchState){
    //         //todo clear searchState if {} state!
    //         const searchX = window.location.search && window.location.search.slice(1);
    //         const search = searchState && searchState.slice(1);
    //         this.props.fetchProduct(this.props.access_token, search);
    //     }
    // }

    render = () => {
        const {showCreateProductModal, products, searchParams, categories, modalTranslate, meta} = this.props;
        let category = [{ 'label': 'Выбрать', 'value': '' }];
        for(let i = 0; i < categories.length; i++) {
            category.push({ 'label': categories[i].name, 'value': categories[i].id });
        }
        return (

            <Col xs="10" className="workSpace">
                <div className={'alert alert-primary'}>
                    <Button color="primary" onClick={showCreateProductModal}>{modalTranslate.body.titleCreate}</Button>
                </div>
                <Table bordered style={{marginBottom: 80}} size="sm">
                    <thead>
                    <tr className='alert-dark'>
                        <th></th>
                        <th className="text-center" style={{width: 80}}>#</th>
                        <th style={{width: 120}}>{modalTranslate.label.picture}</th>
                        <th>{modalTranslate.label.name}</th>
                        <th>{modalTranslate.label.category}</th>
                        <th>{modalTranslate.label.price}</th>
                        <th>{modalTranslate.label.description}</th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>
                    <SearchRowProduct store={store} searchParams={searchParams} options={category} modalTranslate={modalTranslate} handleInputChange={this.handleInputChange} handleSearchEvent={this.handleSearchEvent} />
                    {
                        products.length && products.map((el, i) =>
                            <ProductTableItem product={el} i={i} key={el.id} meta={meta}/>)
                    }
                    </tbody>
                </Table>
                <div className={'col-12 mb-0 fixed-bottom d-flex justify-content-end'}>
                    <div className={'col-10 mb-2 alert alert-secondary'}>
                        <PaginationComponent handleSearch={this.handlePagination} metaData={meta} searchData={searchParams}/>
                    </div>
                </div>
            </Col>
        );
    };
}

const mapStateToProps = state => ({
    meta: state.products.meta,
    searchParams: state.products.searchParams,
    searchState: state.router.location.search,
    categories: state.products.categories,
    products: state.products.data,
    modalTranslate: state.products.translate.modals,
    access_token: state.auth.access_token,
});

const mapActionsToProps = dispatch => ({
    setSearchParams: searchParams => dispatch(setSearchParams(searchParams)),
    fetchProduct: (token, searchParams, exportTo) => dispatch(fetchProduct(token, searchParams, exportTo)),
    showCreateProductModal: () => dispatch(showCreateProductModal()),
});

export default connect(
    mapStateToProps, mapActionsToProps
)(withAuthRedirect(Products));
