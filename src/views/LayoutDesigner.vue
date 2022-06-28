<template lang="en">
<div class="container">
   <div  data-v-0ec79c91="" class="gjs-editor-cont" style="width: 100%; height:1280px;">
      <div class="gjs-editor gjs-one-bg gjs-two-color">
         <div class="gjs-cv-canvas">
            <div class="gjs-cv-canvas__frames" data-frames="">
               <div class="gjs-frames">
                  <div class="gjs-frame-wrapper" style="left: 0px; top: 0px;">
                     <div class="gjs-frame-wrapper__top gjs-two-color" data-frame-top="">
                        <div class="gjs-frame-wrapper__name" data-action-move="">
                        </div>
                        <div class="gjs-frame-wrapper__top-r">
                           <div class="gjs-frame-wrapper__icon" data-action-remove="" style="display: none">
                              <svg viewBox="0 0 24 24">
                                 <path d="M19 4h-3.5l-1-1h-5l-1 1H5v2h14M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12z"></path>
                              </svg>
                           </div>
                        </div>
                     </div>
                     <div class="gjs-frame-wrapper__right" data-frame-right=""></div>
                     <div class="gjs-frame-wrapper__left" data-frame-left=""></div>
                     <div class="gjs-frame-wrapper__bottom" data-frame-bottom=""></div>

                     <!--#region : CANVAS ---------------------------------------->

                     <div class="gjs-frame" style="display:flex">                         
                         <!-- <RenderToIFrame :css="css" style="width:100%; border:none;"> -->
                           <div id="canvas" ref="root">
                              <div class="support-grid"></div>
                              <div class="band">
                                 <div v-for="container in layout" 
                                    :ref="container.id" :key="container.id" 
                                    class="container stack-container" 
                                    :style="'grid-column: ' + container.desktopColumn + ' / span ' + container.span +  '' "
                                    :id="container.id">          
                                    <ComponentWrapper class="wrapper" v-for="(c, index) in container.components" 
                                       :ref="container.id + '$' + index"
                                       :key="container.id + '$' + index" 
                                       :id="container.id + '$' + index" 
                                       @click="changeSelectedWrapperTo($event, container.id + '$' + index)"
                                       :isSelected = "selectedWrapperId == container.id + '$' + index"
                                       :componentName="c.componentName"
                                       :appContext="appContext"
                                       :componentProps="c.props"></ComponentWrapper>
                                 </div>
                              </div>
                           </div>
                         <!-- </RenderToIFrame>   -->
                     </div>


                     <!-- <iframe allowfullscreen="allowfullscreen" data-frame-el="true" class="gjs-frame">

                         <slot></slot>                            

                     </iframe> -->

                     <!--#endregion : CANVAS --------------------------------------->

                  </div>
               </div>
            </div>

         </div>

         <!--------------------------------------------->
         <!-- Panels                                  -->
         <!--------------------------------------------->

         <div class="gjs-pn-panels">

            <!-- Panel for element properties -->
            <div class="gjs-pn-panel gjs-pn-commands gjs-one-bg gjs-two-color">
               <div class="gjs-pn-buttons"><span class="gjs-pn-btn"></span></div>
            </div>

            <!-- Visualization & Edit Options -->
            <div class="gjs-pn-panel gjs-pn-options gjs-one-bg gjs-two-color">
               <div class="gjs-pn-buttons">
                  <span title="View components" class="gjs-pn-btn fa fa-square-o"></span>
                  <span title="Preview" class="gjs-pn-btn fa fa-eye"></span>
                  <span title="Fullscreen" class="gjs-pn-btn fa fa-arrows-alt"></span>
                  <span title="View code" class="gjs-pn-btn fa fa-code"></span>
                  <span class="gjs-pn-btn fa fa-undo"></span>
                  <span class="gjs-pn-btn fa fa-repeat"></span>
                  <span class="gjs-pn-btn fa fa-download"></span>
                  <span class="gjs-pn-btn fa fa-trash"></span></div>
            </div>

            <!-- Panel Selection -->
            <div class="gjs-pn-panel gjs-pn-views gjs-one-bg gjs-two-color">
               <div class="gjs-pn-buttons">
                  <span title="Open Style Manager" @click="selectPanel('Style')" :class="{ 'gjs-pn-active': selectedPanel==='Style' }" class="gjs-pn-btn fa fa-paint-brush"></span>
                  <span title="Settings" @click="selectPanel('Settings')" :class="{ 'gjs-pn-active': selectedPanel==='Settings' }" class="gjs-pn-btn fa fa-cog"></span>
                  <span title="Open Layer Manager" @click="selectPanel('LayerManager')" :class="{ 'gjs-pn-active': selectedPanel==='LayerManager' }" class="gjs-pn-btn fa fa-bars"></span>
                  <span title="Open Blocks" @click="selectPanel('Components')" :class="{ 'gjs-pn-active': selectedPanel==='Components' }" class="gjs-pn-btn fa fa-th-large gjs-four-color"></span>
               </div>
            </div>

            <!-- Choose device for visualization -->
            <div class="gjs-pn-panel gjs-pn-devices-c gjs-one-bg gjs-two-color">
               <div class="gjs-pn-buttons">
                  <span class="gjs-pn-btn fa fa-desktop"></span>
                  <span class="gjs-pn-btn fa fa-tablet"></span>
                  <span class="gjs-pn-btn fa fa-mobile"></span>
               </div>
            </div>

            <div class="gjs-pn-panel gjs-pn-views-container gjs-one-bg gjs-two-color">
               <div>

                  <!-- Panel for element properties -->
                  
                  <div v-if="selectedPanel==='Style'">
                     <div class="gjs-clm-tags gjs-one-bg gjs-two-color">
                        <div id="gjs-clm-up" class="gjs-clm-header">
                           <div id="gjs-clm-label" class="gjs-clm-header-label">Classes</div>
                           <div id="gjs-clm-status-c" class="gjs-clm-header-status">
                              <span id="gjs-clm-input-c" data-states-c="">
                                 <div class="gjs-field gjs-select">
                                    <span id="gjs-input-holder">
                                       <select id="gjs-clm-states" data-states="">
                                          <option value="">- State -</option>
                                          <option value="hover">Hover</option>
                                          <option value="active">Click</option>
                                          <option value="nth-of-type(2n)">Even/Odd</option>
                                       </select>
                                    </span>
                                    <div class="gjs-sel-arrow">
                                       <div class="gjs-d-s-arrow"></div>
                                    </div>
                                 </div>
                              </span>
                           </div>
                        </div>
                        <div id="gjs-clm-tags-field" class="gjs-field">
                           <div id="gjs-clm-tags-c" data-selectors=""></div>
                           <input id="gjs-clm-new" data-input="" style="display: none;">
                           <span id="gjs-clm-add-tag" class="gjs-clm-tags-btn gjs-clm-tags-btn__add" data-add="">
                              <svg viewBox="0 0 24 24">
                                 <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"></path>
                              </svg>
                           </span>
                           <span class="gjs-clm-tags-btn gjs-clm-tags-btn__sync" style="display: none" data-sync-style="">
                              <svg viewBox="0 0 24 24">
                                 <path d="M12 18c-3.31 0-6-2.69-6-6 0-1 .25-1.97.7-2.8L5.24 7.74A7.93 7.93 0 0 0 4 12c0 4.42 3.58 8 8 8v3l4-4-4-4m0-11V1L8 5l4 4V6c3.31 0 6 2.69 6 6 0 1-.25 1.97-.7 2.8l1.46 1.46A7.93 7.93 0 0 0 20 12c0-4.42-3.58-8-8-8z"></path>
                              </svg>
                           </span>
                        </div>
                        <div class="gjs-clm-sels-info">
                           <div class="gjs-clm-label-sel">Selected:</div>
                           <div class="gjs-clm-sels" data-selected=""></div>
                        </div>
                     </div>                     
                  </div>
                  <div class="gjs-sm-header" style="display: none;">Select an element before using Style Manager</div>
               </div>

               <div>

                  <!-- Panel for selected Component Settings -->   

                  <div v-if="selectedPanel==='Settings'">

                     <div class="gjs-blocks-cs gjs-one-bg gjs-two-color">
                        <div class="gjs-block-categories">

                           <!-- The selected component properties -->
                           <div class="gjs-block-category" :class="{ 'gjs-open': componentPropertiesIsOpen }">
                              <div class="gjs-title" @click="componentPropertiesIsOpen = !componentPropertiesIsOpen">
                                 <i class="gjs-caret-icon fa" :class="{ 'fa-caret-down': componentPropertiesIsOpen, 'fa-caret-right': !componentPropertiesIsOpen }" ></i>
                                 Component Properties
                              </div>
                              <div v-if="componentPropertiesIsOpen" class="gjs-blocks-c">
                                 <div v-for="([key, value], index) in Object.entries(selectedWrapper.getRenderedComponent.props)" :key="index" class="gjs-trt-trait gjs-trt-trait--text">
                                    <div class="gjs-label-wrp" data-label="">
                                       <div class="gjs-label" :title="key">{{key}}</div>
                                    </div>
                                    <div class="gjs-field-wrp gjs-field-wrp--text" data-input="">
                                       <div class="gjs-field gjs-field-text" data-input="">
                                          <input type="text" placeholder="eg. Text here" @change="onLayoutChanged()" v-model="selectedWrapper.getRenderedComponent.props[key]">                                    
                                       </div>
                                    </div>
                                 </div>                            
                              </div>
                           </div>

                           <!-- The selected container properties -->
                           <div class="gjs-block-category" :class="{ 'gjs-open': containerPropertiesIsOpen }">
                              <div class="gjs-title" @click="containerPropertiesIsOpen = !containerPropertiesIsOpen">
                                 <i class="gjs-caret-icon fa" :class="{ 'fa-caret-down': containerPropertiesIsOpen, 'fa-caret-right': !containerPropertiesIsOpen }" ></i>
                                 Container Properties
                              </div>
                              <div v-if="containerPropertiesIsOpen" class="gjs-blocks-c">
                                 <div class="gjs-trt-trait gjs-trt-trait--text">
                                    <div class="gjs-label-wrp" data-label="">
                                       <div class="gjs-label" title="span">span</div>
                                    </div>
                                    <div class="gjs-field-wrp gjs-field-wrp--text" data-input="">
                                       <div class="gjs-field gjs-field-text" data-input="">
                                          <!-- TODO: Force Blur: https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/blur -->
                                          <input type="text" @change="onLayoutChanged()" placeholder="eg. Text here" v-model="selectedContainer.span">                                          
                                       </div>
                                    </div>
                                 </div>                            
                              </div>
                           </div>

                        </div>   
                     </div>                  
                

                     <!-- No selection -->
                     <div style="display: none;">
                        <div class="gjs-trt-header">Select an element before using Trait Manager</div>
                     </div>
                  </div>
               </div>

               <!-- Panel for Components palette -->

               <div v-if="selectedPanel==='Components'">
                  <div class="gjs-blocks-cs gjs-one-bg gjs-two-color">
                     <div class="gjs-block-categories">
                        <div v-for="(group, index) in componentsGroups" :key="index" class="gjs-block-category" :class="{ 'gjs-open': componentsGroups[index].isOpen }" @click="componentsGroupToggle(index)">
                           <div class="gjs-title">
                              <i class="gjs-caret-icon fa" :class="{ 'fa-caret-down': componentsGroups[index].isOpen, 'fa-caret-right': !componentsGroups[index].isOpen }" ></i>
                              {{componentsGroups[index].title}}
                           </div>
                           <div v-if="componentsGroups[index].isOpen" class="gjs-blocks-c">
                              <div v-for="comp in componentsGroups[index].components" :key="comp.id" :class="comp.classes" class="component-palette-icon gjs-block gjs-one-bg gjs-four-color-h" title="1 Column" draggable="true">
                                 <span v-html="comp.innerHtml"></span>
                                 <div class="gjs-block-label">{{comp.title}}</div>
                              </div>                              
                           </div>
                        </div>
                     </div>   
                  </div>
               </div>
            </div>
         </div>
      </div>     
   </div>
</div>
</template>

<script>
import { getCurrentInstance, nextTick } from "vue";
import layoutLoader from "./pageBuilder/dep/layoutLoader";
import RenderToIFrame from "../components/RenderToIFrame";
import ComponentWrapper from "../components/ComponentWrapper";

export default {
   name: "LayoutDesigner",
   components: {
      RenderToIFrame,
      ComponentWrapper,
   },
   data() {
      return {
         selectedPanel: "Components",
         selectedWrapperId: "",
         selectedWrapper: null, // each container may have N component wrappers 
         selectedContainer: null,
         componentPropertiesIsOpen: true,
         containerPropertiesIsOpen: true,
         isInPreviewMode: false,
         componentsGroups: this.componentsPaletteGroups,  
         changes: 0       
      };
   },
   methods: {
      selectPanel(name) {
         console.log(`Selected Panel: ${name}`);
         this.selectedPanel = name;
      },
      async onLayoutChanged() {
         this.changes++

         const currentLayout = [...this.layout]

         //TODO: Must call created components destroy!!

         this.layout = []
         this.$forceUpdate()
         await nextTick()

         this.layout = [...currentLayout]
         this.setContainersPositions(this.layout)
         this.$forceUpdate()
      },
      componentsGroupToggle(index) {
         this.componentsGroups[index].isOpen = !this.componentsGroups[index].isOpen

         console.log(`Components Group: ${index}, changed to: ${this.componentsGroups[index].isOpen}`)
         console.log(this.componentsGroups)
      },
      changeSelectedWrapperTo(e, wrapperId) {
         if (this.isInPreviewMode)
            return

         e.preventDefault()
         this.selectedWrapperId = wrapperId
         var wrapper = this.$refs[wrapperId][0]
         this.selectedWrapper = wrapper

         // Get the container
         const parts = wrapperId.split('$')
         const containerId = parts[0]
         console.log(`Current container is: ${containerId}`)
         this.selectedContainer = this.layout.find(c => c.id === containerId)
      }
   },
   beforeMount() {
      console.log('component ready for first render')
      this.setContainersPositions(this.layout)      
   },
   setup() {
      // load the page layout
      let layout = layoutLoader.loadLayout()

      // set defaults for grid positions
      const setContainersPositions = function(layout) {
         const defaultSpan = 1
         let lastSpan = defaultSpan
         let desktopColumn = 0

         if(!layout || !layout.length) {
            console.error('layout not defined')
            return
         }

         layout.forEach(cont => {
            if (!cont.span) {
               cont.span = defaultSpan
            }              
            desktopColumn += lastSpan
            if (desktopColumn > 4) {
               desktopColumn = 1
            }
            cont.desktopColumn = desktopColumn             
            console.log(cont.desktopColumn + ' / ' + cont.span)

            lastSpan = cont.span
         })      
      }

      let componentsPaletteGroups = new Array()

      // Available Components
      componentsPaletteGroups.push({ 
         title: 'Basic', 
         isOpen: true,
         components: [
            { id:'ContainerOneColumn', title: '1 Column ', classes: 'gjs-fonts gjs-f-b1' },
            { id:'ContainerTwoColumns', title: '2 Columns', classes: 'gjs-fonts gjs-f-b2' },
            { id:'ContainerThreeColumns', title: '3 Columns', classes: 'gjs-fonts gjs-f-b3' },
            { id:'ContainerTwoColumn3-7', title: '2 Columns 3/7', classes: 'gjs-fonts gjs-f-b37' },
            { id:'Text', title: 'Text', classes: 'gjs-fonts gjs-f-text' },
            { id:'Link', title: 'Link', classes: 'pi pi-link' },
            { id:'Image', title: 'Image', classes: 'pi pi-image' },
            { id:'Video', title: 'Video', classes: 'pi pi-youtube' },
            { id:'Map', title: 'Map', classes: 'pi pi-map' },
            { id:'LinkBlock', title: 'Link Block', classes: 'pi pi-link' },
            { id:'Quote', title: 'Quote', classes: 'fa fa-quote-right' },
            { id:'TextSection', title: 'Text section', classes: 'gjs-fonts gjs-f-h1p' },
         ]
       })
      componentsPaletteGroups.push({ 
         title: 'Extra', 
         isOpen: true,
         components: [
            { id:'Navbar', title: 'Navbar', innerHtml: '<svg class="gjs-block-svg" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" data-v-46facb22=""><path class="gjs-block-svg-path" d="M22,9 C22,8.4 21.5,8 20.75,8 L3.25,8 C2.5,8 2,8.4 2,9 L2,15 C2,15.6 2.5,16 3.25,16 L20.75,16 C21.5,16 22,15.6 22,15 L22,9 Z M21,15 L3,15 L3,9 L21,9 L21,15 Z" fill-rule="nonzero" data-v-46facb22=""></path><rect class="gjs-block-svg-path" x="15" y="10" width="5" height="1" data-v-46facb22=""></rect><rect class="gjs-block-svg-path" x="15" y="13" width="5" height="1" data-v-46facb22=""></rect><rect class="gjs-block-svg-path" x="15" y="11.5" width="5" height="1" data-v-46facb22=""></rect></svg>' },
            { id:'Countdown', title: 'Countdown', classes: 'fa fa-clock-o' },
         ]
       })       

      const { appContext } = getCurrentInstance();
     
      return {
         layout,         
         appContext,
         componentsPaletteGroups,
         setContainersPositions
      };
   },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped src="grapesjs/dist/css/grapes.min.css">
/* global styles */
</style>

<style scoped>
body {
  background-color: rgba(0, 0, 0, 0.1);
}
h1 {
  color: salmon;
}

::-webkit-scrollbar {
  width: 8px;
  height: 6px;
  background-color: #646464;
}

#canvas {
  background: #f5f7f8;
  font-family: "Roboto", sans-serif;
  -webkit-font-smoothing: antialiased;
  width: 100%;
  padding: 20px 0;
  margin: 1rem;
  height: calc(100vh - 140px);
  overflow-y: auto;
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

/* Components Palette */

.pi.component-palette-icon {
   font-size: 2em;
   line-height: 2em;
   padding: 11px;
}

/* Tablet: viewport from 500px to 849px */
@media only screen and (min-width: 500px) {
  .band {
    grid-template-columns: 1fr 1fr;
  }
  .span-2 {
    grid-column: 1 / span 2;
  }
  .span-3 {
    grid-column: 1 / span 3;
  }
  .span-4 {
    grid-column: 1 / span 4;
  }
}

/* Desktop: viewport from 850px */
@media only screen and (min-width: 850px) {
  .band {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
}

/* Containers */

.container > .wrapper:only-child {
  height: 100%;
}

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

<style scoped>
@import "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css";
</style>
