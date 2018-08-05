<template>
  <div class="display-area">
    <div class="display-area__item display-area__item_left">
       <div class="display-area__item_background"></div>
      <sub-menu></sub-menu>
    </div>
    <div class="display-area__item display-area__item_right">
      <div class="display-area__item_background"></div>
      <div class="display-area__item_content">
        <menu-content></menu-content>
      </div>
    </div>
  </div>
</template>
<script>
import SubMenu from './SubMenu.vue'
import MenuContent from './MenuContent'

export default {
  name: 'Menu',
  components: {
    SubMenu,
    MenuContent
  }
}
</script>


<style lang="scss" scoped>
  .display-area {
    display: flex;
    flex-direction: row !important;
    
    &__item_left {
      flex-basis: 25%;
      margin-right: 0.1rem;
    }

    &__item_right {
      flex-basis: 75%;
    }
  }
</style>
