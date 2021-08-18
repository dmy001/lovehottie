<template>
  <div class="bg-white">
    <div class="flex w-full bg-white rounded-px8 mt-px15 h-10 leading-10 border-b">
      <!-- v-for循环出click 只能用组件名字，路径无法使用 -->
      <div   
        v-for="(item, index) in list"
        :key="index"
        class="ml-5 w-16  text-base leading-10"
        :class="{active:index == currentIndex }"
        @click="goClick(index, item.path)"
      >
        {{ item.name }}
      </div>
    </div>
    <router-view class="ml-16 mt-5"></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [
        { name: "升级会员", path: "UpgradeVip" },
        { name: "充值金币", path: "RechargeGold" },
        { name: "翻译VIP", path: "TranslateVip" },
        { name: "翻译包", path: "TransPackage" },
        { name: "充值记录", path: "" },
        { name: "打赏记录", path: "RewardRecord" },
        { name: "特权说明", path: "" },
        { name: "优惠券", path: "" },

        
      ],
      currentIndex:0,
    };
  },
  methods: {
    goClick(index, path){
      this.currentIndex = index
      this.$router.push(path);
    },
  },
  mounted() {
    this.$router.push({ path: "/home/vip/UpgradeVip" });
  },
};
</script>

<style lang="scss" scoped>
.active{
border-bottom:2px solid #e63561 ;
}
</style>