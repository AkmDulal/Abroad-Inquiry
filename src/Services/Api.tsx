import axios from 'axios';
const BASE_URL = 'http://dev.abroadinquiry.com:5001/';
export default axios.create({
    baseURL: BASE_URL
});

export const axiosPrivate = axios.create({
    baseURL: BASE_URL
});