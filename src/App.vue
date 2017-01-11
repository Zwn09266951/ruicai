<template>
  <router-view></router-view>
</template>

<script>
import 'normalize.css'
import 'animate.css'
import './css/default.css'
</script>

<style>
ul, li {
  padding: 0;
  margin: 0;
  list-style-type: none;
}

h1, h2, h3 {
  margin: 0;
  padding: 0;
}

a {
  color: #555;
  text-decoration: none;
}

button, input {
  padding: 0;
  border: 0;
  outline: none;
}

p {
  margin: 0;
}

@block warp {
  margin: 0 auto;
  min-width: 1200px;
}
</style>
