<template>
  <section
    class="main"
    v-show="todos.length"
    v-cloak
  >
    <Complete />
    <List />
  </section>
</template>

<script>
import { todosService } from '../services/todos'
import Complete from './Complete'
import List from './List'

export default {
  name: 'Main',

  components: {
    List,
    Complete
  },

  data() {
    return {
      todos: [],
    }
  },

  created() {
    this.todosSub = todosService.todos$.subscribe(todos => this.todos = todos)
  },

  beforeDestroy() {
    this.todosSub.unsubscribe()
  },
}
</script>