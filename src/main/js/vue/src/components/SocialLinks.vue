<template>
  <div class="social">
    <div class="social-icons social-icons__facebook">
      <icon name="facebook-square" scale="2"> </icon>
    </div>
    <div class="social-icons social-icons__insta">
      <icon name="instagram" scale="2"></icon>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .social {
    width: 100vw;
    height: 3.2rem;
    background-color: rgba(194, 255, 0, 0.7);
    display: flex;
    flex-direction: row;
    align-items: center;
    padding-left: 1.6rem;

    &-icons {
      margin-left: 0.8rem;

      &__facebook {
        color: rgba(255, 245, 245, 1);
      }
    }
  }
</style>

