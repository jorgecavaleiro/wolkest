<template>
  <main>
    <div class="home-page-container" :class="{ has_sidebar: sidebarIsOpen }">
      <menu id="sidebar">
          <div class="sidebar__title">
          <div class="sidebar__img">
            <img src="./assets/logo.png" alt="logo" />
            <h1>Wolkest</h1>
          </div>
          <i
            @click="closeSidebar()"
            class="pi pi-chevron-left"
            id="sidebarIcon"
            aria-hidden="true"
          ></i>
        </div>
        <nav>
          <div class="sidebar__menu">
            <div class="sidebar__link active_menu_link">
              <i class="pi pi-home"></i>
              <a href="#">Home</a>
            </div>
            <h2>Pages</h2>
            <div class="sidebar__link">
              <i class="pi pi-bookmark" aria-hidden="true"></i>
              <router-link to="/">Sample Page</router-link>
            </div>
            
            <h2>Data</h2>
            <div class="sidebar__link">
              <i class="pi pi-database"></i>
              <router-link to="/about">Sample Store</router-link>
            </div>          
          </div>          
        </nav>
      </menu>

      <nav class="navbar">
        <div class="nav_icon" v-if="!sidebarIsOpen" @click="toggleSidebar()">
          <i class="pi pi-bars" aria-hidden="true"></i>
        </div>
        <div class="navbar__left">
          <a href="#">Subscribers</a>
          <a href="#">Video Management</a>
          <a class="active_link" href="#">Admin</a>
        </div>
        <div class="navbar__right">
          <a href="#">
            <i class="pi pi-search" aria-hidden="true"></i>
          </a>
          <a href="#">
            <i class="pi pi-clock" aria-hidden="true"></i>
          </a>
          <a href="#">
            <img width="30" src="./assets/avatar.svg" alt="" />
            <!-- <i class="fa fa-user-circle-o" aria-hidden="true"></i> -->
          </a>
        </div>
      </nav>

      <main>
        <div class="main__container">
          <router-view />  
        </div>
      </main>
    </div>
  </main>
</template>

<script>

export default {  
  name: 'App',
  components: {
  },
  data() {
    return {
      sidebarIsOpen: true
    }
  },
  methods: {
    toggleSidebar() {
      this.sidebarIsOpen = !this.sidebarIsOpen;
    },
    closeSidebar() {
      this.sidebarIsOpen = false;      
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;  
  color: #2c3e50;
  /* margin-top: 60px; */
}


/*  styling scrollbars  */
::-webkit-scrollbar {
  width: 5px;
  height: 6px;
}

::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px #a5aaad;
  border-radius: 10px;
}

::-webkit-scrollbar-thumb {
  background: #3ea175;
  border-radius: 10px;
}

::-webkit-scrollbar-thumb:hover {
  background: #a5aaad;
}

* {
  margin: 0;
  padding: 0;
}

.text-primary-p {
  color: #a5aaad;
  font-size: 14px;
  font-weight: 700;
}

.font-bold {
  font-weight: 700;
}

.text-title {
  color: #2e4a66;
}

.text-lightblue {
  color: #469cac;
}

.text-red {
  color: #cc3d38;
}

.text-yellow {
  color: #a98921;
}

.text-green {
  color: #3b9668;
}

.home-page-container {
  display: grid;
  height: 100vh;
  grid-template-columns: 0 1fr 1fr 1fr;
  grid-template-rows: 0.2fr 3fr;
  grid-template-areas:
    "sidebar nav nav nav"
    "sidebar main main main";
} 

.home-page-container.has_sidebar {
  grid-template-columns: 0.5fr 1fr 1fr 1fr;
}


.navbar {
  background: #ffffff;
  grid-area: nav;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 30px 0 30px;
  border-bottom: 1px solid lightgray;
}

.nav_icon > i {
  cursor: pointer;
  font-size: 26px;
  color: #020509;
}

.navbar__left > a {
  margin-right: 30px;
  text-decoration: none;
  color: #a5aaad;
  font-size: 15px;
  font-weight: 700;
}

.navbar__left .active_link {
  color: #265acc;
  border-bottom: 3px solid #265acc;
  padding-bottom: 12px;
}

.navbar__right {
  display: flex;
  justify-content: center;
  align-items: center;
}

.navbar__right > a {
  margin-left: 20px;
  text-decoration: none;
}

.navbar__right > a > i {
  color: #a5aaad;
  font-size: 16px;
  border-radius: 50px;
  background: #ffffff;
  box-shadow: 2px 2px 5px #d9d9d9, -2px -2px 5px #ffffff;
  padding: 7px;
}

main {
  background: #f3f4f6;
  grid-area: main;
  overflow-y: auto;
}

.main__container {
  padding: 20px 35px;
}

.main__title {
  display: flex;
  align-items: center;
}

.main__title > img {
  max-height: 100px;
  object-fit: contain;
  margin-right: 20px;
}

/*  SIDEBAR STARTS HERE  */

#sidebar {
  background: #020509;
  grid-area: sidebar;
  overflow-y: auto;
  padding: 20px;
  -webkit-transition: all 0.5s;
  transition: all 0.5s;
}

.sidebar__title {
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #f3f4f6;
  margin-bottom: 30px;
  /* color: #E85B6B; */
}

.sidebar__title > i {
  cursor: pointer;
}

.sidebar__img {
  display: flex;
  align-items: center;
}

.sidebar__title > div > img {
  width: 24px;
  margin: 0 1rem 0 0;
  object-fit: contain;
}

.sidebar__title > div > h1 {
  font-size: 18px;
  display: inline;
}

.sidebar__title > i {
  font-size: 18px;
  display: inline;
}

.sidebar__menu > h2 {
  color: #3ea175;
  font-size: 16px;
  margin-top: 15px;
  margin-bottom: 5px;
  padding: 0 10px;
  font-weight: 700;
}

.sidebar__link {
  color: #f3f4f6;
  padding: 10px;
  border-radius: 3px;
  margin-bottom: 5px;
}

.active_menu_link {
  background: rgba(62, 161, 117, 0.3);
  color: #3ea175;
}

.active_menu_link a {
  color: #3ea175 !important;
}

.sidebar__link > a {
  text-decoration: none;
  color: #a5aaad;
  font-weight: 700;
}

.sidebar__link > i {
  margin-right: 10px;
  font-size: 18px;
}

.sidebar__logout {
  margin-top: 20px;
  padding: 10px;
  color: #e65061;
}

.sidebar__logout > a {
  text-decoration: none;
  color: #e65061;
  font-weight: 700;
  text-transform: uppercase;
}

.sidebar__logout > i {
  margin-right: 10px;
  font-size: 18px;
}

@media only screen and (max-width: 1940px) {
  .home-page-container.has_sidebar{
    grid-template-columns: 0.6fr 1fr 1fr 1fr;
  } 
}

@media only screen and (max-width: 1640px) {
  .home-page-container.has_sidebar{
    grid-template-columns: 0.7fr 1fr 1fr 1fr;
  }  
}

@media only screen and (max-width: 978px) {
  .home-page-container.has_sidebar{
    grid-template-columns: 1fr;
    /* grid-template-rows: 0.2fr 2.2fr; */
    grid-template-rows: 0.2fr 3fr;
    grid-template-areas:
      "nav"
      "main";
  }

  #sidebar {
    display: none;
  }

  .sidebar__title > i {
    display: inline;
  }

  .nav_icon {
    display: inline;
  }
}

/* Mobile & Tablet: viewport until 600px */
@media only screen and (max-width: 600px) {
  .navbar__left {
    display: none;
  }
}
</style>
