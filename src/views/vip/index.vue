<template>
  <div class="bg-white vip">
    <div class="nav flex w-full bg-white rounded-px8 mt-px15 h-10 leading-10 border-b">
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
    <router-view class="ml-16 mt-5 mr-10"></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [
        { name: "升级会员", path: "/home/vip/UpgradeVip" },
        { name: "充值金币", path: "/home/vip/RechargeGold" },
        { name: "翻译VIP", path: "/home/vip/TranslateVip" },
        { name: "翻译包", path: "/home/vip/TransPackage" },
        { name: "充值记录", path: "RewardRecord" },
        { name: "打赏记录", path: "/home/vip/RechargeRecord" },
        { name: "特权说明", path: "DetailsPrivilege" },
        { name: "优惠券", path: "Coupon" },
        { name: "帮助", path: "Help" },

      ],
      currentIndex:0,
    };
  },
  methods: {
    goClick(index, path){
      console.log(path);
      this.currentIndex = index
      this.$router.push(path);
    },
  },
  
};
</script>

<style lang="scss" scoped>
.vip{
  .nav{
    div:nth-child(9){
      margin-left: auto;
    }
  }
}
.active{
border-bottom:2px solid #e63561 ;
}
</style>