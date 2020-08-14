import axios from 'axios';

const apiBaseUrl = 'http://51.81.32.218:4000/databaseTest?gauge=';

export const GET = url => {
    return axios.get(`${apiBaseUrl}${url}`)
}