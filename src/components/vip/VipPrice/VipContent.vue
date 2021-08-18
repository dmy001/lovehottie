<template>
  <div>
    <div
      v-if="priceType === 'Mini会员'"
      class="MiniVip flex border h-full items-center"
    >
      <div class="left flex justify-between">
        <div class="ml-12">
          <p>7天</p>
          <p class="text-xl whitespace-nowrap">
            <strong> US$1.4<span class="text-sm">/天</span> </strong>
          </p>
        </div>
        <div class="ml-40 w-36">
          <p class="price">费用US$9.9</p>
          <!-- <button class="border w-14 h-7 rounded-xl">选择</button> -->
          <div class="select-btn" style="display: inline-block">
            <span  class="sel-0">选择</span>
            <span  class="sel-1" >已选</span>
          </div>
        </div>
      </div>
      <div class="right w-48 h-full border-l flex flex-col justify-center">
        <!-- 给父元素设置padding-top, 会传到子元素上    -->
        <p >LoveHottie会员</p>
        <p>畅爽体验</p>
      </div>
    </div>
    <div v-if="priceType === 'VIP'" class="VIP flex relative">
      <i class="absolute inline-block"></i>
      <div
        v-for="(item, index) in list"
        :key="index"
        :class="{ active: index === currentIndex }"
        @click="changeColor(index)"
        class="border content-item"
      >
        <p class="text-base">{{ item.time }}</p>
        <p class="text-px20">US${{ item.price }}/月</p>
        <p class="text-px18">节省{{ item.save }}%</p>
        <p class="text-px14">费用US${{ item.priceTotle }}</p>
         <div class="select-btn" style="display: inline-block">
            <span  class="sel-0">选择</span>
            <span  class="sel-1" >已选</span>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    priceType: {
      type: String,
      default: "Mini会员",
    },
    list: {
      type: Array,
    },
  },
  data() {
    return {
      currentIndex: 0,
    };
  },
  methods: {
    changeColor(index) {
      this.currentIndex = index;
      // 1.0
      this.list.map((item) => {
        item.Ischange = "选择";
      });
      this.list[index].Ischange = "已选";
    },
  },
};
</script>

<style lang='scss' scoped>
@import "@styles/vips.scss";

.active {
  background-color: white !important;
  box-shadow: 0 0 10px #999;
}
.MiniVip {
  width: 756px;
  height: 121px;
  .left {
    width: 567px;
    button {
      color: #ff8a00;
      border-color: #ff8a00;
    }
  }
  .right {
    // line-height: 121px;
    background: #fffcf6;
    color: #999999;
  }
}
.VIP {
  i {
    width: 54px;
    height: 54px;
    left: -20px;
    top: -20px;
    background: url("../../../assets/images/person/little1.png") no-repeat -56px -1158px;
  }
  .content-item {
    width: 188px;
    height: 248px;
    background: #fffcf6;
    p:nth-child(1) {
      margin-top: 20px;
      color: #ff8a00;
    }
    p:nth-child(2) {
      margin-top: 10px;
      font-size: 20px;
      font-weight: 600;
    }
    p:nth-child(3) {
      margin-top: 15px;
      color: #ff8a00;
      font-size: 18px;
    }
    p:nth-child(4) {
      margin-top: 40px;
      font-weight: 700;
      font-size: 12px;
    }
    button {
      margin-top: 10px;
      color: #ff8a00;
      border-color: #ff8a00;
    }
  }
}
</style>

