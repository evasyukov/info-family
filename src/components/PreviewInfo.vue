<template>
  <div class="preview-info">
    <!-- персональные данные -->
    <div class="preview-info_person">
      <span>Персональные данные</span>
      <div class="preview-info_person_text" v-if="personalInfo.name">
        {{ personalInfo.name }}, {{ personalInfo.age }} лет
      </div>
    </div>

    <!-- данные о детях -->
    <div class="preview-info_children">
      <span>Дети</span>
      <div class="preview-info_children_text">
        <div class="block" v-for="(child, index) in children" :key="index">
          {{ child.name }}, {{ child.age }} лет
        </div>
      </div>
    </div>

    <button style="margin-top: 100px;" @click="clearStorage()">Очистить хранилище</button>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue"


const personalInfo = ref({ name: "", age: "" })
const children = ref([])

// загрузка данных из локального хранилища
onMounted(() => {
  const savedPersonalInfo = localStorage.getItem("personalInfo")
  const savedChildren = localStorage.getItem("children")

  if (savedPersonalInfo) {
    personalInfo.value = JSON.parse(savedPersonalInfo)
  }

  if (savedChildren) {
    children.value = JSON.parse(savedChildren)
  }
})

const clearStorage = () => {
  localStorage.clear()
  personalInfo.value = { name: "", age: "" } // сбрасываем данные о пользователе
  children.value = [] // сбрасываем данные о детях
}
</script>

<style lang="scss" scoped>
.preview-info {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &_person {
    width: 615px;
    margin-top: 30px;

    &_text {
      font-size: 18px;
      font-weight: 600;

      margin-top: 20px;
    }
  }
  &_children {
    width: 615px;
    margin-top: 60px;

    &_text {
      display: flex;
      flex-direction: column;
      gap: 20px;

      margin-top: 20px;

      .block {
        width: fit-content;
        height: 40px;

        display: flex;
        justify-content: center;
        align-items: center;

        border-radius: 5px;
        background-color: #f1f1f1;

        padding: 10px 20px;

        font-size: 18px;
        font-weight: 600;
      }
    }
  }
}
</style>
