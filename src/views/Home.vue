<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <div class="bor"></div>
    <HelloWorld msg="Welcome to Your Vue.js App" :action-msg='title'/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  data(){
    return {
      title:'titles'
    }
  },
  components: {
    HelloWorld
  },
  mounted:function(){
    
  }
}
</script>
<style>
  .bor{
    width:100px;
    height:50px;
    background:#f00;
    border-radius :50px 50px 0 0;
  }
</style>
