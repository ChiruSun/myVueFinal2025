//控制台
import axios from 'axios'
const APIUrl = import.meta.env.VITE_API_URL
const APIPath = import.meta.env.VITE_API_PATH

//產品

//取得產品資料
export function getProducts(page) {
  return axios.get(`${APIUrl}v2/api/${APIPath}/admin/products?page=${page}`)
}

//新增產品資料
export function addProduct(data) {
  return axios.post(`${APIUrl}v2/api/${APIPath}/admin/product`, data)
}

//修改產品資料
export function editProduct(data) {
  return axios.put(`${APIUrl}v2/api/${APIPath}/admin/product/${data.data.id}`, data)
}

//刪除產品資料
export function delProduct(id) {
  return axios.delete(`${APIUrl}v2/api/${APIPath}/admin/product/${id}`)
}

//訂單

//取得訂單資料
export function getOrders() {
  return axios.get(`${APIUrl}v2/api/${APIPath}/admin/orders`)
}
