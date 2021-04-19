import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import { filters } from './services/filters'
import { store } from './store/todos'

Vue.config.productionTip = false

const app = new Vue({
  render: h => h(App),
})

// handle routing
function onHashChange() {
  var visibility = window.location.hash.replace(/#\/?/, "");
  if (filters[visibility]) {
    store.visibility = visibility;
  } else {
    window.location.hash = "";
    store.visibility = "all";
  }
}

window.addEventListener("hashchange", onHashChange);
onHashChange();

// mount
app.$mount('#app')
