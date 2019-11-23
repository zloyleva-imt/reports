import { fetchData } from './fetchData'

export const authFetchData = ({token,method,url,data}) => fetchData({
  method,
  url,
  data,
  headers:{
    'Authorization': 'Bearer ' + token,
  }
});