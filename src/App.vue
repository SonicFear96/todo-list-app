<template>
  <vHeader/>
  <div class="app">
      <router-view/>
  </div>
</template>

<script>
import vHeader from '@/components/header'
export default {
  components: {
    vHeader
  }
}
</script>
<style>
* {
  vertical-align: baseline;
  font-family: inherit;
  font-style: inherit;
  font-size: 100%;
  border: none;
  padding: 0;
  margin: 0;
}

*, *::before, *::after {
  box-sizing: border-box;
}

html, body {
  margin: 0;
  padding: 0;
}

button {
  font-family: initial;
  background-color: blue;
  color: white;
  font-size: 14px;
  font-weight: 700;
  padding: 10px 20px;
  max-width: 300px;
  border-radius: 8px;
}

img {
  display: block;
  max-width: 100%;
  max-height: 100%;
}

a {
  text-decoration: none;
  color: inherit;
}

a img, :link img, :visited img {
  border: 0;
}
.wrapper {
  padding: 0 40px;
}
.app {
  margin-top: 100px;
}
.container {
  padding: 0 90px;
}

.button {
  background-color: blue;
  color: white;
  font-size: 14px;
  font-weight: 700;
  padding: 10px 20px;
  width: 100%;
  max-width: 300px;
  border-radius: 8px;
}
.button:hover {
  opacity: 0.5;
  cursor: pointer;
}
</style>
