import axios from 'axios';

const API_KEY = '3acfejfs22gh634bp8agsttdmcfftb';
let api = axios.create({
    headers: {
        'Client-ID': '3acfejfs22gh634bp8agsttdmcfftb'
    }
});

export default api;