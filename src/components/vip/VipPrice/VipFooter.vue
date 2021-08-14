<template>
  <div class="VipFooter">
    <div class="text-left">
      <h3 class="font-bold py-4">成为VIP会员，您可享受很多特权 :</h3>
      <div>
        <i class="inline-block align-middle footerImg"></i>
        <span class="align-middle">1500/天免费翻译字符</span>
      </div>
    </div>

    <div class="downArr">
      <p>查看更多特权</p>
      <i class="inline-block"></i>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.VipFooter {
  position: relative;
  height: 169px;
  border: 1px solid;
  .footerImg {
    width: 18px;
    height: 12px;
    background: url("~@images/person/little1.png") -100px -1038px no-repeat;
  }
  .downArr {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: -20px;
    i {
      width: 30px;
      height: 30px;
      background: url("~@images/person/little1.png") -80px -870px no-repeat;
    }
  }
}
</style>