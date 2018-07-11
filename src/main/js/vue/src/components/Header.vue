<template>
  <div class="page-header">
    <div class="page-header__icon page-header__icon_facebook">
      <icon name="facebook-square" scale="2"> </icon>
    </div>
    <div class="page-header__icon page-header__icon_insta">
      <icon name="instagram" scale="2"></icon>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .page-header {
    width: 100vw;
    height: 3.2rem;
    background-color: rgba(194, 255, 0, 0.7);
    display: flex;
    flex-direction: row;
    align-items: center;
    padding-left: 1.6rem;

    &__icon {
      margin-left: 0.8rem;

      &_facebook {
        color: rgba(255, 245, 245, 1);
      }
    }
  }
</style>

