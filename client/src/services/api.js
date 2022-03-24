import axios from 'axios';

export const api = axios.create({
    baseUrl: 'http://localhost:3000/api/v1',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
})





