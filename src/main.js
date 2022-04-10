import {createApp} from 'vue';
import App from './App.vue';
import PrimeVue from 'primevue/config';
import Button from 'primevue/button';
import InputText from 'primevue/inputtext';
import Dialog from 'primevue/dialog'

// Styles
import 'primevue/resources/themes/saga-blue/theme.css'  //theme
import 'primevue/resources/primevue.min.css'            //core css
import 'primeicons/primeicons.css'                      //icons

const app = createApp(App);

app.use(PrimeVue);

app.mount('#app')

// Import components from PrimeVue Lib

app.component('Prime-Dialog', Dialog);
app.component('PV-Button', Button);
app.component('PV-InputText', InputText);
