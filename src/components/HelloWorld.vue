<template>
  <div class="hello">
    {{names}}
    <h1>{{ msg }}</h1>
    <h3>{{actionMsg}}</h3>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  inject:['names'],
  props: {
    msg: String,
    actionMsg:String
  },
  mounted(){
    //console.log(this.names)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
