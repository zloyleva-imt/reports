import {loginApi} from "../helpers/loginApi";
import { push } from 'react-router-redux';
import {logoutApi} from "../helpers/logoutApi";

export const AUTH_SUCCESS = 'AUTH_SUCCESS';
export const AUTH_FAILURE = 'AUTH_FAILURE';

export const authorizeUser = (loginUrl, email, password, redirectAfterLogin) => (dispatch) => {
  loginApi({
    loginUrl: loginUrl,
    email: email,
    password: password,
  })
    .then(res => {
      dispatch(authorizeUserSuccess(res.access_token));
      dispatch(setAccessTokenToLocalStorage(res.access_token));

      dispatch(push(redirectAfterLogin));
    })
    .catch(err => {
      console.log('catch', err);
      dispatch(authorizeUserFailure(err));
    })
};
export const unAuthorizeUser = (logoutUrl, token) => (dispatch) => {
  logoutApi({
    logoutUrl: logoutUrl,
    token: token,
  })
      .then(res => {
        dispatch(deleteAccessTokenToLocalStorage());
        dispatch(push('/login'));
      })
      .catch(err => {
        console.log('catch', err);
      })
};

export const authorizeUserSuccess = access_token => ({
  type: AUTH_SUCCESS,
  payload: access_token
});

export const authorizeUserFailure = errors => ({
  type: AUTH_FAILURE,
  payload: errors
});

export const setAccessTokenToLocalStorage = token => dispatch => {
  localStorage.setItem('access_token', token);
}
export const deleteAccessTokenToLocalStorage = () => dispatch => {
  localStorage.removeItem('access_token');
}