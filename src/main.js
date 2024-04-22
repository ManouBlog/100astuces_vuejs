import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
// import { createAuth0 } from '@auth0/auth0-vue';

const app = createApp(App);

// app.use(
//   createAuth0({
//     domain: "dev-s4mya3jx12s45kqt.us.auth0.com",
//     clientId: "aeYbdAVzaZtRDO1hw13adSSbr2bovPXt",
//     authorizationParams: {
//       redirect_uri: window.location.origin
//     }
//   })
// );

app.mount('#app');

