<template>
  <div class="content">
    <img class="ava" src="https://avatars3.githubusercontent.com/u/34954129"/>
    <div class="link-img">
      <a class="link-github" target="_blank" href="https://github.com/gd-ldj">
        <img class="github-ava" src="https://github.githubassets.com/pinned-octocat.svg"/>
      </a>
      <a class="link-jj" target="_blank" href="https://juejin.im/user/5ab1ae2b6fb9a028b86de19d">
        <img class="jj-ava" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8IS0tIENyZWF0b3I6IENvcmVsRFJBVyBYNyAtLT4NCjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aWR0aD0iOC4zODU3bW0iIGhlaWdodD0iOC4xOTIzbW0iIHZlcnNpb249IjEuMSIgc3R5bGU9InNoYXBlLXJlbmRlcmluZzpnZW9tZXRyaWNQcmVjaXNpb247IHRleHQtcmVuZGVyaW5nOmdlb21ldHJpY1ByZWNpc2lvbjsgaW1hZ2UtcmVuZGVyaW5nOm9wdGltaXplUXVhbGl0eTsgZmlsbC1ydWxlOmV2ZW5vZGQ7IGNsaXAtcnVsZTpldmVub2RkIg0Kdmlld0JveD0iMCAwIDUwOSA0OTciDQogeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPg0KIDxkZWZzPg0KICA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPg0KICAgPCFbQ0RBVEFbDQogICAgLmZpbDAge2ZpbGw6IzAwNkNGRn0NCiAgICAuZmlsMSB7ZmlsbDp3aGl0ZX0NCiAgIF1dPg0KICA8L3N0eWxlPg0KIDwvZGVmcz4NCiA8ZyBpZD0i5Zu+5bGCX3gwMDIwXzEiPg0KICA8bWV0YWRhdGEgaWQ9IkNvcmVsQ29ycElEXzBDb3JlbC1MYXllciIvPg0KICA8cmVjdCBjbGFzcz0iZmlsMCIgd2lkdGg9IjUwOSIgaGVpZ2h0PSI0OTciLz4NCiAgPHBhdGggaWQ9IkZpbGwtMS1Db3B5IiBjbGFzcz0iZmlsMSIgZD0iTTI4NSAxMzhsLTMxIC0yNCAtMzMgMjUgLTIgMiAzNSAyNyAzNCAtMjcgLTMgLTN6bTExOSA5NWwtMTUwIDExNiAtMTUxIC0xMTYgLTIyIDE3IDE3MyAxMzQgMTczIC0xMzQgLTIzIC0xN3ptLTE1MCA5bC04MiAtNjMgLTIzIDE3IDEwNSA4MSAxMDQgLTgxIC0yMiAtMTcgLTgyIDYzeiIvPg0KIDwvZz4NCjwvc3ZnPg0K"/>
      </a>
    </div>
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
    justify-content: center;
    align-items: center;
  }
  .ava {
    width: 200px;
  }
  .link-img {
    height: 50px;
  }
  .github-ava {
    height: 50px;
    width: 50px;
    margin: 0 10px;
    border-radius: 50%;
    background: #ffffff;
  }
  .jj-ava {
    height: 50px;
    width: 50px;
    margin: 0 10px;
    border-radius: 50%;
    background: #ffffff;
  }
</style>
