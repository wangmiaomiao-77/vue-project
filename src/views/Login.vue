<template>
    <div class="login">
       获取动态参数：
        {{$route.params.id}}
        <router-view name="a"></router-view>
        <mt-field label="用户名" placeholder="请输入用户名" ></mt-field>
        <mt-field label="邮箱" placeholder="请输入邮箱" type="email" ></mt-field>
        <mt-button type="default" @click="fade">default</mt-button>
        <transition name="fade">
            <p v-show="!isShow">some message</p>
        </transition>

        <p>{{$store.state.count}}----{{counts}}</p>
        <mt-button @click="$store.commit('add',10)">+</mt-button>
        <mt-button @click="reduce">-</mt-button>
            <br/>
         <mt-button @click="jisuan">getters</mt-button>
            <br/>
         <mt-button @click="actions">异步+5</mt-button>
         <br/>
        <mt-button @click="handleAsyncDecrease">异步-</mt-button>
    </div>
</template>
<script>
import {mapState,mapMutations,mapGetters,mapActions} from 'vuex';
export default {
    name:"login",
    data(){
        return {
            isShow:false,
            count:0
        }
    },
    methods:{
        fade:function(){
            this.isShow = !this.isShow;
        },
        ...mapMutations([
            'reduce'
        ]),
        ...mapGetters(['jisuan']),
        ...mapActions({
            actions:'actionFun'
        }),
        handleAsyncDecrease(){
            this.$store.dispatch('asyncDecrease')
        }
    },
    beforeRouteEnter:function(to,from,next){
        console.log(to);
        console.log(from);
        next();
    },
    beforeRouteLeave:(to,from,next)=>{
        console.log(to);
        console.log(from);
        next();
    },
    // computed:{
    //     counts(){
    //         console.log(this);
    //         return this.$store.state.count;
    //     }
    // }
    // computed:mapState({
    //     counts:state=>state.count
    // }),
    computed:{
        ...mapState({
            counts:state=>state.count
        }),
        // jisuanVal(){
        //     return this.$store.getters.jisuan
        // }
        
    },
    mounted(){
       
    }
}
</script>
<style>
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
