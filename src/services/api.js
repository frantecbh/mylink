

import axios from 'axios'




const key = import.meta.env.VITE_SECRET_KEY





const api = axios.create({
  baseURL: 'https://api-ssl.bitly.com/v4',
  headers: {
    'Authorization': `Bearer ${key}`
  }
})


export { api, key }