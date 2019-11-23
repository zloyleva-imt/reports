import React from 'react';
import {connect} from "react-redux";
import { editClient } from '../../actions/clients';

import './style.scss';

const  ClientTableItem = ({ i, client, editClient }) => (
  <tr className="table_item" onClick={() => editClient(client)} >
    <th className="alert-dark"></th>
    <th scope="row" className="alert-dark text-center">{i + 1}</th>
    <td>{client.name}</td>
    <td>{client.address}</td>
    <td>{client.phone}</td>
    <td>{client.email}</td>
    <td className="alert-secondary"></td>
    {/*<td className="btnBox d-flex justify-content-around">*/}
    {/*  <span className="action px-2"><FontAwesomeIcon icon={faPen} onClick={() => editClient(client)}/></span>*/}
    {/*  <span className="action px-2"><FontAwesomeIcon icon={faTrash} onClick={() => deleteClient(client, token)}/></span>*/}
    {/*</td>*/}
  </tr>
)

const mapStateToProps = state => ({
    token: state.auth.access_token,
});

const mapDispatchToProps = dispatch => ({
    editClient: client => dispatch(editClient(client)),
    // deleteClient: (client,token) => dispatch(deleteClient(client,token))

});
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ClientTableItem);