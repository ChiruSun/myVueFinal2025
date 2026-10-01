<template>
  <div class="input-group my-input-width">
    <button
      class="btn btn-outline-secondary"
      type="button"
      @click="changeQty('-')"
      :disabled="modal === 1"
    >
      -
    </button>
    <input
      type="text"
      class="form-control text-center"
      v-model="modal"
      @blur="emitBlur"
      :disabled="props.inputDisabled"
    />
    <button
      class="btn btn-outline-secondary"
      type="button"
      @click="changeQty('+')"
      :disabled="modal >= 99"
    >
      +
    </button>
  </div>
</template>
<script setup>
const props = defineProps({ inputDisabled: { type: Boolean, default: false } })
const emit = defineEmits(['apiChangeQty', 'inputBlur'])
const modal = defineModel()
//雙向溝通父層寫v-model
//單向傳資料父層寫:modal-value

function changeQty(type) {
  if (type === '+') {
    modal.value++
  } else if (type === '-') {
    modal.value--
  } else {
    return
  }
  emit('apiChangeQty', modal.value)
}

function emitBlur() {
  emit('inputBlur')
}
</script>
