import React, {Component} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import {connect} from "react-redux";
import { deleteProductItem, showEditItem } from "../../../actions/orders";

class ProductItem extends Component {

    render() {
        const {item, order, index, deleteProductItem, showEditItem, token} = this.props;
        return (
            <tbody>
            <tr className="productRow">
                <th scope="row">{index + 1}</th>
                <td>{item.product.name}</td>
                <td>{item.price}</td>
                <td>{item.count}</td>
                <td className="itemSet"><FontAwesomeIcon icon={faPen} className="editIcon" onClick={() => showEditItem(item, order)}/></td>
                <td className="itemSet"><FontAwesomeIcon icon={faTrash} className="deleteIcon" onClick={() => deleteProductItem(item, order, order.id, token)}/></td>
            </tr>
            </tbody>
        );
    }
}

export default connect(
    state => ({
        order: state.orders.selectedOrder,
        items: state.orders.newOrderItem.items,
        showEditItemProduct: state.orders.showEditItem,
        token: state.auth.access_token,
    }),
    dispatch => ({
        deleteProductItem: (item, order, id, token) => dispatch(deleteProductItem(item, order, id, token)),
        showEditItem: item => dispatch(showEditItem(item)),
    })
)(ProductItem);