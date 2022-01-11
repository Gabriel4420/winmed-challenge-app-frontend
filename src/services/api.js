import axios from 'axios'

const api = axios.create({
  
  baseURL: 'https://winmed-challenge.herokuapp.com/',
})

export default api
