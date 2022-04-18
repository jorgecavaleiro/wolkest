<template>
  <div class="home">
    <div class="flex-container">
      <div class="fex-child">
        <select v-model="containerId">
          <option disabled value="">Select target</option>
          <option value="container-2">2</option>
          <option value="container-3">3</option>
          <option value="container-4">4</option>
        </select>
      </div>
      <div class="fex-child">
        <button @click="insert(containerId)">Insert component on {{ containerId }}</button>
      </div>
    </div>
    <div class="box" ref="container"></div>
    <div class="box" id="container-2"></div>
    <div class="box" id="container-3"></div>
    <div class="box" id="container-4"></div>
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

var container = ref();
let counter = 1;
let components = new Map();

// cleanup
onUnmounted(() => { 
  components.forEach(c => c?.())
  components.clear()
  console.log('all clean and done!')
});

const insert = async (id) => {
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
  flex: 1;
}
.flex-child:first-child {
  margin-right: 20px;
}
</style>
