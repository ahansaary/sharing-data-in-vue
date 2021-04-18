<template>
  <div>
    <section class="todoapp">
      <Header :todos="todos" />

      <Main
        :todos="todos"
        :remaining="remaining"
        :visibility="visibility"
        @new-todos="todos = $event"
      />

      <Footer
        :todos="todos"
        :remaining="remaining"
        :visibility="visibility"
      />
    </section>
  </div>
</template>

<script>
import {todoStorage} from './services/storage'
import {filters} from './services/filters'
import Header from './components/Header'
import Main from './components/Main'

export default {
  name: 'App',

  components: {
    Header,
    Main,
  },

  data() {
    return {
      todos: todoStorage.fetch(),
      visibility: "all"
    }
  },

  watch: {
    todos: {
      handler(todos) {
        todoStorage.save(todos);
      },
      deep: true
    }
  },

  computed: {
    remaining: function() {
      return filters.active(this.todos).length;
    },
  },
}
</script>

<style lang="scss" src="./App.scss"></style>
