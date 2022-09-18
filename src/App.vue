<template>
  <router-view/>
</template>

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
</style>
