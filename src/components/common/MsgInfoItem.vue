<template>
  <div class="flex text-px14 text-gray-800 item-container m-px15">
    <div class="flex justify-start">
      <img
        class="rounded-1/2 head-icon"
        :src="imgbaseurl + 'images/default/male.png'"
      />
      <div class="user-info">
        <span>你是人间四月天、</span><br />
        <span>2010.03.31</span>
      </div>
    </div>
    <div class="text-black">访问了您的主页</div>
  </div>
</template>

<script>
export default {
  name: "MsgInfoItem",
  data() {
    return {
      imgbaseurl: "https://images.gagahi.com/",
    };
  },
};
</script>

<style lang="scss" scoped>
.item-container {
  border-bottom: 1px dashed gray;
}
.head-icon {
  width: 30px;
  height: 30px;
}
.user-info {
  margin-left: 8px;
}
</style>