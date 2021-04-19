<template>
  <ul class="todo-list">
    <li
      v-for="todo in vm.filteredTodos"
      class="todo"
      :key="todo.id"
      :class="{ completed: todo.completed, editing: todo == editedTodo }"
    >
      <div class="view">
        <input
          class="toggle"
          type="checkbox"
          v-model="todo.completed"
        >
        <label @dblclick="editTodo(todo)">{{ todo.title }}</label>
        <button
          class="destroy"
          @click="removeTodo(todo)"
        ></button>
      </div>
      <input
        class="edit"
        type="text"
        v-model="todo.title"
        v-todo-focus="todo == editedTodo"
        @blur="doneEdit(todo)"
        @keyup.enter="doneEdit(todo)"
        @keyup.esc="cancelEdit(todo)"
      >
    </li>
  </ul>
</template>

<script>
import { observer } from 'mobx-vue'
import { store } from '../store/todos'

export default observer({
  name: 'List',

  data() {
    return {
      vm: store,
      editedTodo: null,
    }
  },

  methods: {
    removeTodo(todo) {
      const index = this.vm.todos.indexOf(todo)
      this.vm.removeTodo(index)
    },

    editTodo(todo) {
      this.beforeEditCache = todo.title;
      this.editedTodo = todo;
    },

    doneEdit(todo) {
      if (!this.editedTodo) return

      this.editedTodo = null;
      todo.title = todo.title.trim();

      if (!todo.title) this.removeTodo(todo);
    },

    cancelEdit(todo) {
      this.editedTodo = null;
      todo.title = this.beforeEditCache;
    },
  },

  directives: {
    "todo-focus": function(el, binding) {
      if (binding.value) {
        el.focus();
      }
    }
  }
})
</script>