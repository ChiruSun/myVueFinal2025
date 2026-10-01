<template>
  <nav aria-label="Page navigation example">
    <ul class="pagination justify-content-center">
      <li class="page-item">
        <a
          class="page-link"
          :class="{ disabled: !pages?.has_pre }"
          :tabindex="pages?.has_pre ? 0 : -1"
          href="#"
          aria-label="Previous"
          @click.prevent="PreviousPage"
        >
          <span aria-hidden="true">&laquo;</span>
        </a>
      </li>
      <li class="page-item" v-for="page in pages?.total_pages" :key="page">
        <a
          class="page-link"
          :class="{ active: page === pages?.current_page }"
          href="#"
          @click.prevent="goPage(page)"
          >{{ page }}</a
        >
      </li>
      <li class="page-item">
        <a
          class="page-link"
          :class="{ disabled: !pages?.has_next }"
          :tabindex="pages?.has_next ? 0 : -1"
          href="#"
          aria-label="Next"
          @click.prevent="NextPage"
        >
          <span aria-hidden="true">&raquo;</span>
        </a>
      </li>
    </ul>
  </nav>
</template>
<script setup>
const props = defineProps(['pages'])
const emit = defineEmits(['changePage'])

//上一頁
function PreviousPage() {
  if (props.pages.has_pre) {
    const NewPage = props.pages.current_page - 1
    emit('changePage', NewPage)
  } else {
    return
  }
}

//下一頁
function NextPage() {
  if (props.pages.has_next) {
    const NewPage = props.pages.current_page + 1
    emit('changePage', NewPage)
  } else {
    return
  }
}

//指定頁數
function goPage(page) {
  if (page === props.pages.current_page) {
    return
  } else {
    emit('changePage', page)
  }
}
</script>
