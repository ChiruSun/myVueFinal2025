// 數字千分號
export function useFormatNumber() {
  const formatNumber = (num) => {
    if (typeof num !== 'number') {
      num = Number(num)
    }
    if (isNaN(num)) return ''
    return num.toLocaleString()
  }

  return { formatNumber }
}

//轉換日期(YYYY/MM/DD)
export function useFormatDate(timestamp) {
  const date = new Date(timestamp * 1000) // 轉換為毫秒
  const year = date.getFullYear()
  const month = (date.getMonth() + 1).toString().padStart(2, '0')
  const day = date.getDate().toString().padStart(2, '0')
  return `${year}/${month}/${day}`
}

//轉換時間
export function useFormatTime(timestamp) {
  const date = new Date(timestamp * 1000) // 轉換為毫秒
  const hour = date.getHours().toString().padStart(2, '0')
  const minute = date.getMinutes().toString().padStart(2, '0')
  const second = date.getSeconds().toString().padStart(2, '0')
  return `${hour}:${minute}:${second}`
}
