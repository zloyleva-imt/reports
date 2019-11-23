import React from 'react';
import {connect} from "react-redux";
import { Pagination, PaginationItem } from 'reactstrap';
import queryString from "query-string";
import PaginationLink from "./PaginationLink";

import './style.scss';

const PaginationComponent = (props) => {
    const { metaData, searchData, searchState, handleSearch } = props;

    let search;
    let searchFiltered;
    search = Object.keys(searchData).filter(el => searchData[el]).map(el => `${el}=${searchData[el]}`).join('&');
    const pages = search && search;
    searchFiltered = queryString.parse(pages);
    delete searchFiltered.page;
    const searchStr = queryString.stringify(searchFiltered);

    search = searchStr ? '&' +  searchStr:'';

    const page = searchState && searchState.slice(1);
    let numberPage = queryString.parse(page);
    let number = 1;
    let stopScroll = 0;
    if(numberPage.page !== undefined) {
        number = +numberPage.page;
    }
    if(metaData.last_page < 11) {
        stopScroll = 0
    } else if (metaData.last_page > 15) {
        stopScroll = metaData.last_page - 11
    }

    const lastPage = metaData.last_page,
        result = (40 * lastPage ) / lastPage * numberPage.page,
        boxWidth = 40 * lastPage,
        linkWidth = 40 * lastPage;

    let path = metaData.path;
    let parts = `${path}`.split('/');
    let lastSegment = parts.pop();

    if(lastSegment === 'orders') {
        lastSegment = '/';
    }

    return (
        <div className="footerContainer">
            <div className="pageList">
                <Pagination>
                    <PaginationItem>
                        <div style={{cursor: "pointer"}} className="page-link" onClick={handleSearch} id="1">
                            {`<`}
                        </div>
                    </PaginationItem>
                </Pagination>
                <div className="overflowBox" style={{ width: lastPage < 11 ? boxWidth : 440}}>
                    <div className="wrapBox" style={{
                        transform: `translateX(-${((+number) > (stopScroll)) ? (linkWidth - (40 * (lastPage - stopScroll))) : ((40 * number) - 40) }px)`, transition: 'transform .5s',}}>
                        <div className="progressBox" style={{width: result ? result : '', height: 3}}></div>
                        <Pagination>
                            <PaginationLink metaData={metaData} searchData={searchData} search={search} searchState={searchState} numberPage={numberPage} lastSegment={lastSegment} handleSearch={handleSearch}/>
                        </Pagination>
                    </div>
                </div>
                <Pagination>
                    <PaginationItem>
                        <div style={{cursor: "pointer"}} className="page-link" onClick={handleSearch} id={lastPage}>
                            {`>`}
                        </div>
                    </PaginationItem>
                </Pagination>
            </div>
            {
                !page ? (
                    <div className="countBox">
                        <span>Страница</span>
                        <span> 1 из {lastPage}</span>

                    </div>
                ) : (
                    <div className="countBox">
                        <span>Страница</span>
                        <span> {numberPage.page} из {lastPage}</span>

                    </div>
                )
            }
        </div>
    )
};


// const getPaginationItems = (  metaData, searchData, searchState, numberPage) => {
//     console.log('metametametametametameta', metaData);
//     let search;
//     search = Object.keys(searchData).filter(el => searchData[el]).map(el => `${el}=${searchData[el]}`).join('&');
//     search = search ? '&' +  search:'';
//
//     // search = search;
//     // console.log('searchsearchsearchsearch', search);
//     // console.log('searchStatesearchStatesearchStatesearchStatesearchStatesearchState', searchState);
//
//     let path = metaData.path;
//
//     let parts = `${path}`.split('/');
//     let lastSegment = parts.pop();
//     // console.log("lastSegmentlastSegmentlastSegmentlastSegmentlastSegment",lastSegment)
//     if(lastSegment === 'orders') {
//         lastSegment = '/'
//     }
//     let linkPage;
//     if(searchState === '') {
//         console.log("numberPage",numberPage)
//         linkPage = 'page=1' + search;
//     }
//
//     // let pars = queryString.parse(linkPage);
// console.log("linkPagelinkPage",linkPage)
//     return [... new Array(metaData.last_page)].map((item,index) => (
//
//         <PaginationItem key={index}>
//             <NavLink
//                 className="page-link"
//                 // to={`/?page=${index + 1}${search}`}
//                 // to={`${lastSegment}?page=${index + 1}${search}`}
//                 // to={`${lastSegment}?page=${index + 1}${search} `}
//                 to={`${lastSegment}?${linkPage}`}
//                 activeClassName="active"
//             >
//                 {index + 1}
//             </NavLink>
//
//         </PaginationItem>
//
//     ))
// }

const mapStateToProps = state => ({
    // meta: state.clients.meta,
    // searchParams: state.clients.searchParams,
    searchState: state.router.location.search,
});

const mapActionsToProps = dispatch => ({

});

export default connect(
    mapStateToProps, mapActionsToProps
)(PaginationComponent);
