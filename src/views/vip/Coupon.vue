<template>
  <div class="bg-white coupon">
    <div class="w-11/12 text-right mt-9">
      <span :class="{ 'text-pink-600': isShowList }" @click="isShowList = true"
        >列表</span
      >
      |
      <span
        :class="{ 'text-pink-600': !isShowList }"
        @click="isShowList = false"
        >使用规则</span
      >
    </div>
    <div v-show="isShowList" class="mt-36 pb-72">
      <div align="center">
        <img class="w-24" src="../../assets/images/nocoupon.png" />
      </div>
      <p class="mt-4 mb-2 ml-4 text-xs text-black">没有优惠券哦~</p>
      <p class="mb-10 ml-4 text-xs text-black">去充值获取优惠券吧~</p>
      <router-link to="/home/vip/RechargeGold">
        <p class="recharge pt-1.5 border rounded-3xl text-white">
          去充值
        </p>
      </router-link>
    </div>
    <div v-show="!isShowList" class="text-left text-gray-800 mt-16 pb-16">
      <div>
        <p class="text-gray-700 font-bold">优惠券基本使用说明：</p>
        <div class="mt-4 mb-3 flex flex-row">
          <p class="w-5 h-5 bg-gray-200 rounded-full pl-1.5 mr-1">1</p>
          <p>优惠券在LoveHottie内仅限与金币搭配使用。</p>
        </div>
        <div class="flex flex-row">
          <p class="w-5 h-5 bg-gray-200 rounded-full pl-1.5 mr-1">2</p>
          <p>每次购买只能够使用一张优惠券。</p>
        </div>
        <div class="mt-3 mb-3 flex flex-row">
          <p class="w-5 h-5 bg-gray-200 rounded-full pl-1.5 mr-1">3</p>
          <p>对应的优惠券只能够在购买对应的商品使用。</p>
        </div>
        <div class="flex flex-row">
          <p class="w-5 h-5 bg-gray-200 rounded-full pl-1.5 mr-1">4</p>
          <p>商品的价值低于优惠券的价值，则直接使用优惠券而不找零</p>
        </div>
        <div class="mt-3 mb-3 flex flex-row">
          <p class="w-5 h-5 bg-gray-200 rounded-full pl-1.5 mr-1">5</p>
          <p>优惠券获取方式通过LoveHottie的买赠，活动参与，充值等形式获取</p>
        </div>
        <div class="flex flex-row">
          <p class="w-5 h-5 bg-gray-200 rounded-full pl-1.5 mr-1">6</p>
          <p>优惠券过期作废，即不能够在购买LoveHottie内商品使用</p>
        </div>
      </div>
      <div class="mt-8">
        <p class="text-gray-700 font-bold">各类优惠券具体使用规则：</p>
        <button class="w-20 h-5 bg-gray-200 rounded-xl text-black mt-1 mb-1">
          会员优惠券
        </button>
        <p class="mb-2">① 价值为30金币的VIP会员优惠券可以购买任意VIP会员使用；</p>
        <p>②价值3金币的高级会员优惠券可以购买任意高级会员使用；</p>
        <button class="w-28 h-5 bg-gray-200 rounded-xl text-black mt-1 mb-2">
          虚拟礼物优惠券
        </button>
        <p>价值2金币的虚拟礼物优惠券，只能够在购买价值4金币以上虚拟礼物使用；</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isShowList: true,
      // isShowRule:false,
    };
  },
  methods: {
    // changeList(){
    //     this.isShowList=true;
    //     // this.isShowRule=false;
    // },
    // changeRule(){
    //     this.isShowList=false;
    //     // this.isShowRule=true;
    // }
  },
};
</script>
<style lang='scss'>
   .coupon{
      .recharge{
         width:158px;
         height:36px;
         margin-left:330px;
         background-color:#FF625A ;
      }
   }
</style>