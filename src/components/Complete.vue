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
      @click="removeCompleted"
    >
      Clear completed
    </button>
  </div>
</template>

<script>
import { todosService } from '../services/todos';

export default {
  name: 'Complete',

  subscriptions() {
    return {
      todos$: todosService.todos$,
      remaining$: todosService.remaining$,
    }
  },

  computed: {
    allDone: {
      get: function() {
        return this.remaining$ === 0;
      },

      set: function(value) {
        todosService.markAllAsCompleted(value)
      }
    }
  },

  methods: {
    removeCompleted: function() {
      todosService.removeCompleted();
    }
  },
}
</script>