import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://learning-react-8446384.firebaseio.com/',
});

export default instance;