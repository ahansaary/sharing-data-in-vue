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

  data() {
    return {
      todos: [],
      remaining: 0,
    }
  },

  computed: {
    allDone: {
      get: function() {
        return this.remaining === 0;
      },

      set: function(value) {
        todosService.markAllAsCompleted(value)
      }
    }
  },

  created() {
    this.todosSub = todosService.todos$.subscribe(todos => this.todos = todos)
    this.remainingSub = todosService.remaining$.subscribe(remaining => this.remaining = remaining)
  },

  beforeDestroy() {
    this.todosSub.unsubscribe()
    this.remainingSub.unsubscribe()
  },

  methods: {
    removeCompleted: function() {
      todosService.removeCompleted();
    }
  },
}
</script>