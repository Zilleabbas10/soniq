import axios from 'axios';
import APP_ENDPOINTS from './endpoints';

const getPosts = async () => {
  try {
    const URL = `${APP_ENDPOINTS.GET_POSTS}`;
    const response = await axios.get(URL);
    return {...response};
  } catch (error) {
    return {error, data: []};
  }
};
const config = {
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
};
const getImagesData = () => {
  fetch('../../../assets/data.json', {
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  })
    .then(response => {
      console.log(response);
      return response.json();
    })
    .then(myJson => {
      console.log(myJson);
    });
};

export default {
  getPosts,
  getImagesData,
};
