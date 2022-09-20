<template>
  <header class="header-component wrapper">
    <div class="logo">
      <router-link class="logo-link" to="/">
        TO DO LIST
      </router-link>
    </div>
  </header>
</template>

<script>
export default {
  name: 'header-component'
}
</script>

<style scoped>
.header-component {
  background-color: blue;
  color: white;
  padding-top: 20px;
  padding-bottom: 20px;
}
.logo-link:hover {
  opacity: 0.5;
}
</style>