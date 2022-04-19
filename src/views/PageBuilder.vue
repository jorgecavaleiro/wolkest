<template>
  <div class="home">
    <div class="flex-container">
      <div class="flex-child">
        <select v-model="containerId">
          <option disabled value="">Select target</option>
          <option value="container-1">1</option>
          <option value="container-2">2</option>
          <option value="container-3">3</option>
          <option value="container-4">4</option>
        </select>
      </div>
      <div class="flex-child">
        <button @click="addComponent(containerId)">Insert component in {{ containerId }}</button>
      </div>
      <div class="flex-child"></div> 
    </div>
    <div id="canvas" ref="root">
      <div class="box" id="container-1"></div>
      <div class="box" id="container-2"></div>
      <div class="box" id="container-3"></div>
      <div class="box" id="container-4"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "VC-PageBuilder",
  data() {
    return {
      containerId: "",
    };
  },
};
</script>

<script setup>
import { ref, onUnmounted, getCurrentInstance } from "vue";
import renderComponent from "@/renderComponent";

const { appContext } = getCurrentInstance();

var container = ref("root");
let counter = 1;
let components = new Map();

// cleanup
onUnmounted(() => { 
  components.forEach(c => c?.())
  components.clear()
  console.log('all clean and done!')
});

// Add component method : Add component to specified container
const addComponent = async (id) => {
  console.log(id)
  if (id) {
    container.value = document.getElementById(id)    
  } else {
    console.log('No target container. Aborting...')
    return
  }

  // check if occupied
  const tenant = components.get(id)
  if (tenant) {
    tenant?.();
  }

  const newCmp = renderComponent({
      el: container.value,
      component: (await import("@/components/SampleComponent.vue")).default,
      props: {
          key: counter,
          msg: "Message " + counter++,
      },
      appContext,
  });

  // Add to components' collection
  components.set(id, newCmp)
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
  padding: 1rem;
}
.flex-child:first-child {
  margin-right: 20px;
}
</style>
