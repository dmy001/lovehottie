<template>
  <div>
    <div class="text-left w-full   text-sm">
      <p class="text-left">优惠券</p>
      <hr />
      <!-- 对号不显示 -->
     <div class="my-5"> <i class="w-5 h-5 rounded-full inline-block"></i><span>无可用优惠券</span
      ><span class="descrip">（会员优惠券仅限金币支付使用）</span></div>
      <hr />

      <p class="text-right mt-8">订单金额：499</p>
      <!-- 499加颜色 -->
      <p class="text-right mt-4 mb-8">实付金额:<span class="descrip">499</span></p>
      <hr />
      <button class=" w-32 h-10 text-base my-16">立即升级</button>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang='scss' scoped>
hr{
  border-style: dotted;
}
.descrip{
  color: #f8a00f;
}
i {
  background-image: url("../../../assets/images/nocounpon_ischecked.jpg")
  no-repeat;
  background-color: rgb(203, 203, 203);
}
button{
  background-color: #ff625a;
  color: white;
  border-radius:30px ;
  margin-left: 300px;
}
</style>