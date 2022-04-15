<template>
  <div class="container">
    <div id="gjs"></div>
  </div>
</template>

<script>
import "grapesjs/dist/css/grapes.min.css";
import "grapesjs-preset-webpage/dist/grapesjs-preset-webpage.min.css";
import grapesjs from "grapesjs";
import grapesjsPreset from "grapesjs-preset-webpage";
import { createApp } from "vue";
import Button from 'primevue/button';

// My plugins

import autocompletePlugin from "../plugins/auto-complete/autocomplete";

export default {
  name: "LayoutBuilder",
  props: {
    msg: String,
  },
  mounted() {
    // grapesjs equals the grapesjs from the first require line
    const editor = grapesjs.init({
      container: "#gjs",
      msg: "going deep",
      plugins: ["gjs-mjml", grapesjsPreset, autocompletePlugin],
      pluginsOpts: {
        [autocompletePlugin]: {
          customField: "customValue",
          vue: 345,
        },
      },
    });

    editor.on("component:add", function (model) {

      console.log('The element:')
      console.log(model);

      console.log('The element Id:')

      const elemId =model.attributes.attributes.id

      console.log(elemId);      

      var ComponentApp = createApp(Button)

      console.log('the button app:')
      console.log(ComponentApp)
      
      // inserting to dom      
      if (!model)
        return

      // check if is on the Dom
      const gjsframes = document.getElementsByClassName('gjs-frame')

      if (!gjsframes || gjsframes.length < 1) {
        console.log('ERROR: Element iframe not on the Dom!!')
        return;
      }

      const iframe = gjsframes[0]

      const contentWindow = iframe.contentWindow

      if (!contentWindow) {
        console.log('ERROR: ContentWindow!')
        return;
      }

      const editorDocument = contentWindow.document

      console.log('editor document')
      console.log(editorDocument)
      
      if (!editorDocument) {
        console.log('ERROR: iframe.contentWindow.document!')
        return;
      }

      const domEl = editorDocument.getElementById(elemId)
      
      setTimeout(() => {
        if(!domEl) {
          console.log('ERROR: Element not yet on the Dom!!')
          return;
        }
        
        ComponentApp.mount(domEl)
      }, 0);

      // document.body.appendChild(ComponentApp)      

      // inserting to dom
      // const wrapper = document.createElement("div")
      // ComponentApp.mount(wrapper)
      // document.body.appendChild(wrapper)      
     });
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped src="grapesjs/dist/css/grapes.min.css">
/* global styles */
</style>
