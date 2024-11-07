<template>
  <div class="header">
    <div class="header_logo">
      <div class="test"></div>
    </div>

    <div class="header_pages">
        <div class="form"></div>
        <div class="preview"></div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.header {
  width: 100%;
  height: 90px;

//   background-color: #ff000030;

  display: flex;
  align-items: center;

  border-bottom: 1px solid #e8e8e8;

  &_logo {
    width: 100px;
    height: 80%;

    position: relative;

    left: 100px;
    background-color: #00ff00;
  }

  &_pages {
    width: 170px;
    height: 80%;

    position: relative;

    left: 750px;

    background-color: #0000ff;
  }
}
</style>
