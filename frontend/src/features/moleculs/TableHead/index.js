import React,{ Fragment } from 'react'
import { withTableHeader } from '../../../hoc/withTableHeader';

const TableHeadList = ({ headerArray }) => {
    return (
        <Fragment>
            {
                headerArray.map( (item,i) => (
                    <th key={i}>{ item }</th>
                ))
            }
        </Fragment>
    )
}

const TableHead = withTableHeader(TableHeadList);

export { TableHead }