<template>
  
  <div class="filling-form">

    <!-- персональные данные -->
    <div class="filling-form_person">
      <span>Персональные данные</span>
      <div class="filling-form_person_input">
        <InputForm label="Имя" />
        <InputForm label="Возраст" />
      </div>
    </div>

    <!-- дети -->
    <div class="filling-form_children">

      <!-- шапка детей -->
      <div class="filling-form_children_header">
        <span>Дети (макс. 5)</span>
        <button
          class="add-button"
          @click="addChild"
          :disabled="children.length >= maxChildren"
        >
          + Добавить ребенка
        </button>
      </div>

      <!-- поля ввода -->
      <div
        class="filling-form_children_input"
        v-for="(child, index) in children"
        :key="index"
      >
        <InputForm v-model="child.name" label="Имя" />
        <InputForm v-model="child.age" label="Возраст" />
        <div class="delete" @click="removeChild(index)">
          <span>Удалить</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue"

// components
import Header from "./Header.vue"
import Footer from "./Footer.vue"
import InputForm from "./InputForm.vue"

const maxChildren = 5
const children = ref([]) // начальная информация о детях

// добавление ребенка
const addChild = () => {
  if (children.value.length < maxChildren) {
    children.value.push({ name: "", age: "" })
  }
}

// удаление ребенка
const removeChild = (index) => {
  children.value.splice(index, 1)
}
</script>

<style lang="scss" scoped>
.filling-form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &_person {
    width: 615px;

    margin-top: 30px;

    &_input {
      display: flex;
      flex-direction: column;
      gap: 10px;

      margin-top: 15px;
    }
  }

  &_children {
    width: 615px;
    margin-top: 60px;

    &_header {
      display: flex;
      justify-content: space-between;
      align-items: center;

      height: 35px;

      .add-button {
        background: transparent;
        color: #01a7fd;
        padding: 5px 10px;

        border: 1px solid #01a7fd;
        border-radius: 15px;

        cursor: pointer;
        font-size: 18px;
        user-select: none;

        &:hover {
          background: #01a9fd23;
        }
        &:disabled {
          display: none;
        }
      }
    }

    &_input {
      display: flex;
      align-items: center;
      gap: 10px;
      margin-top: 15px;

      .delete {
        color: #1e90ff;
        cursor: pointer;
        user-select: none;

        span {
          font-size: 16px;
          font-weight: 400;
        }
      }
    }
  }
}
</style>
