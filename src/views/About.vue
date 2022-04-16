<template>
  <div class="home">
    <div class="box" ref="container">
      <h2>About...</h2>
    </div>
  </div>
</template>

<script setup>
  import { getCurrentInstance } from 'vue'
  const { appContext } = getCurrentInstance()
  console.log( appContext )
</script>

<style scoped>
.home {
  display: flex;
  flex-direction: column;
  margin: 2rem 0;
}
.box {
  margin-top: 2rem;
  padding: 1rem;
  outline: solid 1px #ccc;
}
</style>
