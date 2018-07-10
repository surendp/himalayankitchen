<template>
  <div id="vue">
    <social-links></social-links>
    <nav-bar></nav-bar>
    <router-view></router-view>
  </div>
</template>

<script>
import socialLinks from './components/SocialLinks'
import NavBar from './components/Navbar'
export default {
  name: 'App',
  components: { socialLinks, NavBar }
}
</script>

<style>

</style>
