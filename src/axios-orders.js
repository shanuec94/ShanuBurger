import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burger-app11-737cf.firebaseio.com/'
});

export default instance;