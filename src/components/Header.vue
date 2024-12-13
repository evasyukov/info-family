<template>
  <div class="header">
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
  justify-content: center;

  border-bottom: 1px solid #e8e8e8;

  &_logo {
    width: 7vw;
    height: 80%;

    position: relative;
    left: 5vw;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  &_pages {
    width: 12vw;
    height: 80%;

    display: flex;
    align-items: center;
    justify-content: space-around;

    position: relative;

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
