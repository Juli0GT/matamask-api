<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style lang="scss">
#app {
  font-family: 'Raleway', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #f2f2f2;
  min-height: 100vh;
  margin: -8px -8px -8px -8px;
  padding: 0;
}

.capitalize {
  text-transform: capitalize;
}

.uppercase {
  text-transform: uppercase;
}

.bold {
  font-weight: 600;
}

</style>
