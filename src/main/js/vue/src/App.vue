<template>
  <div id="vue">
    <social-links></social-links>
    <navbar></navbar>
    <router-view></router-view>
  </div>
</template>

<script>
import socialLinks from './components/SocialLinks'
import Navbar from './components/Navbar'
export default {
  name: 'App',
  components: { socialLinks, Navbar }
}
</script>

<style>

</style>
