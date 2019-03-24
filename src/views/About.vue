<template>
  <div class="about">
    <div class="swipe-container">
        <mt-swipe :auto="4000">
          <mt-swipe-item>1</mt-swipe-item>
          <mt-swipe-item>2</mt-swipe-item>
          <mt-swipe-item>3</mt-swipe-item>
        </mt-swipe>
    </div>
   
    <h1>This is an about page</h1>
    pathMatch:---{{$route.params.pathMatch}}
   <!-- {{$route.params.id}} -->
  </div>
</template>
<style>
  .swipe-container{
    height: 200px;
  }
  .mint-swipe-item{
    background: #f00;
  }
  .mint-swipe-item:nth-child(2){
      background: #ff0;
  }
  .mint-swipe-item:nth-child(3){
    background: #00f;
  }
</style>

