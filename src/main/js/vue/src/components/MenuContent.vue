<template>
  <div>
    <div v-for="(menuItem, index) in menu" :key="`${index}${menuItem.name}`" class="menu-item">
      <div class="menu-item__header">
        <div>{{ menuItem.name }}</div>
        <div>{{ menuItem.price }}</div>
      </div>
      <div 
        v-if="!(menuItem.catagory === '-')" 
        class="menu-item__content"
      >
        {{ menuItem.catagory}}
      </div>

      <div v-if="!(menuItem.finnishDescription==='-')" 
        class="menu-item__content"
      >
        {{ menuItem.finnishDescription }}
      </div>
      <div 
        v-if="!(menuItem.englishDescription==='-')" 
        class="menu-item__content"
      >
        {{ menuItem.englishDescription }}
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  name: 'MenuContent',
  computed: {
    ...mapState(['_menu']),
    menu () {
      return this._menu.menu
    }
  },
  methods: {
    ...mapActions(['getMenu'])
  },
   created () {
     this.getMenu('appetizers')
   }
}
</script>

