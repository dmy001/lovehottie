<template>
  <div>
    <div class="MiniVip flex border h-full items-center">
      <div class="left flex justify-between">
        <div class="ml-12">
          <p>7天</p>
          <p class="text-xl whitespace-nowrap">
            <strong> US$1.4<span class="text-sm">/天</span> </strong>
          </p>
        </div>
        <div class="flex ml-40 w-36">
          <!-- p标签如何跟button对齐 -->
          <p class="price"><strong> 费用US$9.9</strong></p>
          <button class="border w-14 h-7 rounded-xl">选择</button>
        </div>
      </div>
      <div class="right w-48 h-full border-l pt-10">
        <!-- 给父元素设置padding-top, 会传到子元素上    -->
        <!-- 两行文字垂直居中 -->
        <p class="">LoveHottie会员</p>
        <p>畅爽体验</p>
      </div>
    </div>
    <div class="VIP flex relative">
      <i class="absolute inline-block"></i>
      <div class="border content-item">
        <p class="text-base">12个月</p>
        <p class="text-px20">US$124.91/月</p>
        <p class="text-px18">节省40%</p>
        <p class="text-px14">费用US$1499</p>
        <button class="border w-14 h-7 rounded-xl">选择</button>
      </div>
      <div class="border content-item">
        <p class="text-base">12个月</p>
        <p class="text-px20">US$124.91/月</p>
        <p class="text-px18">节省40%</p>
        <p class="text-px14">费用US$1499</p>
        <button class="border w-14 h-7 rounded-xl">选择</button>
      </div>
      <div class="border content-item">
        <p class="text-base">12个月</p>
        <p class="text-px20">US$124.91/月</p>
        <p class="text-px18">节省40%</p>
        <p class="text-px14">费用US$1499</p>
        <button class="border w-14 h-7 rounded-xl">选择</button>
      </div>
      <div class="border content-item">
        <p class="text-base">12个月</p>
        <p class="text-px20">US$124.91/月</p>
        <p class="text-px18">节省40%</p>
        <p class="text-px14">费用US$1499</p>
        <button class="border w-14 h-7 rounded-xl">选择</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang='scss'>
.MiniVip {
  width: 756px;
  height: 121px;
  .left {
    width: 567px;
    button {
      color: #ff8a00;
      border-color: #ff8a00;
    }
  }
  .right {
    // line-height: 121px;
    background: #fffcf6;
    color: #999999;
  }
}
.VIP {
  i {
    width: 54px;
    height: 54px;
    left: -20px;
    top: -20px;
    background: url("../../../assets/images/person/little1.png") no-repeat -56px -1158px;
  }
  .content-item {
    width: 188px;
    height: 248px;
    background: #fffcf6;
    p:nth-child(1) {
      margin-top: 20px;
      color: #ff8a00;
    }
    p:nth-child(2) {
      margin-top: 10px;
      font-size:20px ;
      font-weight: 600;
    }
    p:nth-child(3) {
      margin-top: 15px;
      color: #ff8a00;
      font-size: 18px;
    }
    p:nth-child(4) {
      margin-top: 40px;
      font-weight: 700;
      font-size: 12px;
    }
    button {
      margin-top: 10px;
      color: #ff8a00;
      border-color: #ff8a00;
    }
    
  }
}
</style>

