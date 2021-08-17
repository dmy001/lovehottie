<template>
  <div>
    <div class="flex flex-col">
        <VipPrice/>
        <VipPrice/>
        
    </div>
    <PayInfo/>
    <Discount/>
  </div>
</template>

<script>
import VipPrice from '@components/vip/VipPrice/index.vue'
import PayInfo from '@components/vip/PayInfo/PayInfo.vue'
import Discount from '@components/vip/PayInfo/Discount.vue'

export default {
    components:{
        VipPrice,
        PayInfo,
        Discount
    }
};
</script>

<style>
</style>