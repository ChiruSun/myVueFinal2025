import { ref, onMounted } from 'vue'

// 匯入modal方法1
// import { Modal } from 'bootstrap'
// 匯入modal方法2
import Modal from 'bootstrap/js/dist/modal.js'

export function useModal(modal) {
  const bsmodal = ref(null)
  onMounted(() => {
    //偵測modal本身是否渲染完成，並將實例放入bsmodal
    if (modal.value) {
      const AModal = new Modal(modal.value)
      bsmodal.value = AModal
      return
    }
  })

  //開啟modal
  function showModal() {
    bsmodal.value.show()
  }

  //關閉Madal
  function hideModal() {
    bsmodal.value.hide()
  }
  return {
    showModal,
    hideModal,
  }
}
