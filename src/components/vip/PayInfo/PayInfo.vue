<template>
  <div class="pay">
    <p>
      选择支付方式:（温馨提示：1金币仅需1美元，为避免到账延迟，请勿选择电子支票。）
    </p>
    <hr />
    <div class="flex">
      <div class="zfb border">
        <img src="../../../assets/images/zfb.png" alt="" />
      </div>
      <div class="daller border">
        <img src="../../../assets/images/daller.png" alt="" />
      </div>
    </div>
    <div class="paypal border"><img src="../../../assets/images/PayPal.svg" alt="" /></div>
    <div class="paypal border"><img src="../../../assets/images/payLater.svg" alt="" /></div>
    <div class="paypal border">
      <img src="../../../assets/images/xinyongka.svg" alt="" />
    </div>
    <div>
      技术支持提供方 ：<img src="../../../assets/images/PayPal.svg" alt="" />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang='scss'>
.pay {
  .zfb .daller {
    width: 140px;
    height: 40px;
    //    background-color: orange;
  }
  .paypal{
      width: 325px;
      height: 45px;
      
  }
  
}
</style>