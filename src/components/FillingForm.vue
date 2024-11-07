<template>
  <div class="filling-form">
    <!-- персональные данные -->
    <div class="filling-form_person">
      <span>Персональные данные</span>
      <div class="filling-form_person_input">
        <InputForm v-model="personalInfo.name" label="Имя" />
        <InputForm v-model="personalInfo.age" label="Возраст" />
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

        <div class="delete-button" @click="removeChild(index)">
          <span>Удалить</span>
        </div>
      </div>
    </div>

    <!-- кнопка сохранить -->
    <div class="filling-form_save">
      <div class="save-button" @click="saveInfo">Сохранить</div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue"
import InputForm from "./InputForm.vue"

const maxChildren = 5
const personalInfo = ref({ name: "", age: "" }) // начальная информация о пользователе
const children = ref([]) // начальная информация о детях

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

// добавление ребенка
const addChild = () => {
  if (children.value.length < maxChildren) {
    children.value.push({ name: "", age: "" })
  }
}

// удаление ребенка 
const removeChild = (index) => {
  children.value.splice(index, 1)
  localStorage.setItem("children", JSON.stringify(children.value))
}

// сохранение информации в локальное хранилище
const saveInfo = () => {
  if (!personalInfo.value.name || !personalInfo.value.age) {
    alert("Пожалуйста, заполните все поля в персональных данных.")
    return
  }

  for (const child of children.value) {
    if (!child.name || !child.age) {
      alert(`Пожалуйста, заполните все поля для ребенка ${child.name}!`)
      return
    }
  }

  localStorage.setItem("personalInfo", JSON.stringify(personalInfo.value))
  localStorage.setItem("children", JSON.stringify(children.value))
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
        padding: 10px 20px;

        border: 1px solid #01a7fd;
        border-radius: 15px;

        cursor: pointer;
        font-size: 18px;
        user-select: none;

        &:hover {
          background: #01a9fd15;
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

      .delete-button {
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

  &_save {
    width: 615px;
    margin-top: 30px;

    .save-button {
      width: fit-content;

      background: #01a7fd;
      color: #fff;

      font-size: 16px;

      padding: 10px 20px;

      border: 1px solid #01a7fd;
      border-radius: 100px;

      cursor: pointer;
      user-select: none;
    }
  }
}
</style>
