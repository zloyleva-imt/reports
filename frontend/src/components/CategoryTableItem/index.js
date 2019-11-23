import React, {Component} from 'react';
import {connect} from "react-redux";

import Image from "../Molecules/Molecule/Image";
import { editCategory } from '../../actions/categories';

import './style.scss';

class CategoryTableItem extends Component{

    render() {
        const { category, editCategory, index } = this.props;
        return (
            <tr className="table_item" onClick={() => editCategory(category)} >
                <th className="alert-dark"></th>
                <th scope="row" className="alert-dark text-center">{index + 1}</th>
                <td>
                    <Image image={category.picture}/>
                </td>
                <td>{category.name}</td>
                <td>{category.description}</td>
                <td className="alert-secondary"></td>
                {/*<td>*/}
                {/*    <div className="btnBox d-flex justify-content-between">*/}
                {/*        <span className="action px-2"><FontAwesomeIcon icon={faEye} onClick={() => showCategory(category)}/></span>*/}
                {/*        <span className="action px-2"><FontAwesomeIcon icon={faPen} onClick={() => editCategory(category)}/></span>*/}
                {/*        <span className="action px-2"><FontAwesomeIcon icon={faTrash} onClick={() => deleteCategory(category,token)}/></span>*/}
                {/*    </div>*/}
                {/*</td>*/}
            </tr>
        );
    }
}
const mapStateToProps = state => ({
    token: state.auth.access_token,
});

const mapDispatchToProps = dispatch => ({
    // showCategory: category => dispatch(showCategory(category)),
    editCategory: category => dispatch(editCategory(category)),
    // deleteCategory: (category,token) => dispatch(deleteCategory(category,token))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CategoryTableItem);