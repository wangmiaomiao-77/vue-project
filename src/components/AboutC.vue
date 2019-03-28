<template>
  <div class="aboutC">
     <mt-field label="childC" 
        v-model="$attrs.messageC"
        @input='getCData($attrs.messageC)'>
      </mt-field>
  </div>
</template>

<script>
export default {
  name: 'aboutC',
  data(){
    return {
    }
  },
  props: {
    msg: String,
    actionMsg:String
  },
  methods:{
    getCData(val){
      this.$emit('parentGetCData',val);
    }
  }
}
</script>

