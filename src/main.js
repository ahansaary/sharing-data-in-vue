import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import VueRx from 'vue-rx'
import './plugins/bootstrap-vue'
import App from './App.vue'
import { filters } from './services/filters'
import { todosService } from './services/todos'

Vue.config.productionTip = false

Vue.use(VueRx)

const app = new Vue({
  render: h => h(App),
})

// handle routing
function onHashChange() {
  var visibility = window.location.hash.replace(/#\/?/, "");
  if (filters[visibility]) {
    todosService.setVisibility(visibility)
  } else {
    window.location.hash = "";
    todosService.setVisibility('all')
  }
}

window.addEventListener("hashchange", onHashChange);
onHashChange();

// mount
app.$mount('#app')
