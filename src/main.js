import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import {filters} from './services/filters'

Vue.config.productionTip = false

const app = new Vue({
  render: h => h(App),
})

// handle routing
function onHashChange() {
  var visibility = window.location.hash.replace(/#\/?/, "");
  if (filters[visibility]) {
    app.visibility = visibility;
  } else {
    window.location.hash = "";
    app.visibility = "all";
  }
}

window.addEventListener("hashchange", onHashChange);
onHashChange();

// mount
app.$mount('#app')
