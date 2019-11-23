import {authFetchData} from "./authFetchData";

export const logoutApi = ({logoutUrl, token}) => authFetchData({
  token: token,
  method: 'post',
  url:logoutUrl,
});