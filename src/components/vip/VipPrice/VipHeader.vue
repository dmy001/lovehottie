<template>
  <div class="align-middle mt-5 mb-5">
      <i class="headerImg inline-block align-middle"></i>
      <span class="text-2xl align-middle">{{title}}</span>
  </div>
</template>

<script>
export default {
    props:{
      title:{
        type:String,
        defalut:'Mini会员'
      }
    },
    data(){
      return {}
    }
}
</script>

<style lang ='scss' scoped>
.headerImg{
  width: 30px;
  height: 30px;
   background: url("~@images/person/little1.png") -75px -1055px no-repeat;
}
</style>