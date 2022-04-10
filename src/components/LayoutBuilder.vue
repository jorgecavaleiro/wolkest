<template>
  <div class="container">
    <div id="gjs">
    </div>
  </div>
</template>

<script>

import 'grapesjs/dist/css/grapes.min.css';
import grapesjs from 'grapesjs';

export default {
  name: 'LayoutBuilder',
  props: {
    msg: String
  },
  mounted(){
    // grapesjs equals the grapesjs from the first require line
    grapesjs.init({
      container: '#gjs',
      plugins: [
       'gjs-mjml'
      ]
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped src="grapesjs/dist/css/grapes.min.css">
  /* global styles */
</style>
