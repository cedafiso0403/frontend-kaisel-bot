import axios from 'axios';

const token = '7mt6hn5kple31chm21slkaugf9pcyx';

let api = axios.create({
    headers: {
        'Client-ID': '3acfejfs22gh634bp8agsttdmcfftb',
        'Authorization': `Bearer ${token}`
    }
});

export default api;