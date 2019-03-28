<template>
  <div id="app">
    <mt-button type="default" @click="back">后退</mt-button>
    <mt-button type="default" @click="go">前进</mt-button>
    <mt-button type="default" @click="home">返回首页</mt-button>
    <p>获取router-name：{{$route.name}}</p>
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about-admin">About</router-link>|
      <!-- <router-link :to="{name:'about',params:{id:777}}">About</router-link>| -->
      <router-link to="/login/123">login</router-link> |
      <router-link to="/go">go</router-link>
    </div>
    <!-- mode : out-in ---先移除再增加跳转 -->
    <transition name="fade" mode="out-in">
      <router-view/>
    </transition>
    
    <div class="flex">
      <router-view name="left" class="common"></router-view>
      <router-view name="right" class="common"></router-view>
    </div>
    
  </div>
</template>
<script>
import router from './router';
export default {
  name:'app',
  provide:{//provide,inject 解决跨级组件间的通讯，provide向下传递数据，旗下所有的子组件使用inject注入均可获取数据。
      names:'鹿晗'
  },
  methods:{
    back:function(){
      router.go(-1);
    },
    go:function(){
      router.go(1);
    },
    home:function(){
      router.push('/');
    },
    sort:function(arr){//冒泡排序
        for(var i = 0;i<arr.length-1;i++){ //[1,4,2,3]
          for(var j =0 ; j<arr.length-1-i;j++){//[1,4,2,3] [1,4,2] [1,4] [1]
            if(arr[j]>arr[j+1]){
              var temp = arr[j];
              arr[j] = arr[j+1];
              arr[j+1] = temp;
            }
          }
        }
        console.log(arr);
        return arr;
    },
    rept:function(arr){//数组去重
      var newArr = [];
      for(var i =0;i<arr.length;i++){
        if(newArr.indexOf(arr[i]) == -1){
            newArr.push(arr[i]);
        }
      }
      return newArr;
    },
    toUpperCase:function(str){
        var newarr = str.split(' ').map(function(ele,index){
          return ele.slice(0,1).toUpperCase()+ele.slice(1);
        });
        return newarr.join(' ')
    },
    toTransformation:function(num){
        var str = num.toString();
        if(str.length > 3){
          var result = ','+str.slice(-3);
          str = str.slice(0,str.length-3);
          return this.toTransformation(str)+result;
        }else{
          return str;
        }
    }
  },
  mounted(){
    // this.sort([1,4,2,3,5]);
    console.log(this.rept([1,3,1,2,3,4]));
    console.log(this.toUpperCase('this is a pen'));
    console.log(this.toTransformation(12345678))
  }
}
</script>

<style lang="less">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
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
.flex{
  display: flex;
  justify-content: space-between;
  height: 100px;
  & .common{
    flex: 1;
    height: 100%;
    background: #f00;
    margin: 0 10px;
  }
}

</style>
