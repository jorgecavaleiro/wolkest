<template lang="en">
<div class="container">
   <div id="gjs" data-v-0ec79c91="" class="gjs-editor-cont" style="width: 100%; height:1280px;">
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
                                 <div v-for="container in layout" :key="container.id" :class="'container stack-container span-' + container.span" :id="container.id">          
                                    <ComponentWrapper class="wrapper" v-for="(c, index) in container.components" 
                                       :key="container.id + '-' + index" 
                                       :id="container.id + '-' + index" 
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
                     <div class="gjs-traits-label">Component settings</div>
                     <div class="gjs-trt-traits gjs-one-bg gjs-two-color">
                        <div class="gjs-trt-trait__wrp gjs-trt-trait__wrp-id">
                           <div class="gjs-trt-trait gjs-trt-trait--text">
                              <div class="gjs-label-wrp" data-label="">
                                 <div class="gjs-label" title="ID">ID</div>
                              </div>
                              <div class="gjs-field-wrp gjs-field-wrp--text" data-input="">
                                 <div class="gjs-field gjs-field-text" data-input="">
                                    <input type="text" placeholder="eg. Text here">
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div style="display: none;">
                        <div class="gjs-trt-header">Select an element before using Trait Manager</div>
                     </div>
                  </div>
               </div>

               <!-- Panel for Components palette -->

               <div v-if="selectedPanel==='Components'">
                  <div class="gjs-blocks-cs gjs-one-bg gjs-two-color">
                     <div class="gjs-block-categories">
                        <div class="gjs-block-category" :class="{ 'gjs-open': componentsGroups[0].isOpen }" @click="componentsGroupToggle(0)">
                           <div class="gjs-title">
                              <i class="gjs-caret-icon fa" :class="{ 'fa-caret-down': componentsGroups[0].isOpen, 'fa-caret-right': !componentsGroups[0].isOpen }" ></i>
                              {{componentsGroups[0].title}}
                           </div>
                           <div v-if="componentsGroups[0].isOpen" class="gjs-blocks-c">
                              <div class="gjs-fonts gjs-f-b1 gjs-block gjs-one-bg gjs-four-color-h" title="1 Column" draggable="true">
                                 <div class="gjs-block-label">1 Column</div>
                              </div>
                              <div class="gjs-fonts gjs-f-b2 gjs-block gjs-one-bg gjs-four-color-h" title="2 Columns" draggable="true">
                                 <div class="gjs-block-label">2 Columns</div>
                              </div>
                              <div class="gjs-fonts gjs-f-b3 gjs-block gjs-one-bg gjs-four-color-h" title="3 Columns" draggable="true">
                                 <div class="gjs-block-label">3 Columns</div>
                              </div>
                              <div class="gjs-fonts gjs-f-b37 gjs-block gjs-one-bg gjs-four-color-h" title="2 Columns 3/7" draggable="true">
                                 <div class="gjs-block-label">2 Columns 3/7</div>
                              </div>
                              <div class="gjs-fonts gjs-f-text gjs-block gjs-one-bg gjs-four-color-h" title="Text" draggable="true">
                                 <div class="gjs-block-label">Text</div>
                              </div>
                              <div class="fa fa-link gjs-block gjs-one-bg gjs-four-color-h" title="Link" draggable="true">
                                 <div class="gjs-block-label">Link</div>
                              </div>
                              <div class="gjs-fonts gjs-f-image gjs-block gjs-one-bg gjs-four-color-h" title="Image" draggable="true">
                                 <div class="gjs-block-label">Image</div>
                              </div>
                              <div class="fa fa-youtube-play gjs-block gjs-one-bg gjs-four-color-h" title="Video" draggable="true">
                                 <div class="gjs-block-label">Video</div>
                              </div>
                              <div class="fa fa-map-o gjs-block gjs-one-bg gjs-four-color-h" title="Map" draggable="true">
                                 <div class="gjs-block-label">Map</div>
                              </div>
                              <div class="fa fa-link gjs-block gjs-one-bg gjs-four-color-h" title="Link Block" draggable="true">
                                 <div class="gjs-block-label">Link Block</div>
                              </div>
                              <div class="fa fa-quote-right gjs-block gjs-one-bg gjs-four-color-h" title="Quote" draggable="true">
                                 <div class="gjs-block-label">Quote</div>
                              </div>
                              <div class="gjs-fonts gjs-f-h1p gjs-block gjs-one-bg gjs-four-color-h" title="Text section" draggable="true">
                                 <div class="gjs-block-label">Text section</div>
                              </div>
                           </div>
                        </div>
                        <div class="gjs-block-category gjs-open">
                           <div class="gjs-title">
                              <i class="gjs-caret-icon fa fa-caret-down"></i>
                              Extra
                           </div>
                           <div class="gjs-blocks-c">
                              <div class="gjs-block gjs-one-bg gjs-four-color-h" title="Navbar" draggable="true">
                                 <div class="gjs-block-label">
                                    <svg class="gjs-block-svg" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                       <path class="gjs-block-svg-path" d="M22,9 C22,8.4 21.5,8 20.75,8 L3.25,8 C2.5,8 2,8.4 2,9 L2,15 C2,15.6 2.5,16 3.25,16 L20.75,16 C21.5,16 22,15.6 22,15 L22,9 Z M21,15 L3,15 L3,9 L21,9 L21,15 Z" fill-rule="nonzero"></path>
                                       <rect class="gjs-block-svg-path" x="15" y="10" width="5" height="1"></rect>
                                       <rect class="gjs-block-svg-path" x="15" y="13" width="5" height="1"></rect>
                                       <rect class="gjs-block-svg-path" x="15" y="11.5" width="5" height="1"></rect>
                                    </svg>
                                    <div class="gjs-block-label">Navbar</div>
                                 </div>
                              </div>
                              <div class="fa fa-clock-o gjs-block gjs-one-bg gjs-four-color-h" title="Countdown" draggable="true">
                                 <div class="gjs-block-label">Countdown</div>
                              </div>
                           </div>
                        </div>
                        <div class="gjs-block-category gjs-open">
                           <div class="gjs-title">
                              <i class="gjs-caret-icon fa fa-caret-down"></i>
                              Forms
                           </div>
                           <div class="gjs-blocks-c">
                              <div class="gjs-block gjs-one-bg gjs-four-color-h" title="Form" draggable="true">
                                 <div class="gjs-block-label">
                                    <svg class="gjs-block-svg" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                       <path class="gjs-block-svg-path" d="M22,5.5 C22,5.2 21.5,5 20.75,5 L3.25,5 C2.5,5 2,5.2 2,5.5 L2,8.5 C2,8.8 2.5,9 3.25,9 L20.75,9 C21.5,9 22,8.8 22,8.5 L22,5.5 Z M21,8 L3,8 L3,6 L21,6 L21,8 Z" fill-rule="nonzero"></path>
                                       <path class="gjs-block-svg-path" d="M22,10.5 C22,10.2 21.5,10 20.75,10 L3.25,10 C2.5,10 2,10.2 2,10.5 L2,13.5 C2,13.8 2.5,14 3.25,14 L20.75,14 C21.5,14 22,13.8 22,13.5 L22,10.5 Z M21,13 L3,13 L3,11 L21,11 L21,13 Z" fill-rule="nonzero"></path>
                                       <rect class="gjs-block-svg-path" x="2" y="15" width="10" height="3" rx="0.5"></rect>
                                    </svg>
                                    <div class="gjs-block-label">Form</div>
                                 </div>
                              </div>
                              <div class="gjs-block gjs-one-bg gjs-four-color-h" title="Input" draggable="true">
                                 <div class="gjs-block-label">
                                    <svg class="gjs-block-svg" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                       <path class="gjs-block-svg-path" d="M22,9 C22,8.4 21.5,8 20.75,8 L3.25,8 C2.5,8 2,8.4 2,9 L2,15 C2,15.6 2.5,16 3.25,16 L20.75,16 C21.5,16 22,15.6 22,15 L22,9 Z M21,15 L3,15 L3,9 L21,9 L21,15 Z"></path>
                                       <polygon class="gjs-block-svg-path" points="4 10 5 10 5 14 4 14"></polygon>
                                    </svg>
                                    <div class="gjs-block-label">Input</div>
                                 </div>
                              </div>
                              <div class="gjs-block gjs-one-bg gjs-four-color-h" title="Textarea" draggable="true">
                                 <div class="gjs-block-label">
                                    <svg class="gjs-block-svg" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                       <path class="gjs-block-svg-path" d="M22,7.5 C22,6.6 21.5,6 20.75,6 L3.25,6 C2.5,6 2,6.6 2,7.5 L2,16.5 C2,17.4 2.5,18 3.25,18 L20.75,18 C21.5,18 22,17.4 22,16.5 L22,7.5 Z M21,17 L3,17 L3,7 L21,7 L21,17 Z"></path>
                                       <polygon class="gjs-block-svg-path" points="4 8 5 8 5 12 4 12"></polygon>
                                       <polygon class="gjs-block-svg-path" points="19 7 20 7 20 17 19 17"></polygon>
                                       <polygon class="gjs-block-svg-path" points="20 8 21 8 21 9 20 9"></polygon>
                                       <polygon class="gjs-block-svg-path" points="20 15 21 15 21 16 20 16"></polygon>
                                    </svg>
                                    <div class="gjs-block-label">Textarea</div>
                                 </div>
                              </div>
                              <div class="gjs-block gjs-one-bg gjs-four-color-h" title="Select" draggable="true">
                                 <div class="gjs-block-label">
                                    <svg class="gjs-block-svg" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                       <path class="gjs-block-svg-path" d="M22,9 C22,8.4 21.5,8 20.75,8 L3.25,8 C2.5,8 2,8.4 2,9 L2,15 C2,15.6 2.5,16 3.25,16 L20.75,16 C21.5,16 22,15.6 22,15 L22,9 Z M21,15 L3,15 L3,9 L21,9 L21,15 Z" fill-rule="nonzero"></path>
                                       <polygon class="gjs-block-svg-path" transform="translate(18.500000, 12.000000) scale(1, -1) translate(-18.500000, -12.000000) " points="18.5 11 20 13 17 13"></polygon>
                                       <rect class="gjs-block-svg-path" x="4" y="11.5" width="11" height="1"></rect>
                                    </svg>
                                    <div class="gjs-block-label">Select</div>
                                 </div>
                              </div>
                              <div class="gjs-block gjs-one-bg gjs-four-color-h" title="Button" draggable="true">
                                 <div class="gjs-block-label">
                                    <svg class="gjs-block-svg" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                       <path class="gjs-block-svg-path" d="M22,9 C22,8.4 21.5,8 20.75,8 L3.25,8 C2.5,8 2,8.4 2,9 L2,15 C2,15.6 2.5,16 3.25,16 L20.75,16 C21.5,16 22,15.6 22,15 L22,9 Z M21,15 L3,15 L3,9 L21,9 L21,15 Z" fill-rule="nonzero"></path>
                                       <rect class="gjs-block-svg-path" x="4" y="11.5" width="16" height="1"></rect>
                                    </svg>
                                    <div class="gjs-block-label">Button</div>
                                 </div>
                              </div>
                              <div class="gjs-block gjs-one-bg gjs-four-color-h" title="Label" draggable="true">
                                 <div class="gjs-block-label">
                                    <svg class="gjs-block-svg" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                       <path class="gjs-block-svg-path" d="M22,11.875 C22,11.35 21.5,11 20.75,11 L3.25,11 C2.5,11 2,11.35 2,11.875 L2,17.125 C2,17.65 2.5,18 3.25,18 L20.75,18 C21.5,18 22,17.65 22,17.125 L22,11.875 Z M21,17 L3,17 L3,12 L21,12 L21,17 Z" fill-rule="nonzero"></path>
                                       <rect class="gjs-block-svg-path" x="2" y="5" width="14" height="5" rx="0.5"></rect>
                                       <polygon class="gjs-block-svg-path" fill-rule="nonzero" points="4 13 5 13 5 16 4 16"></polygon>
                                    </svg>
                                    <div class="gjs-block-label">Label</div>
                                 </div>
                              </div>
                              <div class="fa fa-check-square gjs-block gjs-one-bg gjs-four-color-h" title="Checkbox" draggable="true">
                                 <div class="gjs-block-label">Checkbox</div>
                              </div>
                              <div class="fa fa-dot-circle-o gjs-block gjs-one-bg gjs-four-color-h" title="Radio" draggable="true">
                                 <div class="gjs-block-label">Radio</div>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div class="gjs-blocks-no-cat">
                        <div class="gjs-blocks-c">
                           <div class="gjs-block gjs-one-bg gjs-four-color-h" title="Auto Complete" draggable="true">
                              <div class="gjs-block-label">Auto Complete</div>
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
import { ref, getCurrentInstance } from "vue";
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
         componentsGroups: this.cGroups,
      };
   },
   methods: {
      selectPanel(name) {
         console.log(`Selected Panel: ${name}`);
         this.selectedPanel = name;
      },
      componentsGroupToggle(index) {
         this.componentsGroups[index].isOpen = !this.componentsGroups[index].isOpen

         console.log(`Components Group: ${index}, changed to: ${this.componentsGroups[index].isOpen}`)
         console.log(this.componentsGroups)
      }
   },
   setup() {
      // load the page layout
      let layout = layoutLoader.loadLayout()

      let cGroups = new Array()

      // Available Components
      cGroups.push({ title: 'Basic', isOpen: true })

      const { appContext } = getCurrentInstance();
      const css = ref(
         `body {
         background-color: rgba(0,0,0,.1);
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
            font-family: 'Roboto', sans-serif;
            -webkit-font-smoothing: antialiased;
            padding: 20px 0;
            margin: 1rem;
            height: 100vh;
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
         `
      );
      return {
         layout,
         css,
         appContext,
         cGroups
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
  padding: 20px 0;
  margin: 1rem;
  height: 100vh;
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
