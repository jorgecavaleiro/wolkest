<template>
  <div class="home">
    <div class="box" ref="container">
      <h2>Home Page</h2>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home-Component",
  data() {
    return {
      title: "Home",
    };
  },
};
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
}

.flex-container {
  display: flex;
}
.flex-child {
  flex: 1;
}
.flex-child:first-child {
  margin-right: 20px;
}
</style>
