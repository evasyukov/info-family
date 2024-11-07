<template>
  <Header />

  <div class="filling-form">
    <!-- Персональные данные -->
    <div class="filling-form_person">
      <span>Персональные данные</span>
      <div class="filling-form_person_input">
        <InputForm label="Имя"/>
        <InputForm label="Возраст" />
      </div>
    </div>

    <!-- Дети -->
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

  <Footer />
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
    margin-top: 30px;

    &_header {
      display: flex;
      justify-content: space-between;
      align-items: center;

      .add-button {
        background: none;
        border: 1px solid #1e90ff;
        color: #1e90ff;
        padding: 5px 10px;
        border-radius: 15px;
        cursor: pointer;
        font-size: 0.9rem;

        &:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }
      }
    }

    &_input {
      display: flex;
      align-items: center;
      //   justify-content: flex-start;
      gap: 10px;
      margin-top: 15px;

      .delete {
        color: #1e90ff;
        cursor: pointer;
        font-size: 0.9rem;
        text-decoration: underline;
      }
    }
  }
}

span {
  font-size: 20px;
  font-weight: 600;
}
</style>
