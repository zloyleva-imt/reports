import { fetchData } from './fetchData'

export const loginApi = ({loginUrl, email, password}) => fetchData({
  method: 'post',
  url:loginUrl,
  data: {
    email: email,
    password: password
  },
});