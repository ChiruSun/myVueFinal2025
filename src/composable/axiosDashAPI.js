import axios from 'axios'
const token = document.cookie.replace(/(?:(?:^|.*;\s*)hexVueCookie\s*\=\s*([^;]*).*$)|^.*$/, '$1')
const APIUrl = import.meta.env.VITE_API_URL
const APIPath = import.meta.env.VITE_API_PATH
//簡化網址
const DashPath = `${APIUrl}v2/api/${APIPath}/admin`

const dashAxios = axios.create({
  baseURL: DashPath,
  headers: {
    Authorization: token ? token : '',
  },
})

//進dash驗證
function verifyLogin() {
  return dashAxios.post(`${APIUrl}v2/api/user/check`)
}

//登出
function logout() {
  return dashAxios.post(`${APIUrl}v2/logout`)
}

//上傳圖片
function updImg(img) {
  return dashAxios.post(`upload`, img)
}

//產品

//取得產品資料
function getProducts(page) {
  return dashAxios.get(`products?page=${page}`)
}

//新增產品資料
function addProduct(data) {
  return dashAxios.post(`product`, data)
}

//修改產品資料
function editProduct(data) {
  return dashAxios.put(`product/${data.data.id}`, data)
}

//刪除產品資料
function delProduct(id) {
  return dashAxios.delete(`product/${id}`)
}

//訂單

//取得訂單資料
function getOrders() {
  return dashAxios.get(`orders`)
}

//刪除訂單資料
function delOrder(id) {
  return dashAxios.delete(`order/${id}`)
}

//優惠卷

//取得優惠卷清單
function getCoupons(page) {
  return dashAxios.get(`coupons?page=${page}`)
}

//新增優惠卷
function addCoupon(data) {
  return dashAxios.post(`coupon`, data)
}

//修改優惠卷
function editCoupon(data) {
  return dashAxios.put(`coupon/${data.data.id}`, data)
}

//刪除優惠卷
function delCoupon(id) {
  return dashAxios.delete(`coupon/${id}`)
}

export {
  verifyLogin,
  logout,
  updImg,
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
