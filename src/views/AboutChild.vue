<template>
    <div class="admins">
        about child

        <mt-field label="username" 
            v-model="mymessage"
            @input='getData(mymessage)'>
        </mt-field>
        <!-- 
            1.C组件中能够触发parentGetCData的原因：B组件在调用C组件时使用v-on绑定了$listeners属性
            2.通过v-bind绑定$attrs属性,C组件可以直接获取到A组件中传递下来的props,但是除了B组件中props声明的
        -->
       <AboutC v-bind="$attrs" v-on="$listeners"></AboutC>
    </div>
</template>
<script>
import AboutC from '@/components/AboutC';
export default {
    name:'admins',
    data(){
        return {
            mymessage:this.message,
            other:'other'
        }
    },
    components:{
        AboutC
    },
    props:{
        value:String,
        message:String
    },
    methods:{
        getData(val){
            this.$emit('parentGetData',val);
        }
    }
}
</script>

