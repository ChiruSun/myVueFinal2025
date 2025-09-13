import axios from 'axios'
const token = document.cookie.replace(/(?:(?:^|.*;\s*)hexVueCookie\s*\=\s*([^;]*).*$)|^.*$/, '$1')
const APIUrl = import.meta.env.VITE_API_URL
const APIPath = import.meta.env.VITE_API_PATH
//簡化網址
const DashPath = `${APIUrl}v2/api/${APIPath}/admin`

//產品

//取得產品資料
function getProducts(page) {
  return axios.get(`${DashPath}/products?page=${page}`)
  
}

//新增產品資料
function addProduct(data) {
  return axios.post(`${DashPath}/product`, data)
}

//修改產品資料
function editProduct(data) {
  return axios.put(`${DashPath}/product/${data.data.id}`, data)
}

//刪除產品資料
function delProduct(id) {
  return axios.delete(`${DashPath}/product/${id}`)
}

//訂單

//取得訂單資料
function getOrders() {
  return axios.get(`${DashPath}/orders`)
}

//刪除訂單資料
function delOrder(id) {
  return axios.delete(`${DashPath}/order/${id}`)
}

//優惠卷

//取得優惠卷清單
function getCoupons(page) {
  return axios.get(`${DashPath}/coupons?page=${page}`)
}

//新增優惠卷
function addCoupon(data) {
  return axios.post(`${DashPath}/coupon`, data)
}

//修改優惠卷
function editCoupon(data) {
  return axios.put(`${DashPath}/coupon/${data.data.id}`, data)
}

//刪除優惠卷

function delCoupon(id) {
  return axios.delete(`${DashPath}/coupon/${id}`)
}

export {
  getProducts,
  addProduct,
  editProduct,
  delProduct,
  getOrders,
  delOrder,
  getCoupons,
  addCoupon,
  editCoupon,
  delCoupon,
}
