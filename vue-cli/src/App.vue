<template>
  <div id="app">
    <img src="./assets/logo.png">
    <!-- HTML上ではaタブに変換される -->
    <router-link to="friends">friends</router-link>
    <router-link to="contact">contact</router-link>
    <router-link to="account">account</router-link>
    <!-- このrouter-viewタグが小さいけれど大切な違いらしい -->
    <!-- path指定によって呼び出すコンポーネントを分けることができる -->
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
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
