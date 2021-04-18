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
import {filters} from '../services/filters'

export default {
  name: 'Complete',

  props: {
    todos: Array,
    remaining: Number
  },

  computed: {
    allDone: {
      get: function() {
        return this.remaining === 0;
      },

      set: function(value) {
        this.todos.forEach(function(todo) {
          todo.completed = value;
        });
      }
    }
  },

  methods: {
    removeCompleted: function() {
      this.$emit('new-todos', filters.active(this.todos));
    }
  },
}
</script>