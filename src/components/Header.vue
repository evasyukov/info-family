<template>
  <div class="header">
    <div class="header_logo">
      <div class="test"></div>
    </div>

    <div class="header_pages">
        <router-link to="/info-family" class="link">Форма</router-link>
        <router-link to="/preview" class="link">Превью</router-link>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.header {
  width: 100%;
  height: 8vh;

  display: flex;
  align-items: center;

  border-bottom: 1px solid #e8e8e8;

  &_logo {
    width: 7vw;
    height: 80%;

    position: relative;

    left: 5vw;
    background-color: #00ff0032;
  }

  &_pages {
    width: 12vw;
    height: 80%;

    display: flex;
    align-items: center;
    justify-content: space-around;

    position: relative;
    margin-left: 35vw;

    .link {
      font-size: 1.1vw;

      color: #1111117a;
      
      cursor: pointer;
      text-decoration: none;
      user-select: none;

      &:hover {
        color: #111111;
      }
    }
  }
}
</style>
