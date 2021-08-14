<template>
  <div class="RechargeGold">
      <div class="header text-left ">
        <span class="align-middle text-px14">您账户可用金币数: 0 </span>
        <i class="inline-block align-middle"></i>
      </div>

      <div class="content flex border">
          <div class="left"></div>
          <div class="right"></div>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang='scss'>
.RechargeGold{
  .header{
    i{
        height: 20px;
        width: 20px;
        background: url("~@images/person/little1.png") 0px -500px no-repeat;
    }
  }
  .content{
    width: 747px;
    height: 458px;
    .left{

    }
    .right{
      width: 250px;
      height: 450px;
    }
    
  }
}
</style>