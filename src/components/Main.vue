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
import TodosMixin from '../mixins/todos'
import Complete from './Complete'
import List from './List'

export default {
  name: 'Main',

  mixins: [TodosMixin],

  components: {
    List,
    Complete
  },
}
</script>