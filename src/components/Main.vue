<template>
  <section
    class="main"
    v-show="todos$.length"
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

  subscriptions() {
    return {
      todos$: todosService.todos$,
    }
  },
}
</script>