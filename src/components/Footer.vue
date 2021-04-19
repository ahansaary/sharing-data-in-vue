<template>
  <footer
    class="footer"
    v-show="vm.todos.length"
    v-cloak
  >
    <span class="todo-count">
      <strong>{{ vm.remaining }}</strong> {{ vm.remaining | pluralize }} left
    </span>
    <ul class="filters">
      <li>
        <a
          href="#/all"
          :class="{ selected: vm.visibility == 'all' }"
        >
          All
        </a>
      </li>
      <li>
        <a
          href="#/active"
          :class="{ selected: vm.visibility == 'active' }"
        >
          Uncomplete
        </a>
      </li>
      <li>
        <a
          href="#/completed"
          :class="{ selected: vm.visibility == 'completed' }"
        >
          Completed
        </a>
      </li>
    </ul>
  </footer>
</template>

<script>
import { observer } from 'mobx-vue'
import { store } from '../store/todos'

export default observer({
  name: 'Footer',

  data() {
    return {
      vm: store
    }
  },

  filters: {
    pluralize: function(n) {
      return n === 1 ? "task" : "tasks";
    }
  },
})
</script>