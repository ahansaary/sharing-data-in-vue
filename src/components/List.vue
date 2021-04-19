<template>
  <ul class="todo-list">
    <li
      v-for="todo in filteredTodos"
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
import {filters} from '../services/filters'
import { todosService } from '../services/todos';

export default {
  name: 'List',

  data() {
    return {
      todos: [],
      visibility: "all",
      editedTodo: null,
    }
  },

  computed: {
    filteredTodos() {
      return filters[this.visibility](this.todos);
    },
  },

  created() {
    this.todosSub = todosService.todos$.subscribe(todos => this.todos = todos)
    this.visibilitySub = todosService.visibility$.subscribe(visibility => this.visibility = visibility)
  },

  beforeDestroy() {
    this.todosSub.unsubscribe()
    this.visibilitySub.unsubscribe()
  },

  methods: {
    removeTodo(todo) {
      const index = this.todos.indexOf(todo)
      todosService.removeTodo(index)
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
}
</script>