<template>
  <div id="app">
    <router-view></router-view>
    <FooterGuid />
  </div>
</template>

<script>
  import FooterGuid from  './components/footerGuide/footerGuide'


export default {
  name:'app',
  components:{FooterGuid}, // 单词拼错了： components
}
</script>

<style lang="stylus">

</style>
