<template>
  <div>
        <VipHeader/>  
        <VipContent/>
        <VipFooter/>
  </div>
</template>

<script>
import VipHeader from "@components/vip/VipPrice/VipHeader.vue";
import VipContent from "@components/vip/VipPrice/VipContent.vue";
import VipFooter from "@components/vip/VipPrice/VipFooter.vue";
export default {
  components: {
    VipHeader,
    VipContent,
    VipFooter,
  },
};
</script>

<style>
</style>
