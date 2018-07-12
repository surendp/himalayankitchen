<template>
  <div class="container">
    <page-header></page-header>
    <navbar></navbar>
    <showcase></showcase>
    <page-footer></page-footer>
  </div>
</template>

<script>
  import PageHeader from './Header'
  import Navbar from './Navbar'
  import Showcase from './Showcase.vue'
  import PageFooter from './Footer.vue'

  export default {
    name: 'Landing',
    components: { PageHeader, Navbar, Showcase, PageFooter }
  }
</script>

<style lang="scss" scoped>
  .container {
    max-width: 100%;
    overflow: hidden;
  }
</style>

