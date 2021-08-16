<template>
  <div class="translateVip">
    <div class="header text-left">
      <span class="align-middle text-px14">您账户可用翻译VIP: 0 min</span>
    </div>
    <div class="content flex border w-full">
      <div class="left border w-2/3">
        <div class="top flex">
          <div class="border content-item">
            <i class="inline-block"></i>
            <p class="text-px20">20</p>
            <p class="text-px18">US$20 (CN¥120)</p>
            <button class="">选择</button>
          </div>
          <div class="border content-item">
            <i class="inline-block"></i>
            <p class="text-px20">20</p>
            <p class="text-px18">US$20 (CN¥120)</p>
            <button class="">选择</button>
          </div>
          <div class="border content-item">
            <i class="inline-block"></i>
            <p class="text-px20">20</p>
            <p class="text-px18">US$20 (CN¥120)</p>
            <button class="">选择</button>
          </div>
        </div>
        
      </div>

      <div class="right w-1/3">
        
        <p class="mt-5">
          <i class="inline-block"></i><span>在翻译会员有效时长内可无限免费使用平台内翻译，包含聊天翻译、动态翻译、探索翻译等；</span>
        </p>
        <p class="mt-5">
          <i class="inline-block"></i
          ><span>翻译会员生效时间，以购买完成为开始，相应时长后结束。</span>
        </p>
        
      </div>
    </div>
    <PayInfo/>
  </div>
</template>

<script>
import PayInfo from '@components/vip/PayInfo/PayInfo.vue'
export default {
  components:{
    PayInfo,
  }
};
</script>


<style lang='scss'>
.translateVip{
  .right{
     i {
        width: 8px;
        height: 16px;
        background: url("~@images/person/little1.png") -100px -1038px no-repeat;
      }
  }
}
</style>