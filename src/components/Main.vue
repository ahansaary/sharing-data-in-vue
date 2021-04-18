<template>
  <section
    class="main"
    v-show="todos.length"
    v-cloak
  >
    <Complete
      :todos="todos"
      :remaining="remaining"
      @new-todos="$emit('new-todos', $event)"
    />

    <List
      :todos="todos"
      :remaining="remaining"
      :visibility="visibility"
    />
  </section>
</template>

<script>
import Complete from './Complete'
import List from './List'

export default {
  name: 'Main',

  components: {
    List,
    Complete
  },

  props: {
    todos: Array,
    remaining: Number,
    visibility: String
  },
}
</script>