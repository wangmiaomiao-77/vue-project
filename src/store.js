import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {//访问状态对象
      count:7
  },
  mutations: {//触发状态（同步）
      add(state,n){
        state.count+=n;
      },
      reduce(state){
        state.count--;
      }
  },
  getters:{//计算属性
      //对state进行计算时
      jisuan(state){
        return state.count+=40
      }
  },
  actions: {//异步
      actionFun(context){
        console.log('异步请求中')
        setTimeout(function(){
          context.commit('add',5)
          console.log('异步请求结束')
        },2000)
      },
      asyncDecrease({commit}){
        commit('reduce')
      }
  }
})
