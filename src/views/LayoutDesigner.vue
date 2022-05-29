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
                                 <div v-for="container in layout" :key="container.id" :class="'stack-container span-' + container.span" :id="container.id">          
                                    <ComponentWrapper v-for="(c, index) in container.components" 
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
            <div id="gjs-cv-tools" class="gjs-cv-canvas__tools" data-tools="">
               <div class="gjs-tools gjs-tools-gl" style="pointer-events:none">
                  <div class="gjs-placeholder">
                     <div class="gjs-placeholder-int"></div>
                  </div>
               </div>
               <div id="gjs-tools" style="pointer-events: none; display: none;">
                  <div class="gjs-badge"></div>
                  <div class="gjs-ghost"></div>
                  <div class="gjs-toolbar" style="pointer-events:all"></div>
                  <div class="gjs-resizer"></div>
                  <div class="gjs-offset-v"></div>
                  <div class="gjs-offset-fixed-v"></div>
                  <div class="gjs-rte-toolbar gjs-one-bg" style="pointer-events: all; top: -1000px; left: -1000px; display: none;">
                     <div class="gjs-rte-actionbar">
                        <span class="gjs-rte-action" title="Bold"><b>B</b></span><span class="gjs-rte-action" title="Italic"><i>I</i></span><span class="gjs-rte-action" title="Underline"><u>U</u></span><span class="gjs-rte-action" title="Strike-through"><s>S</s></span>
                        <span class="gjs-rte-action" style="font-size:1.4rem;padding:0 4px 2px;" title="Link">
                           <svg viewBox="0 0 24 24">
                              <path fill="currentColor" d="M3.9,12C3.9,10.29 5.29,8.9 7,8.9H11V7H7A5,5 0 0,0 2,12A5,5 0 0,0 7,17H11V15.1H7C5.29,15.1 3.9,13.71 3.9,12M8,13H16V11H8V13M17,7H13V8.9H17C18.71,8.9 20.1,10.29 20.1,12C20.1,13.71 18.71,15.1 17,15.1H13V17H17A5,5 0 0,0 22,12A5,5 0 0,0 17,7Z"></path>
                           </svg>
                        </span>
                        <span class="gjs-rte-action" title="Wrap for style">
                           <svg viewBox="0 0 24 24">
                              <path fill="currentColor" d="M20.71,4.63L19.37,3.29C19,2.9 18.35,2.9 17.96,3.29L9,12.25L11.75,15L20.71,6.04C21.1,5.65 21.1,5 20.71,4.63M7,14A3,3 0 0,0 4,17C4,18.31 2.84,19 2,19C2.92,20.22 4.5,21 6,21A4,4 0 0,0 10,17A3,3 0 0,0 7,14Z"></path>
                           </svg>
                        </span>
                     </div>
                  </div>
               </div>
               <div class="gjs-tools" style="pointer-events: none; top: 0px; left: 0px; width: 974.667px; height: 860px; display: none;">
                  <div class="gjs-highlighter" data-hl=""></div>
                  <div class="gjs-badge" data-badge="" style="display: block; top: 0px; left: 0px;">
                     <div class="gjs-badge__name">Body</div>
                  </div>
                  <div class="gjs-placeholder">
                     <div class="gjs-placeholder-int"></div>
                  </div>
                  <div class="gjs-ghost"></div>
                  <div class="gjs-toolbar" style="pointer-events:all"></div>
                  <div class="gjs-resizer"></div>
                  <div class="gjs-offset-v" data-offset="" style="opacity: 0;">
                     <div class="gjs-marginName" data-offset-m="">
                        <div class="gjs-margin-v-el gjs-margin-v-top" data-offset-m-t=""></div>
                        <div class="gjs-margin-v-el gjs-margin-v-bottom" data-offset-m-b=""></div>
                        <div class="gjs-margin-v-el gjs-margin-v-left" data-offset-m-l=""></div>
                        <div class="gjs-margin-v-el gjs-margin-v-right" data-offset-m-r=""></div>
                     </div>
                     <div class="gjs-paddingName" data-offset-m="">
                        <div class="gjs-padding-v-el gjs-padding-v-top" data-offset-p-t=""></div>
                        <div class="gjs-padding-v-el gjs-padding-v-bottom" data-offset-p-b=""></div>
                        <div class="gjs-padding-v-el gjs-padding-v-left" data-offset-p-l=""></div>
                        <div class="gjs-padding-v-el gjs-padding-v-right" data-offset-p-r=""></div>
                     </div>
                  </div>
                  <div class="gjs-offset-fixed-v"></div>
               </div>
            </div>
         </div>
         <div class="gjs-pn-panels">
            <div class="gjs-pn-panel gjs-pn-commands gjs-one-bg gjs-two-color">
               <div class="gjs-pn-buttons"><span class="gjs-pn-btn"></span></div>
            </div>
            <div class="gjs-pn-panel gjs-pn-options gjs-one-bg gjs-two-color">
               <div class="gjs-pn-buttons"><span title="View components" class="gjs-pn-btn fa fa-square-o"></span><span title="Preview" class="gjs-pn-btn fa fa-eye"></span><span title="Fullscreen" class="gjs-pn-btn fa fa-arrows-alt"></span><span title="View code" class="gjs-pn-btn fa fa-code"></span><span class="gjs-pn-btn fa fa-undo"></span><span class="gjs-pn-btn fa fa-repeat"></span><span class="gjs-pn-btn fa fa-download"></span><span class="gjs-pn-btn fa fa-trash"></span></div>
            </div>
            <div class="gjs-pn-panel gjs-pn-views gjs-one-bg gjs-two-color">
               <div class="gjs-pn-buttons"><span title="Open Style Manager" class="gjs-pn-btn fa fa-paint-brush"></span><span title="Settings" class="gjs-pn-btn fa fa-cog"></span><span title="Open Layer Manager" class="gjs-pn-btn fa fa-bars"></span><span title="Open Blocks" class="gjs-pn-btn fa fa-th-large gjs-pn-active gjs-four-color"></span></div>
            </div>
            <div class="gjs-pn-panel gjs-pn-devices-c gjs-one-bg gjs-two-color">
               <div class="gjs-pn-buttons"><span class="gjs-pn-btn fa fa-desktop"></span><span class="gjs-pn-btn fa fa-tablet"></span><span class="gjs-pn-btn fa fa-mobile"></span></div>
            </div>
            <div class="gjs-pn-panel gjs-pn-views-container gjs-one-bg gjs-two-color">
               <div>
                  <div style="display: none;">
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
                     <div class="gjs-sm-sectors gjs-one-bg gjs-two-color">
                        <div class="gjs-sm-sector gjs-sm-sector__general no-select">
                           <div class="gjs-sm-sector-title" data-sector-title="">
                              <div class="gjs-sm-sector-caret">
                                 <svg viewBox="0 0 24 24">
                                    <path fill="currentColor" d="M7,10L12,15L17,10H7Z"></path>
                                 </svg>
                              </div>
                              <div class="gjs-sm-sector-label">General</div>
                           </div>
                           <div class="gjs-sm-properties" style="display: none;">
                              <div class="gjs-sm-property gjs-sm-radio gjs-sm-property__float gjs-sm-property--full">
                                 <div class="gjs-sm-label" data-sm-label="">
                                    <span class="gjs-sm-icon " title="">
                                    Float
                                    </span>
                                    <div class="gjs-sm-clear" style="display: none" data-clear-style="">
                                       <svg viewBox="0 0 24 24">
                                          <path fill="currentColor" d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"></path>
                                       </svg>
                                    </div>
                                 </div>
                                 <div class="gjs-fields" data-sm-fields="">
                                    <div class="gjs-field gjs-field-radio">
                                       <div class="gjs-radio-items">
                                          <div class="gjs-radio-item">
                                             <input type="radio" class="gjs-sm-radio gjs-sm-radio-float" id="float-none-c86" name="float-c86" value="none" checked="">
                                             <label class="gjs-radio-item-label" for="float-none-c86">none</label>
                                          </div>
                                          <div class="gjs-radio-item">
                                             <input type="radio" class="gjs-sm-radio gjs-sm-radio-float" id="float-left-c86" name="float-c86" value="left">
                                             <label class="gjs-radio-item-label" for="float-left-c86">left</label>
                                          </div>
                                          <div class="gjs-radio-item">
                                             <input type="radio" class="gjs-sm-radio gjs-sm-radio-float" id="float-right-c86" name="float-c86" value="right">
                                             <label class="gjs-radio-item-label" for="float-right-c86">right</label>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                              <div class="gjs-sm-property gjs-sm-select gjs-sm-property__display">
                                 <div class="gjs-sm-label" data-sm-label="">
                                    <span class="gjs-sm-icon " title="">
                                    Display
                                    </span>
                                    <div class="gjs-sm-clear" style="display: none" data-clear-style="">
                                       <svg viewBox="0 0 24 24">
                                          <path fill="currentColor" d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"></path>
                                       </svg>
                                    </div>
                                 </div>
                                 <div class="gjs-fields" data-sm-fields="">
                                    <div class="gjs-field gjs-select">
                                       <span id="gjs-sm-input-holder">
                                          <select>
                                             <option value="block">block</option>
                                             <option value="inline">inline</option>
                                             <option value="inline-block">inline-block</option>
                                             <option value="flex">flex</option>
                                             <option value="none">none</option>
                                          </select>
                                       </span>
                                       <div class="gjs-sel-arrow">
                                          <div class="gjs-d-s-arrow"></div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                              <div class="gjs-sm-property gjs-sm-radio gjs-sm-property__position gjs-sm-property--full">
                                 <div class="gjs-sm-label" data-sm-label="">
                                    <span class="gjs-sm-icon " title="">
                                    Position
                                    </span>
                                    <div class="gjs-sm-clear" style="display: none" data-clear-style="">
                                       <svg viewBox="0 0 24 24">
                                          <path fill="currentColor" d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"></path>
                                       </svg>
                                    </div>
                                 </div>
                                 <div class="gjs-fields" data-sm-fields="">
                                    <div class="gjs-field gjs-field-radio">
                                       <div class="gjs-radio-items">
                                          <div class="gjs-radio-item">
                                             <input type="radio" class="gjs-sm-radio gjs-sm-radio-position" id="position-static-c90" name="position-c90" value="static" checked="">
                                             <label class="gjs-radio-item-label" for="position-static-c90">static</label>
                                          </div>
                                          <div class="gjs-radio-item">
                                             <input type="radio" class="gjs-sm-radio gjs-sm-radio-position" id="position-relative-c90" name="position-c90" value="relative">
                                             <label class="gjs-radio-item-label" for="position-relative-c90">relative</label>
                                          </div>
                                          <div class="gjs-radio-item">
                                             <input type="radio" class="gjs-sm-radio gjs-sm-radio-position" id="position-absolute-c90" name="position-c90" value="absolute">
                                             <label class="gjs-radio-item-label" for="position-absolute-c90">absolute</label>
                                          </div>
                                          <div class="gjs-radio-item">
                                             <input type="radio" class="gjs-sm-radio gjs-sm-radio-position" id="position-fixed-c90" name="position-c90" value="fixed">
                                             <label class="gjs-radio-item-label" for="position-fixed-c90">fixed</label>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                              <div class="gjs-sm-property gjs-sm-number gjs-sm-integer gjs-sm-property__top">
                                 <div class="gjs-sm-label" data-sm-label="">
                                    <span class="gjs-sm-icon " title="">
                                    Top
                                    </span>
                                    <div class="gjs-sm-clear" style="display: none" data-clear-style="">
                                       <svg viewBox="0 0 24 24">
                                          <path fill="currentColor" d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"></path>
                                       </svg>
                                    </div>
                                 </div>
                                 <div class="gjs-fields" data-sm-fields="">
                                    <div class="gjs-field gjs-field-integer">
                                       <span class="gjs-input-holder"><input type="text" placeholder="auto"></span>
                                       <span class="gjs-field-units">
                                          <select class="gjs-input-unit">
                                             <option value="" disabled="" hidden="">-</option>
                                             <option selected="">px</option>
                                             <option>%</option>
                                             <option>em</option>
                                             <option>rem</option>
                                             <option>vh</option>
                                             <option>vw</option>
                                          </select>
                                       </span>
                                       <div class="gjs-field-arrows" data-arrows="">
                                          <div class="gjs-field-arrow-u" data-arrow-up=""></div>
                                          <div class="gjs-field-arrow-d" data-arrow-down=""></div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                              <div class="gjs-sm-property gjs-sm-number gjs-sm-integer gjs-sm-property__right">
                                 <div class="gjs-sm-label" data-sm-label="">
                                    <span class="gjs-sm-icon " title="">
                                    Right
                                    </span>
                                    <div class="gjs-sm-clear" style="display: none" data-clear-style="">
                                       <svg viewBox="0 0 24 24">
                                          <path fill="currentColor" d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"></path>
                                       </svg>
                                    </div>
                                 </div>
                                 <div class="gjs-fields" data-sm-fields="">
                                    <div class="gjs-field gjs-field-integer">
                                       <span class="gjs-input-holder"><input type="text" placeholder="auto"></span>
                                       <span class="gjs-field-units">
                                          <select class="gjs-input-unit">
                                             <option value="" disabled="" hidden="">-</option>
                                             <option selected="">px</option>
                                             <option>%</option>
                                             <option>em</option>
                                             <option>rem</option>
                                             <option>vh</option>
                                             <option>vw</option>
                                          </select>
                                       </span>
                                       <div class="gjs-field-arrows" data-arrows="">
                                          <div class="gjs-field-arrow-u" data-arrow-up=""></div>
                                          <div class="gjs-field-arrow-d" data-arrow-down=""></div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                              <div class="gjs-sm-property gjs-sm-number gjs-sm-integer gjs-sm-property__left">
                                 <div class="gjs-sm-label" data-sm-label="">
                                    <span class="gjs-sm-icon " title="">
                                    Left
                                    </span>
                                    <div class="gjs-sm-clear" style="display: none" data-clear-style="">
                                       <svg viewBox="0 0 24 24">
                                          <path fill="currentColor" d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"></path>
                                       </svg>
                                    </div>
                                 </div>
                                 <div class="gjs-fields" data-sm-fields="">
                                    <div class="gjs-field gjs-field-integer">
                                       <span class="gjs-input-holder"><input type="text" placeholder="auto"></span>
                                       <span class="gjs-field-units">
                                          <select class="gjs-input-unit">
                                             <option value="" disabled="" hidden="">-</option>
                                             <option selected="">px</option>
                                             <option>%</option>
                                             <option>em</option>
                                             <option>rem</option>
                                             <option>vh</option>
                                             <option>vw</option>
                                          </select>
                                       </span>
                                       <div class="gjs-field-arrows" data-arrows="">
                                          <div class="gjs-field-arrow-u" data-arrow-up=""></div>
                                          <div class="gjs-field-arrow-d" data-arrow-down=""></div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                              <div class="gjs-sm-property gjs-sm-number gjs-sm-integer gjs-sm-property__bottom">
                                 <div class="gjs-sm-label" data-sm-label="">
                                    <span class="gjs-sm-icon " title="">
                                    Bottom
                                    </span>
                                    <div class="gjs-sm-clear" style="display: none" data-clear-style="">
                                       <svg viewBox="0 0 24 24">
                                          <path fill="currentColor" d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"></path>
                                       </svg>
                                    </div>
                                 </div>
                                 <div class="gjs-fields" data-sm-fields="">
                                    <div class="gjs-field gjs-field-integer">
                                       <span class="gjs-input-holder"><input type="text" placeholder="auto"></span>
                                       <span class="gjs-field-units">
                                          <select class="gjs-input-unit">
                                             <option value="" disabled="" hidden="">-</option>
                                             <option selected="">px</option>
                                             <option>%</option>
                                             <option>em</option>
                                             <option>rem</option>
                                             <option>vh</option>
                                             <option>vw</option>
                                          </select>
                                       </span>
                                       <div class="gjs-field-arrows" data-arrows="">
                                          <div class="gjs-field-arrow-u" data-arrow-up=""></div>
                                          <div class="gjs-field-arrow-d" data-arrow-down=""></div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div class="gjs-sm-sector gjs-sm-sector__layout no-select">
                           <div class="gjs-sm-sector-title" data-sector-title="">
                              <div class="gjs-sm-sector-caret">
                                 <svg viewBox="0 0 24 24">
                                    <path fill="currentColor" d="M7,10L12,15L17,10H7Z"></path>
                                 </svg>
                              </div>
                              <div class="gjs-sm-sector-label">Layout</div>
                           </div>
                           <div class="gjs-sm-properties" style="display: none;">
                              <div class="gjs-sm-property gjs-sm-number gjs-sm-integer gjs-sm-property__width">
                                 <div class="gjs-sm-label" data-sm-label="">
                                    <span class="gjs-sm-icon " title="">
                                    Width
                                    </span>
                                    <div class="gjs-sm-clear" style="display: none" data-clear-style="">
                                       <svg viewBox="0 0 24 24">
                                          <path fill="currentColor" d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"></path>
                                       </svg>
                                    </div>
                                 </div>
                                 <div class="gjs-fields" data-sm-fields="">
                                    <div class="gjs-field gjs-field-integer">
                                       <span class="gjs-input-holder"><input type="text" placeholder="auto"></span>
                                       <span class="gjs-field-units">
                                          <select class="gjs-input-unit">
                                             <option value="" disabled="" hidden="">-</option>
                                             <option selected="">px</option>
                                             <option>%</option>
                                             <option>em</option>
                                             <option>rem</option>
                                             <option>vh</option>
                                             <option>vw</option>
                                          </select>
                                       </span>
                                       <div class="gjs-field-arrows" data-arrows="">
                                          <div class="gjs-field-arrow-u" data-arrow-up=""></div>
                                          <div class="gjs-field-arrow-d" data-arrow-down=""></div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                              <div class="gjs-sm-property gjs-sm-number gjs-sm-integer gjs-sm-property__height">
                                 <div class="gjs-sm-label" data-sm-label="">
                                    <span class="gjs-sm-icon " title="">
                                    Height
                                    </span>
                                    <div class="gjs-sm-clear" style="display: none" data-clear-style="">
                                       <svg viewBox="0 0 24 24">
                                          <path fill="currentColor" d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"></path>
                                       </svg>
                                    </div>
                                 </div>
                                 <div class="gjs-fields" data-sm-fields="">
                                    <div class="gjs-field gjs-field-integer">
                                       <span class="gjs-input-holder"><input type="text" placeholder="auto"></span>
                                       <span class="gjs-field-units">
                                          <select class="gjs-input-unit">
                                             <option value="" disabled="" hidden="">-</option>
                                             <option selected="">px</option>
                                             <option>%</option>
                                             <option>em</option>
                                             <option>rem</option>
                                             <option>vh</option>
                                             <option>vw</option>
                                          </select>
                                       </span>
                                       <div class="gjs-field-arrows" data-arrows="">
                                          <div class="gjs-field-arrow-u" data-arrow-up=""></div>
                                          <div class="gjs-field-arrow-d" data-arrow-down=""></div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                              <div class="gjs-sm-property gjs-sm-number gjs-sm-integer gjs-sm-property__max-width">
                                 <div class="gjs-sm-label" data-sm-label="">
                                    <span class="gjs-sm-icon " title="">
                                    Max width
                                    </span>
                                    <div class="gjs-sm-clear" style="display: none" data-clear-style="">
                                       <svg viewBox="0 0 24 24">
                                          <path fill="currentColor" d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"></path>
                                       </svg>
                                    </div>
                                 </div>
                                 <div class="gjs-fields" data-sm-fields="">
                                    <div class="gjs-field gjs-field-integer">
                                       <span class="gjs-input-holder"><input type="text" placeholder="auto"></span>
                                       <span class="gjs-field-units">
                                          <select class="gjs-input-unit">
                                             <option value="" disabled="" hidden="">-</option>
                                             <option selected="">px</option>
                                             <option>%</option>
                                             <option>em</option>
                                             <option>rem</option>
                                             <option>vh</option>
                                             <option>vw</option>
                                          </select>
                                       </span>
                                       <div class="gjs-field-arrows" data-arrows="">
                                          <div class="gjs-field-arrow-u" data-arrow-up=""></div>
                                          <div class="gjs-field-arrow-d" data-arrow-down=""></div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                              <div class="gjs-sm-property gjs-sm-number gjs-sm-integer gjs-sm-property__min-height">
                                 <div class="gjs-sm-label" data-sm-label="">
                                    <span class="gjs-sm-icon " title="">
                                    Min height
                                    </span>
                                    <div class="gjs-sm-clear" style="display: none" data-clear-style="">
                                       <svg viewBox="0 0 24 24">
                                          <path fill="currentColor" d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"></path>
                                       </svg>
                                    </div>
                                 </div>
                                 <div class="gjs-fields" data-sm-fields="">
                                    <div class="gjs-field gjs-field-integer">
                                       <span class="gjs-input-holder"><input type="text" placeholder="auto"></span>
                                       <span class="gjs-field-units">
                                          <select class="gjs-input-unit">
                                             <option value="" disabled="" hidden="">-</option>
                                             <option selected="">px</option>
                                             <option>%</option>
                                             <option>em</option>
                                             <option>rem</option>
                                             <option>vh</option>
                                             <option>vw</option>
                                          </select>
                                       </span>
                                       <div class="gjs-field-arrows" data-arrows="">
                                          <div class="gjs-field-arrow-u" data-arrow-up=""></div>
                                          <div class="gjs-field-arrow-d" data-arrow-down=""></div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                              <div class="gjs-sm-property gjs-sm-composite gjs-sm-property__margin gjs-sm-property--full">
                                 <div class="gjs-sm-label" data-sm-label="">
                                    <span class="gjs-sm-icon " title="">
                                    Margin
                                    </span>
                                    <div class="gjs-sm-clear" style="display: none" data-clear-style="">
                                       <svg viewBox="0 0 24 24">
                                          <path fill="currentColor" d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"></path>
                                       </svg>
                                    </div>
                                 </div>
                                 <div class="gjs-fields" data-sm-fields="">
                                    <div class="gjs-sm-field gjs-sm-composite">
                                       <span id="gjs-sm-input-holder">
                                          <div class="gjs-sm-properties">
                                             <div class="gjs-sm-property gjs-sm-number gjs-sm-integer gjs-sm-property__margin-top">
                                                <div class="gjs-sm-label" data-sm-label="">
                                                   <span class="gjs-sm-icon " title="">
                                                   Top
                                                   </span>
                                                   <div class="gjs-sm-clear" style="display: none" data-clear-style="">
                                                      <svg viewBox="0 0 24 24">
                                                         <path fill="currentColor" d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"></path>
                                                      </svg>
                                                   </div>
                                                </div>
                                                <div class="gjs-fields" data-sm-fields="">
                                                   <div class="gjs-field gjs-field-integer">
                                                      <span class="gjs-input-holder"><input type="text" placeholder="0"></span>
                                                      <span class="gjs-field-units">
                                                         <select class="gjs-input-unit">
                                                            <option value="" disabled="" hidden="">-</option>
                                                            <option selected="">px</option>
                                                            <option>%</option>
                                                            <option>em</option>
                                                            <option>rem</option>
                                                            <option>vh</option>
                                                            <option>vw</option>
                                                         </select>
                                                      </span>
                                                      <div class="gjs-field-arrows" data-arrows="">
                                                         <div class="gjs-field-arrow-u" data-arrow-up=""></div>
                                                         <div class="gjs-field-arrow-d" data-arrow-down=""></div>
                                                      </div>
                                                   </div>
                                                </div>
                                             </div>
                                             <div class="gjs-sm-property gjs-sm-number gjs-sm-integer gjs-sm-property__margin-right">
                                                <div class="gjs-sm-label" data-sm-label="">
                                                   <span class="gjs-sm-icon " title="">
                                                   Right
                                                   </span>
                                                   <div class="gjs-sm-clear" style="display: none" data-clear-style="">
                                                      <svg viewBox="0 0 24 24">
                                                         <path fill="currentColor" d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"></path>
                                                      </svg>
                                                   </div>
                                                </div>
                                                <div class="gjs-fields" data-sm-fields="">
                                                   <div class="gjs-field gjs-field-integer">
                                                      <span class="gjs-input-holder"><input type="text" placeholder="0"></span>
                                                      <span class="gjs-field-units">
                                                         <select class="gjs-input-unit">
                                                            <option value="" disabled="" hidden="">-</option>
                                                            <option selected="">px</option>
                                                            <option>%</option>
                                                            <option>em</option>
                                                            <option>rem</option>
                                                            <option>vh</option>
                                                            <option>vw</option>
                                                         </select>
                                                      </span>
                                                      <div class="gjs-field-arrows" data-arrows="">
                                                         <div class="gjs-field-arrow-u" data-arrow-up=""></div>
                                                         <div class="gjs-field-arrow-d" data-arrow-down=""></div>
                                                      </div>
                                                   </div>
                                                </div>
                                             </div>
                                             <div class="gjs-sm-property gjs-sm-number gjs-sm-integer gjs-sm-property__margin-bottom">
                                                <div class="gjs-sm-label" data-sm-label="">
                                                   <span class="gjs-sm-icon " title="">
                                                   Bottom
                                                   </span>
                                                   <div class="gjs-sm-clear" style="display: none" data-clear-style="">
                                                      <svg viewBox="0 0 24 24">
                                                         <path fill="currentColor" d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"></path>
                                                      </svg>
                                                   </div>
                                                </div>
                                                <div class="gjs-fields" data-sm-fields="">
                                                   <div class="gjs-field gjs-field-integer">
                                                      <span class="gjs-input-holder"><input type="text" placeholder="0"></span>
                                                      <span class="gjs-field-units">
                                                         <select class="gjs-input-unit">
                                                            <option value="" disabled="" hidden="">-</option>
                                                            <option selected="">px</option>
                                                            <option>%</option>
                                                            <option>em</option>
                                                            <option>rem</option>
                                                            <option>vh</option>
                                                            <option>vw</option>
                                                         </select>
                                                      </span>
                                                      <div class="gjs-field-arrows" data-arrows="">
                                                         <div class="gjs-field-arrow-u" data-arrow-up=""></div>
                                                         <div class="gjs-field-arrow-d" data-arrow-down=""></div>
                                                      </div>
                                                   </div>
                                                </div>
                                             </div>
                                             <div class="gjs-sm-property gjs-sm-number gjs-sm-integer gjs-sm-property__margin-left">
                                                <div class="gjs-sm-label" data-sm-label="">
                                                   <span class="gjs-sm-icon " title="">
                                                   Left
                                                   </span>
                                                   <div class="gjs-sm-clear" style="display: none" data-clear-style="">
                                                      <svg viewBox="0 0 24 24">
                                                         <path fill="currentColor" d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"></path>
                                                      </svg>
                                                   </div>
                                                </div>
                                                <div class="gjs-fields" data-sm-fields="">
                                                   <div class="gjs-field gjs-field-integer">
                                                      <span class="gjs-input-holder"><input type="text" placeholder="0"></span>
                                                      <span class="gjs-field-units">
                                                         <select class="gjs-input-unit">
                                                            <option value="" disabled="" hidden="">-</option>
                                                            <option selected="">px</option>
                                                            <option>%</option>
                                                            <option>em</option>
                                                            <option>rem</option>
                                                            <option>vh</option>
                                                            <option>vw</option>
                                                         </select>
                                                      </span>
                                                      <div class="gjs-field-arrows" data-arrows="">
                                                         <div class="gjs-field-arrow-u" data-arrow-up=""></div>
                                                         <div class="gjs-field-arrow-d" data-arrow-down=""></div>
                                                      </div>
                                                   </div>
                                                </div>
                                             </div>
                                          </div>
                                       </span>
                                    </div>
                                 </div>
                              </div>
                              <div class="gjs-sm-property gjs-sm-composite gjs-sm-property__padding gjs-sm-property--full">
                                 <div class="gjs-sm-label" data-sm-label="">
                                    <span class="gjs-sm-icon " title="">
                                    Padding
                                    </span>
                                    <div class="gjs-sm-clear" style="display: none" data-clear-style="">
                                       <svg viewBox="0 0 24 24">
                                          <path fill="currentColor" d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"></path>
                                       </svg>
                                    </div>
                                 </div>
                                 <div class="gjs-fields" data-sm-fields="">
                                    <div class="gjs-sm-field gjs-sm-composite">
                                       <span id="gjs-sm-input-holder">
                                          <div class="gjs-sm-properties">
                                             <div class="gjs-sm-property gjs-sm-number gjs-sm-integer gjs-sm-property__padding-top">
                                                <div class="gjs-sm-label" data-sm-label="">
                                                   <span class="gjs-sm-icon " title="">
                                                   Top
                                                   </span>
                                                   <div class="gjs-sm-clear" style="display: none" data-clear-style="">
                                                      <svg viewBox="0 0 24 24">
                                                         <path fill="currentColor" d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"></path>
                                                      </svg>
                                                   </div>
                                                </div>
                                                <div class="gjs-fields" data-sm-fields="">
                                                   <div class="gjs-field gjs-field-integer">
                                                      <span class="gjs-input-holder"><input type="text" placeholder="0"></span>
                                                      <span class="gjs-field-units">
                                                         <select class="gjs-input-unit">
                                                            <option value="" disabled="" hidden="">-</option>
                                                            <option selected="">px</option>
                                                            <option>%</option>
                                                            <option>em</option>
                                                            <option>rem</option>
                                                            <option>vh</option>
                                                            <option>vw</option>
                                                         </select>
                                                      </span>
                                                      <div class="gjs-field-arrows" data-arrows="">
                                                         <div class="gjs-field-arrow-u" data-arrow-up=""></div>
                                                         <div class="gjs-field-arrow-d" data-arrow-down=""></div>
                                                      </div>
                                                   </div>
                                                </div>
                                             </div>
                                             <div class="gjs-sm-property gjs-sm-number gjs-sm-integer gjs-sm-property__padding-right">
                                                <div class="gjs-sm-label" data-sm-label="">
                                                   <span class="gjs-sm-icon " title="">
                                                   Right
                                                   </span>
                                                   <div class="gjs-sm-clear" style="display: none" data-clear-style="">
                                                      <svg viewBox="0 0 24 24">
                                                         <path fill="currentColor" d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"></path>
                                                      </svg>
                                                   </div>
                                                </div>
                                                <div class="gjs-fields" data-sm-fields="">
                                                   <div class="gjs-field gjs-field-integer">
                                                      <span class="gjs-input-holder"><input type="text" placeholder="0"></span>
                                                      <span class="gjs-field-units">
                                                         <select class="gjs-input-unit">
                                                            <option value="" disabled="" hidden="">-</option>
                                                            <option selected="">px</option>
                                                            <option>%</option>
                                                            <option>em</option>
                                                            <option>rem</option>
                                                            <option>vh</option>
                                                            <option>vw</option>
                                                         </select>
                                                      </span>
                                                      <div class="gjs-field-arrows" data-arrows="">
                                                         <div class="gjs-field-arrow-u" data-arrow-up=""></div>
                                                         <div class="gjs-field-arrow-d" data-arrow-down=""></div>
                                                      </div>
                                                   </div>
                                                </div>
                                             </div>
                                             <div class="gjs-sm-property gjs-sm-number gjs-sm-integer gjs-sm-property__padding-bottom">
                                                <div class="gjs-sm-label" data-sm-label="">
                                                   <span class="gjs-sm-icon " title="">
                                                   Bottom
                                                   </span>
                                                   <div class="gjs-sm-clear" style="display: none" data-clear-style="">
                                                      <svg viewBox="0 0 24 24">
                                                         <path fill="currentColor" d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"></path>
                                                      </svg>
                                                   </div>
                                                </div>
                                                <div class="gjs-fields" data-sm-fields="">
                                                   <div class="gjs-field gjs-field-integer">
                                                      <span class="gjs-input-holder"><input type="text" placeholder="0"></span>
                                                      <span class="gjs-field-units">
                                                         <select class="gjs-input-unit">
                                                            <option value="" disabled="" hidden="">-</option>
                                                            <option selected="">px</option>
                                                            <option>%</option>
                                                            <option>em</option>
                                                            <option>rem</option>
                                                            <option>vh</option>
                                                            <option>vw</option>
                                                         </select>
                                                      </span>
                                                      <div class="gjs-field-arrows" data-arrows="">
                                                         <div class="gjs-field-arrow-u" data-arrow-up=""></div>
                                                         <div class="gjs-field-arrow-d" data-arrow-down=""></div>
                                                      </div>
                                                   </div>
                                                </div>
                                             </div>
                                             <div class="gjs-sm-property gjs-sm-number gjs-sm-integer gjs-sm-property__padding-left">
                                                <div class="gjs-sm-label" data-sm-label="">
                                                   <span class="gjs-sm-icon " title="">
                                                   Left
                                                   </span>
                                                   <div class="gjs-sm-clear" style="display: none" data-clear-style="">
                                                      <svg viewBox="0 0 24 24">
                                                         <path fill="currentColor" d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"></path>
                                                      </svg>
                                                   </div>
                                                </div>
                                                <div class="gjs-fields" data-sm-fields="">
                                                   <div class="gjs-field gjs-field-integer">
                                                      <span class="gjs-input-holder"><input type="text" placeholder="0"></span>
                                                      <span class="gjs-field-units">
                                                         <select class="gjs-input-unit">
                                                            <option value="" disabled="" hidden="">-</option>
                                                            <option selected="">px</option>
                                                            <option>%</option>
                                                            <option>em</option>
                                                            <option>rem</option>
                                                            <option>vh</option>
                                                            <option>vw</option>
                                                         </select>
                                                      </span>
                                                      <div class="gjs-field-arrows" data-arrows="">
                                                         <div class="gjs-field-arrow-u" data-arrow-up=""></div>
                                                         <div class="gjs-field-arrow-d" data-arrow-down=""></div>
                                                      </div>
                                                   </div>
                                                </div>
                                             </div>
                                          </div>
                                       </span>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div class="gjs-sm-sector gjs-sm-sector__typography no-select">
                           <div class="gjs-sm-sector-title" data-sector-title="">
                              <div class="gjs-sm-sector-caret">
                                 <svg viewBox="0 0 24 24">
                                    <path fill="currentColor" d="M7,10L12,15L17,10H7Z"></path>
                                 </svg>
                              </div>
                              <div class="gjs-sm-sector-label">Typography</div>
                           </div>
                           <div class="gjs-sm-properties" style="display: none;">
                              <div class="gjs-sm-property gjs-sm-select gjs-sm-property__font-family">
                                 <div class="gjs-sm-label" data-sm-label="">
                                    <span class="gjs-sm-icon " title="">
                                    Font family
                                    </span>
                                    <div class="gjs-sm-clear" style="display: none" data-clear-style="">
                                       <svg viewBox="0 0 24 24">
                                          <path fill="currentColor" d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"></path>
                                       </svg>
                                    </div>
                                 </div>
                                 <div class="gjs-fields" data-sm-fields="">
                                    <div class="gjs-field gjs-select">
                                       <span id="gjs-sm-input-holder">
                                          <select>
                                             <option value="Arial, Helvetica, sans-serif">Arial</option>
                                             <option value="Arial Black, Gadget, sans-serif">Arial Black</option>
                                             <option value="Brush Script MT, sans-serif">Brush Script MT</option>
                                             <option value="Comic Sans MS, cursive, sans-serif">Comic Sans MS</option>
                                             <option value="Courier New, Courier, monospace">Courier New</option>
                                             <option value="Georgia, serif">Georgia</option>
                                             <option value="Helvetica, sans-serif">Helvetica</option>
                                             <option value="Impact, Charcoal, sans-serif">Impact</option>
                                             <option value="Lucida Sans Unicode, Lucida Grande, sans-serif">Lucida Sans Unicode</option>
                                             <option value="Tahoma, Geneva, sans-serif">Tahoma</option>
                                             <option value="Times New Roman, Times, serif">Times New Roman</option>
                                             <option value="Trebuchet MS, Helvetica, sans-serif">Trebuchet MS</option>
                                             <option value="Verdana, Geneva, sans-serif">Verdana</option>
                                          </select>
                                       </span>
                                       <div class="gjs-sel-arrow">
                                          <div class="gjs-d-s-arrow"></div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                              <div class="gjs-sm-property gjs-sm-number gjs-sm-integer gjs-sm-property__font-size">
                                 <div class="gjs-sm-label" data-sm-label="">
                                    <span class="gjs-sm-icon " title="">
                                    Font size
                                    </span>
                                    <div class="gjs-sm-clear" style="display: none" data-clear-style="">
                                       <svg viewBox="0 0 24 24">
                                          <path fill="currentColor" d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"></path>
                                       </svg>
                                    </div>
                                 </div>
                                 <div class="gjs-fields" data-sm-fields="">
                                    <div class="gjs-field gjs-field-integer">
                                       <span class="gjs-input-holder"><input type="text" placeholder="medium"></span>
                                       <span class="gjs-field-units">
                                          <select class="gjs-input-unit">
                                             <option value="" disabled="" hidden="">-</option>
                                             <option selected="">px</option>
                                             <option>%</option>
                                             <option>em</option>
                                             <option>rem</option>
                                             <option>vh</option>
                                             <option>vw</option>
                                          </select>
                                       </span>
                                       <div class="gjs-field-arrows" data-arrows="">
                                          <div class="gjs-field-arrow-u" data-arrow-up=""></div>
                                          <div class="gjs-field-arrow-d" data-arrow-down=""></div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                              <div class="gjs-sm-property gjs-sm-select gjs-sm-property__font-weight">
                                 <div class="gjs-sm-label" data-sm-label="">
                                    <span class="gjs-sm-icon " title="">
                                    Font weight
                                    </span>
                                    <div class="gjs-sm-clear" style="display: none" data-clear-style="">
                                       <svg viewBox="0 0 24 24">
                                          <path fill="currentColor" d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"></path>
                                       </svg>
                                    </div>
                                 </div>
                                 <div class="gjs-fields" data-sm-fields="">
                                    <div class="gjs-field gjs-select">
                                       <span id="gjs-sm-input-holder">
                                          <select>
                                             <option value="100">Thin</option>
                                             <option value="200">Extra-Light</option>
                                             <option value="300">Light</option>
                                             <option value="400">Normal</option>
                                             <option value="500">Medium</option>
                                             <option value="600">Semi-Bold</option>
                                             <option value="700">Bold</option>
                                             <option value="800">Extra-Bold</option>
                                             <option value="900">Ultra-Bold</option>
                                          </select>
                                       </span>
                                       <div class="gjs-sel-arrow">
                                          <div class="gjs-d-s-arrow"></div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                              <div class="gjs-sm-property gjs-sm-number gjs-sm-integer gjs-sm-property__letter-spacing">
                                 <div class="gjs-sm-label" data-sm-label="">
                                    <span class="gjs-sm-icon " title="">
                                    Letter spacing
                                    </span>
                                    <div class="gjs-sm-clear" style="display: none" data-clear-style="">
                                       <svg viewBox="0 0 24 24">
                                          <path fill="currentColor" d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"></path>
                                       </svg>
                                    </div>
                                 </div>
                                 <div class="gjs-fields" data-sm-fields="">
                                    <div class="gjs-field gjs-field-integer">
                                       <span class="gjs-input-holder"><input type="text" placeholder="normal"></span>
                                       <span class="gjs-field-units">
                                          <select class="gjs-input-unit">
                                             <option value="" disabled="" hidden="">-</option>
                                             <option selected="">px</option>
                                             <option>%</option>
                                             <option>em</option>
                                             <option>rem</option>
                                             <option>vh</option>
                                             <option>vw</option>
                                          </select>
                                       </span>
                                       <div class="gjs-field-arrows" data-arrows="">
                                          <div class="gjs-field-arrow-u" data-arrow-up=""></div>
                                          <div class="gjs-field-arrow-d" data-arrow-down=""></div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                              <div class="gjs-sm-property gjs-sm-color gjs-sm-property__color">
                                 <div class="gjs-sm-label" data-sm-label="">
                                    <span class="gjs-sm-icon " title="">
                                    Color
                                    </span>
                                    <div class="gjs-sm-clear" style="display: none" data-clear-style="">
                                       <svg viewBox="0 0 24 24">
                                          <path fill="currentColor" d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"></path>
                                       </svg>
                                    </div>
                                 </div>
                                 <div class="gjs-fields" data-sm-fields="">
                                    <div class="gjs-field gjs-field-color">
                                       <div class="gjs-input-holder"><input type="text" placeholder="black"></div>
                                       <div class="gjs-field-colorp">
                                          <div class="gjs-field-colorp-c" data-colorp-c="">
                                             <div class="gjs-checker-bg"></div>
                                             <div class="gjs-field-color-picker" style=""></div>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                              <div class="gjs-sm-property gjs-sm-number gjs-sm-integer gjs-sm-property__line-height">
                                 <div class="gjs-sm-label" data-sm-label="">
                                    <span class="gjs-sm-icon " title="">
                                    Line height
                                    </span>
                                    <div class="gjs-sm-clear" style="display: none" data-clear-style="">
                                       <svg viewBox="0 0 24 24">
                                          <path fill="currentColor" d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"></path>
                                       </svg>
                                    </div>
                                 </div>
                                 <div class="gjs-fields" data-sm-fields="">
                                    <div class="gjs-field gjs-field-integer">
                                       <span class="gjs-input-holder"><input type="text" placeholder="normal"></span>
                                       <span class="gjs-field-units">
                                          <select class="gjs-input-unit">
                                             <option value="" disabled="" hidden="">-</option>
                                             <option selected="">px</option>
                                             <option>%</option>
                                             <option>em</option>
                                             <option>rem</option>
                                             <option>vh</option>
                                             <option>vw</option>
                                          </select>
                                       </span>
                                       <div class="gjs-field-arrows" data-arrows="">
                                          <div class="gjs-field-arrow-u" data-arrow-up=""></div>
                                          <div class="gjs-field-arrow-d" data-arrow-down=""></div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                              <div class="gjs-sm-property gjs-sm-radio gjs-sm-property__text-align gjs-sm-property--full">
                                 <div class="gjs-sm-label" data-sm-label="">
                                    <span class="gjs-sm-icon " title="">
                                    Text align
                                    </span>
                                    <div class="gjs-sm-clear" style="display: none" data-clear-style="">
                                       <svg viewBox="0 0 24 24">
                                          <path fill="currentColor" d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"></path>
                                       </svg>
                                    </div>
                                 </div>
                                 <div class="gjs-fields" data-sm-fields="">
                                    <div class="gjs-field gjs-field-radio">
                                       <div class="gjs-radio-items">
                                          <div class="gjs-radio-item">
                                             <input type="radio" class="gjs-sm-radio gjs-sm-radio-text-align" id="text-align-left-c181" name="text-align-c181" value="left" checked="">
                                             <label class="gjs-radio-item-label" for="text-align-left-c181">left</label>
                                          </div>
                                          <div class="gjs-radio-item">
                                             <input type="radio" class="gjs-sm-radio gjs-sm-radio-text-align" id="text-align-center-c181" name="text-align-c181" value="center">
                                             <label class="gjs-radio-item-label" for="text-align-center-c181">center</label>
                                          </div>
                                          <div class="gjs-radio-item">
                                             <input type="radio" class="gjs-sm-radio gjs-sm-radio-text-align" id="text-align-right-c181" name="text-align-c181" value="right">
                                             <label class="gjs-radio-item-label" for="text-align-right-c181">right</label>
                                          </div>
                                          <div class="gjs-radio-item">
                                             <input type="radio" class="gjs-sm-radio gjs-sm-radio-text-align" id="text-align-justify-c181" name="text-align-c181" value="justify">
                                             <label class="gjs-radio-item-label" for="text-align-justify-c181">justify</label>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                              <div class="gjs-sm-property gjs-sm-stack gjs-sm-property__text-shadow gjs-sm-property--full">
                                 <div class="gjs-sm-label" data-sm-label="">
                                    <span class="gjs-sm-icon " title="">
                                    Text shadow
                                    </span>
                                    <div class="gjs-sm-clear" style="display: none" data-clear-style="">
                                       <svg viewBox="0 0 24 24">
                                          <path fill="currentColor" d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"></path>
                                       </svg>
                                    </div>
                                 </div>
                                 <div class="gjs-fields" data-sm-fields="">
                                    <div class="gjs-sm-field gjs-sm-stack">
                                       <button type="button" id="gjs-sm-add" data-add-layer="">
                                          <svg viewBox="0 0 24 24">
                                             <path fill="currentColor" d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z"></path>
                                          </svg>
                                       </button>
                                       <div data-layers-wrapper="">
                                          <div class="gjs-sm-layers gjs-field"></div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div class="gjs-sm-sector gjs-sm-sector__decorations no-select">
                           <div class="gjs-sm-sector-title" data-sector-title="">
                              <div class="gjs-sm-sector-caret">
                                 <svg viewBox="0 0 24 24">
                                    <path fill="currentColor" d="M7,10L12,15L17,10H7Z"></path>
                                 </svg>
                              </div>
                              <div class="gjs-sm-sector-label">Decorations</div>
                           </div>
                           <div class="gjs-sm-properties" style="display: none;">
                              <div class="gjs-sm-property gjs-sm-number gjs-sm-integer gjs-sm-property__border-radius">
                                 <div class="gjs-sm-label" data-sm-label="">
                                    <span class="gjs-sm-icon " title="">
                                    Border radius
                                    </span>
                                    <div class="gjs-sm-clear" style="display: none" data-clear-style="">
                                       <svg viewBox="0 0 24 24">
                                          <path fill="currentColor" d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"></path>
                                       </svg>
                                    </div>
                                 </div>
                                 <div class="gjs-fields" data-sm-fields="">
                                    <div class="gjs-field gjs-field-integer">
                                       <span class="gjs-input-holder"><input type="text" placeholder="0"></span>
                                       <span class="gjs-field-units">
                                          <select class="gjs-input-unit">
                                             <option value="" disabled="" hidden="">-</option>
                                             <option selected="">px</option>
                                             <option>%</option>
                                             <option>em</option>
                                             <option>rem</option>
                                             <option>vh</option>
                                             <option>vw</option>
                                          </select>
                                       </span>
                                       <div class="gjs-field-arrows" data-arrows="">
                                          <div class="gjs-field-arrow-u" data-arrow-up=""></div>
                                          <div class="gjs-field-arrow-d" data-arrow-down=""></div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                              <div class="gjs-sm-property gjs-sm-color gjs-sm-property__background-color">
                                 <div class="gjs-sm-label" data-sm-label="">
                                    <span class="gjs-sm-icon " title="">
                                    Background color
                                    </span>
                                    <div class="gjs-sm-clear" style="display: none" data-clear-style="">
                                       <svg viewBox="0 0 24 24">
                                          <path fill="currentColor" d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"></path>
                                       </svg>
                                    </div>
                                 </div>
                                 <div class="gjs-fields" data-sm-fields="">
                                    <div class="gjs-field gjs-field-color">
                                       <div class="gjs-input-holder"><input type="text" placeholder="none"></div>
                                       <div class="gjs-field-colorp">
                                          <div class="gjs-field-colorp-c" data-colorp-c="">
                                             <div class="gjs-checker-bg"></div>
                                             <div class="gjs-field-color-picker"></div>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                              <div class="gjs-sm-property gjs-sm-composite gjs-sm-property__border-radius gjs-sm-property--full">
                                 <div class="gjs-sm-label" data-sm-label="">
                                    <span class="gjs-sm-icon " title="">
                                    Border radius
                                    </span>
                                    <div class="gjs-sm-clear" style="display: none" data-clear-style="">
                                       <svg viewBox="0 0 24 24">
                                          <path fill="currentColor" d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"></path>
                                       </svg>
                                    </div>
                                 </div>
                                 <div class="gjs-fields" data-sm-fields="">
                                    <div class="gjs-sm-field gjs-sm-composite">
                                       <span id="gjs-sm-input-holder">
                                          <div class="gjs-sm-properties">
                                             <div class="gjs-sm-property gjs-sm-number gjs-sm-integer gjs-sm-property__border-top-left-radius">
                                                <div class="gjs-sm-label" data-sm-label="">
                                                   <span class="gjs-sm-icon " title="">
                                                   Top Left
                                                   </span>
                                                   <div class="gjs-sm-clear" style="display: none" data-clear-style="">
                                                      <svg viewBox="0 0 24 24">
                                                         <path fill="currentColor" d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"></path>
                                                      </svg>
                                                   </div>
                                                </div>
                                                <div class="gjs-fields" data-sm-fields="">
                                                   <div class="gjs-field gjs-field-integer">
                                                      <span class="gjs-input-holder"><input type="text" placeholder="0"></span>
                                                      <span class="gjs-field-units">
                                                         <select class="gjs-input-unit">
                                                            <option value="" disabled="" hidden="">-</option>
                                                            <option selected="">px</option>
                                                            <option>%</option>
                                                            <option>em</option>
                                                            <option>rem</option>
                                                            <option>vh</option>
                                                            <option>vw</option>
                                                         </select>
                                                      </span>
                                                      <div class="gjs-field-arrows" data-arrows="">
                                                         <div class="gjs-field-arrow-u" data-arrow-up=""></div>
                                                         <div class="gjs-field-arrow-d" data-arrow-down=""></div>
                                                      </div>
                                                   </div>
                                                </div>
                                             </div>
                                             <div class="gjs-sm-property gjs-sm-number gjs-sm-integer gjs-sm-property__border-top-right-radius">
                                                <div class="gjs-sm-label" data-sm-label="">
                                                   <span class="gjs-sm-icon " title="">
                                                   Top Right
                                                   </span>
                                                   <div class="gjs-sm-clear" style="display: none" data-clear-style="">
                                                      <svg viewBox="0 0 24 24">
                                                         <path fill="currentColor" d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"></path>
                                                      </svg>
                                                   </div>
                                                </div>
                                                <div class="gjs-fields" data-sm-fields="">
                                                   <div class="gjs-field gjs-field-integer">
                                                      <span class="gjs-input-holder"><input type="text" placeholder="0"></span>
                                                      <span class="gjs-field-units">
                                                         <select class="gjs-input-unit">
                                                            <option value="" disabled="" hidden="">-</option>
                                                            <option selected="">px</option>
                                                            <option>%</option>
                                                            <option>em</option>
                                                            <option>rem</option>
                                                            <option>vh</option>
                                                            <option>vw</option>
                                                         </select>
                                                      </span>
                                                      <div class="gjs-field-arrows" data-arrows="">
                                                         <div class="gjs-field-arrow-u" data-arrow-up=""></div>
                                                         <div class="gjs-field-arrow-d" data-arrow-down=""></div>
                                                      </div>
                                                   </div>
                                                </div>
                                             </div>
                                             <div class="gjs-sm-property gjs-sm-number gjs-sm-integer gjs-sm-property__border-bottom-right-radius">
                                                <div class="gjs-sm-label" data-sm-label="">
                                                   <span class="gjs-sm-icon " title="">
                                                   Bottom Right
                                                   </span>
                                                   <div class="gjs-sm-clear" style="display: none" data-clear-style="">
                                                      <svg viewBox="0 0 24 24">
                                                         <path fill="currentColor" d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"></path>
                                                      </svg>
                                                   </div>
                                                </div>
                                                <div class="gjs-fields" data-sm-fields="">
                                                   <div class="gjs-field gjs-field-integer">
                                                      <span class="gjs-input-holder"><input type="text" placeholder="0"></span>
                                                      <span class="gjs-field-units">
                                                         <select class="gjs-input-unit">
                                                            <option value="" disabled="" hidden="">-</option>
                                                            <option selected="">px</option>
                                                            <option>%</option>
                                                            <option>em</option>
                                                            <option>rem</option>
                                                            <option>vh</option>
                                                            <option>vw</option>
                                                         </select>
                                                      </span>
                                                      <div class="gjs-field-arrows" data-arrows="">
                                                         <div class="gjs-field-arrow-u" data-arrow-up=""></div>
                                                         <div class="gjs-field-arrow-d" data-arrow-down=""></div>
                                                      </div>
                                                   </div>
                                                </div>
                                             </div>
                                             <div class="gjs-sm-property gjs-sm-number gjs-sm-integer gjs-sm-property__border-bottom-left-radius">
                                                <div class="gjs-sm-label" data-sm-label="">
                                                   <span class="gjs-sm-icon " title="">
                                                   Bottom Left
                                                   </span>
                                                   <div class="gjs-sm-clear" style="display: none" data-clear-style="">
                                                      <svg viewBox="0 0 24 24">
                                                         <path fill="currentColor" d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"></path>
                                                      </svg>
                                                   </div>
                                                </div>
                                                <div class="gjs-fields" data-sm-fields="">
                                                   <div class="gjs-field gjs-field-integer">
                                                      <span class="gjs-input-holder"><input type="text" placeholder="0"></span>
                                                      <span class="gjs-field-units">
                                                         <select class="gjs-input-unit">
                                                            <option value="" disabled="" hidden="">-</option>
                                                            <option selected="">px</option>
                                                            <option>%</option>
                                                            <option>em</option>
                                                            <option>rem</option>
                                                            <option>vh</option>
                                                            <option>vw</option>
                                                         </select>
                                                      </span>
                                                      <div class="gjs-field-arrows" data-arrows="">
                                                         <div class="gjs-field-arrow-u" data-arrow-up=""></div>
                                                         <div class="gjs-field-arrow-d" data-arrow-down=""></div>
                                                      </div>
                                                   </div>
                                                </div>
                                             </div>
                                          </div>
                                       </span>
                                    </div>
                                 </div>
                              </div>
                              <div class="gjs-sm-property gjs-sm-composite gjs-sm-property__border gjs-sm-property--full">
                                 <div class="gjs-sm-label" data-sm-label="">
                                    <span class="gjs-sm-icon " title="">
                                    Border
                                    </span>
                                    <div class="gjs-sm-clear" style="display: none" data-clear-style="">
                                       <svg viewBox="0 0 24 24">
                                          <path fill="currentColor" d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"></path>
                                       </svg>
                                    </div>
                                 </div>
                                 <div class="gjs-fields" data-sm-fields="">
                                    <div class="gjs-sm-field gjs-sm-composite">
                                       <span id="gjs-sm-input-holder">
                                          <div class="gjs-sm-properties">
                                             <div class="gjs-sm-property gjs-sm-number gjs-sm-integer gjs-sm-property__border-width">
                                                <div class="gjs-sm-label" data-sm-label="">
                                                   <span class="gjs-sm-icon " title="">
                                                   Width
                                                   </span>
                                                   <div class="gjs-sm-clear" style="display: none" data-clear-style="">
                                                      <svg viewBox="0 0 24 24">
                                                         <path fill="currentColor" d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"></path>
                                                      </svg>
                                                   </div>
                                                </div>
                                                <div class="gjs-fields" data-sm-fields="">
                                                   <div class="gjs-field gjs-field-integer">
                                                      <span class="gjs-input-holder"><input type="text" placeholder="0"></span>
                                                      <span class="gjs-field-units">
                                                         <select class="gjs-input-unit">
                                                            <option value="" disabled="" hidden="">-</option>
                                                            <option selected="">px</option>
                                                            <option>em</option>
                                                            <option>rem</option>
                                                            <option>vh</option>
                                                            <option>vw</option>
                                                         </select>
                                                      </span>
                                                      <div class="gjs-field-arrows" data-arrows="">
                                                         <div class="gjs-field-arrow-u" data-arrow-up=""></div>
                                                         <div class="gjs-field-arrow-d" data-arrow-down=""></div>
                                                      </div>
                                                   </div>
                                                </div>
                                             </div>
                                             <div class="gjs-sm-property gjs-sm-select gjs-sm-property__border-style">
                                                <div class="gjs-sm-label" data-sm-label="">
                                                   <span class="gjs-sm-icon " title="">
                                                   Style
                                                   </span>
                                                   <div class="gjs-sm-clear" style="display: none" data-clear-style="">
                                                      <svg viewBox="0 0 24 24">
                                                         <path fill="currentColor" d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"></path>
                                                      </svg>
                                                   </div>
                                                </div>
                                                <div class="gjs-fields" data-sm-fields="">
                                                   <div class="gjs-field gjs-select">
                                                      <span id="gjs-sm-input-holder">
                                                         <select>
                                                            <option value="none">none</option>
                                                            <option value="solid">solid</option>
                                                            <option value="dotted">dotted</option>
                                                            <option value="dashed">dashed</option>
                                                            <option value="double">double</option>
                                                            <option value="groove">groove</option>
                                                            <option value="ridge">ridge</option>
                                                            <option value="inset">inset</option>
                                                            <option value="outset">outset</option>
                                                         </select>
                                                      </span>
                                                      <div class="gjs-sel-arrow">
                                                         <div class="gjs-d-s-arrow"></div>
                                                      </div>
                                                   </div>
                                                </div>
                                             </div>
                                             <div class="gjs-sm-property gjs-sm-color gjs-sm-property__border-color">
                                                <div class="gjs-sm-label" data-sm-label="">
                                                   <span class="gjs-sm-icon " title="">
                                                   Color
                                                   </span>
                                                   <div class="gjs-sm-clear" style="display: none" data-clear-style="">
                                                      <svg viewBox="0 0 24 24">
                                                         <path fill="currentColor" d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"></path>
                                                      </svg>
                                                   </div>
                                                </div>
                                                <div class="gjs-fields" data-sm-fields="">
                                                   <div class="gjs-field gjs-field-color">
                                                      <div class="gjs-input-holder"><input type="text" placeholder="black"></div>
                                                      <div class="gjs-field-colorp">
                                                         <div class="gjs-field-colorp-c" data-colorp-c="">
                                                            <div class="gjs-checker-bg"></div>
                                                            <div class="gjs-field-color-picker" style=""></div>
                                                         </div>
                                                      </div>
                                                   </div>
                                                </div>
                                             </div>
                                          </div>
                                       </span>
                                    </div>
                                 </div>
                              </div>
                              <div class="gjs-sm-property gjs-sm-stack gjs-sm-property__box-shadow gjs-sm-property--full">
                                 <div class="gjs-sm-label" data-sm-label="">
                                    <span class="gjs-sm-icon " title="">
                                    Box shadow
                                    </span>
                                    <div class="gjs-sm-clear" style="display: none" data-clear-style="">
                                       <svg viewBox="0 0 24 24">
                                          <path fill="currentColor" d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"></path>
                                       </svg>
                                    </div>
                                 </div>
                                 <div class="gjs-fields" data-sm-fields="">
                                    <div class="gjs-sm-field gjs-sm-stack">
                                       <button type="button" id="gjs-sm-add" data-add-layer="">
                                          <svg viewBox="0 0 24 24">
                                             <path fill="currentColor" d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z"></path>
                                          </svg>
                                       </button>
                                       <div data-layers-wrapper="">
                                          <div class="gjs-sm-layers gjs-field"></div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                              <div class="gjs-sm-property gjs-sm-stack gjs-sm-property__background gjs-sm-property--full">
                                 <div class="gjs-sm-label" data-sm-label="">
                                    <span class="gjs-sm-icon " title="">
                                    Background
                                    </span>
                                    <div class="gjs-sm-clear" style="display: none" data-clear-style="">
                                       <svg viewBox="0 0 24 24">
                                          <path fill="currentColor" d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"></path>
                                       </svg>
                                    </div>
                                 </div>
                                 <div class="gjs-fields" data-sm-fields="">
                                    <div class="gjs-sm-field gjs-sm-stack">
                                       <button type="button" id="gjs-sm-add" data-add-layer="">
                                          <svg viewBox="0 0 24 24">
                                             <path fill="currentColor" d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z"></path>
                                          </svg>
                                       </button>
                                       <div data-layers-wrapper="">
                                          <div class="gjs-sm-layers gjs-field"></div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div class="gjs-sm-sector gjs-sm-sector__extra no-select">
                           <div class="gjs-sm-sector-title" data-sector-title="">
                              <div class="gjs-sm-sector-caret">
                                 <svg viewBox="0 0 24 24">
                                    <path fill="currentColor" d="M7,10L12,15L17,10H7Z"></path>
                                 </svg>
                              </div>
                              <div class="gjs-sm-sector-label">Extra</div>
                           </div>
                           <div class="gjs-sm-properties" style="display: none;">
                              <div class="gjs-sm-property gjs-sm-stack gjs-sm-property__transition gjs-sm-property--full">
                                 <div class="gjs-sm-label" data-sm-label="">
                                    <span class="gjs-sm-icon " title="">
                                    Transition
                                    </span>
                                    <div class="gjs-sm-clear" style="display: none" data-clear-style="">
                                       <svg viewBox="0 0 24 24">
                                          <path fill="currentColor" d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"></path>
                                       </svg>
                                    </div>
                                 </div>
                                 <div class="gjs-fields" data-sm-fields="">
                                    <div class="gjs-sm-field gjs-sm-stack">
                                       <button type="button" id="gjs-sm-add" data-add-layer="">
                                          <svg viewBox="0 0 24 24">
                                             <path fill="currentColor" d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z"></path>
                                          </svg>
                                       </button>
                                       <div data-layers-wrapper="">
                                          <div class="gjs-sm-layers gjs-field"></div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                              <div class="gjs-sm-property gjs-sm-number gjs-sm-integer gjs-sm-property__perspective">
                                 <div class="gjs-sm-label" data-sm-label="">
                                    <span class="gjs-sm-icon " title="">
                                    Perspective
                                    </span>
                                    <div class="gjs-sm-clear" style="display: none" data-clear-style="">
                                       <svg viewBox="0 0 24 24">
                                          <path fill="currentColor" d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"></path>
                                       </svg>
                                    </div>
                                 </div>
                                 <div class="gjs-fields" data-sm-fields="">
                                    <div class="gjs-field gjs-field-integer">
                                       <span class="gjs-input-holder"><input type="text" placeholder="0"></span>
                                       <span class="gjs-field-units">
                                          <select class="gjs-input-unit">
                                             <option value="" disabled="" hidden="">-</option>
                                             <option selected="">px</option>
                                             <option>%</option>
                                             <option>em</option>
                                             <option>rem</option>
                                             <option>vh</option>
                                             <option>vw</option>
                                          </select>
                                       </span>
                                       <div class="gjs-field-arrows" data-arrows="">
                                          <div class="gjs-field-arrow-u" data-arrow-up=""></div>
                                          <div class="gjs-field-arrow-d" data-arrow-down=""></div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                              <div class="gjs-sm-property gjs-sm-composite gjs-sm-property__transform gjs-sm-property--full">
                                 <div class="gjs-sm-label" data-sm-label="">
                                    <span class="gjs-sm-icon " title="">
                                    Transform
                                    </span>
                                    <div class="gjs-sm-clear" style="display: none" data-clear-style="">
                                       <svg viewBox="0 0 24 24">
                                          <path fill="currentColor" d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"></path>
                                       </svg>
                                    </div>
                                 </div>
                                 <div class="gjs-fields" data-sm-fields="">
                                    <div class="gjs-sm-field gjs-sm-composite">
                                       <span id="gjs-sm-input-holder">
                                          <div class="gjs-sm-properties">
                                             <div class="gjs-sm-property gjs-sm-number gjs-sm-integer gjs-sm-property__transform-rotate-x">
                                                <div class="gjs-sm-label" data-sm-label="">
                                                   <span class="gjs-sm-icon " title="">
                                                   Rotate X
                                                   </span>
                                                   <div class="gjs-sm-clear" style="display: none" data-clear-style="">
                                                      <svg viewBox="0 0 24 24">
                                                         <path fill="currentColor" d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"></path>
                                                      </svg>
                                                   </div>
                                                </div>
                                                <div class="gjs-fields" data-sm-fields="">
                                                   <div class="gjs-field gjs-field-integer">
                                                      <span class="gjs-input-holder"><input type="text" placeholder="0"></span>
                                                      <span class="gjs-field-units">
                                                         <select class="gjs-input-unit">
                                                            <option value="" disabled="" hidden="">-</option>
                                                            <option selected="">deg</option>
                                                            <option>rad</option>
                                                            <option>grad</option>
                                                         </select>
                                                      </span>
                                                      <div class="gjs-field-arrows" data-arrows="">
                                                         <div class="gjs-field-arrow-u" data-arrow-up=""></div>
                                                         <div class="gjs-field-arrow-d" data-arrow-down=""></div>
                                                      </div>
                                                   </div>
                                                </div>
                                             </div>
                                             <div class="gjs-sm-property gjs-sm-number gjs-sm-integer gjs-sm-property__transform-rotate-y">
                                                <div class="gjs-sm-label" data-sm-label="">
                                                   <span class="gjs-sm-icon " title="">
                                                   Rotate Y
                                                   </span>
                                                   <div class="gjs-sm-clear" style="display: none" data-clear-style="">
                                                      <svg viewBox="0 0 24 24">
                                                         <path fill="currentColor" d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"></path>
                                                      </svg>
                                                   </div>
                                                </div>
                                                <div class="gjs-fields" data-sm-fields="">
                                                   <div class="gjs-field gjs-field-integer">
                                                      <span class="gjs-input-holder"><input type="text" placeholder="0"></span>
                                                      <span class="gjs-field-units">
                                                         <select class="gjs-input-unit">
                                                            <option value="" disabled="" hidden="">-</option>
                                                            <option selected="">deg</option>
                                                            <option>rad</option>
                                                            <option>grad</option>
                                                         </select>
                                                      </span>
                                                      <div class="gjs-field-arrows" data-arrows="">
                                                         <div class="gjs-field-arrow-u" data-arrow-up=""></div>
                                                         <div class="gjs-field-arrow-d" data-arrow-down=""></div>
                                                      </div>
                                                   </div>
                                                </div>
                                             </div>
                                             <div class="gjs-sm-property gjs-sm-number gjs-sm-integer gjs-sm-property__transform-rotate-z">
                                                <div class="gjs-sm-label" data-sm-label="">
                                                   <span class="gjs-sm-icon " title="">
                                                   Rotate Z
                                                   </span>
                                                   <div class="gjs-sm-clear" style="display: none" data-clear-style="">
                                                      <svg viewBox="0 0 24 24">
                                                         <path fill="currentColor" d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"></path>
                                                      </svg>
                                                   </div>
                                                </div>
                                                <div class="gjs-fields" data-sm-fields="">
                                                   <div class="gjs-field gjs-field-integer">
                                                      <span class="gjs-input-holder"><input type="text" placeholder="0"></span>
                                                      <span class="gjs-field-units">
                                                         <select class="gjs-input-unit">
                                                            <option value="" disabled="" hidden="">-</option>
                                                            <option selected="">deg</option>
                                                            <option>rad</option>
                                                            <option>grad</option>
                                                         </select>
                                                      </span>
                                                      <div class="gjs-field-arrows" data-arrows="">
                                                         <div class="gjs-field-arrow-u" data-arrow-up=""></div>
                                                         <div class="gjs-field-arrow-d" data-arrow-down=""></div>
                                                      </div>
                                                   </div>
                                                </div>
                                             </div>
                                             <div class="gjs-sm-property gjs-sm-number gjs-sm-integer gjs-sm-property__transform-scale-x">
                                                <div class="gjs-sm-label" data-sm-label="">
                                                   <span class="gjs-sm-icon " title="">
                                                   Scale X
                                                   </span>
                                                   <div class="gjs-sm-clear" style="display: none" data-clear-style="">
                                                      <svg viewBox="0 0 24 24">
                                                         <path fill="currentColor" d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"></path>
                                                      </svg>
                                                   </div>
                                                </div>
                                                <div class="gjs-fields" data-sm-fields="">
                                                   <div class="gjs-field gjs-field-integer">
                                                      <span class="gjs-input-holder"><input type="text" placeholder="1"></span>
                                                      <span class="gjs-field-units"></span>
                                                      <div class="gjs-field-arrows" data-arrows="">
                                                         <div class="gjs-field-arrow-u" data-arrow-up=""></div>
                                                         <div class="gjs-field-arrow-d" data-arrow-down=""></div>
                                                      </div>
                                                   </div>
                                                </div>
                                             </div>
                                             <div class="gjs-sm-property gjs-sm-number gjs-sm-integer gjs-sm-property__transform-scale-y">
                                                <div class="gjs-sm-label" data-sm-label="">
                                                   <span class="gjs-sm-icon " title="">
                                                   Scale Y
                                                   </span>
                                                   <div class="gjs-sm-clear" style="display: none" data-clear-style="">
                                                      <svg viewBox="0 0 24 24">
                                                         <path fill="currentColor" d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"></path>
                                                      </svg>
                                                   </div>
                                                </div>
                                                <div class="gjs-fields" data-sm-fields="">
                                                   <div class="gjs-field gjs-field-integer">
                                                      <span class="gjs-input-holder"><input type="text" placeholder="1"></span>
                                                      <span class="gjs-field-units"></span>
                                                      <div class="gjs-field-arrows" data-arrows="">
                                                         <div class="gjs-field-arrow-u" data-arrow-up=""></div>
                                                         <div class="gjs-field-arrow-d" data-arrow-down=""></div>
                                                      </div>
                                                   </div>
                                                </div>
                                             </div>
                                             <div class="gjs-sm-property gjs-sm-number gjs-sm-integer gjs-sm-property__transform-scale-z">
                                                <div class="gjs-sm-label" data-sm-label="">
                                                   <span class="gjs-sm-icon " title="">
                                                   Scale Z
                                                   </span>
                                                   <div class="gjs-sm-clear" style="display: none" data-clear-style="">
                                                      <svg viewBox="0 0 24 24">
                                                         <path fill="currentColor" d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"></path>
                                                      </svg>
                                                   </div>
                                                </div>
                                                <div class="gjs-fields" data-sm-fields="">
                                                   <div class="gjs-field gjs-field-integer">
                                                      <span class="gjs-input-holder"><input type="text" placeholder="1"></span>
                                                      <span class="gjs-field-units"></span>
                                                      <div class="gjs-field-arrows" data-arrows="">
                                                         <div class="gjs-field-arrow-u" data-arrow-up=""></div>
                                                         <div class="gjs-field-arrow-d" data-arrow-down=""></div>
                                                      </div>
                                                   </div>
                                                </div>
                                             </div>
                                          </div>
                                       </span>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div class="gjs-sm-sector gjs-sm-sector__general no-select">
                           <div class="gjs-sm-sector-title" data-sector-title="">
                              <div class="gjs-sm-sector-caret">
                                 <svg viewBox="0 0 24 24">
                                    <path fill="currentColor" d="M7,10L12,15L17,10H7Z"></path>
                                 </svg>
                              </div>
                              <div class="gjs-sm-sector-label">General</div>
                           </div>
                           <div class="gjs-sm-properties" style="display: none;">
                              <div class="gjs-sm-property gjs-sm-select gjs-sm-property__display">
                                 <div class="gjs-sm-label" data-sm-label="">
                                    <span class="gjs-sm-icon " title="">
                                    Display
                                    </span>
                                    <div class="gjs-sm-clear" style="display: none" data-clear-style="">
                                       <svg viewBox="0 0 24 24">
                                          <path fill="currentColor" d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"></path>
                                       </svg>
                                    </div>
                                 </div>
                                 <div class="gjs-fields" data-sm-fields="">
                                    <div class="gjs-field gjs-select">
                                       <span id="gjs-sm-input-holder">
                                          <select>
                                             <option value="block">block</option>
                                             <option value="inline">inline</option>
                                             <option value="inline-block">inline-block</option>
                                             <option value="flex">flex</option>
                                             <option value="none">none</option>
                                          </select>
                                       </span>
                                       <div class="gjs-sel-arrow">
                                          <div class="gjs-d-s-arrow"></div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                              <div class="gjs-sm-property gjs-sm-radio gjs-sm-property__float gjs-sm-property--full">
                                 <div class="gjs-sm-label" data-sm-label="">
                                    <span class="gjs-sm-icon " title="">
                                    Float
                                    </span>
                                    <div class="gjs-sm-clear" style="display: none" data-clear-style="">
                                       <svg viewBox="0 0 24 24">
                                          <path fill="currentColor" d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"></path>
                                       </svg>
                                    </div>
                                 </div>
                                 <div class="gjs-fields" data-sm-fields="">
                                    <div class="gjs-field gjs-field-radio">
                                       <div class="gjs-radio-items">
                                          <div class="gjs-radio-item">
                                             <input type="radio" class="gjs-sm-radio gjs-sm-radio-float" id="float-none-c319" name="float-c319" value="none" checked="">
                                             <label class="gjs-radio-item-label" for="float-none-c319">none</label>
                                          </div>
                                          <div class="gjs-radio-item">
                                             <input type="radio" class="gjs-sm-radio gjs-sm-radio-float" id="float-left-c319" name="float-c319" value="left">
                                             <label class="gjs-radio-item-label" for="float-left-c319">left</label>
                                          </div>
                                          <div class="gjs-radio-item">
                                             <input type="radio" class="gjs-sm-radio gjs-sm-radio-float" id="float-right-c319" name="float-c319" value="right">
                                             <label class="gjs-radio-item-label" for="float-right-c319">right</label>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                              <div class="gjs-sm-property gjs-sm-radio gjs-sm-property__position gjs-sm-property--full">
                                 <div class="gjs-sm-label" data-sm-label="">
                                    <span class="gjs-sm-icon " title="">
                                    Position
                                    </span>
                                    <div class="gjs-sm-clear" style="display: none" data-clear-style="">
                                       <svg viewBox="0 0 24 24">
                                          <path fill="currentColor" d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"></path>
                                       </svg>
                                    </div>
                                 </div>
                                 <div class="gjs-fields" data-sm-fields="">
                                    <div class="gjs-field gjs-field-radio">
                                       <div class="gjs-radio-items">
                                          <div class="gjs-radio-item">
                                             <input type="radio" class="gjs-sm-radio gjs-sm-radio-position" id="position-static-c321" name="position-c321" value="static" checked="">
                                             <label class="gjs-radio-item-label" for="position-static-c321">static</label>
                                          </div>
                                          <div class="gjs-radio-item">
                                             <input type="radio" class="gjs-sm-radio gjs-sm-radio-position" id="position-relative-c321" name="position-c321" value="relative">
                                             <label class="gjs-radio-item-label" for="position-relative-c321">relative</label>
                                          </div>
                                          <div class="gjs-radio-item">
                                             <input type="radio" class="gjs-sm-radio gjs-sm-radio-position" id="position-absolute-c321" name="position-c321" value="absolute">
                                             <label class="gjs-radio-item-label" for="position-absolute-c321">absolute</label>
                                          </div>
                                          <div class="gjs-radio-item">
                                             <input type="radio" class="gjs-sm-radio gjs-sm-radio-position" id="position-fixed-c321" name="position-c321" value="fixed">
                                             <label class="gjs-radio-item-label" for="position-fixed-c321">fixed</label>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                              <div class="gjs-sm-property gjs-sm-number gjs-sm-integer gjs-sm-property__top">
                                 <div class="gjs-sm-label" data-sm-label="">
                                    <span class="gjs-sm-icon " title="">
                                    Top
                                    </span>
                                    <div class="gjs-sm-clear" style="display: none" data-clear-style="">
                                       <svg viewBox="0 0 24 24">
                                          <path fill="currentColor" d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"></path>
                                       </svg>
                                    </div>
                                 </div>
                                 <div class="gjs-fields" data-sm-fields="">
                                    <div class="gjs-field gjs-field-integer">
                                       <span class="gjs-input-holder"><input type="text" placeholder="auto"></span>
                                       <span class="gjs-field-units">
                                          <select class="gjs-input-unit">
                                             <option value="" disabled="" hidden="">-</option>
                                             <option selected="">px</option>
                                             <option>%</option>
                                             <option>em</option>
                                             <option>rem</option>
                                             <option>vh</option>
                                             <option>vw</option>
                                          </select>
                                       </span>
                                       <div class="gjs-field-arrows" data-arrows="">
                                          <div class="gjs-field-arrow-u" data-arrow-up=""></div>
                                          <div class="gjs-field-arrow-d" data-arrow-down=""></div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                              <div class="gjs-sm-property gjs-sm-number gjs-sm-integer gjs-sm-property__right">
                                 <div class="gjs-sm-label" data-sm-label="">
                                    <span class="gjs-sm-icon " title="">
                                    Right
                                    </span>
                                    <div class="gjs-sm-clear" style="display: none" data-clear-style="">
                                       <svg viewBox="0 0 24 24">
                                          <path fill="currentColor" d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"></path>
                                       </svg>
                                    </div>
                                 </div>
                                 <div class="gjs-fields" data-sm-fields="">
                                    <div class="gjs-field gjs-field-integer">
                                       <span class="gjs-input-holder"><input type="text" placeholder="auto"></span>
                                       <span class="gjs-field-units">
                                          <select class="gjs-input-unit">
                                             <option value="" disabled="" hidden="">-</option>
                                             <option selected="">px</option>
                                             <option>%</option>
                                             <option>em</option>
                                             <option>rem</option>
                                             <option>vh</option>
                                             <option>vw</option>
                                          </select>
                                       </span>
                                       <div class="gjs-field-arrows" data-arrows="">
                                          <div class="gjs-field-arrow-u" data-arrow-up=""></div>
                                          <div class="gjs-field-arrow-d" data-arrow-down=""></div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                              <div class="gjs-sm-property gjs-sm-number gjs-sm-integer gjs-sm-property__left">
                                 <div class="gjs-sm-label" data-sm-label="">
                                    <span class="gjs-sm-icon " title="">
                                    Left
                                    </span>
                                    <div class="gjs-sm-clear" style="display: none" data-clear-style="">
                                       <svg viewBox="0 0 24 24">
                                          <path fill="currentColor" d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"></path>
                                       </svg>
                                    </div>
                                 </div>
                                 <div class="gjs-fields" data-sm-fields="">
                                    <div class="gjs-field gjs-field-integer">
                                       <span class="gjs-input-holder"><input type="text" placeholder="auto"></span>
                                       <span class="gjs-field-units">
                                          <select class="gjs-input-unit">
                                             <option value="" disabled="" hidden="">-</option>
                                             <option selected="">px</option>
                                             <option>%</option>
                                             <option>em</option>
                                             <option>rem</option>
                                             <option>vh</option>
                                             <option>vw</option>
                                          </select>
                                       </span>
                                       <div class="gjs-field-arrows" data-arrows="">
                                          <div class="gjs-field-arrow-u" data-arrow-up=""></div>
                                          <div class="gjs-field-arrow-d" data-arrow-down=""></div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                              <div class="gjs-sm-property gjs-sm-number gjs-sm-integer gjs-sm-property__bottom">
                                 <div class="gjs-sm-label" data-sm-label="">
                                    <span class="gjs-sm-icon " title="">
                                    Bottom
                                    </span>
                                    <div class="gjs-sm-clear" style="display: none" data-clear-style="">
                                       <svg viewBox="0 0 24 24">
                                          <path fill="currentColor" d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"></path>
                                       </svg>
                                    </div>
                                 </div>
                                 <div class="gjs-fields" data-sm-fields="">
                                    <div class="gjs-field gjs-field-integer">
                                       <span class="gjs-input-holder"><input type="text" placeholder="auto"></span>
                                       <span class="gjs-field-units">
                                          <select class="gjs-input-unit">
                                             <option value="" disabled="" hidden="">-</option>
                                             <option selected="">px</option>
                                             <option>%</option>
                                             <option>em</option>
                                             <option>rem</option>
                                             <option>vh</option>
                                             <option>vw</option>
                                          </select>
                                       </span>
                                       <div class="gjs-field-arrows" data-arrows="">
                                          <div class="gjs-field-arrow-u" data-arrow-up=""></div>
                                          <div class="gjs-field-arrow-d" data-arrow-down=""></div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div class="gjs-sm-sector gjs-sm-sector__flex no-select">
                           <div class="gjs-sm-sector-title" data-sector-title="">
                              <div class="gjs-sm-sector-caret">
                                 <svg viewBox="0 0 24 24">
                                    <path fill="currentColor" d="M7,10L12,15L17,10H7Z"></path>
                                 </svg>
                              </div>
                              <div class="gjs-sm-sector-label">Flex</div>
                           </div>
                           <div class="gjs-sm-properties" style="display: none;">
                              <div class="gjs-sm-property gjs-sm-select gjs-sm-property__flex-direction">
                                 <div class="gjs-sm-label" data-sm-label="">
                                    <span class="gjs-sm-icon " title="">
                                    Flex direction
                                    </span>
                                    <div class="gjs-sm-clear" style="display: none" data-clear-style="">
                                       <svg viewBox="0 0 24 24">
                                          <path fill="currentColor" d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"></path>
                                       </svg>
                                    </div>
                                 </div>
                                 <div class="gjs-fields" data-sm-fields="">
                                    <div class="gjs-field gjs-select">
                                       <span id="gjs-sm-input-holder">
                                          <select>
                                             <option value="row">row</option>
                                             <option value="row-reverse">row-reverse</option>
                                             <option value="column">column</option>
                                             <option value="column-reverse">column-reverse</option>
                                          </select>
                                       </span>
                                       <div class="gjs-sel-arrow">
                                          <div class="gjs-d-s-arrow"></div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                              <div class="gjs-sm-property gjs-sm-select gjs-sm-property__flex-wrap">
                                 <div class="gjs-sm-label" data-sm-label="">
                                    <span class="gjs-sm-icon " title="">
                                    Flex wrap
                                    </span>
                                    <div class="gjs-sm-clear" style="display: none" data-clear-style="">
                                       <svg viewBox="0 0 24 24">
                                          <path fill="currentColor" d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"></path>
                                       </svg>
                                    </div>
                                 </div>
                                 <div class="gjs-fields" data-sm-fields="">
                                    <div class="gjs-field gjs-select">
                                       <span id="gjs-sm-input-holder">
                                          <select>
                                             <option value="nowrap">nowrap</option>
                                             <option value="wrap">wrap</option>
                                             <option value="wrap-reverse">wrap-reverse</option>
                                          </select>
                                       </span>
                                       <div class="gjs-sel-arrow">
                                          <div class="gjs-d-s-arrow"></div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                              <div class="gjs-sm-property gjs-sm-select gjs-sm-property__justify-content">
                                 <div class="gjs-sm-label" data-sm-label="">
                                    <span class="gjs-sm-icon " title="">
                                    Justify content
                                    </span>
                                    <div class="gjs-sm-clear" style="display: none" data-clear-style="">
                                       <svg viewBox="0 0 24 24">
                                          <path fill="currentColor" d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"></path>
                                       </svg>
                                    </div>
                                 </div>
                                 <div class="gjs-fields" data-sm-fields="">
                                    <div class="gjs-field gjs-select">
                                       <span id="gjs-sm-input-holder">
                                          <select>
                                             <option value="flex-start">flex-start</option>
                                             <option value="flex-end">flex-end</option>
                                             <option value="center">center</option>
                                             <option value="space-between">space-between</option>
                                             <option value="space-around">space-around</option>
                                             <option value="space-evenly">space-evenly</option>
                                          </select>
                                       </span>
                                       <div class="gjs-sel-arrow">
                                          <div class="gjs-d-s-arrow"></div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                              <div class="gjs-sm-property gjs-sm-select gjs-sm-property__align-items">
                                 <div class="gjs-sm-label" data-sm-label="">
                                    <span class="gjs-sm-icon " title="">
                                    Align items
                                    </span>
                                    <div class="gjs-sm-clear" style="display: none" data-clear-style="">
                                       <svg viewBox="0 0 24 24">
                                          <path fill="currentColor" d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"></path>
                                       </svg>
                                    </div>
                                 </div>
                                 <div class="gjs-fields" data-sm-fields="">
                                    <div class="gjs-field gjs-select">
                                       <span id="gjs-sm-input-holder">
                                          <select>
                                             <option value="flex-start">flex-start</option>
                                             <option value="flex-end">flex-end</option>
                                             <option value="center">center</option>
                                             <option value="baseline">baseline</option>
                                             <option value="stretch">stretch</option>
                                          </select>
                                       </span>
                                       <div class="gjs-sel-arrow">
                                          <div class="gjs-d-s-arrow"></div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                              <div class="gjs-sm-property gjs-sm-select gjs-sm-property__align-content">
                                 <div class="gjs-sm-label" data-sm-label="">
                                    <span class="gjs-sm-icon " title="">
                                    Align content
                                    </span>
                                    <div class="gjs-sm-clear" style="display: none" data-clear-style="">
                                       <svg viewBox="0 0 24 24">
                                          <path fill="currentColor" d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"></path>
                                       </svg>
                                    </div>
                                 </div>
                                 <div class="gjs-fields" data-sm-fields="">
                                    <div class="gjs-field gjs-select">
                                       <span id="gjs-sm-input-holder">
                                          <select>
                                             <option value="flex-start">flex-start</option>
                                             <option value="flex-end">flex-end</option>
                                             <option value="center">center</option>
                                             <option value="space-between">space-between</option>
                                             <option value="space-around">space-around</option>
                                             <option value="stretch">stretch</option>
                                          </select>
                                       </span>
                                       <div class="gjs-sel-arrow">
                                          <div class="gjs-d-s-arrow"></div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                              <div class="gjs-sm-property gjs-sm-number gjs-sm-integer gjs-sm-property__order">
                                 <div class="gjs-sm-label" data-sm-label="">
                                    <span class="gjs-sm-icon " title="">
                                    Order
                                    </span>
                                    <div class="gjs-sm-clear" style="display: none" data-clear-style="">
                                       <svg viewBox="0 0 24 24">
                                          <path fill="currentColor" d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"></path>
                                       </svg>
                                    </div>
                                 </div>
                                 <div class="gjs-fields" data-sm-fields="">
                                    <div class="gjs-field gjs-field-integer">
                                       <span class="gjs-input-holder"><input type="text" placeholder="0"></span>
                                       <span class="gjs-field-units"></span>
                                       <div class="gjs-field-arrows" data-arrows="">
                                          <div class="gjs-field-arrow-u" data-arrow-up=""></div>
                                          <div class="gjs-field-arrow-d" data-arrow-down=""></div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                              <div class="gjs-sm-property gjs-sm-number gjs-sm-integer gjs-sm-property__flex-basis">
                                 <div class="gjs-sm-label" data-sm-label="">
                                    <span class="gjs-sm-icon " title="">
                                    Flex basis
                                    </span>
                                    <div class="gjs-sm-clear" style="display: none" data-clear-style="">
                                       <svg viewBox="0 0 24 24">
                                          <path fill="currentColor" d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"></path>
                                       </svg>
                                    </div>
                                 </div>
                                 <div class="gjs-fields" data-sm-fields="">
                                    <div class="gjs-field gjs-field-integer">
                                       <span class="gjs-input-holder"><input type="text" placeholder="auto"></span>
                                       <span class="gjs-field-units">
                                          <select class="gjs-input-unit">
                                             <option value="" disabled="" hidden="">-</option>
                                             <option selected="">px</option>
                                             <option>%</option>
                                             <option>em</option>
                                             <option>rem</option>
                                             <option>vh</option>
                                             <option>vw</option>
                                          </select>
                                       </span>
                                       <div class="gjs-field-arrows" data-arrows="">
                                          <div class="gjs-field-arrow-u" data-arrow-up=""></div>
                                          <div class="gjs-field-arrow-d" data-arrow-down=""></div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                              <div class="gjs-sm-property gjs-sm-number gjs-sm-integer gjs-sm-property__flex-grow">
                                 <div class="gjs-sm-label" data-sm-label="">
                                    <span class="gjs-sm-icon " title="">
                                    Flex grow
                                    </span>
                                    <div class="gjs-sm-clear" style="display: none" data-clear-style="">
                                       <svg viewBox="0 0 24 24">
                                          <path fill="currentColor" d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"></path>
                                       </svg>
                                    </div>
                                 </div>
                                 <div class="gjs-fields" data-sm-fields="">
                                    <div class="gjs-field gjs-field-integer">
                                       <span class="gjs-input-holder"><input type="text" placeholder="0"></span>
                                       <span class="gjs-field-units"></span>
                                       <div class="gjs-field-arrows" data-arrows="">
                                          <div class="gjs-field-arrow-u" data-arrow-up=""></div>
                                          <div class="gjs-field-arrow-d" data-arrow-down=""></div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                              <div class="gjs-sm-property gjs-sm-number gjs-sm-integer gjs-sm-property__flex-shrink">
                                 <div class="gjs-sm-label" data-sm-label="">
                                    <span class="gjs-sm-icon " title="">
                                    Flex shrink
                                    </span>
                                    <div class="gjs-sm-clear" style="display: none" data-clear-style="">
                                       <svg viewBox="0 0 24 24">
                                          <path fill="currentColor" d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"></path>
                                       </svg>
                                    </div>
                                 </div>
                                 <div class="gjs-fields" data-sm-fields="">
                                    <div class="gjs-field gjs-field-integer">
                                       <span class="gjs-input-holder"><input type="text" placeholder="1"></span>
                                       <span class="gjs-field-units"></span>
                                       <div class="gjs-field-arrows" data-arrows="">
                                          <div class="gjs-field-arrow-u" data-arrow-up=""></div>
                                          <div class="gjs-field-arrow-d" data-arrow-down=""></div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                              <div class="gjs-sm-property gjs-sm-select gjs-sm-property__align-self">
                                 <div class="gjs-sm-label" data-sm-label="">
                                    <span class="gjs-sm-icon " title="">
                                    Align self
                                    </span>
                                    <div class="gjs-sm-clear" style="display: none" data-clear-style="">
                                       <svg viewBox="0 0 24 24">
                                          <path fill="currentColor" d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"></path>
                                       </svg>
                                    </div>
                                 </div>
                                 <div class="gjs-fields" data-sm-fields="">
                                    <div class="gjs-field gjs-select">
                                       <span id="gjs-sm-input-holder">
                                          <select>
                                             <option value="auto">auto</option>
                                             <option value="flex-start">flex-start</option>
                                             <option value="flex-end">flex-end</option>
                                             <option value="center">center</option>
                                             <option value="baseline">baseline</option>
                                             <option value="stretch">stretch</option>
                                          </select>
                                       </span>
                                       <div class="gjs-sel-arrow">
                                          <div class="gjs-d-s-arrow"></div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div class="gjs-sm-sector gjs-sm-sector__dimension no-select">
                           <div class="gjs-sm-sector-title" data-sector-title="">
                              <div class="gjs-sm-sector-caret">
                                 <svg viewBox="0 0 24 24">
                                    <path fill="currentColor" d="M7,10L12,15L17,10H7Z"></path>
                                 </svg>
                              </div>
                              <div class="gjs-sm-sector-label">Dimension</div>
                           </div>
                           <div class="gjs-sm-properties" style="display: none;">
                              <div class="gjs-sm-property gjs-sm-number gjs-sm-integer gjs-sm-property__width">
                                 <div class="gjs-sm-label" data-sm-label="">
                                    <span class="gjs-sm-icon " title="">
                                    Width
                                    </span>
                                    <div class="gjs-sm-clear" style="display: none" data-clear-style="">
                                       <svg viewBox="0 0 24 24">
                                          <path fill="currentColor" d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"></path>
                                       </svg>
                                    </div>
                                 </div>
                                 <div class="gjs-fields" data-sm-fields="">
                                    <div class="gjs-field gjs-field-integer">
                                       <span class="gjs-input-holder"><input type="text" placeholder="auto"></span>
                                       <span class="gjs-field-units">
                                          <select class="gjs-input-unit">
                                             <option value="" disabled="" hidden="">-</option>
                                             <option selected="">px</option>
                                             <option>%</option>
                                             <option>em</option>
                                             <option>rem</option>
                                             <option>vh</option>
                                             <option>vw</option>
                                          </select>
                                       </span>
                                       <div class="gjs-field-arrows" data-arrows="">
                                          <div class="gjs-field-arrow-u" data-arrow-up=""></div>
                                          <div class="gjs-field-arrow-d" data-arrow-down=""></div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                              <div class="gjs-sm-property gjs-sm-number gjs-sm-integer gjs-sm-property__height">
                                 <div class="gjs-sm-label" data-sm-label="">
                                    <span class="gjs-sm-icon " title="">
                                    Height
                                    </span>
                                    <div class="gjs-sm-clear" style="display: none" data-clear-style="">
                                       <svg viewBox="0 0 24 24">
                                          <path fill="currentColor" d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"></path>
                                       </svg>
                                    </div>
                                 </div>
                                 <div class="gjs-fields" data-sm-fields="">
                                    <div class="gjs-field gjs-field-integer">
                                       <span class="gjs-input-holder"><input type="text" placeholder="auto"></span>
                                       <span class="gjs-field-units">
                                          <select class="gjs-input-unit">
                                             <option value="" disabled="" hidden="">-</option>
                                             <option selected="">px</option>
                                             <option>%</option>
                                             <option>em</option>
                                             <option>rem</option>
                                             <option>vh</option>
                                             <option>vw</option>
                                          </select>
                                       </span>
                                       <div class="gjs-field-arrows" data-arrows="">
                                          <div class="gjs-field-arrow-u" data-arrow-up=""></div>
                                          <div class="gjs-field-arrow-d" data-arrow-down=""></div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                              <div class="gjs-sm-property gjs-sm-number gjs-sm-integer gjs-sm-property__max-width">
                                 <div class="gjs-sm-label" data-sm-label="">
                                    <span class="gjs-sm-icon " title="">
                                    Max width
                                    </span>
                                    <div class="gjs-sm-clear" style="display: none" data-clear-style="">
                                       <svg viewBox="0 0 24 24">
                                          <path fill="currentColor" d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"></path>
                                       </svg>
                                    </div>
                                 </div>
                                 <div class="gjs-fields" data-sm-fields="">
                                    <div class="gjs-field gjs-field-integer">
                                       <span class="gjs-input-holder"><input type="text" placeholder="auto"></span>
                                       <span class="gjs-field-units">
                                          <select class="gjs-input-unit">
                                             <option value="" disabled="" hidden="">-</option>
                                             <option selected="">px</option>
                                             <option>%</option>
                                             <option>em</option>
                                             <option>rem</option>
                                             <option>vh</option>
                                             <option>vw</option>
                                          </select>
                                       </span>
                                       <div class="gjs-field-arrows" data-arrows="">
                                          <div class="gjs-field-arrow-u" data-arrow-up=""></div>
                                          <div class="gjs-field-arrow-d" data-arrow-down=""></div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                              <div class="gjs-sm-property gjs-sm-number gjs-sm-integer gjs-sm-property__min-height">
                                 <div class="gjs-sm-label" data-sm-label="">
                                    <span class="gjs-sm-icon " title="">
                                    Min height
                                    </span>
                                    <div class="gjs-sm-clear" style="display: none" data-clear-style="">
                                       <svg viewBox="0 0 24 24">
                                          <path fill="currentColor" d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"></path>
                                       </svg>
                                    </div>
                                 </div>
                                 <div class="gjs-fields" data-sm-fields="">
                                    <div class="gjs-field gjs-field-integer">
                                       <span class="gjs-input-holder"><input type="text" placeholder="auto"></span>
                                       <span class="gjs-field-units">
                                          <select class="gjs-input-unit">
                                             <option value="" disabled="" hidden="">-</option>
                                             <option selected="">px</option>
                                             <option>%</option>
                                             <option>em</option>
                                             <option>rem</option>
                                             <option>vh</option>
                                             <option>vw</option>
                                          </select>
                                       </span>
                                       <div class="gjs-field-arrows" data-arrows="">
                                          <div class="gjs-field-arrow-u" data-arrow-up=""></div>
                                          <div class="gjs-field-arrow-d" data-arrow-down=""></div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                              <div class="gjs-sm-property gjs-sm-composite gjs-sm-property__margin gjs-sm-property--full">
                                 <div class="gjs-sm-label" data-sm-label="">
                                    <span class="gjs-sm-icon " title="">
                                    Margin
                                    </span>
                                    <div class="gjs-sm-clear" style="display: none" data-clear-style="">
                                       <svg viewBox="0 0 24 24">
                                          <path fill="currentColor" d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"></path>
                                       </svg>
                                    </div>
                                 </div>
                                 <div class="gjs-fields" data-sm-fields="">
                                    <div class="gjs-sm-field gjs-sm-composite">
                                       <span id="gjs-sm-input-holder">
                                          <div class="gjs-sm-properties">
                                             <div class="gjs-sm-property gjs-sm-number gjs-sm-integer gjs-sm-property__margin-top">
                                                <div class="gjs-sm-label" data-sm-label="">
                                                   <span class="gjs-sm-icon " title="">
                                                   Top
                                                   </span>
                                                   <div class="gjs-sm-clear" style="display: none" data-clear-style="">
                                                      <svg viewBox="0 0 24 24">
                                                         <path fill="currentColor" d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"></path>
                                                      </svg>
                                                   </div>
                                                </div>
                                                <div class="gjs-fields" data-sm-fields="">
                                                   <div class="gjs-field gjs-field-integer">
                                                      <span class="gjs-input-holder"><input type="text" placeholder="0"></span>
                                                      <span class="gjs-field-units">
                                                         <select class="gjs-input-unit">
                                                            <option value="" disabled="" hidden="">-</option>
                                                            <option selected="">px</option>
                                                            <option>%</option>
                                                            <option>em</option>
                                                            <option>rem</option>
                                                            <option>vh</option>
                                                            <option>vw</option>
                                                         </select>
                                                      </span>
                                                      <div class="gjs-field-arrows" data-arrows="">
                                                         <div class="gjs-field-arrow-u" data-arrow-up=""></div>
                                                         <div class="gjs-field-arrow-d" data-arrow-down=""></div>
                                                      </div>
                                                   </div>
                                                </div>
                                             </div>
                                             <div class="gjs-sm-property gjs-sm-number gjs-sm-integer gjs-sm-property__margin-right">
                                                <div class="gjs-sm-label" data-sm-label="">
                                                   <span class="gjs-sm-icon " title="">
                                                   Right
                                                   </span>
                                                   <div class="gjs-sm-clear" style="display: none" data-clear-style="">
                                                      <svg viewBox="0 0 24 24">
                                                         <path fill="currentColor" d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"></path>
                                                      </svg>
                                                   </div>
                                                </div>
                                                <div class="gjs-fields" data-sm-fields="">
                                                   <div class="gjs-field gjs-field-integer">
                                                      <span class="gjs-input-holder"><input type="text" placeholder="0"></span>
                                                      <span class="gjs-field-units">
                                                         <select class="gjs-input-unit">
                                                            <option value="" disabled="" hidden="">-</option>
                                                            <option selected="">px</option>
                                                            <option>%</option>
                                                            <option>em</option>
                                                            <option>rem</option>
                                                            <option>vh</option>
                                                            <option>vw</option>
                                                         </select>
                                                      </span>
                                                      <div class="gjs-field-arrows" data-arrows="">
                                                         <div class="gjs-field-arrow-u" data-arrow-up=""></div>
                                                         <div class="gjs-field-arrow-d" data-arrow-down=""></div>
                                                      </div>
                                                   </div>
                                                </div>
                                             </div>
                                             <div class="gjs-sm-property gjs-sm-number gjs-sm-integer gjs-sm-property__margin-bottom">
                                                <div class="gjs-sm-label" data-sm-label="">
                                                   <span class="gjs-sm-icon " title="">
                                                   Bottom
                                                   </span>
                                                   <div class="gjs-sm-clear" style="display: none" data-clear-style="">
                                                      <svg viewBox="0 0 24 24">
                                                         <path fill="currentColor" d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"></path>
                                                      </svg>
                                                   </div>
                                                </div>
                                                <div class="gjs-fields" data-sm-fields="">
                                                   <div class="gjs-field gjs-field-integer">
                                                      <span class="gjs-input-holder"><input type="text" placeholder="0"></span>
                                                      <span class="gjs-field-units">
                                                         <select class="gjs-input-unit">
                                                            <option value="" disabled="" hidden="">-</option>
                                                            <option selected="">px</option>
                                                            <option>%</option>
                                                            <option>em</option>
                                                            <option>rem</option>
                                                            <option>vh</option>
                                                            <option>vw</option>
                                                         </select>
                                                      </span>
                                                      <div class="gjs-field-arrows" data-arrows="">
                                                         <div class="gjs-field-arrow-u" data-arrow-up=""></div>
                                                         <div class="gjs-field-arrow-d" data-arrow-down=""></div>
                                                      </div>
                                                   </div>
                                                </div>
                                             </div>
                                             <div class="gjs-sm-property gjs-sm-number gjs-sm-integer gjs-sm-property__margin-left">
                                                <div class="gjs-sm-label" data-sm-label="">
                                                   <span class="gjs-sm-icon " title="">
                                                   Left
                                                   </span>
                                                   <div class="gjs-sm-clear" style="display: none" data-clear-style="">
                                                      <svg viewBox="0 0 24 24">
                                                         <path fill="currentColor" d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"></path>
                                                      </svg>
                                                   </div>
                                                </div>
                                                <div class="gjs-fields" data-sm-fields="">
                                                   <div class="gjs-field gjs-field-integer">
                                                      <span class="gjs-input-holder"><input type="text" placeholder="0"></span>
                                                      <span class="gjs-field-units">
                                                         <select class="gjs-input-unit">
                                                            <option value="" disabled="" hidden="">-</option>
                                                            <option selected="">px</option>
                                                            <option>%</option>
                                                            <option>em</option>
                                                            <option>rem</option>
                                                            <option>vh</option>
                                                            <option>vw</option>
                                                         </select>
                                                      </span>
                                                      <div class="gjs-field-arrows" data-arrows="">
                                                         <div class="gjs-field-arrow-u" data-arrow-up=""></div>
                                                         <div class="gjs-field-arrow-d" data-arrow-down=""></div>
                                                      </div>
                                                   </div>
                                                </div>
                                             </div>
                                          </div>
                                       </span>
                                    </div>
                                 </div>
                              </div>
                              <div class="gjs-sm-property gjs-sm-composite gjs-sm-property__padding gjs-sm-property--full">
                                 <div class="gjs-sm-label" data-sm-label="">
                                    <span class="gjs-sm-icon " title="">
                                    Padding
                                    </span>
                                    <div class="gjs-sm-clear" style="display: none" data-clear-style="">
                                       <svg viewBox="0 0 24 24">
                                          <path fill="currentColor" d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"></path>
                                       </svg>
                                    </div>
                                 </div>
                                 <div class="gjs-fields" data-sm-fields="">
                                    <div class="gjs-sm-field gjs-sm-composite">
                                       <span id="gjs-sm-input-holder">
                                          <div class="gjs-sm-properties">
                                             <div class="gjs-sm-property gjs-sm-number gjs-sm-integer gjs-sm-property__padding-top">
                                                <div class="gjs-sm-label" data-sm-label="">
                                                   <span class="gjs-sm-icon " title="">
                                                   Top
                                                   </span>
                                                   <div class="gjs-sm-clear" style="display: none" data-clear-style="">
                                                      <svg viewBox="0 0 24 24">
                                                         <path fill="currentColor" d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"></path>
                                                      </svg>
                                                   </div>
                                                </div>
                                                <div class="gjs-fields" data-sm-fields="">
                                                   <div class="gjs-field gjs-field-integer">
                                                      <span class="gjs-input-holder"><input type="text" placeholder="0"></span>
                                                      <span class="gjs-field-units">
                                                         <select class="gjs-input-unit">
                                                            <option value="" disabled="" hidden="">-</option>
                                                            <option selected="">px</option>
                                                            <option>%</option>
                                                            <option>em</option>
                                                            <option>rem</option>
                                                            <option>vh</option>
                                                            <option>vw</option>
                                                         </select>
                                                      </span>
                                                      <div class="gjs-field-arrows" data-arrows="">
                                                         <div class="gjs-field-arrow-u" data-arrow-up=""></div>
                                                         <div class="gjs-field-arrow-d" data-arrow-down=""></div>
                                                      </div>
                                                   </div>
                                                </div>
                                             </div>
                                             <div class="gjs-sm-property gjs-sm-number gjs-sm-integer gjs-sm-property__padding-right">
                                                <div class="gjs-sm-label" data-sm-label="">
                                                   <span class="gjs-sm-icon " title="">
                                                   Right
                                                   </span>
                                                   <div class="gjs-sm-clear" style="display: none" data-clear-style="">
                                                      <svg viewBox="0 0 24 24">
                                                         <path fill="currentColor" d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"></path>
                                                      </svg>
                                                   </div>
                                                </div>
                                                <div class="gjs-fields" data-sm-fields="">
                                                   <div class="gjs-field gjs-field-integer">
                                                      <span class="gjs-input-holder"><input type="text" placeholder="0"></span>
                                                      <span class="gjs-field-units">
                                                         <select class="gjs-input-unit">
                                                            <option value="" disabled="" hidden="">-</option>
                                                            <option selected="">px</option>
                                                            <option>%</option>
                                                            <option>em</option>
                                                            <option>rem</option>
                                                            <option>vh</option>
                                                            <option>vw</option>
                                                         </select>
                                                      </span>
                                                      <div class="gjs-field-arrows" data-arrows="">
                                                         <div class="gjs-field-arrow-u" data-arrow-up=""></div>
                                                         <div class="gjs-field-arrow-d" data-arrow-down=""></div>
                                                      </div>
                                                   </div>
                                                </div>
                                             </div>
                                             <div class="gjs-sm-property gjs-sm-number gjs-sm-integer gjs-sm-property__padding-bottom">
                                                <div class="gjs-sm-label" data-sm-label="">
                                                   <span class="gjs-sm-icon " title="">
                                                   Bottom
                                                   </span>
                                                   <div class="gjs-sm-clear" style="display: none" data-clear-style="">
                                                      <svg viewBox="0 0 24 24">
                                                         <path fill="currentColor" d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"></path>
                                                      </svg>
                                                   </div>
                                                </div>
                                                <div class="gjs-fields" data-sm-fields="">
                                                   <div class="gjs-field gjs-field-integer">
                                                      <span class="gjs-input-holder"><input type="text" placeholder="0"></span>
                                                      <span class="gjs-field-units">
                                                         <select class="gjs-input-unit">
                                                            <option value="" disabled="" hidden="">-</option>
                                                            <option selected="">px</option>
                                                            <option>%</option>
                                                            <option>em</option>
                                                            <option>rem</option>
                                                            <option>vh</option>
                                                            <option>vw</option>
                                                         </select>
                                                      </span>
                                                      <div class="gjs-field-arrows" data-arrows="">
                                                         <div class="gjs-field-arrow-u" data-arrow-up=""></div>
                                                         <div class="gjs-field-arrow-d" data-arrow-down=""></div>
                                                      </div>
                                                   </div>
                                                </div>
                                             </div>
                                             <div class="gjs-sm-property gjs-sm-number gjs-sm-integer gjs-sm-property__padding-left">
                                                <div class="gjs-sm-label" data-sm-label="">
                                                   <span class="gjs-sm-icon " title="">
                                                   Left
                                                   </span>
                                                   <div class="gjs-sm-clear" style="display: none" data-clear-style="">
                                                      <svg viewBox="0 0 24 24">
                                                         <path fill="currentColor" d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"></path>
                                                      </svg>
                                                   </div>
                                                </div>
                                                <div class="gjs-fields" data-sm-fields="">
                                                   <div class="gjs-field gjs-field-integer">
                                                      <span class="gjs-input-holder"><input type="text" placeholder="0"></span>
                                                      <span class="gjs-field-units">
                                                         <select class="gjs-input-unit">
                                                            <option value="" disabled="" hidden="">-</option>
                                                            <option selected="">px</option>
                                                            <option>%</option>
                                                            <option>em</option>
                                                            <option>rem</option>
                                                            <option>vh</option>
                                                            <option>vw</option>
                                                         </select>
                                                      </span>
                                                      <div class="gjs-field-arrows" data-arrows="">
                                                         <div class="gjs-field-arrow-u" data-arrow-up=""></div>
                                                         <div class="gjs-field-arrow-d" data-arrow-down=""></div>
                                                      </div>
                                                   </div>
                                                </div>
                                             </div>
                                          </div>
                                       </span>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div class="gjs-sm-sector gjs-sm-sector__typography no-select">
                           <div class="gjs-sm-sector-title" data-sector-title="">
                              <div class="gjs-sm-sector-caret">
                                 <svg viewBox="0 0 24 24">
                                    <path fill="currentColor" d="M7,10L12,15L17,10H7Z"></path>
                                 </svg>
                              </div>
                              <div class="gjs-sm-sector-label">Typography</div>
                           </div>
                           <div class="gjs-sm-properties" style="display: none;">
                              <div class="gjs-sm-property gjs-sm-select gjs-sm-property__font-family">
                                 <div class="gjs-sm-label" data-sm-label="">
                                    <span class="gjs-sm-icon " title="">
                                    Font family
                                    </span>
                                    <div class="gjs-sm-clear" style="display: none" data-clear-style="">
                                       <svg viewBox="0 0 24 24">
                                          <path fill="currentColor" d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"></path>
                                       </svg>
                                    </div>
                                 </div>
                                 <div class="gjs-fields" data-sm-fields="">
                                    <div class="gjs-field gjs-select">
                                       <span id="gjs-sm-input-holder">
                                          <select>
                                             <option value="Arial, Helvetica, sans-serif">Arial</option>
                                             <option value="Arial Black, Gadget, sans-serif">Arial Black</option>
                                             <option value="Brush Script MT, sans-serif">Brush Script MT</option>
                                             <option value="Comic Sans MS, cursive, sans-serif">Comic Sans MS</option>
                                             <option value="Courier New, Courier, monospace">Courier New</option>
                                             <option value="Georgia, serif">Georgia</option>
                                             <option value="Helvetica, sans-serif">Helvetica</option>
                                             <option value="Impact, Charcoal, sans-serif">Impact</option>
                                             <option value="Lucida Sans Unicode, Lucida Grande, sans-serif">Lucida Sans Unicode</option>
                                             <option value="Tahoma, Geneva, sans-serif">Tahoma</option>
                                             <option value="Times New Roman, Times, serif">Times New Roman</option>
                                             <option value="Trebuchet MS, Helvetica, sans-serif">Trebuchet MS</option>
                                             <option value="Verdana, Geneva, sans-serif">Verdana</option>
                                          </select>
                                       </span>
                                       <div class="gjs-sel-arrow">
                                          <div class="gjs-d-s-arrow"></div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                              <div class="gjs-sm-property gjs-sm-number gjs-sm-integer gjs-sm-property__font-size">
                                 <div class="gjs-sm-label" data-sm-label="">
                                    <span class="gjs-sm-icon " title="">
                                    Font size
                                    </span>
                                    <div class="gjs-sm-clear" style="display: none" data-clear-style="">
                                       <svg viewBox="0 0 24 24">
                                          <path fill="currentColor" d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"></path>
                                       </svg>
                                    </div>
                                 </div>
                                 <div class="gjs-fields" data-sm-fields="">
                                    <div class="gjs-field gjs-field-integer">
                                       <span class="gjs-input-holder"><input type="text" placeholder="medium"></span>
                                       <span class="gjs-field-units">
                                          <select class="gjs-input-unit">
                                             <option value="" disabled="" hidden="">-</option>
                                             <option selected="">px</option>
                                             <option>%</option>
                                             <option>em</option>
                                             <option>rem</option>
                                             <option>vh</option>
                                             <option>vw</option>
                                          </select>
                                       </span>
                                       <div class="gjs-field-arrows" data-arrows="">
                                          <div class="gjs-field-arrow-u" data-arrow-up=""></div>
                                          <div class="gjs-field-arrow-d" data-arrow-down=""></div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                              <div class="gjs-sm-property gjs-sm-select gjs-sm-property__font-weight">
                                 <div class="gjs-sm-label" data-sm-label="">
                                    <span class="gjs-sm-icon " title="">
                                    Font weight
                                    </span>
                                    <div class="gjs-sm-clear" style="display: none" data-clear-style="">
                                       <svg viewBox="0 0 24 24">
                                          <path fill="currentColor" d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"></path>
                                       </svg>
                                    </div>
                                 </div>
                                 <div class="gjs-fields" data-sm-fields="">
                                    <div class="gjs-field gjs-select">
                                       <span id="gjs-sm-input-holder">
                                          <select>
                                             <option value="100">Thin</option>
                                             <option value="200">Extra-Light</option>
                                             <option value="300">Light</option>
                                             <option value="400">Normal</option>
                                             <option value="500">Medium</option>
                                             <option value="600">Semi-Bold</option>
                                             <option value="700">Bold</option>
                                             <option value="800">Extra-Bold</option>
                                             <option value="900">Ultra-Bold</option>
                                          </select>
                                       </span>
                                       <div class="gjs-sel-arrow">
                                          <div class="gjs-d-s-arrow"></div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                              <div class="gjs-sm-property gjs-sm-number gjs-sm-integer gjs-sm-property__letter-spacing">
                                 <div class="gjs-sm-label" data-sm-label="">
                                    <span class="gjs-sm-icon " title="">
                                    Letter spacing
                                    </span>
                                    <div class="gjs-sm-clear" style="display: none" data-clear-style="">
                                       <svg viewBox="0 0 24 24">
                                          <path fill="currentColor" d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"></path>
                                       </svg>
                                    </div>
                                 </div>
                                 <div class="gjs-fields" data-sm-fields="">
                                    <div class="gjs-field gjs-field-integer">
                                       <span class="gjs-input-holder"><input type="text" placeholder="normal"></span>
                                       <span class="gjs-field-units">
                                          <select class="gjs-input-unit">
                                             <option value="" disabled="" hidden="">-</option>
                                             <option selected="">px</option>
                                             <option>%</option>
                                             <option>em</option>
                                             <option>rem</option>
                                             <option>vh</option>
                                             <option>vw</option>
                                          </select>
                                       </span>
                                       <div class="gjs-field-arrows" data-arrows="">
                                          <div class="gjs-field-arrow-u" data-arrow-up=""></div>
                                          <div class="gjs-field-arrow-d" data-arrow-down=""></div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                              <div class="gjs-sm-property gjs-sm-color gjs-sm-property__color">
                                 <div class="gjs-sm-label" data-sm-label="">
                                    <span class="gjs-sm-icon " title="">
                                    Color
                                    </span>
                                    <div class="gjs-sm-clear" style="display: none" data-clear-style="">
                                       <svg viewBox="0 0 24 24">
                                          <path fill="currentColor" d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"></path>
                                       </svg>
                                    </div>
                                 </div>
                                 <div class="gjs-fields" data-sm-fields="">
                                    <div class="gjs-field gjs-field-color">
                                       <div class="gjs-input-holder"><input type="text" placeholder="black"></div>
                                       <div class="gjs-field-colorp">
                                          <div class="gjs-field-colorp-c" data-colorp-c="">
                                             <div class="gjs-checker-bg"></div>
                                             <div class="gjs-field-color-picker" style=""></div>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                              <div class="gjs-sm-property gjs-sm-number gjs-sm-integer gjs-sm-property__line-height">
                                 <div class="gjs-sm-label" data-sm-label="">
                                    <span class="gjs-sm-icon " title="">
                                    Line height
                                    </span>
                                    <div class="gjs-sm-clear" style="display: none" data-clear-style="">
                                       <svg viewBox="0 0 24 24">
                                          <path fill="currentColor" d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"></path>
                                       </svg>
                                    </div>
                                 </div>
                                 <div class="gjs-fields" data-sm-fields="">
                                    <div class="gjs-field gjs-field-integer">
                                       <span class="gjs-input-holder"><input type="text" placeholder="normal"></span>
                                       <span class="gjs-field-units">
                                          <select class="gjs-input-unit">
                                             <option value="" disabled="" hidden="">-</option>
                                             <option selected="">px</option>
                                             <option>%</option>
                                             <option>em</option>
                                             <option>rem</option>
                                             <option>vh</option>
                                             <option>vw</option>
                                          </select>
                                       </span>
                                       <div class="gjs-field-arrows" data-arrows="">
                                          <div class="gjs-field-arrow-u" data-arrow-up=""></div>
                                          <div class="gjs-field-arrow-d" data-arrow-down=""></div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                              <div class="gjs-sm-property gjs-sm-radio gjs-sm-property__text-align gjs-sm-property--full">
                                 <div class="gjs-sm-label" data-sm-label="">
                                    <span class="gjs-sm-icon " title="">
                                    Text align
                                    </span>
                                    <div class="gjs-sm-clear" style="display: none" data-clear-style="">
                                       <svg viewBox="0 0 24 24">
                                          <path fill="currentColor" d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"></path>
                                       </svg>
                                    </div>
                                 </div>
                                 <div class="gjs-fields" data-sm-fields="">
                                    <div class="gjs-field gjs-field-radio">
                                       <div class="gjs-radio-items">
                                          <div class="gjs-radio-item">
                                             <input type="radio" class="gjs-sm-radio gjs-sm-radio-text-align" id="text-align-left-c441" name="text-align-c441" value="left" checked="">
                                             <label class="gjs-radio-item-label" for="text-align-left-c441">left</label>
                                          </div>
                                          <div class="gjs-radio-item">
                                             <input type="radio" class="gjs-sm-radio gjs-sm-radio-text-align" id="text-align-center-c441" name="text-align-c441" value="center">
                                             <label class="gjs-radio-item-label" for="text-align-center-c441">center</label>
                                          </div>
                                          <div class="gjs-radio-item">
                                             <input type="radio" class="gjs-sm-radio gjs-sm-radio-text-align" id="text-align-right-c441" name="text-align-c441" value="right">
                                             <label class="gjs-radio-item-label" for="text-align-right-c441">right</label>
                                          </div>
                                          <div class="gjs-radio-item">
                                             <input type="radio" class="gjs-sm-radio gjs-sm-radio-text-align" id="text-align-justify-c441" name="text-align-c441" value="justify">
                                             <label class="gjs-radio-item-label" for="text-align-justify-c441">justify</label>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                              <div class="gjs-sm-property gjs-sm-stack gjs-sm-property__text-shadow gjs-sm-property--full">
                                 <div class="gjs-sm-label" data-sm-label="">
                                    <span class="gjs-sm-icon " title="">
                                    Text shadow
                                    </span>
                                    <div class="gjs-sm-clear" style="display: none" data-clear-style="">
                                       <svg viewBox="0 0 24 24">
                                          <path fill="currentColor" d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"></path>
                                       </svg>
                                    </div>
                                 </div>
                                 <div class="gjs-fields" data-sm-fields="">
                                    <div class="gjs-sm-field gjs-sm-stack">
                                       <button type="button" id="gjs-sm-add" data-add-layer="">
                                          <svg viewBox="0 0 24 24">
                                             <path fill="currentColor" d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z"></path>
                                          </svg>
                                       </button>
                                       <div data-layers-wrapper="">
                                          <div class="gjs-sm-layers gjs-field"></div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div class="gjs-sm-sector gjs-sm-sector__decorations no-select">
                           <div class="gjs-sm-sector-title" data-sector-title="">
                              <div class="gjs-sm-sector-caret">
                                 <svg viewBox="0 0 24 24">
                                    <path fill="currentColor" d="M7,10L12,15L17,10H7Z"></path>
                                 </svg>
                              </div>
                              <div class="gjs-sm-sector-label">Decorations</div>
                           </div>
                           <div class="gjs-sm-properties" style="display: none;">
                              <div class="gjs-sm-property gjs-sm-color gjs-sm-property__background-color">
                                 <div class="gjs-sm-label" data-sm-label="">
                                    <span class="gjs-sm-icon " title="">
                                    Background color
                                    </span>
                                    <div class="gjs-sm-clear" style="display: none" data-clear-style="">
                                       <svg viewBox="0 0 24 24">
                                          <path fill="currentColor" d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"></path>
                                       </svg>
                                    </div>
                                 </div>
                                 <div class="gjs-fields" data-sm-fields="">
                                    <div class="gjs-field gjs-field-color">
                                       <div class="gjs-input-holder"><input type="text" placeholder="none"></div>
                                       <div class="gjs-field-colorp">
                                          <div class="gjs-field-colorp-c" data-colorp-c="">
                                             <div class="gjs-checker-bg"></div>
                                             <div class="gjs-field-color-picker"></div>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                              <div class="gjs-sm-property gjs-sm-composite gjs-sm-property__border-radius gjs-sm-property--full">
                                 <div class="gjs-sm-label" data-sm-label="">
                                    <span class="gjs-sm-icon " title="">
                                    Border radius
                                    </span>
                                    <div class="gjs-sm-clear" style="display: none" data-clear-style="">
                                       <svg viewBox="0 0 24 24">
                                          <path fill="currentColor" d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"></path>
                                       </svg>
                                    </div>
                                 </div>
                                 <div class="gjs-fields" data-sm-fields="">
                                    <div class="gjs-sm-field gjs-sm-composite">
                                       <span id="gjs-sm-input-holder">
                                          <div class="gjs-sm-properties">
                                             <div class="gjs-sm-property gjs-sm-number gjs-sm-integer gjs-sm-property__border-top-left-radius">
                                                <div class="gjs-sm-label" data-sm-label="">
                                                   <span class="gjs-sm-icon " title="">
                                                   Top Left
                                                   </span>
                                                   <div class="gjs-sm-clear" style="display: none" data-clear-style="">
                                                      <svg viewBox="0 0 24 24">
                                                         <path fill="currentColor" d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"></path>
                                                      </svg>
                                                   </div>
                                                </div>
                                                <div class="gjs-fields" data-sm-fields="">
                                                   <div class="gjs-field gjs-field-integer">
                                                      <span class="gjs-input-holder"><input type="text" placeholder="0"></span>
                                                      <span class="gjs-field-units">
                                                         <select class="gjs-input-unit">
                                                            <option value="" disabled="" hidden="">-</option>
                                                            <option selected="">px</option>
                                                            <option>%</option>
                                                            <option>em</option>
                                                            <option>rem</option>
                                                            <option>vh</option>
                                                            <option>vw</option>
                                                         </select>
                                                      </span>
                                                      <div class="gjs-field-arrows" data-arrows="">
                                                         <div class="gjs-field-arrow-u" data-arrow-up=""></div>
                                                         <div class="gjs-field-arrow-d" data-arrow-down=""></div>
                                                      </div>
                                                   </div>
                                                </div>
                                             </div>
                                             <div class="gjs-sm-property gjs-sm-number gjs-sm-integer gjs-sm-property__border-top-right-radius">
                                                <div class="gjs-sm-label" data-sm-label="">
                                                   <span class="gjs-sm-icon " title="">
                                                   Top Right
                                                   </span>
                                                   <div class="gjs-sm-clear" style="display: none" data-clear-style="">
                                                      <svg viewBox="0 0 24 24">
                                                         <path fill="currentColor" d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"></path>
                                                      </svg>
                                                   </div>
                                                </div>
                                                <div class="gjs-fields" data-sm-fields="">
                                                   <div class="gjs-field gjs-field-integer">
                                                      <span class="gjs-input-holder"><input type="text" placeholder="0"></span>
                                                      <span class="gjs-field-units">
                                                         <select class="gjs-input-unit">
                                                            <option value="" disabled="" hidden="">-</option>
                                                            <option selected="">px</option>
                                                            <option>%</option>
                                                            <option>em</option>
                                                            <option>rem</option>
                                                            <option>vh</option>
                                                            <option>vw</option>
                                                         </select>
                                                      </span>
                                                      <div class="gjs-field-arrows" data-arrows="">
                                                         <div class="gjs-field-arrow-u" data-arrow-up=""></div>
                                                         <div class="gjs-field-arrow-d" data-arrow-down=""></div>
                                                      </div>
                                                   </div>
                                                </div>
                                             </div>
                                             <div class="gjs-sm-property gjs-sm-number gjs-sm-integer gjs-sm-property__border-bottom-right-radius">
                                                <div class="gjs-sm-label" data-sm-label="">
                                                   <span class="gjs-sm-icon " title="">
                                                   Bottom Right
                                                   </span>
                                                   <div class="gjs-sm-clear" style="display: none" data-clear-style="">
                                                      <svg viewBox="0 0 24 24">
                                                         <path fill="currentColor" d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"></path>
                                                      </svg>
                                                   </div>
                                                </div>
                                                <div class="gjs-fields" data-sm-fields="">
                                                   <div class="gjs-field gjs-field-integer">
                                                      <span class="gjs-input-holder"><input type="text" placeholder="0"></span>
                                                      <span class="gjs-field-units">
                                                         <select class="gjs-input-unit">
                                                            <option value="" disabled="" hidden="">-</option>
                                                            <option selected="">px</option>
                                                            <option>%</option>
                                                            <option>em</option>
                                                            <option>rem</option>
                                                            <option>vh</option>
                                                            <option>vw</option>
                                                         </select>
                                                      </span>
                                                      <div class="gjs-field-arrows" data-arrows="">
                                                         <div class="gjs-field-arrow-u" data-arrow-up=""></div>
                                                         <div class="gjs-field-arrow-d" data-arrow-down=""></div>
                                                      </div>
                                                   </div>
                                                </div>
                                             </div>
                                             <div class="gjs-sm-property gjs-sm-number gjs-sm-integer gjs-sm-property__border-bottom-left-radius">
                                                <div class="gjs-sm-label" data-sm-label="">
                                                   <span class="gjs-sm-icon " title="">
                                                   Bottom Left
                                                   </span>
                                                   <div class="gjs-sm-clear" style="display: none" data-clear-style="">
                                                      <svg viewBox="0 0 24 24">
                                                         <path fill="currentColor" d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"></path>
                                                      </svg>
                                                   </div>
                                                </div>
                                                <div class="gjs-fields" data-sm-fields="">
                                                   <div class="gjs-field gjs-field-integer">
                                                      <span class="gjs-input-holder"><input type="text" placeholder="0"></span>
                                                      <span class="gjs-field-units">
                                                         <select class="gjs-input-unit">
                                                            <option value="" disabled="" hidden="">-</option>
                                                            <option selected="">px</option>
                                                            <option>%</option>
                                                            <option>em</option>
                                                            <option>rem</option>
                                                            <option>vh</option>
                                                            <option>vw</option>
                                                         </select>
                                                      </span>
                                                      <div class="gjs-field-arrows" data-arrows="">
                                                         <div class="gjs-field-arrow-u" data-arrow-up=""></div>
                                                         <div class="gjs-field-arrow-d" data-arrow-down=""></div>
                                                      </div>
                                                   </div>
                                                </div>
                                             </div>
                                          </div>
                                       </span>
                                    </div>
                                 </div>
                              </div>
                              <div class="gjs-sm-property gjs-sm-composite gjs-sm-property__border gjs-sm-property--full">
                                 <div class="gjs-sm-label" data-sm-label="">
                                    <span class="gjs-sm-icon " title="">
                                    Border
                                    </span>
                                    <div class="gjs-sm-clear" style="display: none" data-clear-style="">
                                       <svg viewBox="0 0 24 24">
                                          <path fill="currentColor" d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"></path>
                                       </svg>
                                    </div>
                                 </div>
                                 <div class="gjs-fields" data-sm-fields="">
                                    <div class="gjs-sm-field gjs-sm-composite">
                                       <span id="gjs-sm-input-holder">
                                          <div class="gjs-sm-properties">
                                             <div class="gjs-sm-property gjs-sm-number gjs-sm-integer gjs-sm-property__border-width">
                                                <div class="gjs-sm-label" data-sm-label="">
                                                   <span class="gjs-sm-icon " title="">
                                                   Width
                                                   </span>
                                                   <div class="gjs-sm-clear" style="display: none" data-clear-style="">
                                                      <svg viewBox="0 0 24 24">
                                                         <path fill="currentColor" d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"></path>
                                                      </svg>
                                                   </div>
                                                </div>
                                                <div class="gjs-fields" data-sm-fields="">
                                                   <div class="gjs-field gjs-field-integer">
                                                      <span class="gjs-input-holder"><input type="text" placeholder="0"></span>
                                                      <span class="gjs-field-units">
                                                         <select class="gjs-input-unit">
                                                            <option value="" disabled="" hidden="">-</option>
                                                            <option selected="">px</option>
                                                            <option>em</option>
                                                            <option>rem</option>
                                                            <option>vh</option>
                                                            <option>vw</option>
                                                         </select>
                                                      </span>
                                                      <div class="gjs-field-arrows" data-arrows="">
                                                         <div class="gjs-field-arrow-u" data-arrow-up=""></div>
                                                         <div class="gjs-field-arrow-d" data-arrow-down=""></div>
                                                      </div>
                                                   </div>
                                                </div>
                                             </div>
                                             <div class="gjs-sm-property gjs-sm-select gjs-sm-property__border-style">
                                                <div class="gjs-sm-label" data-sm-label="">
                                                   <span class="gjs-sm-icon " title="">
                                                   Style
                                                   </span>
                                                   <div class="gjs-sm-clear" style="display: none" data-clear-style="">
                                                      <svg viewBox="0 0 24 24">
                                                         <path fill="currentColor" d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"></path>
                                                      </svg>
                                                   </div>
                                                </div>
                                                <div class="gjs-fields" data-sm-fields="">
                                                   <div class="gjs-field gjs-select">
                                                      <span id="gjs-sm-input-holder">
                                                         <select>
                                                            <option value="none">none</option>
                                                            <option value="solid">solid</option>
                                                            <option value="dotted">dotted</option>
                                                            <option value="dashed">dashed</option>
                                                            <option value="double">double</option>
                                                            <option value="groove">groove</option>
                                                            <option value="ridge">ridge</option>
                                                            <option value="inset">inset</option>
                                                            <option value="outset">outset</option>
                                                         </select>
                                                      </span>
                                                      <div class="gjs-sel-arrow">
                                                         <div class="gjs-d-s-arrow"></div>
                                                      </div>
                                                   </div>
                                                </div>
                                             </div>
                                             <div class="gjs-sm-property gjs-sm-color gjs-sm-property__border-color">
                                                <div class="gjs-sm-label" data-sm-label="">
                                                   <span class="gjs-sm-icon " title="">
                                                   Color
                                                   </span>
                                                   <div class="gjs-sm-clear" style="display: none" data-clear-style="">
                                                      <svg viewBox="0 0 24 24">
                                                         <path fill="currentColor" d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"></path>
                                                      </svg>
                                                   </div>
                                                </div>
                                                <div class="gjs-fields" data-sm-fields="">
                                                   <div class="gjs-field gjs-field-color">
                                                      <div class="gjs-input-holder"><input type="text" placeholder="black"></div>
                                                      <div class="gjs-field-colorp">
                                                         <div class="gjs-field-colorp-c" data-colorp-c="">
                                                            <div class="gjs-checker-bg"></div>
                                                            <div class="gjs-field-color-picker" style=""></div>
                                                         </div>
                                                      </div>
                                                   </div>
                                                </div>
                                             </div>
                                          </div>
                                       </span>
                                    </div>
                                 </div>
                              </div>
                              <div class="gjs-sm-property gjs-sm-stack gjs-sm-property__box-shadow gjs-sm-property--full">
                                 <div class="gjs-sm-label" data-sm-label="">
                                    <span class="gjs-sm-icon " title="">
                                    Box shadow
                                    </span>
                                    <div class="gjs-sm-clear" style="display: none" data-clear-style="">
                                       <svg viewBox="0 0 24 24">
                                          <path fill="currentColor" d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"></path>
                                       </svg>
                                    </div>
                                 </div>
                                 <div class="gjs-fields" data-sm-fields="">
                                    <div class="gjs-sm-field gjs-sm-stack">
                                       <button type="button" id="gjs-sm-add" data-add-layer="">
                                          <svg viewBox="0 0 24 24">
                                             <path fill="currentColor" d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z"></path>
                                          </svg>
                                       </button>
                                       <div data-layers-wrapper="">
                                          <div class="gjs-sm-layers gjs-field"></div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                              <div class="gjs-sm-property gjs-sm-stack gjs-sm-property__background gjs-sm-property--full">
                                 <div class="gjs-sm-label" data-sm-label="">
                                    <span class="gjs-sm-icon " title="">
                                    Background
                                    </span>
                                    <div class="gjs-sm-clear" style="display: none" data-clear-style="">
                                       <svg viewBox="0 0 24 24">
                                          <path fill="currentColor" d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"></path>
                                       </svg>
                                    </div>
                                 </div>
                                 <div class="gjs-fields" data-sm-fields="">
                                    <div class="gjs-sm-field gjs-sm-stack">
                                       <button type="button" id="gjs-sm-add" data-add-layer="">
                                          <svg viewBox="0 0 24 24">
                                             <path fill="currentColor" d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z"></path>
                                          </svg>
                                       </button>
                                       <div data-layers-wrapper="">
                                          <div class="gjs-sm-layers gjs-field"></div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div class="gjs-sm-sector gjs-sm-sector__extra no-select">
                           <div class="gjs-sm-sector-title" data-sector-title="">
                              <div class="gjs-sm-sector-caret">
                                 <svg viewBox="0 0 24 24">
                                    <path fill="currentColor" d="M7,10L12,15L17,10H7Z"></path>
                                 </svg>
                              </div>
                              <div class="gjs-sm-sector-label">Extra</div>
                           </div>
                           <div class="gjs-sm-properties" style="display: none;">
                              <div class="gjs-sm-property gjs-sm-slider gjs-sm-property__opacity">
                                 <div class="gjs-sm-label" data-sm-label="">
                                    <span class="gjs-sm-icon " title="">
                                    Opacity
                                    </span>
                                    <div class="gjs-sm-clear" style="display: none" data-clear-style="">
                                       <svg viewBox="0 0 24 24">
                                          <path fill="currentColor" d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"></path>
                                       </svg>
                                    </div>
                                 </div>
                                 <div class="gjs-fields" data-sm-fields="">
                                    <div class="gjs-field gjs-field-range">
                                       <input type="range" min="0" max="1" step="0.01">
                                    </div>
                                    <div class="gjs-field gjs-field-integer">
                                       <span class="gjs-input-holder"><input type="text" placeholder="1"></span>
                                       <span class="gjs-field-units"></span>
                                       <div class="gjs-field-arrows" data-arrows="">
                                          <div class="gjs-field-arrow-u" data-arrow-up=""></div>
                                          <div class="gjs-field-arrow-d" data-arrow-down=""></div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                              <div class="gjs-sm-property gjs-sm-stack gjs-sm-property__transition gjs-sm-property--full">
                                 <div class="gjs-sm-label" data-sm-label="">
                                    <span class="gjs-sm-icon " title="">
                                    Transition
                                    </span>
                                    <div class="gjs-sm-clear" style="display: none" data-clear-style="">
                                       <svg viewBox="0 0 24 24">
                                          <path fill="currentColor" d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"></path>
                                       </svg>
                                    </div>
                                 </div>
                                 <div class="gjs-fields" data-sm-fields="">
                                    <div class="gjs-sm-field gjs-sm-stack">
                                       <button type="button" id="gjs-sm-add" data-add-layer="">
                                          <svg viewBox="0 0 24 24">
                                             <path fill="currentColor" d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z"></path>
                                          </svg>
                                       </button>
                                       <div data-layers-wrapper="">
                                          <div class="gjs-sm-layers gjs-field"></div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div class="gjs-sm-header" style="display: none;">Select an element before using Style Manager</div>
               </div>
               <div style="display: block;">
                  <div class="gjs-blocks-cs gjs-one-bg gjs-two-color">
                     <div class="gjs-block-categories">
                        <div class="gjs-block-category gjs-open">
                           <div class="gjs-title">
                              <i class="gjs-caret-icon fa fa-caret-down"></i>
                              Basic
                           </div>
                           <div class="gjs-blocks-c">
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
         <div class="cv-canvas" style="display: none;">
            <div class="cv-canvas__frames" data-frames="">
               <div class="undefinedframes">
                  <div class="frame-wrapper" style="left: 0px; top: 0px;">
                     <div class="frame-wrapper__top gjs-two-color" data-frame-top="">
                        <div class="frame-wrapper__name" data-action-move="">
                        </div>
                        <div class="frame-wrapper__top-r">
                           <div class="frame-wrapper__icon" data-action-remove="" style="display: none">
                              <svg viewBox="0 0 24 24">
                                 <path d="M19 4h-3.5l-1-1h-5l-1 1H5v2h14M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12z"></path>
                              </svg>
                           </div>
                        </div>
                     </div>
                     <div class="frame-wrapper__right" data-frame-right=""></div>
                     <div class="frame-wrapper__left" data-frame-left=""></div>
                     <div class="frame-wrapper__bottom" data-frame-bottom=""></div>
                     <iframe allowfullscreen="allowfullscreen" data-frame-el="true" class="frame"></iframe>
                  </div>
               </div>
            </div>
            <div id="cv-tools" class="cv-canvas__tools" data-tools="">
               <div class="tools tools-gl" style="pointer-events:none">
                  <div class="placeholder">
                     <div class="placeholder-int"></div>
                  </div>
               </div>
               <div id="tools" style="pointer-events:none">
                  <div class="badge"></div>
                  <div class="ghost"></div>
                  <div class="toolbar" style="pointer-events:all"></div>
                  <div class="resizer"></div>
                  <div class="offset-v"></div>
                  <div class="offset-fixed-v"></div>
               </div>
               <div class="tools" style="pointer-events:none; display: none">
                  <div class="highlighter" data-hl=""></div>
                  <div class="badge" data-badge=""></div>
                  <div class="placeholder">
                     <div class="placeholder-int"></div>
                  </div>
                  <div class="ghost"></div>
                  <div class="toolbar" style="pointer-events:all"></div>
                  <div class="resizer"></div>
                  <div class="offset-v" data-offset="">
                     <div class="gjs-marginName" data-offset-m="">
                        <div class="gjs-margin-v-el gjs-margin-v-top" data-offset-m-t=""></div>
                        <div class="gjs-margin-v-el gjs-margin-v-bottom" data-offset-m-b=""></div>
                        <div class="gjs-margin-v-el gjs-margin-v-left" data-offset-m-l=""></div>
                        <div class="gjs-margin-v-el gjs-margin-v-right" data-offset-m-r=""></div>
                     </div>
                     <div class="gjs-paddingName" data-offset-m="">
                        <div class="gjs-padding-v-el gjs-padding-v-top" data-offset-p-t=""></div>
                        <div class="gjs-padding-v-el gjs-padding-v-bottom" data-offset-p-b=""></div>
                        <div class="gjs-padding-v-el gjs-padding-v-left" data-offset-p-l=""></div>
                        <div class="gjs-padding-v-el gjs-padding-v-right" data-offset-p-r=""></div>
                     </div>
                  </div>
                  <div class="offset-fixed-v"></div>
               </div>
            </div>
         </div>
      </div>
      <div class="gjs-mdl-container" style="display: none;">
         <div class="gjs-mdl-dialog gjs-one-bg gjs-two-color">
            <div class="gjs-mdl-header">
               <div class="gjs-mdl-title"></div>
               <div class="gjs-mdl-btn-close" data-close-modal="">⨯</div>
            </div>
            <div class="gjs-mdl-content">
               <div id="gjs-mdl-c"></div>
               <div style="clear:both"></div>
            </div>
         </div>
         <div class="gjs-mdl-collector" style="display: none"></div>
      </div>
      <div class="sp-container sp-hidden sp-light sp-input-disabled sp-alpha-enabled sp-palette-buttons-disabled sp-initial-disabled gjs-one-bg gjs-two-color">
         <div class="sp-palette-container">
            <div class="sp-palette sp-thumb sp-cf">
               <div class="sp-cf sp-palette-row sp-palette-row-0"></div>
               <div class="sp-cf sp-palette-row sp-palette-row-selection"><span title="rgb(0, 0, 0)" data-color="rgb(0, 0, 0)" class="sp-thumb-el sp-thumb-dark sp-thumb-active"><span class="sp-thumb-inner" style="background-color:rgb(0, 0, 0);"></span></span></div>
            </div>
            <div class="sp-palette-button-container sp-cf"><button type="button" class="sp-palette-toggle">less</button></div>
         </div>
         <div class="sp-picker-container">
            <div class="sp-top sp-cf">
               <div class="sp-fill"></div>
               <div class="sp-top-inner">
                  <div class="sp-color" style="background-color: rgb(255, 0, 0);">
                     <div class="sp-sat">
                        <div class="sp-val">
                           <div class="sp-dragger" style="display: block; top: 0px; left: 0px;"></div>
                        </div>
                     </div>
                  </div>
                  <div class="sp-clear sp-clear-display" title="Clear Color Selection" style="display: none;"></div>
                  <div class="sp-hue">
                     <div class="sp-slider" style="display: block; top: 0px;"></div>
                  </div>
               </div>
               <div class="sp-alpha">
                  <div class="sp-alpha-inner" style="background: linear-gradient(to right, rgba(0, 0, 0, 0), rgb(0, 0, 0));">
                     <div class="sp-alpha-handle" style="display: block; left: 0px;"></div>
                  </div>
               </div>
            </div>
            <div class="sp-input-container sp-cf"><input class="sp-input" type="text" spellcheck="false"></div>
            <div class="sp-initial sp-thumb sp-cf"></div>
            <div class="sp-button-container sp-cf"><a class="sp-cancel" href="#">⨯</a><button type="button" class="sp-choose">Ok</button></div>
         </div>
      </div>
      <div class="sp-container sp-hidden sp-light sp-input-disabled sp-alpha-enabled sp-palette-buttons-disabled sp-initial-disabled gjs-one-bg gjs-two-color">
         <div class="sp-palette-container">
            <div class="sp-palette sp-thumb sp-cf">
               <div class="sp-cf sp-palette-row sp-palette-row-0"></div>
               <div class="sp-cf sp-palette-row sp-palette-row-selection"><span title="rgb(0, 0, 0)" data-color="rgb(0, 0, 0)" class="sp-thumb-el sp-thumb-dark sp-thumb-active"><span class="sp-thumb-inner" style="background-color:rgb(0, 0, 0);"></span></span></div>
            </div>
            <div class="sp-palette-button-container sp-cf"><button type="button" class="sp-palette-toggle">less</button></div>
         </div>
         <div class="sp-picker-container">
            <div class="sp-top sp-cf">
               <div class="sp-fill"></div>
               <div class="sp-top-inner">
                  <div class="sp-color" style="background-color: rgb(255, 0, 0);">
                     <div class="sp-sat">
                        <div class="sp-val">
                           <div class="sp-dragger" style="display: block; top: 0px; left: 0px;"></div>
                        </div>
                     </div>
                  </div>
                  <div class="sp-clear sp-clear-display" title="Clear Color Selection" style="display: none;"></div>
                  <div class="sp-hue">
                     <div class="sp-slider" style="display: block; top: 0px;"></div>
                  </div>
               </div>
               <div class="sp-alpha">
                  <div class="sp-alpha-inner" style="background: linear-gradient(to right, rgba(0, 0, 0, 0), rgb(0, 0, 0));">
                     <div class="sp-alpha-handle" style="display: block; left: 0px;"></div>
                  </div>
               </div>
            </div>
            <div class="sp-input-container sp-cf"><input class="sp-input" type="text" spellcheck="false"></div>
            <div class="sp-initial sp-thumb sp-cf"></div>
            <div class="sp-button-container sp-cf"><a class="sp-cancel" href="#">⨯</a><button type="button" class="sp-choose">Ok</button></div>
         </div>
      </div>
      <div class="sp-container sp-hidden sp-light sp-input-disabled sp-alpha-enabled sp-palette-buttons-disabled sp-initial-disabled gjs-one-bg gjs-two-color">
         <div class="sp-palette-container">
            <div class="sp-palette sp-thumb sp-cf">
               <div class="sp-cf sp-palette-row sp-palette-row-0"></div>
               <div class="sp-cf sp-palette-row sp-palette-row-selection"><span title="rgb(0, 0, 0)" data-color="rgb(0, 0, 0)" class="sp-thumb-el sp-thumb-dark sp-thumb-active"><span class="sp-thumb-inner" style="background-color:rgb(0, 0, 0);"></span></span></div>
            </div>
            <div class="sp-palette-button-container sp-cf"><button type="button" class="sp-palette-toggle">less</button></div>
         </div>
         <div class="sp-picker-container">
            <div class="sp-top sp-cf">
               <div class="sp-fill"></div>
               <div class="sp-top-inner">
                  <div class="sp-color" style="background-color: rgb(255, 0, 0);">
                     <div class="sp-sat">
                        <div class="sp-val">
                           <div class="sp-dragger" style="display: block; top: 0px; left: 0px;"></div>
                        </div>
                     </div>
                  </div>
                  <div class="sp-clear sp-clear-display" title="Clear Color Selection" style="display: none;"></div>
                  <div class="sp-hue">
                     <div class="sp-slider" style="display: block; top: 0px;"></div>
                  </div>
               </div>
               <div class="sp-alpha">
                  <div class="sp-alpha-inner" style="background: linear-gradient(to right, rgba(0, 0, 0, 0), rgb(0, 0, 0));">
                     <div class="sp-alpha-handle" style="display: block; left: 0px;"></div>
                  </div>
               </div>
            </div>
            <div class="sp-input-container sp-cf"><input class="sp-input" type="text" spellcheck="false"></div>
            <div class="sp-initial sp-thumb sp-cf"></div>
            <div class="sp-button-container sp-cf"><a class="sp-cancel" href="#">⨯</a><button type="button" class="sp-choose">Ok</button></div>
         </div>
      </div>
      <div class="sp-container sp-hidden sp-light sp-input-disabled sp-alpha-enabled sp-palette-buttons-disabled sp-initial-disabled gjs-one-bg gjs-two-color">
         <div class="sp-palette-container">
            <div class="sp-palette sp-thumb sp-cf">
               <div class="sp-cf sp-palette-row sp-palette-row-0"></div>
               <div class="sp-cf sp-palette-row sp-palette-row-selection"><span title="rgb(0, 0, 0)" data-color="rgb(0, 0, 0)" class="sp-thumb-el sp-thumb-dark sp-thumb-active"><span class="sp-thumb-inner" style="background-color:rgb(0, 0, 0);"></span></span></div>
            </div>
            <div class="sp-palette-button-container sp-cf"><button type="button" class="sp-palette-toggle">less</button></div>
         </div>
         <div class="sp-picker-container">
            <div class="sp-top sp-cf">
               <div class="sp-fill"></div>
               <div class="sp-top-inner">
                  <div class="sp-color" style="background-color: rgb(255, 0, 0);">
                     <div class="sp-sat">
                        <div class="sp-val">
                           <div class="sp-dragger" style="display: block; top: 0px; left: 0px;"></div>
                        </div>
                     </div>
                  </div>
                  <div class="sp-clear sp-clear-display" title="Clear Color Selection" style="display: none;"></div>
                  <div class="sp-hue">
                     <div class="sp-slider" style="display: block; top: 0px;"></div>
                  </div>
               </div>
               <div class="sp-alpha">
                  <div class="sp-alpha-inner" style="background: linear-gradient(to right, rgba(0, 0, 0, 0), rgb(0, 0, 0));">
                     <div class="sp-alpha-handle" style="display: block; left: 0px;"></div>
                  </div>
               </div>
            </div>
            <div class="sp-input-container sp-cf"><input class="sp-input" type="text" spellcheck="false"></div>
            <div class="sp-initial sp-thumb sp-cf"></div>
            <div class="sp-button-container sp-cf"><a class="sp-cancel" href="#">⨯</a><button type="button" class="sp-choose">Ok</button></div>
         </div>
      </div>
      <div class="sp-container sp-hidden sp-light sp-input-disabled sp-alpha-enabled sp-palette-buttons-disabled sp-initial-disabled gjs-one-bg gjs-two-color">
         <div class="sp-palette-container">
            <div class="sp-palette sp-thumb sp-cf">
               <div class="sp-cf sp-palette-row sp-palette-row-0"></div>
               <div class="sp-cf sp-palette-row sp-palette-row-selection"><span title="rgb(0, 0, 0)" data-color="rgb(0, 0, 0)" class="sp-thumb-el sp-thumb-dark sp-thumb-active"><span class="sp-thumb-inner" style="background-color:rgb(0, 0, 0);"></span></span></div>
            </div>
            <div class="sp-palette-button-container sp-cf"><button type="button" class="sp-palette-toggle">less</button></div>
         </div>
         <div class="sp-picker-container">
            <div class="sp-top sp-cf">
               <div class="sp-fill"></div>
               <div class="sp-top-inner">
                  <div class="sp-color" style="background-color: rgb(255, 0, 0);">
                     <div class="sp-sat">
                        <div class="sp-val">
                           <div class="sp-dragger" style="display: block; top: 0px; left: 0px;"></div>
                        </div>
                     </div>
                  </div>
                  <div class="sp-clear sp-clear-display" title="Clear Color Selection" style="display: none;"></div>
                  <div class="sp-hue">
                     <div class="sp-slider" style="display: block; top: 0px;"></div>
                  </div>
               </div>
               <div class="sp-alpha">
                  <div class="sp-alpha-inner" style="background: linear-gradient(to right, rgba(0, 0, 0, 0), rgb(0, 0, 0));">
                     <div class="sp-alpha-handle" style="display: block; left: 0px;"></div>
                  </div>
               </div>
            </div>
            <div class="sp-input-container sp-cf"><input class="sp-input" type="text" spellcheck="false"></div>
            <div class="sp-initial sp-thumb sp-cf"></div>
            <div class="sp-button-container sp-cf"><a class="sp-cancel" href="#">⨯</a><button type="button" class="sp-choose">Ok</button></div>
         </div>
      </div>
      <div class="sp-container sp-hidden sp-light sp-input-disabled sp-alpha-enabled sp-palette-buttons-disabled sp-initial-disabled gjs-one-bg gjs-two-color">
         <div class="sp-palette-container">
            <div class="sp-palette sp-thumb sp-cf">
               <div class="sp-cf sp-palette-row sp-palette-row-0"></div>
               <div class="sp-cf sp-palette-row sp-palette-row-selection"><span title="rgb(0, 0, 0)" data-color="rgb(0, 0, 0)" class="sp-thumb-el sp-thumb-dark sp-thumb-active"><span class="sp-thumb-inner" style="background-color:rgb(0, 0, 0);"></span></span></div>
            </div>
            <div class="sp-palette-button-container sp-cf"><button type="button" class="sp-palette-toggle">less</button></div>
         </div>
         <div class="sp-picker-container">
            <div class="sp-top sp-cf">
               <div class="sp-fill"></div>
               <div class="sp-top-inner">
                  <div class="sp-color" style="background-color: rgb(255, 0, 0);">
                     <div class="sp-sat">
                        <div class="sp-val">
                           <div class="sp-dragger" style="display: block; top: 0px; left: 0px;"></div>
                        </div>
                     </div>
                  </div>
                  <div class="sp-clear sp-clear-display" title="Clear Color Selection" style="display: none;"></div>
                  <div class="sp-hue">
                     <div class="sp-slider" style="display: block; top: 0px;"></div>
                  </div>
               </div>
               <div class="sp-alpha">
                  <div class="sp-alpha-inner" style="background: linear-gradient(to right, rgba(0, 0, 0, 0), rgb(0, 0, 0));">
                     <div class="sp-alpha-handle" style="display: block; left: 0px;"></div>
                  </div>
               </div>
            </div>
            <div class="sp-input-container sp-cf"><input class="sp-input" type="text" spellcheck="false"></div>
            <div class="sp-initial sp-thumb sp-cf"></div>
            <div class="sp-button-container sp-cf"><a class="sp-cancel" href="#">⨯</a><button type="button" class="sp-choose">Ok</button></div>
         </div>
      </div>
      <div class="sp-container sp-hidden sp-light sp-input-disabled sp-alpha-enabled sp-palette-buttons-disabled sp-initial-disabled gjs-one-bg gjs-two-color">
         <div class="sp-palette-container">
            <div class="sp-palette sp-thumb sp-cf">
               <div class="sp-cf sp-palette-row sp-palette-row-0"></div>
               <div class="sp-cf sp-palette-row sp-palette-row-selection"><span title="rgb(0, 0, 0)" data-color="rgb(0, 0, 0)" class="sp-thumb-el sp-thumb-dark sp-thumb-active"><span class="sp-thumb-inner" style="background-color:rgb(0, 0, 0);"></span></span></div>
            </div>
            <div class="sp-palette-button-container sp-cf"><button type="button" class="sp-palette-toggle">less</button></div>
         </div>
         <div class="sp-picker-container">
            <div class="sp-top sp-cf">
               <div class="sp-fill"></div>
               <div class="sp-top-inner">
                  <div class="sp-color" style="background-color: rgb(255, 0, 0);">
                     <div class="sp-sat">
                        <div class="sp-val">
                           <div class="sp-dragger" style="display: block; top: 0px; left: 0px;"></div>
                        </div>
                     </div>
                  </div>
                  <div class="sp-clear sp-clear-display" title="Clear Color Selection" style="display: none;"></div>
                  <div class="sp-hue">
                     <div class="sp-slider" style="display: block; top: 0px;"></div>
                  </div>
               </div>
               <div class="sp-alpha">
                  <div class="sp-alpha-inner" style="background: linear-gradient(to right, rgba(0, 0, 0, 0), rgb(0, 0, 0));">
                     <div class="sp-alpha-handle" style="display: block; left: 0px;"></div>
                  </div>
               </div>
            </div>
            <div class="sp-input-container sp-cf"><input class="sp-input" type="text" spellcheck="false"></div>
            <div class="sp-initial sp-thumb sp-cf"></div>
            <div class="sp-button-container sp-cf"><a class="sp-cancel" href="#">⨯</a><button type="button" class="sp-choose">Ok</button></div>
         </div>
      </div>
      <div class="sp-container sp-hidden sp-light sp-input-disabled sp-alpha-enabled sp-palette-buttons-disabled sp-initial-disabled gjs-one-bg gjs-two-color">
         <div class="sp-palette-container">
            <div class="sp-palette sp-thumb sp-cf">
               <div class="sp-cf sp-palette-row sp-palette-row-0"></div>
               <div class="sp-cf sp-palette-row sp-palette-row-selection"><span title="rgb(0, 0, 0)" data-color="rgb(0, 0, 0)" class="sp-thumb-el sp-thumb-dark sp-thumb-active"><span class="sp-thumb-inner" style="background-color:rgb(0, 0, 0);"></span></span></div>
            </div>
            <div class="sp-palette-button-container sp-cf"><button type="button" class="sp-palette-toggle">less</button></div>
         </div>
         <div class="sp-picker-container">
            <div class="sp-top sp-cf">
               <div class="sp-fill"></div>
               <div class="sp-top-inner">
                  <div class="sp-color" style="background-color: rgb(255, 0, 0);">
                     <div class="sp-sat">
                        <div class="sp-val">
                           <div class="sp-dragger" style="display: block; top: 0px; left: 0px;"></div>
                        </div>
                     </div>
                  </div>
                  <div class="sp-clear sp-clear-display" title="Clear Color Selection" style="display: none;"></div>
                  <div class="sp-hue">
                     <div class="sp-slider" style="display: block; top: 0px;"></div>
                  </div>
               </div>
               <div class="sp-alpha">
                  <div class="sp-alpha-inner" style="background: linear-gradient(to right, rgba(0, 0, 0, 0), rgb(0, 0, 0));">
                     <div class="sp-alpha-handle" style="display: block; left: 0px;"></div>
                  </div>
               </div>
            </div>
            <div class="sp-input-container sp-cf"><input class="sp-input" type="text" spellcheck="false"></div>
            <div class="sp-initial sp-thumb sp-cf"></div>
            <div class="sp-button-container sp-cf"><a class="sp-cancel" href="#">⨯</a><button type="button" class="sp-choose">Ok</button></div>
         </div>
      </div>
      <div class="sp-container sp-hidden sp-light sp-input-disabled sp-alpha-enabled sp-palette-buttons-disabled sp-initial-disabled gjs-one-bg gjs-two-color">
         <div class="sp-palette-container">
            <div class="sp-palette sp-thumb sp-cf">
               <div class="sp-cf sp-palette-row sp-palette-row-0"></div>
               <div class="sp-cf sp-palette-row sp-palette-row-selection"><span title="rgb(0, 0, 0)" data-color="rgb(0, 0, 0)" class="sp-thumb-el sp-thumb-dark sp-thumb-active"><span class="sp-thumb-inner" style="background-color:rgb(0, 0, 0);"></span></span></div>
            </div>
            <div class="sp-palette-button-container sp-cf"><button type="button" class="sp-palette-toggle">less</button></div>
         </div>
         <div class="sp-picker-container">
            <div class="sp-top sp-cf">
               <div class="sp-fill"></div>
               <div class="sp-top-inner">
                  <div class="sp-color" style="background-color: rgb(255, 0, 0);">
                     <div class="sp-sat">
                        <div class="sp-val">
                           <div class="sp-dragger" style="display: block; top: 0px; left: 0px;"></div>
                        </div>
                     </div>
                  </div>
                  <div class="sp-clear sp-clear-display" title="Clear Color Selection" style="display: none;"></div>
                  <div class="sp-hue">
                     <div class="sp-slider" style="display: block; top: 0px;"></div>
                  </div>
               </div>
               <div class="sp-alpha">
                  <div class="sp-alpha-inner" style="background: linear-gradient(to right, rgba(0, 0, 0, 0), rgb(0, 0, 0));">
                     <div class="sp-alpha-handle" style="display: block; left: 0px;"></div>
                  </div>
               </div>
            </div>
            <div class="sp-input-container sp-cf"><input class="sp-input" type="text" spellcheck="false"></div>
            <div class="sp-initial sp-thumb sp-cf"></div>
            <div class="sp-button-container sp-cf"><a class="sp-cancel" href="#">⨯</a><button type="button" class="sp-choose">Ok</button></div>
         </div>
      </div>
      <div class="sp-container sp-hidden sp-light sp-input-disabled sp-alpha-enabled sp-palette-buttons-disabled sp-initial-disabled gjs-one-bg gjs-two-color">
         <div class="sp-palette-container">
            <div class="sp-palette sp-thumb sp-cf">
               <div class="sp-cf sp-palette-row sp-palette-row-0"></div>
               <div class="sp-cf sp-palette-row sp-palette-row-selection"><span title="rgb(0, 0, 0)" data-color="rgb(0, 0, 0)" class="sp-thumb-el sp-thumb-dark sp-thumb-active"><span class="sp-thumb-inner" style="background-color:rgb(0, 0, 0);"></span></span></div>
            </div>
            <div class="sp-palette-button-container sp-cf"><button type="button" class="sp-palette-toggle">less</button></div>
         </div>
         <div class="sp-picker-container">
            <div class="sp-top sp-cf">
               <div class="sp-fill"></div>
               <div class="sp-top-inner">
                  <div class="sp-color" style="background-color: rgb(255, 0, 0);">
                     <div class="sp-sat">
                        <div class="sp-val">
                           <div class="sp-dragger" style="display: block; top: 0px; left: 0px;"></div>
                        </div>
                     </div>
                  </div>
                  <div class="sp-clear sp-clear-display" title="Clear Color Selection" style="display: none;"></div>
                  <div class="sp-hue">
                     <div class="sp-slider" style="display: block; top: 0px;"></div>
                  </div>
               </div>
               <div class="sp-alpha">
                  <div class="sp-alpha-inner" style="background: linear-gradient(to right, rgba(0, 0, 0, 0), rgb(0, 0, 0));">
                     <div class="sp-alpha-handle" style="display: block; left: 0px;"></div>
                  </div>
               </div>
            </div>
            <div class="sp-input-container sp-cf"><input class="sp-input" type="text" spellcheck="false"></div>
            <div class="sp-initial sp-thumb sp-cf"></div>
            <div class="sp-button-container sp-cf"><a class="sp-cancel" href="#">⨯</a><button type="button" class="sp-choose">Ok</button></div>
         </div>
      </div>
   </div>
</div>
</template>

<script>
import { ref, getCurrentInstance } from "vue";
import layoutLoader from "./pageBuilder/dep/layoutLoader";
import RenderToIFrame from "../components/RenderToIFrame";
import ComponentWrapper from '../components/ComponentWrapper'

export default {
  name: "LayoutDesigner",
  components: {
    RenderToIFrame,
    ComponentWrapper
  },
  setup() {
     // load the page layout
     let layout = layoutLoader.loadLayout()

     const { appContext } = getCurrentInstance()

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
      appContext
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
</style>

<style scoped>
@import "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
</style> 
