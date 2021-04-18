<template>
  <header class="header">
    <input
      class="new-todo"
      autocomplete="off"
      placeholder="Type your todo list"
      v-model="newTodo"
      @keyup.enter="addTodo"
    >
    <button
      class="new-todo-button"
      @click="addTodo"
      v-show="newTodo.length > 0"
    ></button>
  </header>
</template>

<script>
import {todoStorage} from '../services/storage'
import TodosMixin from '../mixins/todos'

export default {
  name: 'Header',

  mixins: [TodosMixin],

  data() {
    return {
      newTodo: ''
    }
  },

  methods: {
    addTodo() {
      const value = this.newTodo && this.newTodo.trim();
      if (!value) return

      this.todos.push({
        id: todoStorage.uid++,
        title: value,
        completed: false
      });

      this.newTodo = "";
    }
  }
}
</script>