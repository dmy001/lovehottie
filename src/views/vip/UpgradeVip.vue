<template>
  <div>
    <div class="flex">
        <vip/>
    </div>
    <PayInfo/>
    <Discount/>
  </div>
</template>

<script>
import vip from '@components/vip/index.vue'
import PayInfo from '@components/vip/PayInfo/PayInfo.vue'
import Discount from '@components/vip/PayInfo/Discount.vue'

export default {
    components:{
        vip,
        PayInfo,
        Discount
    }
};
</script>

<style>
</style>