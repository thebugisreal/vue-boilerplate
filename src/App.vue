<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
    <section class="hero">
        <h1 class="title">{{ count }}</h1>
        <h2 v-if="isEven">Is even!!</h2>
    </section>
    <section>
      <button class="button" @click="increment">+</button>
      <button class="button" @click="decrement">-</button>
      <button class="button" @click="reset">Reset</button>
    </section>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapState } from 'vuex'

export default {
  computed: {
    ...mapState('storage', ['count']),
    ...mapGetters('storage', ['isEven'])
  },
  methods: {
    ...mapActions('storage', [
      'increment', 'decrement', 'reset'
    ])
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
