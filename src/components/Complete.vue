<template>
  <div class="completed-wrapper">
    <input
      id="toggle-all"
      class="toggle-all"
      type="checkbox"
      v-model="allDone"
    >
    <label for="toggle-all">Complete all tasks</label>
    <button
      class="clear-completed"
      @click="vm.removeCompleted()"
    >
      Clear completed
    </button>
  </div>
</template>

<script>
import { observer } from 'mobx-vue'
import { store } from '../store/todos'

export default observer({
  name: 'Complete',

  data() {
    return {
      vm: store
    }
  },

  computed: {
    allDone: {
      get: function() {
        return this.vm.remaining === 0;
      },

      set: function(value) {
        this.vm.todos.forEach(function(todo) {
          todo.completed = value;
        });
      }
    }
  },
})
</script>