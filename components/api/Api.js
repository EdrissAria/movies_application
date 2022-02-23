import axios from 'axios'
import {API_KEY} from '@env'

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/'
})
// getting data from api
export const getUpcomming = () => api.get(`movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`).then(res => res.data)
export const getNow_playing = () => api.get(`movie/now_playing?api_key=${API_KEY}&language=en-US&page=1`).then(res => res.data)
export const getPopular = () => api.get(`movie/popular?api_key=${API_KEY}&language=en-US&page=1`).then(res => res.data)
export const getTop_rated = () => api.get(`movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`).then(res => res.data)
export const getGenres = () => api.get(`genre/movie/list?api_key=${API_KEY}&language=en-US`).then(res => res.data)
export const getTrailer = (id) => api.get(`movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then(res => res.data)
export const getCasts = (id) => api.get(`movie/${id}/credits?api_key=${API_KEY}&language=en-US`).then(res => res.data)
export const getSingleCast = (id) => api.get(`credit/${id}?api_key=${API_KEY}`).then(res => res.data)
export const getByGenre = (id) => api.get(`discover/movie?api_key=${API_KEY}&with_genres=${id}`); 
export const getAllMovies = (catagory) => api.get(`movie/${catagory}?api_key=${API_KEY}&language=en-US&page=1`).then(res => res.data)
export const getMovies = (page, catagory) => api.get(`movie/${catagory}?api_key=${API_KEY}&language=en-US&page=${page}`).then(res => res.data)
export const search = async (query) => await api.get(`search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`).then(res => res.data)