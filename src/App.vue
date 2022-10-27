<template>
  <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <DataForm/>
  
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import HelloWorld from './components/HelloWorld.vue';
import DataForm from './components/DataForm.vue';


export default {
  name: 'App',
  components: {
    DataForm
}
}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  
}
</style>
