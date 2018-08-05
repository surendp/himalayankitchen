<template>
  <div class="menu-list">
    <div
    class="menu-list__item"
    v-for="menuListItem in menuList"
    :key="menuListItem"
    @click="updateMenu"
    :id="idname(menuListItem)">
      {{ menuListItem }}
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'SubMenu',
  computed: {
    ...mapState(['_menu']),
    menuList() {
      return this._menu.menuList
    },

  },
  methods: {
    ...mapActions(['getMenu']),
    updateMenu(e) {
      const id = e.target.getAttribute('id')
      this.toggleClass(id)
      this.getMenu(id)
    },
    idname (str) {
      return str.toLowerCase().split(' ').join('')
    },
    toggleClass(id) {
      document.querySelector('.menu-list__item-active').classList.remove('menu-list__item-active') 
      document.querySelector(`#${id}`).classList.add('menu-list__item-active')
    }
  },
  mounted () {
    const item = document.querySelector('#appetizers')
    item.classList.add('menu-list__item-active')
  }
}
</script>

