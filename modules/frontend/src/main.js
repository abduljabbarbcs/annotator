
/**
 * First, we will load all of this project's Javascript utilities and other
 * dependencies. Then, we will be ready to develop a robust and powerful
 * application frontend using useful Laravel and JavaScript libraries.
 */

import Vue from 'vue';

//Routes
import Routes from './routes.js';


//components

import App from './App';

//Intializing app
const app = new Vue({
  el:"#app",
  router:Routes,
  render: h => h(App),
});

export default app;
