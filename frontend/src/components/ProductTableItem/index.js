import React, {Component} from 'react';
import {connect} from "react-redux";

import Image from "../Molecules/Molecule/Image";
import { editProduct } from '../../actions/products';

import './style.scss';

class ProductTableItem extends Component {

    render() {
        const { product, i, editProduct, meta } = this.props;
        return (
            <tr className="table_item" onClick={() => editProduct(product)} >
                <th className="alert-dark"></th>
                <th scope="row" className="alert-dark text-center">{( (meta.current_page - 1 ) * meta.per_page + (i + 1) )  }</th>
                <td className="text-center">
                    <Image image={product.picture}/>
                </td>
                <td>{product.name}</td>
                <td>{product.category.name}</td>
                <td>{product.price}</td>
                <td>{product.description}</td>
                <td className="alert-secondary"></td>
                {/*<td>*/}
                {/*    <div className="btnBox d-flex justify-content-around align-items-center">*/}
                {/*        <span className="action py-2"><FontAwesomeIcon icon={faEye} onClick={() => showProduct(product)}/></span>*/}
                {/*        <span className="action py-2"><FontAwesomeIcon icon={faPen} onClick={() => editProduct(product)}/></span>*/}
                {/*        <span className="action py-2"><FontAwesomeIcon icon={faTrash} onClick={() => deleteProduct(product, token)}/></span>*/}
                {/*    </div>*/}
                {/*</td>*/}
            </tr>
        );
    }
}

const mapStateToProps = state => ({
    products: state.products.list,
    categories: state.products.categories,
    token: state.auth.access_token,
});

const mapDispatchToProps = dispatch => ({
    // showProduct: product => dispatch(showProduct(product)),
    editProduct: product => dispatch(editProduct(product)),
    // deleteProduct: (product, token) => dispatch(deleteProduct(product, token))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ProductTableItem);