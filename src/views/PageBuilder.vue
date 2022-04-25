<template>
  <div class="home">
    <Sidebar v-model:visible="visibleLeft">
      <Dropdown v-model="selectedTarget" :options="targets" optionLabel="name" placeholder="Select a Target" />
      <PV-Button icon="pi pi-arrow-right" @click="addComponent(selectedTarget.id, 'SampleComponent')" />    
    </Sidebar>  

    <PV-Button class="sidebar-open" icon="pi pi-arrow-right" @click="visibleLeft = true" />    

    <div id="canvas" ref="root">
      <div class="support-grid"></div>

      <div class="band">
        <div class="item-1" id="container-1">          
        </div>
        <div class="item-2" id="container-2">
        </div>
        <div class="item-3" id="container-3">
        </div>
        <div class="item-4" id="container-4">
        </div>
        <div class="item-5" id="container-5">
        </div>
        <div class="item-6" id="container-6">
        </div>
        <div class="item-7" id="container-7">
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onUnmounted, getCurrentInstance } from "vue";
import renderComponent from "@/renderComponent";
import pageLoad from "./pageModelLoader";
import Sidebar from 'primevue/sidebar';
import Dropdown from 'primevue/dropdown';

const { appContext } = getCurrentInstance();

let counter = 1;
let components = new Map();

// cleanup
onUnmounted(() => { 
  components.forEach(c => c?.())
  components.clear()
  console.log('all clean and done!')
});

// Add component method : Add component to specified container
const addComponent = async (id, componentName, props) => {
  let container = ref("root")
  if (id) {
    container.value = document.getElementById(id)    
  } else {
    console.log('No target container. Aborting...')
    return
  }

  if (!props) {
    props = {
          key: counter,
          msg: "Message " + counter++,
      }
  }

  let component = null;

  // get the component 
  switch (componentName) {
    case 'SampleComponent':
      component = (await import("@/components/SampleComponent.vue")).default
      break
    case 'CardComponent':
      component = (await import("@/components/CardComponent.vue")).default
      break
    default:
      console.log(`Component not found ${componentName}.`);
  }

  // if container is occupied => clear it
  const tenant = components.get(id)
  if (tenant) {
    tenant?.();
  }

  // render component into the DOM
  const newCmp = renderComponent({
      el: container.value,
      component: component,
      props: props,
      appContext,
  });

  // Add to components' collection
  components.set(id, newCmp)
};
</script>


<script>
export default {
  name: "VC-PageBuilder",
  data() {
    return {
      containerId: "",
      selectedTarget: null,
      visibleLeft: false,
      targets: [
        {name: 'Container 1', id: 'container-1'},
        {name: 'Container 2', id: 'container-2'},
        {name: 'Container 3', id: 'container-3'},
        {name: 'Container 4', id: 'container-4'},
        {name: 'Container 5', id: 'container-5'}
        ]
    };
  },
  methods: {
      addComponent: function () {
          // this function correctly fetches external data
      }
  },  
  mounted() {
    // load the page model
    const componentsDef = pageLoad()
    componentsDef.forEach((c, index) => {
      console.log(c);
      console.log(`adding component ${c.id} to the container: ${index}`)
      this.addComponent(index, 'CardComponent', c.props)
    })
  }
};
</script>

<style scoped>
html {
  background: #f5f7f8;
  font-family: 'Roboto', sans-serif;
  -webkit-font-smoothing: antialiased;
  padding: 20px 0;
}

button.sidebar-open {
  position: absolute;
  top: 2rem;
  left: 0;
}

.band {
  width: 90%;
  max-width: 1240px;
  margin: 0 auto;
  
  display: grid;
  
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  grid-gap: 20px;
  
}

@media only screen and (min-width: 500px) {
  .band {
    grid-template-columns: 1fr 1fr;
  }  
  .item-1 {
  grid-column: 1/ span 2;
  }
  .item-1 h1 {
    font-size: 30px;
  }
}

@media only screen and (min-width: 850px) {
  .band {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
}

</style>
