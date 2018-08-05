<template>
  <div class="showcase">
    <div class="showcase__logo">
      <img src="./../../../../resources/static/images/logo1.png">
    </div>
    <div class="showcase__display-area">
        <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Showcase',
  mounted () {
    const displayArea = document.querySelector('.showcase__display-area')
    const diff = displayArea.offsetWidth - displayArea.clientWidth
    displayArea.style.right = `-${diff}px`
  }
}
</script>


<style lang="scss">
  .showcase {
    width: 100%;
    height: calc(100vh - 21rem);
    display: flex;
    flex-direction: row;
    align-items: center;
    background: url('./../../../../resources/static/images/chickenCurry.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
    background-clip: padding-box;
    opacity: 0.85;
    overflow: hidden;


    &__logo {
      flex: 0 1 15%;
      text-align: center;

      & > img {
        width: 250px;
        height: 250px;
      }
    }

    &__display-area {
      flex: 0 1 85%;
      max-width: 85%;
      position: relative;
      // margin-left: 6.4rem;
      height: calc(100vh - 24rem);
      overflow-y: scroll;
      overflow-x: hidden;
      padding-right: 1.8rem;
    }
  }
</style>

