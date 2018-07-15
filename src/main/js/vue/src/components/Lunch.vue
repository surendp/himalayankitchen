<template>
  <div class="menu menu-display-area">
   
  </div>
</template>

<script>
import { mapActions, mapState, mapGetters } from 'vuex'

export default {
  name:'Lunch',
  computed: {
    ...mapState({
      menu: 'lunch'
    }),
    ...mapGetters(['sortedLunchMenu'])
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
  .menu-display-area {
    width: 97%;
    height: calc(100vh - 24rem);
    background: #000;
    opacity: 0.5;
    border-radius: 10px;
  }
</style>

