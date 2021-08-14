<template>
  <div class="bg-white">
    <div class="flex w-full bg-white rounded-px8 mt-px15 h-10 leading-10 ">
      <div  class="ml-5 text-base leading-10" @click="goUpgradeVip">升级会员</div> 
      <!-- :class="{active:selected}" -->
      <div class="ml-5" @click="goRechargeGold">充值金币</div>
      <div>翻译VIP</div>
      <div>翻译包</div>
      <div>充值记录</div>
    </div>
    <router-view class="ml-16 mt-5"></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    goUpgradeVip() {
      this.$router.push({ path: "/home/vip/UpgradeVip" });
    },
    goRechargeGold() {
      this.$router.push({ path: "/home/vip/RechargeGold" });
    },
  },
};
</script>

<style lang="scss">
// .selected{
//   border-bottom: 1px solid red ;
// }
</style>