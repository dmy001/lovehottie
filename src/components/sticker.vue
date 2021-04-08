<!--
 * @Description: 表情组件
 * @Version: 1.0
 * @Autor: List
 * @Date: 2020-06-28 16:28:58
 * @LastEditors: liaotianhe
 * @LastEditTime: 2020-07-18 20:50:50
-->
<template>
<div>
   <span class="z-1000"></span>
   <div class="sticker z-100">
   
    <div class="emoji-content" >
      <img
        v-for="emojiIndex in 90"
        :key="emojiIndex"
        :src="`https://statics.gagahi.com/IM/img/qqFace/${emojiIndex - 1}.gif`"
        alt
        srcset
        class="emoji-item"
      />
    </div>
  </div>
</div>
  
</template>
<script>
export default {
  name: "Sticker",
  data() {
    return {
      currentStickerId: 0,
      showBuyPop: false,
    };
  },
  created() {},
  mounted() {},
  methods: {
    // 选中emoji
    selectEmoji() {},
  },
};
</script>

<style lang="scss" scoped>
  span {
    position: absolute;
    bottom: 30px;
    left: 10px;
    right: 14px;
    display: block;
    width: 15px;
    height: 10px;
    background: url('~@images/person/IMicon.png') -310px -82px no-repeat;
}
.sticker {
  min-height: 200px;
  width: 440px;
  border: 1px #e8e8e8 solid;
  border-radius: 5px;
  box-shadow: 0px 0px 5px #dfdfdf;
  background-color: #fff;
  position: absolute;
  bottom: 39px;
  right: 15px;

  .emoji-content {
    min-height: 182px;
    padding: 10px;
    .emoji-item {
      width: 24px;
      height: 24px;
      margin: 1px;
      float: left;
      cursor: pointer;
    }
  }
}
</style>
