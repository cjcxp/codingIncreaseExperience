<template>
  <div id="app">
    <home-page></home-page>

    
  </div>
</template>

<script>
import HomePage from './pages/index'

export default {
  name: "App",
  components: {
    HomePage
  },
  data() {
    return {

    }
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: .8rem /* 60/75 */;
  background-color: grey;
}
</style>
