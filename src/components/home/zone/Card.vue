<template>
  <!-- <div class="waterfall-container"> -->
  <div class="zone-card-container m-px10 border-base-color4 inline-block">
    <div class="w-full">
      <div class="flex items-center p-px10">
        <img
          class="w-px30 h-px30 rounded-1/2"
          src="https://images.gagahi.com/A-942e2ce4e071d89e7d2afc0ab59d9416"
        />
        <div class="flex flex-col text-12px">
          <span class="text-base-color2">Jack</span>
          <span class="text-base-color4">中国</span>
        </div>
      </div>
      <div>
        <p class="m-px10 mt-0 text-left">Speak out when you love</p>
        <img :src="imgsrc" class="max-w-full" />
      </div>
      <!-- 评论  翻译图标 -->
      <div class="fun-icon">
        <div @click="showCmtSwith(i)">
          <i></i>
          <span class="ml-1 text-12px text-base-color4">1</span>
        </div>
        <div>
          <i></i>
          <span></span>
        </div>
      </div>
      <div class="zone-time text-base-color4 text-12px text-left ml-px15">
        04-08 13:16
      </div>
      <!-- 评论区域 -->
      <comment-block ref="cmtBlock"></comment-block>
    </div>
  </div>
  <!-- </div> -->
</template>

<script>
import CommentBlock from "@components/common/commentBlock.vue";
export default {
  components: {
    "comment-block": CommentBlock,
  },
  props: ["imgsrc"],
  data() {
    return {
      isShowCmtBtn: true,
      commentText: "",
    };
  },
  methods: {
    showCmtSwith(index) {
      this.$refs.cmtBlock[--index].commentIconCli();
    },
  },
};
</script>

<style lang="scss" scoped>
.waterfall-container {
  display: flex;
  flex-flow: column wrap;
  width: 100%;
}
.zone-card-container {
  width: 262px;
  margin: 5px 5px 5px 0px;
  border-radius: 3px;
  border: 1px solid $lineColor1;
}
.fun-icon {
  width: 100%;
  margin: 3px;
  @apply flex;
  & > div {
    margin-left: 15px;
    @apply flex items-center;
  }
  & > div i {
    background: url("~@images/dynamic.png") no-repeat;
    width: 20px;
    height: 20px;
    display: inline-block;
    cursor: pointer;
  }
  & > div:first-child i {
    background-position: -26px -48px;
  }
  & > div:last-child i {
    background-position: -54px -48px;
  }
}
</style>