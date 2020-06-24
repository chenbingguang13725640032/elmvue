<template>
  <van-rate
  :value=rating
  :size="4"
  allow-half
  color="#ee0a24"
  void-color="#eee"
  void-icon="star"
/>
</template>

<script>
export default {
    name:"rate",
    data(){
        return {
            
        }
    },
    props:{
      "rating":{
        type:Number
      }
    },
    created(){
    
    },
    methods:{

    }
}
</script>

<style lang="less" scoped>

</style>