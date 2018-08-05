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
            <div class="menu-item__header">
              <div>{{ menuItem.name }}</div>
              <div>{{ menuItem.price }}</div>
            </div>
            <div class="menu-item__content">
              {{ menuItem.finnishDescription }}
            </div>
            <div class="menu-item__content">
              {{ menuItem.englishDescription }}
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
  },
  methods: {
    ...mapActions(['getLunchMenu'])
  },
  created () {
    const weekdays = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday']
    weekdays.map(day => {
      this.getLunchMenu({
        url: `/api/lunch/${day}`,
        day: day
      })
    }) 
  }
}
</script>


