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
import { observer } from 'mobx-vue'
import { store } from './store/todos'
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'

export default observer({
  name: 'App',

  components: {
    Header,
    Main,
    Footer
  },

  data() {
    return {
      vm: store,
    }
  },
})
</script>

<style lang="scss" src="./App.scss"></style>
