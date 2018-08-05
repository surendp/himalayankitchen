<template>
  <div style="height: 5.6rem;">
    <div class="navbar">
    <nav-link class="navbar__link" v-for="linkItem in linkItems" :key="linkItem.label">
      <router-link slot="link" :to="linkItem.route" >{{ linkItem.label }}</router-link>
    </nav-link>
    </div>
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
        { label: 'Menu', route: '/menu/appetizers' },
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
    height: 5.6rem;;
    max-width: 100%;
    overflow: hidden;
    background-color: #b2beb5;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    position: sticky;
    top: 3.2rem;

    &__link {
      font-family: 'Josefin Slab', serif;
      font-weight: 600;
    }
  }
</style>


