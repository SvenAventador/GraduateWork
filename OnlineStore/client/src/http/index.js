import axios from 'axios'

/**
 * Запросы к серверу, к которым заголовок Authorization не нужен.
 * Пример, авторизация.
 * @type {axios.AxiosInstance}
 */
export const $host = axios.create({
    baseURL: process.env.REACT_APP_API_URL
})


/**
 * Запросы к серверу, к которым заголовок Authorization нужен.
 * Пример, корзина.
 * @type {axios.AxiosInstance}
 */
export const $authHost = axios.create({
    baseURL: process.env.REACT_APP_API_URL
})

/**
 * Предоставление заголовка Authorization.
 * @param config - кофнфигурация.
 * @returns {string} - Заголоваок
 */
const authInterceptors = config => {
    return config.headers.authorization = `Bearer ${localStorage.getItem('token')}`
}

$authHost.interceptors.request.use(authInterceptors)