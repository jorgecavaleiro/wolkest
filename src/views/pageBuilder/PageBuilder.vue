<template>
  <div class="home">
    <Sidebar v-model:visible="visibleLeft">
      <div class="stack-container">
        <div>
          <Dropdown class="element" v-model="grabbedComponentType" :options="componentTypes" optionLabel="name" placeholder="Select a Component" />
        </div>
        <div class="queue-container">
          <Dropdown class="element" v-model="dropTarget" :options="targets" optionLabel="name" placeholder="Select a Target" />          
          <PV-Button class="element" icon="pi pi-arrow-right" @click="addComponent(dropTarget.id, grabbedComponentType.id, null, replaceContent)" />    
        </div>
        <div class="queue-container">
          <Checkbox class="element" name="replaceContent" v-model="replaceContent" :binary="true" />
          <label class="element" for="replaceContent">Replace Content</label>
        </div>
        <div>
          <h5>Attributes</h5>
        </div>
        <div v-if="selectedComponent">
          <div v-for="prop in selectedComponentPropsKeys" :key="prop" class="queue-container">          
            <label class="element" for="replaceContent">{{prop}}</label>
            <InputText class="element" type="text" v-model="selectedComponentProps[prop]" />
          </div>
        </div>
        <div>
          <Button class="element" label="Apply" @click="applyPropsToSelectedComponent()" icon="pi pi-check" iconPos="right" />
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
  import { ref, reactive, getCurrentInstance } from "vue";
  import renderComponent from "./dep/renderComponent";
  import pageLoad from "./dep/pageModelLoader";
  import loadComponentByName from "./dep/componentLoader";

  // Prime Vue Components
  import Sidebar from 'primevue/sidebar';
  import Dropdown from 'primevue/dropdown';
  import Checkbox from 'primevue/checkbox';
  import InputText from 'primevue/inputtext';
  import Button from 'primevue/button';

  const { appContext } = getCurrentInstance()
  let components = new Map()

  const addComponentToDOM = (component, props, wrapperName, contentWrapper, replaceContent) => {
    // when there aren't any predefined props, initialize them
    if(props === null || props === undefined) {
      const cprops = component.props

      if(!cprops || typeof(cprops) !== "object" || Array.isArray(cprops)) {
        console.error('Invalid component: properties are undefined')
        return;
      }

      const keys = Object.keys(cprops)
      props = {}
      keys.forEach(key => {
        props[key] = ""        
      })
    }

    if (replaceContent) {
      // if container is occupied => unmount previous tenant
      const c = components.get(wrapperName)

      if (c) {
        console.log(c)
        c.def.destroy?.();
      }
    }    

    // turn props object into reactive for allowing later programaticaly changes
    const rprops = reactive(props)

    // render component into the DOM
    const newCmp = renderComponent({
        el: contentWrapper,
        component: component,
        props: rprops,
        appContext,
    });

    return newCmp
  }

  const getComponentWrapper = (id, replaceContent) => {
    // Get the contents wrapper or create if new
    let contentWrapper = null
    const position = document.getElementById(id).children.length 
    let wrapperName = `${id}-contentWrapper-${position}`
    
    if (replaceContent && position > 0) {
      wrapperName  = `${id}-contentWrapper-${position - 1}`      
      contentWrapper = document.getElementById(wrapperName)
      // console.log(`inserting into existing: ${wrapperName}`)
    } else {
      // must create a new wrapper for the added component
      contentWrapper = document.createElement("div")
      contentWrapper.id = wrapperName
      contentWrapper.style.width = "100%"
      document.getElementById(id).appendChild(contentWrapper)     
      // console.log(`added the content wrapper: ${contentWrapper.id}`)
    }

    // when this is the only tenant on container
    if (position === 0) {
      contentWrapper.style.minHeight = "100%"      
    } else {
      const children = Array.from(document.getElementById(id).children)
      children.forEach(div => {
        div.style.minHeight = "auto"
      })
    }

    return { el: contentWrapper, name: wrapperName }
  }

  // Add component method : Add component to specified container
  const addComponent = async (id, componentName, props, replaceContent, callback) => {
    let container = ref("root")
    if (id) {
      container.value = document.getElementById(id)    
    } else {
      console.log('No target container. Aborting...')
      return
    }

    // Get the component wrapper div
    const contentWrapper = getComponentWrapper(id, replaceContent)
    
    // Dynamically load the component
    let component = await loadComponentByName(componentName)

     // Add component to DOM
    const newCmp = addComponentToDOM(component, props, contentWrapper.name, contentWrapper.el, replaceContent)

    let cmp = { def: newCmp, component: component }

    // Add to components' collection
    components.set(contentWrapper.name, cmp)

    // callback
    if (callback) callback(newCmp)
  };
</script>


<script>
export default {
  name: "VC-PageBuilder",
  data() {
    return {
      containerId: "",
      props: null,
      dropTarget: null,
      grabbedComponentType: null,
      grabbedComponentTitle: '',
      selectedComponent: null,
      selectedWrapperName: '',
      selectedComponentProps: null,
      selectedComponentPropsKeys: [],
      visibleLeft: false,
      replaceContent: true,
      targets: [
        {name: 'Container 1', id: 'container-1'},
        {name: 'Container 2', id: 'container-2'},
        {name: 'Container 3', id: 'container-3'},
        {name: 'Container 4', id: 'container-4'},
        {name: 'Container 5', id: 'container-5'}
        ],
      componentTypes: [
        {name: 'Card', id: 'CardComponent'},
        {name: 'Sample', id: 'SampleComponent'}
        ]        
    };
  },
  methods: {
    setContentWrapperEvents(component) {
      // wrapper events
      
      const contentWrapper = component.container

      contentWrapper.addEventListener('mouseenter', (event) => {
        event.target.style.border = "thick solid #0000FF"
        const wrapperName = event.target.id

        this.selectedWrapperName = wrapperName
        this.selectedComponent = this.components.get(wrapperName)
        this.selectedComponentProps = this.selectedComponent.def.props
        this.selectedComponentPropsKeys = Object.keys(this.selectedComponentProps)

        });

      contentWrapper.addEventListener('mouseleave', (event) => {
        event.target.style.border = "none"      
        });     
    },
    applyPropsToSelectedComponent() {

      // this.selectedComponentPropsKeys.forEach(p => { 
      //   console.log(`${p} : ${typeof p}`)        
      // })

      // Add component to DOM
      this.addComponentToDOM(this.selectedComponent.component, 
        this.selectedComponent.def.props, 
        this.selectedWrapperName, 
        this.selectedComponent.def.container, 
        true)
    },
    cleanAll() {
      this.components.forEach(c => c.def.destroy?.())
      this.components.clear()
      console.log('all clean and done!')
    }
  },  
  mounted() {
    // load the page model
    const componentsDef = pageLoad()

    // define the callback call
    const callback = (c) => {
        this.setContentWrapperEvents(c)
    }

    componentsDef.forEach((c, index) => {
      // console.log(c);
      // console.log(`adding component ${c.id} to the container: ${index}`)
      this.addComponent(index, 'CardComponent', c.props, this.replaceContent, callback)      
    })
  },
  unmounted () {
    this.cleanAll()
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
  
  /*region Mobile: viewport w/ less than 500px */
  grid-template-columns: 1fr;
  
  grid-template-rows: auto;
  grid-gap: 20px;
  
}

/* Tablet: viewport from 500px to 849px */
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

/* Desktop: viewport from 850px */
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
  width: 100%;
}


</style>
