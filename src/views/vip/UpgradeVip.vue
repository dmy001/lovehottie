<template>
  <div>
    <div class="flex flex-col">
      <VipHeader title="Mini会员"  />
      <VipContent />
      <VipFooter />
      <VipHeader title="VIP会员" />
      <VipContent />
      <VipFooter />
      <VipHeader title="高级会员"  />
      <VipContent />
      <VipFooter />
    </div>
    <PayInfo />
    <Discount />
  </div>
</template>

<script>
import PayInfo from "@components/vip/PayInfo/PayInfo.vue";
import Discount from "@components/vip/PayInfo/Discount.vue";
import VipHeader from "@components/vip/VipPrice/VipHeader.vue";
import VipContent from "@components/vip/VipPrice/VipContent.vue";
import VipFooter from "@components/vip/VipPrice/VipFooter.vue";
export default {
  components: {
    VipHeader,
    VipContent,
    VipFooter,
    PayInfo,
    Discount,
  },
  data() {
    return {}
  },
};
</script>

<style>
</style>