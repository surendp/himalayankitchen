<template>
  <div class="navbar">
    <nav-link v-for="linkItem in linkItems" :key="linkItem">
      <router-link slot="link" :to="linkItem.route" >{{ linkItem.label }}</router-link>
    </nav-link>
  </div>
</template>

<script>
import NavLink from './NavLink'
export default {
  name: 'NavBar',
  components: { NavLink },
  data () {
    return {
      linkItems : [
        { label: 'About us', route: '/about-us' },
        { label: 'Menu', route: '/menu' },
        { label: 'Lunch', route: '/lunch' },
        { label: 'Order Online', route: '/order-online' },
        { label: 'Contact & Reservations', route: 'contact-and-reservations'}
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
  .navbar {
    height: 5.6rem;
    background-color: #b2beb5;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    padding: 0 2rem;
    position: relative;
    top: 0;
    left: 0;
    right: 0;
  }
</style>


