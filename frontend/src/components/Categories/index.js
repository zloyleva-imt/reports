import React, {Component} from 'react';
import {store} from "../../configureStore";
import {connect} from "react-redux";
import queryString from "query-string";
import {Col, Table} from "reactstrap";
import Button from "react-bootstrap/Button";
import CategoryTableItem from '../CategoryTableItem';
import SearchRowCategory from "./SearchRowCategory";
import PaginationComponent from "../Pagination";

import {fetchCategories, setSearchParamsCategory} from "../../actions/categories";
import {showCreateCategoryModal} from "../../actions/modals";

import '../App/App.css'
import withAuthRedirect from "../../hoc/withAuthRedirect";

class Category extends Component {
    handleSearchEvent = event => {
        if(event.target.value === '') {
            const { fetchCategories, setSearchParams, access_token } = this.props;
            setSearchParams({
                page: 1
            });
            const { searchParams } = store.getState().categories;
            let params = searchParams;
            let prop = event.target.name;
            delete params[prop];
            const stringyField = queryString.stringify(params);
            fetchCategories(access_token, stringyField);
        } else {
            const { setSearchParamsCategory, fetchCategories, access_token } = this.props;
            setSearchParamsCategory({
                [event.target.name]: event.target.value,
                page: 1
            });
            const { searchParams } = store.getState().categories;
            const stringyField = queryString.stringify(searchParams);
            fetchCategories(access_token, stringyField);
        }
    };
    handlePagination = (e) => {
        const { setSearchParams, fetchCategories, access_token } = this.props;
        setSearchParams({
            page: e.target.id
        });
        const { searchParams } = store.getState().categories;
        const stringyField = queryString.stringify(searchParams);
        fetchCategories(access_token, stringyField);
    };
    componentDidMount = () => {
        const { setSearchParamsCategory, fetchCategories, access_token } = this.props;
        const search = window.location.search && window.location.search.slice(1);
        fetchCategories(access_token, search);

        setSearchParamsCategory(queryString.parse(search))
    };

    // componentDidUpdate = (prevProps) => {
    //     const {searchState} = this.props
    //     if(prevProps.location.search != searchState){
    //         //todo clear if {} state!
    //         const search = searchState && searchState.slice(1);
    //         this.props.fetchCategories(this.props.access_token, search);
    //     }
    // };

    render = () => {
        const { categories, modalTranslate, showCreateCategoryModal, searchParams, meta } = this.props;
        return (
            <Col xs="10" className="workSpace">
                <div className={'alert alert-primary'}>
                    <Button color="primary" onClick={showCreateCategoryModal}>{modalTranslate.body.titleCreate}</Button>
                </div>
                <Table bordered style={{marginBottom: 80}} size="sm">
                    <thead>
                    <tr className='alert-dark'>
                        <th></th>
                        <th>#</th>
                        <th style={{width: 80}}>{modalTranslate.label.picture}</th>
                        <th style={{width: 240}}>{modalTranslate.label.name}</th>
                        <th>{modalTranslate.label.description}</th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody className="mb-5">
                    <SearchRowCategory store={store} modalTranslate={modalTranslate} handleSearchEvent={this.handleSearchEvent} />
                    {
                        categories.length && categories.map((item, index) =>
                            <CategoryTableItem
                                category={item}
                                key={item.id}
                                index={index}/>
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
    meta: state.categories.meta,
    categories: state.categories.data,
    access_token: state.auth.access_token,
    searchParams: state.categories.searchParams,
    searchState: state.router.location.search,
    modalTranslate: state.categories.translate.modals,
});

const mapActionsToProps = dispatch => ({
    fetchCategories: (token,searchParams = '') => dispatch(fetchCategories(token,searchParams)),
    setSearchParamsCategory: searchParams => dispatch(setSearchParamsCategory(searchParams)),
    showCreateCategoryModal: () => dispatch(showCreateCategoryModal()),
});

export default connect(
    mapStateToProps, mapActionsToProps
)(withAuthRedirect(Category));
