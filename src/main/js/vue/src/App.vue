<template>
  <div id="vue">
    <page-header></page-header>
    <navbar></navbar>
    <showcase></showcase>
    <page-footer></page-footer>
  </div>
</template>

<script>
  import PageHeader from './components/Header'
  import Navbar from './components/Navbar'
  import Showcase from './components/Showcase.vue'
  import PageFooter from './components/Footer.vue'

  export default {
    name: 'App',
    components: { PageHeader, Navbar, Showcase, PageFooter }
  }
</script>

