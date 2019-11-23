import {authFetchData} from '../helpers/authFetchData'
import routes from '../routes'
import {push} from "react-router-redux";
import {reset} from 'redux-form';

import {hideAddUserModal, showEditClientModal, hideEditClientModal} from "./modals";


export const FETCH_CLIENT_SUCCESS = 'FETCH_CLIENT_SUCCESS';
export const SET_SEARCH_PARAMS_CLIENT = 'SET_SEARCH_PARAMS_CLIENT';
export const SET_CLIENT_TO_EDIT = 'SET_CLIENT_TO_EDIT';
export const DESELECT_CLIENT_FROM_MODAL = 'DESELECT_CLIENT_FROM_MODAL';

export const fetchClients = (token,searchParams) => dispatch => {
    searchParams = searchParams ?`?${searchParams}`:''
    authFetchData({
        token,
        method:'get',
        url: routes.clients + searchParams
    })
      .then(res => {
          dispatch(fetchClientSuccess(res))
          dispatch(push({
              pathname: '/clients',
              search: `${searchParams}`
          }));
      })
};

export const fetchClientSuccess = clients => ({
    type: FETCH_CLIENT_SUCCESS, payload: clients
});

export const setSearchParams = searchParams => ({
    type: SET_SEARCH_PARAMS_CLIENT, payload: searchParams
});

export const addClient = (client, token) => dispatch => {
    authFetchData({
        token,
        method:'post',
        url: routes.clients,
        data: client
    })
      .then(() => {
          dispatch(reset('newUser'))
          dispatch(fetchClients(token))
          dispatch(hideAddUserModal())
      })
      .catch(err => console.log("Errror"));
};

export const editClient = client => dispatch => {
    dispatch(setClientToEdit(client))
    dispatch(showEditClientModal());
};

export const setClientToEdit = client => ({
    type: SET_CLIENT_TO_EDIT,
    payload: client
});

export const updateClient = (client, token) => dispatch => {
    authFetchData({
        token,
        method:'put',
        url: routes.clients + client.id,
        data: client
    })
      .then(() => {
          dispatch(reset('editClient'))
          dispatch(fetchClients(token))
          dispatch(hideEditClientModal())
      })
      .catch(err => console.log("Errror"));
};

export const deleteClient = (client, token) => dispatch => {
    authFetchData({
        token,
        method:'delete',
        url: routes.clients + client.id,
        data: client
    })
      .then(() => {
          dispatch(fetchClients(token))
      })
      .catch(err => console.log("Errror"));
};