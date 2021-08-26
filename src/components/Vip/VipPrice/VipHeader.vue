<template>
  <div class="align-middle mt-10 mb-5">
      <i ref="bg" :class="bgClassName" class=" w-8 h-8 inline-block align-middle "></i>
      <span class="text-2xl align-middle">{{$trans(title)}}</span>
  </div>
</template>

<script>
export default {
    props:{
      title:{
        type:String,
        defalut:'Mini会员'
      },
      bgClassName:{
        type:String,
        default:"headerImg1"
      }
    },
}
</script>

<style lang ='scss' scoped>
.headerImg1{
  background: url("~@images/person/little1.png") -75px -1055px no-repeat;
}
.headerImg2{
  background: url("~@images/person/little1.png") -75px -1088px no-repeat;
}
.headerImg3{
  background: url("~@images/person/little1.png") -75px -1122px no-repeat;
}


</style>