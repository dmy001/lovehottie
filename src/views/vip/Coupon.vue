<template>
  <div class="bg-white">
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
      <p class="mt-4 mb-2 ml-4 text-xs text-black">没有优惠券</p>
      <p class="mb-10 ml-4 text-xs text-black">去充值领券</p>
      <router-link to="/home/vip/RechargeGold">
        <button class="w-36 h-10 ml-5 border rounded-3xl bg-red-400 text-white">
          去充值
        </button>
      </router-link>
    </div>
    <div v-show="!isShowList" class="text-left text-gray-800 mt-16 pb-16">
      <div>
        <p class="text-gray-700 font-bold">优惠券使用说明：</p>
        <div class="mt-4 mb-3 flex flex-row">
          <p class="w-5 h-5 bg-gray-200 rounded-full pl-1.5 mr-1">1</p>
          <p>优惠券只能与LoveHottie中的金币一起使用。</p>
        </div>
        <div class="flex flex-row">
          <p class="w-5 h-5 bg-gray-200 rounded-full pl-1.5 mr-1">2</p>
          <p>每次购买，您只能使用一张优惠券。</p>
        </div>
        <div class="mt-3 mb-3 flex flex-row">
          <p class="w-5 h-5 bg-gray-200 rounded-full pl-1.5 mr-1">3</p>
          <p>优惠券只能用于购买相应的商品。</p>
        </div>
        <div class="flex flex-row">
          <p class="w-5 h-5 bg-gray-200 rounded-full pl-1.5 mr-1">4</p>
          <p>如果商品价值低于优惠券价值，优惠券将直接被使用，无需更改。</p>
        </div>
        <div class="mt-3 mb-3 flex flex-row">
          <p class="w-5 h-5 bg-gray-200 rounded-full pl-1.5 mr-1">5</p>
          <p>在LoveHottie购买东西、参加活动或充值，都可以获得优惠券。</p>
        </div>
        <div class="flex flex-row">
          <p class="w-5 h-5 bg-gray-200 rounded-full pl-1.5 mr-1">6</p>
          <p>优惠券过期无效，无法使用优惠券在LoveHottie购买商品。</p>
        </div>
      </div>
      <div class="mt-8">
        <p class="text-gray-700 font-bold">各类优惠券使用规则：</p>
        <button class="w-16 h-5 bg-gray-200 rounded-xl text-black mt-1 mb-1">
          会员券
        </button>
        <p class="mb-2">① 价值30金的VIP优惠券可用于购买VIP会员；</p>
        <p>②价值3金的Senior优惠券可用于购买Senior会员；</p>
        <button class="w-20 h-5 bg-gray-200 rounded-xl text-black mt-1 mb-2">
          虚拟礼券
        </button>
        <p>价值2金的虚拟礼券可用于购买价值4金或以上的虚拟礼品。</p>
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