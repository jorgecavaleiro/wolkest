<template>
  <div class="home">
    <Sidebar v-model:visible="visibleLeft">
      <div class="stack-container">
        <div class="queue-container">
          <Dropdown class="element" v-model="selectedTarget" :options="targets" optionLabel="name" placeholder="Select a Target" />
          <PV-Button class="element" icon="pi pi-arrow-right" @click="addComponent(selectedTarget.id, 'SampleComponent', { key: counter, msg: 'hi there!'}, replaceContent)" />    
        </div>
        <div class="queue-container">
          <Checkbox class="element" name="replaceContent" v-model="replaceContent" :binary="true" />
          <label class="element" for="replaceContent">Replace Content</label>
        </div>
      </div>      
    </Sidebar>  

    <PV-Button class="sidebar-open" icon="pi pi-arrow-right" @click="visibleLeft = true" />    

    <div id="canvas" ref="root">
      <div class="support-grid"></div>

      <div class="band">
        <div class="stack-container item-1" id="container-1">          
        </div>
        <div class="stack-container item-2" id="container-2">
        </div>
        <div class="stack-container item-3" id="container-3">
        </div>
        <div class="stack-container item-4" id="container-4">
        </div>
        <div class="stack-container item-5" id="container-5">
        </div>
        <div class="stack-container item-6" id="container-6">
        </div>
        <div class="stack-container item-7" id="container-7">
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { ref, getCurrentInstance } from "vue";
  import renderComponent from "@/renderComponent";
  import pageLoad from "./pageModelLoader";
  import loadComponentByName from "./componentLoader";

  // Prime Vue Components
  import Sidebar from 'primevue/sidebar';
  import Dropdown from 'primevue/dropdown';
  import Checkbox from 'primevue/checkbox';

  const { appContext } = getCurrentInstance();

  let components = new Map();

  // Add component method : Add component to specified container
  const addComponent = async (id, componentName, props, replaceContent) => {
    let container = ref("root")
    if (id) {
      container.value = document.getElementById(id)    
    } else {
      console.log('No target container. Aborting...')
      return
    }

    // Get the contents wrapper or create if new
    let contentWrapper = null
    const position = document.getElementById(id).children.length 
    let wrapperName = `${id}-contentWrapper-${position}`
    
    if (replaceContent && position > 0) {
      wrapperName  = `${id}-contentWrapper-${position - 1}`      
      contentWrapper = document.getElementById(wrapperName)
      console.log(`inserting into existing: ${wrapperName}`)
    } else {
      // must create a new wrapper for the added component
      contentWrapper = document.createElement("div")
      contentWrapper.id = wrapperName
      contentWrapper.style.width = "100%"
      document.getElementById(id).appendChild(contentWrapper)     
      console.log(`added the content wrapper: ${contentWrapper.id}`)
    }

    // when this is the only tenant on container
    if (position == 0) {
      contentWrapper.style.minHeight = "100%"
    } else {
      const children = Array.from(document.getElementById(id).children)
      children.forEach(div => {
        div.style.minHeight = "auto"
      })
    }
    
    // Dynamically load the component
    let component = await loadComponentByName(componentName)

    if (replaceContent) {
      // if container is occupied => unmount previous tenant
      const tenant = components.get(wrapperName)
      if (tenant) {
        tenant?.();
      }
    }

    // render component into the DOM
    const newCmp = renderComponent({
        el: contentWrapper,
        component: component,
        props: props,
        appContext,
    });

    // Add to components' collection
    components.set(wrapperName, newCmp)
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
      replaceContent: true,
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
    // add shared methods here.
  },  
  mounted() {
    // load the page model
    const componentsDef = pageLoad()
    componentsDef.forEach((c, index) => {
      // console.log(c);
      // console.log(`adding component ${c.id} to the container: ${index}`)
      this.addComponent(index, 'CardComponent', c.props, this.replaceContent)
    })
  },
  unmounted () {
    this.components.forEach(c => c?.())
    this.components.clear()
    console.log('all clean and done!')
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

/* Containers */

.stack-container {
  min-height: 100%;

  display: flex;
  flex-direction: column;
  
  position: relative;
  top: 0;
}

.queue-container {
  display: flex;
  flex-direction: row;
}

/* Elements */

.element {
  margin: 1rem 1rem 0 0;
}


</style>
