<template>
  <div>

    <Dialog v-model:visible="displayTools" :style="{width: '320px'}" :contentStyle="{minHeight: '640px'}">
      <div class="f-height stack-container">
        <div>
          <Dropdown class="element" v-model="grabbedComponentType" :options="componentTypes" optionLabel="name" placeholder="Select a Component" />
        </div>
        <div class="queue-container">
          <Dropdown class="element" v-model="dropTarget" :options="targets" optionLabel="name" placeholder="Select a Target" />          
          <PV-Button class="element" icon="pi pi-arrow-right" @click="onComponentDroped(dropTarget.id, grabbedComponentType.id, replaceContent)" />    
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
    </Dialog>



<!-- 
    <PV-Button class="sidebar-open" icon="pi pi-arrow-right" @click="visibleLeft = true" />     -->

    <div id="canvas" ref="root">
      <div class="support-grid"></div>

      <div class="band">
        <div v-for="container in layout" :key="container.id" :class="'stack-container span-' + container.span" :id="container.id">          
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { ref, getCurrentInstance } from "vue";
  import domUtils from "./dep/domUtils";
  import pageLoader from "./dep/pageModelLoader";
  import loadComponentByName from "./dep/componentLoader";

  // Prime Vue Components
  import Dropdown from 'primevue/dropdown';
  import Checkbox from 'primevue/checkbox';
  import InputText from 'primevue/inputtext';
  import Button from 'primevue/button';
  import Dialog from 'primevue/dialog';

  const { appContext } = getCurrentInstance()
  // load the page layout
  let layout = pageLoader.loadLayout()

  console.log(layout)


  // eslint-disable-next-line no-unused-vars
  const addComponentToDOM = (component, props, contentWrapper) => {
  
    // render component into the DOM
    const newCmp = domUtils.renderComponent({
        el: contentWrapper,
        component: component,
        props: props,
        appContext,
    });

    return newCmp
  }
</script>

<script>
export default {
  name: "VC-PageBuilder",
  data() {
    return {
      displayTools: true,
      components: new Map(),
      containerId: "",
      props: null,
      dropTarget: null,
      grabbedComponentType: null,
      grabbedComponentTitle: '',
      focusComponent: null,
      focusWrapperName: '',
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
    onComponentDroped(targetContainerId, componentName, replaceContent) {
      // define the callback call
      const callback = (c) => {
          this.setContentWrapperEvents(c)
      }
      this.addComponent(targetContainerId, componentName, null, replaceContent, callback)
    },
    getComponentWrapper(containerId, replaceContent) {
      // Get the contents wrapper or create if new
      const wrapperTextSep = "contentWrapper"
      let contentWrapper = null
      const position = document.getElementById(containerId).children.length 
      let wrapperName = `${containerId}-${wrapperTextSep}-${position}`
      
      if (replaceContent && position > 0) {
        wrapperName  = `${containerId}-${wrapperTextSep}-${position - 1}`      
        contentWrapper = document.getElementById(wrapperName)
      } else {
        // must create a new wrapper for the added component
        contentWrapper = document.createElement("div")
        contentWrapper.id = wrapperName
        contentWrapper.style.width = "100%"
        document.getElementById(containerId).appendChild(contentWrapper)     
      }

      // when this is the only tenant on container
      if (position === 0) {
        contentWrapper.style.minHeight = "100%"      
      } else {
        const children = Array.from(document.getElementById(containerId).children)
        children.forEach(div => {
          div.style.minHeight = "auto"
        })
      }

      return { el: contentWrapper, name: wrapperName }
    },

    setContentWrapperEvents(compDef) {
      // wrapper events
      
      const contentWrapper = compDef.container

      contentWrapper.addEventListener('mouseenter', (event) => {
        if(event.target.id === this.selectedWrapperName) return
        event.target.style.border = "medium dotted #dedede"
        const targetContainerId = event.target.id

        this.focusWrapperName = targetContainerId
        this.focusComponent = this.components.get(targetContainerId)

        });

      contentWrapper.addEventListener('click', (event) => {
        event.preventDefault()
        const previousSelectedContainer = document.getElementById(this.selectedWrapperName)
        if (previousSelectedContainer) {
          previousSelectedContainer.style.border = "none"
        }
        const wrapperElem = document.getElementById(this.focusWrapperName)
        console.log(wrapperElem)
        wrapperElem.style.border = "medium solid #0000ff"
        this.selectedWrapperName = this.focusWrapperName
        this.selectedComponent = this.components.get(this.selectedWrapperName)
        this.selectedComponentProps = this.selectedComponent.def.props
        this.selectedComponentPropsKeys = Object.keys(this.selectedComponentProps)

        this.displayTools = true
      });        

      contentWrapper.addEventListener('mouseleave', (event) => {
        if(event.target.id !== this.selectedWrapperName)
          event.target.style.border = "none"      
        });     
    },
    applyPropsToSelectedComponent() {

      if(!this.selectedComponent) return

      // destroy previous instance
      this.selectedComponent.def.destroy?.();
      
      // Add component to DOM
      this.addComponentToDOM(this.selectedComponent.component, 
        this.selectedComponent.def.props, 
        this.selectedComponent.def.container)
    },

    // Add component method : Add component to specified container
    async addComponent (containerId, componentName, props, replaceContent, callback) {
      let container = ref("root")
      if (containerId) {
        container.value = document.getElementById(containerId)    
      } else {
        console.log('No target container. Aborting...')
        return
      }

      // Get the component wrapper div
      const contentWrapper = this.getComponentWrapper(containerId, replaceContent)
      
      // Dynamically load the component
      let component = await loadComponentByName(componentName)

      // Destroy replaced
      if(replaceContent) {
        const replacedComponent = this.components.get(contentWrapper.name)
        replacedComponent?.def.destroy?.();
      }

      // Add component to DOM
      const newCmp = this.addComponentToDOM(component, props, contentWrapper.el)

      let cmp = { def: newCmp, component: component }

      // Add to components' collection
      this.components.set(contentWrapper.name, cmp)

      // callback
      if (callback) callback(newCmp)
    },    
    cleanAll() {
      this.components.forEach(c => c.def.destroy?.())
      this.components.clear()
      console.log('all clean and done!')
    }
  },  
  mounted() {
    // load the page model
    const componentsDef = pageLoader.loadPage()

    // define the callback call
    const callback = (c) => {
        this.setContentWrapperEvents(c)
    }

    componentsDef.forEach((c, index) => {
      // console.log(c);
      // console.log(`adding component ${c.id} to the container: ${index}`)
      this.addComponent(index, c.componentName, c.props, this.replaceContent, callback)      
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
  .span-2 {
  grid-column: 1/ span 2;
  }
  .span-3 {
  grid-column: 1/ span 3;
  }
  .span-4 {
  grid-column: 1/ span 4;
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

.f-height {
  height: 100%;
}


</style>
