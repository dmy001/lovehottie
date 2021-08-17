<template>
  <div class="align-middle mt-5 mb-5">
      <i ref="bg" class="headerImg1 inline-block align-middle "></i>
      <span class="text-2xl align-middle">{{title}}</span>
  </div>
</template>

<script>
export default {
    props:{
      title:{
        type:String,
        defalut:'Mini会员'
      },
      y:{
        type:Number,
      }
    },
    data(){
      return {
               
      }
    },
    mounted(){
      var bg = this.$refs.bg;
      bg.style.backgroundPosition="'-75px'+this.y+'px'"
    }
}
</script>

<style lang ='scss' scoped>
.headerImg1{
  width: 30px;
  height: 30px;
   background: url("~@images/person/little1.png") -75px -1055px no-repeat;
}


</style>