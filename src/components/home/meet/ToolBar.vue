<template>
  <div class="flex justify-between items-center p-px15 w-full bg-white">
    <div class="flex justify-center items-center text-px14">
      <img :src="STATICBASEURI + '/images/oy1.jpg'" />
      <span
        >已经有<span class="text-base-color2 font-bold">100</span
        >多个国家的用户</span
      >
      <a class="ml-px15 text-base-color2 cursor-pointer">邀请好友 >></a>
    </div>
    <div class="flex flex-row">
      <button
        class="flex justify-center items-center text-base-color4 text-px14 toolbar-btn"
      >
        精确筛选
      </button>
      <button
        class="flex justify-center items-center text-base-color4 text-px14 toolbar-btn"
      >
        推荐
      </button>
    </div>
  </div>
</template>


<style lang="scss" scoped>
.toolbar-btn {
  outline: none;
  width: 88px;
  height: 32px;
  margin-left: 8px;
  border: 1px solid $lineColor1;
  border-radius: 16px;
}
</style>