<template>
  <div>
    <div class="top">
      <img
        :src="STATICBASEURI + '/images/default/female.png'"
        alt=""
        class="avatar"
      />
      <div class="topRight ml-px10">
        <div class="personName">
          可爱小怪咖
          <span class="inline-block"></span>
        </div>
        <div>
          <span>女，</span>
          <span>18，</span>
          <span>中国，</span>
          <span>GaGaID:40473864</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
};
</script>
<style lang="scss" scoped>
.top {
  width: 100%;
  background: #fff;
  height: 100px;
  padding: 20px;
  @apply flex flex-row items-center;
  .avatar {
    width: 60px;
    height: 60px;
    @apply rounded-1/2;
  }
  .topRight {
    font-size: 14px;
    @apply flex flex-col  text-left text-black;
    .personName {
      font-size: 16px;
      @apply text-base-color1;
      span {
        width: 20px;
        height: 20px;
        background: url("~@images/index/little.png") 0 -616px no-repeat;
        vertical-align: middle;
      }
    }
  }
}
</style>