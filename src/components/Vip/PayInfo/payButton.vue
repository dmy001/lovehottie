<template>
  <div>
      <button class=" w-32 h-10 text-base my-16">{{$trans(payType)}}</button>
  </div>
</template>

<script>
export default {
    props:{
        payType:String
    }
}
</script>

<style lang='scss' scoped>
button{
  background-color: #ff625a;
  color: white;
  border-radius:30px ;
  outline: none;
}
</style>