<template>
  <section
    class="main"
    v-show="vm.todos.length"
    v-cloak
  >
    <Complete />
    <List />
  </section>
</template>

<script>
import { observer } from 'mobx-vue'
import { store } from '../store/todos'
import Complete from './Complete'
import List from './List'

export default observer({
  name: 'Main',

  components: {
    List,
    Complete
  },

  data() {
    return {
      vm: store
    }
  },
})
</script>