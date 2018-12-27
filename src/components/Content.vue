<template>
  <div class="content">
    <img class="content" src=""/>
    <div>{{msg}}</div>
  </div>
</template>

<script>
export default {
  name: 'content',
  components: {
  },
  data () {
    return {
      msg: '古德'
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
  .content {
    height: 400px;
    width: 400px;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    margin: auto;
    display: flex;
    flex-direction: column;
    
  }
</style>
