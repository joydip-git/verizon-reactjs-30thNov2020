import AxiosModule from 'axios'
import { apiURL } from '../constants/apiURL'

export const axiosInstance = AxiosModule.create({
    baseURL: apiURL,
    timeout: 3000,
    timeoutErrorMessage: 'operation timed out...'
})