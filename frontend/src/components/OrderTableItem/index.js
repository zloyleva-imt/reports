import React, {Component} from 'react';
import './style.scss';

import {connect} from "react-redux";
import { editOrder } from '../../actions/orders';

class OrderTableItem extends Component {
    render() {
        const { order, i, meta, editOrder } = this.props;
        return (
            <tr className={ 'table_item ' + order.status } onClick={() => editOrder(order)} >
                <th className="alert-dark"></th>
                <th scope="row" className="alert-dark text-center">{( (meta.current_page - 1 ) * meta.per_page + (i + 1) )  }</th>
                <td>{order.client.name}</td>
                <td>{order.date}</td>
                <td>{order.price}</td>
                <td>{order.client ? order.client.phone : ''}</td>
                <td>{order.status}</td>
                <td className="alert-secondary"></td>
                {/*<td className="btnBox d-flex justify-content-between">*/}
                {/*    <span className="action px-2"><FontAwesomeIcon icon={faEye} onClick={() => showOrder(order)}/></span>*/}
                {/*    <span className="action px-2"><FontAwesomeIcon icon={faPen} onClick={() => editOrder(order)}/></span>*/}
                {/*    <span className="action px-2"><FontAwesomeIcon icon={faTrash} onClick={() => deleteOrder(order, token)}/></span>*/}
                {/*</td>*/}
            </tr>
        );
    }
}

const mapStateToProps = state => ({
    orders: state.orders.list,
    token: state.auth.access_token,
});

const mapDispatchToProps = dispatch => ({
    // showOrder: order => dispatch(showOrder(order)),
    editOrder: order => dispatch(editOrder(order)),
    // deleteOrder: (order,token) => dispatch(deleteOrder(order,token))
});
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(OrderTableItem);