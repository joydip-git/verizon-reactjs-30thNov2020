import { axiosInstance } from '../Axios/axiosInstanceConfig'

export const getProductRecords = () => {
    return axiosInstance.get()
}

export const getProductRecordById = (productId) => {
    return axiosInstance.get(`/${productId}`)
}

export const deletProductRecordById = (productId) => {
    return axiosInstance.delete(`/${productId}`)
}

export const addProductRecord = (product) => {
    return axiosInstance.post('', product);
}

export const updateProductRecord = (product) => {
    return axiosInstance.put('', product);
}