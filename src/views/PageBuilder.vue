<template>
  <div class="home">
    <Sidebar v-model:visible="visibleLeft">
      <Dropdown v-model="selectedTarget" :options="targets" optionLabel="name" placeholder="Select a Target" />
      <PV-Button icon="pi pi-arrow-right" @click="addComponent(selectedTarget.id)" />    
    </Sidebar>  

    <PV-Button class="sidebar-open" icon="pi pi-arrow-right" @click="visibleLeft = true" />    

    <div id="canvas" ref="root">
      <div class="support-grid"></div>

      <div class="band">
        <div class="item-1" id="container-1">
              <a href="https://design.tutsplus.com/articles/international-artist-feature-malaysia--cms-26852" class="card">
                <div class="thumb" style="background-image: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/flex-1.jpg);"></div>
                <article>
                  <h1>International Artist Feature: Malaysia</h1>
                  <span>Mary Winkler</span>
                </article>
              </a>
        </div>
        <div class="item-2">
              <a href="https://webdesign.tutsplus.com/articles/how-to-conduct-remote-usability-testing--cms-27045" class="card">
                <div class="thumb" style="background-image: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/users-2.png);"></div>
                <article>
                  <h1>How to Conduct Remote Usability Testing</h1>
                  <span>Harry Brignull</span>
                </article>
              </a>
        </div>
        <div class="item-3">
          <a href="https://design.tutsplus.com/articles/envato-tuts-community-challenge-created-by-you-july-edition--cms-26724" class="card">
            <div class="thumb" style="background-image: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/flex-5.jpg);"></div>
            <article>
              <h1>Created by You, July Edition</h1>
              <p>Welcome to our monthly feature of fantastic tutorial results created by you, the Envato Tuts+ community! </p>
              <span>Melody Nieves</span>
            </article>
          </a>
        </div>
        <div class="item-4">
              <a href="https://webdesign.tutsplus.com/tutorials/how-to-code-a-scrolling-alien-lander-website--cms-26826" class="card">
                <div class="thumb" style="background-image: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/landing.png);"></div>
                <article>
                  <h1>How to Code a Scrolling “Alien Lander” Website</h1>
                  <p>We’ll be putting things together so that as you scroll down from the top of the page you’ll see an “Alien Lander” making its way to touch down.</p>
                  <span>Kezz Bracey</span>
                </article>
              </a>
        </div>
        <div class="item-5">
              <a href="https://design.tutsplus.com/tutorials/stranger-things-inspired-text-effect--cms-27139" class="card">
                <div class="thumb" style="background-image: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/strange.jpg);"></div>
                <article>
                  <h1>How to Create a “Stranger Things” Text Effect in Adobe Photoshop</h1>
                  <span>Rose</span>
                </article>
              </a>
        </div>
        <div class="item-6">
          <a href="https://photography.tutsplus.com/articles/5-inspirational-business-portraits-and-how-to-make-your-own--cms-27338" class="card">
            <div class="thumb" style="background-image: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/flor.jpg);"></div>
            <article>
              <h1>5 Inspirational Business Portraits and How to Make Your Own</h1>
              
              <span>Marie Gardiner</span>
            </article>
          </a>
        </div>
        <div class="item-7">
          <a href="https://webdesign.tutsplus.com/articles/notes-from-behind-the-firewall-the-state-of-web-design-in-china--cms-22281" class="card">
            <div class="thumb" style="background-image: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/china.png);"></div>
            <article>
              <h1>Notes From Behind the Firewall: The State of Web Design in China</h1>
              <span>Kendra Schaefer</span>
            </article>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

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
};
</script>

<script setup>
import { ref, onUnmounted, getCurrentInstance } from "vue";
import renderComponent from "@/renderComponent";
import Sidebar from 'primevue/sidebar';
import Dropdown from 'primevue/dropdown';

const { appContext } = getCurrentInstance();

var container = ref("root");
let counter = 1;
let components = new Map();

// cleanup
onUnmounted(() => { 
  components.forEach(c => c?.())
  components.clear()
  console.log('all clean and done!')
});

// Add component method : Add component to specified container
const addComponent = async (id) => {
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

  // Add to components' collection
  components.set(id, newCmp)
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

/* card */

.card {
  min-height: 100%;
  background: white;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
  display: flex;
  flex-direction: column;
  text-decoration: none;
  color: #444;
  position: relative;
  top: 0;
  transition: all .1s ease-in;
}

.card:hover {
  top: -2px;
  box-shadow: 0 4px 5px rgba(0,0,0,0.2);
}

.card article {
  padding: 20px;
  display: flex;
  
  flex: 1;
  justify-content: space-between;
  flex-direction: column;
  
}
.card .thumb {
  padding-bottom: 60%;
  background-size: cover;
  background-position: center center;
}

.card p { 
  flex: 1; /* make p grow to fill available space*/
  line-height: 1.4;
}

/* typography */
h1 {
  font-size: 20px;
  margin: 0;
  color: #333;
}

.card span {
  font-size: 12px;
  font-weight: bold;
  color: #999;
  text-transform: uppercase;
  letter-spacing: .05em;
  margin: 2em 0 0 0;
}
</style>
