
<template>
  <div class="display-area display-area_half">
    <div class="display-area__item">
      <div class="display-area__item_background"></div>
      <transition name= "fade">
      <h3 class="display-area__item_header">About us </h3>
        </transition>  
      <div class="display-area__item_content">
        With an aim to deliver true Nepalese Cuisine to the heart of historically important old city, we have now opened Himalayan Kitchen in Turku. Everyone are welcome to experience the original flavours and hospitality of Nepal at the Himalayan Kitchen. We are open everyday throughout the week to serve you with many different menu items.
        Come, experience and enjoy your moments, which is our high priority.

        <h4>Come, experience and enjoy your moments, which is our high priority.</h4>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .fade-enter-active, .fade-leave-active {
    transition: all 0.3s ease;
  }

  .fade-enter {
    opacity: 1;
  }

  .fade-leave {
    opacity : 0
  }
</style>
