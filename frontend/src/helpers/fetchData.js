import axios from 'axios';

export const fetchData = (options = {}) => {

  const {headers, ...passOptions} = options;

  return new Promise((resolve, reject) => {
    return axios({
      ...passOptions,
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        ...headers
      },
    })
      .then(res => {
        return (res.status >= 200 && res.status < 300) ? resolve(res.data) : reject(res);
      })
      .catch((err) => {
        console.log('catch', err);
      })
  })
};