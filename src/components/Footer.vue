<template>
  <footer
    class="footer"
    v-show="todos.length"
    v-cloak
  >
    <span class="todo-count">
      <strong>{{ remaining }}</strong> {{ remaining | pluralize }} left
    </span>
    <ul class="filters">
      <li>
        <a
          href="#/all"
          :class="{ selected: visibility == 'all' }"
        >
          All
        </a>
      </li>
      <li>
        <a
          href="#/active"
          :class="{ selected: visibility == 'active' }"
        >
          Uncomplete
        </a>
      </li>
      <li>
        <a
          href="#/completed"
          :class="{ selected: visibility == 'completed' }"
        >
          Completed
        </a>
      </li>
    </ul>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  
  props: {
    todos: Array,
    remaining: Number,
    visibility: String
  },

  filters: {
    pluralize: function(n) {
      return n === 1 ? "task" : "tasks";
    }
  },
}
</script>