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
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'

export default {
  name: 'App',

  components: {
    Header,
    Main,
    Footer
  },
}
</script>

<style lang="scss" src="./App.scss"></style>
