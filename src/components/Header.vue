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
import { observer } from 'mobx-vue'
import { store } from '../store/todos'

export default observer({
  name: 'Header',

  data() {
    return {
      vm: store,
      newTodo: ''
    }
  },

  methods: {
    addTodo() {
      const value = this.newTodo && this.newTodo.trim();
      if (!value) return

      this.vm.addTodo(value)

      this.newTodo = "";
    }
  }
})
</script>
