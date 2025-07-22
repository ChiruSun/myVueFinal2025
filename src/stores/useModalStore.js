import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useModalStore = defineStore('modal', () => {
  // 存放 modal 實例（初始為 null）
  let modalInstance = ref(null)
  const modalTempData = ref('')

  // 子元件使用，modal實例註冊
  const registerModal = (instance) => {
    modalInstance.value = instance
  }

  // 開啟 modal（如果 modalInstance 存在才呼叫）
  const showModal = () => {
    if (modalInstance.value) {
      modalInstance.value.show()
    }
  }

  // 關閉 modal（同上）
  const hideModal = () => {
    if (modalInstance.value) {
      modalInstance.value.hide()
    }
  }

  return {
    modalInstance,
    modalTempData,
    registerModal,
    showModal,
    hideModal,
  }
})
