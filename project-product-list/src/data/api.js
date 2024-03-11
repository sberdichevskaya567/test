import md5 from "md5"
import axios from "axios"

const password = 'Valantis'
const timestamp = new Date().toISOString().slice(0, 10).replace(/-/g, '')
const xAuth = md5(`${password}_${timestamp}`)

export const api = axios.create({
    baseURL: 'https://api.valantis.store:41000/'
})
api.interceptors.request.use(
    (config) => {
        config.headers['X-Auth'] = xAuth
        config.headers['Content-Type'] = 'application/json'
        return config
    },
    (error) => {
        return Promise.reject(error)
    }
)