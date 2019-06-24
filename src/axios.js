import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://karkle-9251f.firebaseio.com/'
});

export default instance;