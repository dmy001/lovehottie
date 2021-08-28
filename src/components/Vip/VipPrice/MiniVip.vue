<template>
  <div>
    <div class="MiniVip flex border h-full items-center">
      <div
        class="left flex justify-between"
        :class="{ active: selectIndex === 0}"
        @click="changeSelectId()"
      >
        <div class="ml-12">
          <p>7{{ $trans('天') }}</p>
          <p class="text-xl whitespace-nowrap">
            <strong> US$1.4<span class="text-sm">/{{ $trans('天') }}</span></strong>
          </p>
        </div>
        <div class="ml-40 w-36">
          <p class="price">{{ $trans('费用') }}US$9.9</p>
          <div class="select-btn" style="display: inline-block">
            <span class="sel-0" v-show="!(selectIndex === 0)"
              >{{ $trans('选择') }}</span
            >
            <span class="sel-1">{{ $trans('已选') }}</span>
          </div>
        </div>
      </div>
      <div
        class="
          right
          text-base-color4
          w-48
          h-full
          border-l
          flex flex-col
          justify-center
        "
      >
        <p>{{ $trans('LoveHottie会员') }}</p>
        <p>{{ $trans('畅爽体验') }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {   
    selectIndex: Number,
  },
  data(){
    return {}
  },
  methods:{
    // 选择商品，
    /**
    * 发送mini会员的id
    * 
    * 向支付组件发送价格9.9
    * @param {*} index 下标
    */
    changeSelectId() {
      this.$emit("changeSelectId", 0);
      this.$emit("getPrice", "9.9");
    },
  }
};
</script>

<style lang='scss' scoped>
@import "@styles/vips.scss";

.MiniVip {
  width: 756px;
  height: 121px;
  .left {
    width: 567px;
    padding: 34px;
  }
}
.active {
  background-color: white !important;
  box-shadow: 0 0 10px #999;
}
</style>