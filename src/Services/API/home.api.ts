import axios from 'axios';
import APP_ENDPOINTS from './endpoints';

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
  getImagesData,
};
