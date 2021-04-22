import axios from 'axios'

export const api = axios.create({
  baseURL: process.env.API_URL || 'http://localhost:3333'
})