<template>
  <div class="home">
    <Background ></Background>
    <!-- <Clock ></Clock> -->
    <Content ></Content>
  </div>
</template>

<script>
import Background from './Background.vue';
import Clock from './Clock.vue';
import Content from './Content.vue';
export default {
  name: 'home',
  components: {
    Background: Background,
    Content: Content,
    Clock
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  mounted () {
  },
  methods: {
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .home {
    background: #060e1b;
    overflow: hidden;
  }
</style>
