<template>
  <div id="app">

    <router-view/>
    <foot></foot>
  </div>
</template>
<script>
  import Foot from './components/footerGuide/FooterGuide'
  export default {
    name:'App',
    components:{
      Foot
    }
  }
</script>
<style>

</style>
