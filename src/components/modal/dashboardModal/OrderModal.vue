<template>
  <div class="modal fade" tabindex="-1" ref="modalRef">
    <div class="modal-dialog modal-xl" role="document">
      <div class="modal-content border-0 position-relative overflow-hidden">
        <div class="modal-header bg-dark text-white">
          <h5 class="modal-title" id="exampleModalLabel">
            <span>新增產品</span>
          </h5>
          <button
            type="button"
            class="btn-close icon-white"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="container">
          <div class="mt-3">
            <p>
              訂單建立時間：{{ data?.create_date }}
              <span class="text-secondary">{{ data?.create_time }}</span>
            </p>
          </div>

          <div>
            <p class="fs-4 mb-2">買家資訊</p>
            <p>
              買家姓名：{{ data?.user?.name }}<br />
              買家電話：{{ data?.user?.tel }}<br />
              買家email：{{ data?.user?.email }}<br />
              買家地址：{{ data?.user?.address }}<br />
              買家留言：{{ data?.message }}
            </p>
          </div>
          <div>
            <h2>買家購買商品內容</h2>
            <div class="row row-cols-1 row-cols-md-2 g-4">
              <div v-for="p in data.products" :key="p.id">
                <div class="card mb-3">
                  <div class="row g-0">
                    <div class="col-md-4">
                      <div v-if="p.product.imageUrl">
                        <img :src="p.product.imageUrl" class="img-fluid rounded-start" alt="..." />
                      </div>
                      <div
                        v-else
                        class="h-100 d-flex justify-content-center align-items-center bg-secondary"
                      >
                        <div class="fs-4 text-light text-center">無商品<br />圖片</div>
                      </div>
                    </div>
                    <div class="col-md-8">
                      <div class="card-body">
                        <h5 class="card-title">{{ p.product.title }}</h5>
                        <p class="card-text">
                          分類：{{ p.product.category }} <br />
                          數量：{{ p.qty }}{{ p.product.unit }}<br />
                          單價：{{ p.product.price }}元<br />
                          總價：{{ p.total }}元<br />
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="d-flex align-items-end">
            <p>
              是否付款：<span :class="data?.is_paid ? '' : 'text-danger'">{{
                data?.is_paid ? '已付款' : '未付款'
              }}</span>
            </p>
            <p>
              總計<span class="price_t">{{ data?.total }}</span
              >元
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, watch } from 'vue'
import { useModal } from '@/composable/useModal'

const props = defineProps({ orderData: Object })
const modalRef = ref(null)
const { showModal, hideModal } = useModal(modalRef)

const data = ref('安安')

watch(
  () => props.orderData,
  (newval) => {
    data.value = { ...newval }
  },
)

defineExpose({
  showModal,
  hideModal,
})
</script>
<style scoped>
.price_t {
  font-family: arial;
  font-weight: bold;
  font-size: 32px;
  color: #ff2d2d;
  padding: 0px 4px;
}
</style>
