<template>
  <div class="bg-white vip">
    <div
      class="nav flex w-full bg-white rounded-px8 mt-px15 text-sm border-b"
    >
      <div
        v-for="(item, index) in list"
        :key="index"
        class="nav-item ml-2"
        :class="{ active: index === currentIndex,'text-xs':textlitle,'text-sm':textlitle}"
        @click="goClick(index, item.path)"
      >
  <!-- 多语言  根据语言选择不同的字体大小 宽度不固定 -->
        {{ $trans(item.name) }}
      </div>
    </div>
    <router-view class="ml-16 mt-5 mr-10"></router-view>
  </div>
</template>

<script>
import i18n from "../../i18n";

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
      currentIndex: 0,
      textlitle:false,
      textbig:false
    };
  },
  methods: {
    goClick(index, path) {
      console.log(path);
      this.currentIndex = index;
      this.$router.push(path);
    },
  },
  mounted() {
    // <!-- 多语言 根据语言选择字号  -->
    if (i18n.locale === "es-es"||i18n.locale === "de-de"||i18n.locale === "ruru") {
      this.textlitle = true
    } else this.textbig = true;
  },
};
</script>

<style lang="scss" scoped>
.vip {
  .nav {
    .nav-item {
      height: 48px;
      line-height: 48px;
    }
    div:nth-child(9) {
      margin-left: auto;
      margin-right: 30px;
    }
  }
}
.active {
  border-bottom: 2px solid #e63561;
}
</style>