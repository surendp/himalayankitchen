<template>
  <div>
    <page-header></page-header>
    <navbar></navbar>
    <showcase></showcase>
  </div>
</template>

<script>
  import PageHeader from './Header'
  import Navbar from './Navbar'
  import Showcase from './Showcase.vue'

  export default {
    name: 'Landing',
    components: { PageHeader, Navbar, Showcase }
  }
</script>

