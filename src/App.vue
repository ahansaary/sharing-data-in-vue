<template>
  <div>
    <section class="todoapp">
      <Header />
      <Main />
      <Footer />
    </section>
  </div>
</template>

<script>
import {todoStorage} from './services/storage'
import Header from './components/Header'
import Main from './components/Main'
import TodosMixin from './mixins/todos'

export default {
  name: 'App',

  components: {
    Header,
    Main,
  },

  mixins: [TodosMixin],

  watch: {
    todos: {
      handler(todos) {
        todoStorage.save(todos);
      },
      deep: true
    }
  },
}
</script>

<style lang="scss" src="./App.scss"></style>
