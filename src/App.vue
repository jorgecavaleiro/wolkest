<template>
  <img alt="Vue logo" src="./assets/logo.png">

  <PV-Button value="Ok" />
  <PV-InputText></PV-InputText>

  <HelloWorld msg="Wolkest App"/>
  <LayoutBuilder />
  
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import LayoutBuilder from './components/LayoutBuilder.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    LayoutBuilder
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
  margin-top: 60px;
}
</style>
