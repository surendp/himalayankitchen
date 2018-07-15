<template>
  <div class="showcase">
    <div class="showcase__item showcase__item_left">
      <img src="./../../../../resources/static/images/logo1.png" class="showcase__item_left_logo">
    </div>
    <div class="showcase__item showcase__item_right">
      <slot class="showcase-content" name="showcase-content"></slot>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .showcase {
    width: 100%;
    height: calc(100vh - 21rem);
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    background: url('./../../../../resources/static/images/chickenCurry.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
    background-clip: padding-box;
    opacity: 0.85;

    &__item_left {
      flex: 0 1 33%;

      &_logo {
        width: 200px;
        height: 200px;
      }
    }

    &__item_right {
      flex: 0 1 66%;
    }
  }
</style>

