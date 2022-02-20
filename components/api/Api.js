import axios from 'axios'
import {API_KEY} from '@env'

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/'
})
// getting data from api
export const getdata = () => api.get('movie/popular?api_key=f36b974c499726d075b9a9e3ef7a7d51&language=en-US&page=1').then(res => res.data)
 