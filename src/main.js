import {createApp} from 'vue'
import App from './App.vue'
import router from '@/router'
import PrimeVue from 'primevue/config'
import Button from 'primevue/button';
import InputText from 'primevue/inputtext';
import Dialog from 'primevue/dialog'
import ResizeDirective from "./directives/resize";

// Styles
import 'primevue/resources/themes/saga-blue/theme.css'  //theme
import 'primevue/resources/primevue.min.css'            //core css
import 'primeicons/primeicons.css'                      //icons

const app = createApp(App);

app.use(PrimeVue);

// Import components from PrimeVue Lib -> TODO: This should be declared by each of the dynamic components

app.component('Prime-Dialog', Dialog);
app.component('PV-Button', Button);
app.component('PV-InputText', InputText);

// Import global directives

app.directive('resize', ResizeDirective)

// Assign the Router

app.use(router);

app.mount('#app')

