<template>
  <Header />

  <div class="preview-info">
    <!-- Персональные данные -->
    <div class="preview-info_person">
      <span>Персональные данные</span>
      <div class="preview-info_person_text">Василий, 30 лет</div>
    </div>

    <!-- данные о детях -->
    <div class="preview-info_children">
      <span>Дети</span>
      <div class="preview-info_children_text">
        <div class="block">Петр, 14 лет</div>
        <div class="block">Василий, 14 лет</div>
      </div>
    </div>
  </div>

  <Footer />
</template>

<script setup>
import Header from "./Header.vue"
import Footer from "./Footer.vue"
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
        background-color: #F1F1F1;

        padding: 10px 20px;

        font-size: 18px;
        font-weight: 600;
      }
    }
  }
}
</style>
