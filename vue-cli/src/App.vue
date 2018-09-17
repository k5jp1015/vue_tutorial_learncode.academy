<template>
  <div id="app">
    <img src="./assets/logo.png">
    <!-- <HelloWorld/> -->
    <h1>{{msg}}</h1>
    <Module1 />
    <Module2 />
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld'
import Module1 from "./components/Module1"
import Module2 from "./components/Module2"
export default {
  name: 'App',
  components: {
    // HelloWorld
    Module1,
    Module2,
  },
  data(){
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
