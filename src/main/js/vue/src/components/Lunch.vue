<template>
  <div class="display-area">
    <div 
      v-for="menu in sortedLunchMenu"
      :key="menu.day"
      class="display-area__item">
        <div class="display-area__item_background"></div>
        <h3 class="display-area__item_header"> {{ menu.day }} </h3>
        <div class="display-area__item_content">
          <div class="menu-item" v-for="menuItem in menu.data" :key="menuItem.name">
            <div  class="menu-item__header">
              <div>{{ menuItem.name }}</div>
              <div>{{ menuItem.price }}</div>
            </div>
            <div class="menu-item__content">
              {{ menuItem.description }}
            </div>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name:'Lunch',
  computed: {
    ...mapGetters(['sortedLunchMenu']),
    dishName (dish) {
      return dish.name
    }
  },
  methods: {
    ...mapActions(['getLunchMenu'])
  },
  created () {
    const weekdays = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday']
    weekdays.map(day => {
      this.getLunchMenu({
        url: `/lunch/${day}`,
        day: day
      })
    }) 
  }
}
</script>

<style lang="scss" scoped>
  .menu-item {
    &__header {
      padding: 0.4rem;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      font-size: 1.2rem;
      color: #fff;
      text-shadow: 1px 2px #000;

    }
    &__content {
      color: #fff;
      font-size: 1.2rem;
      font-weight: 500;
      letter-spacing: 0.03rem;
      line-height: 1.4rem;
      text-shadow: 1px 2px #000;
      padding: 0.4rem;
    }
  }
</style>


