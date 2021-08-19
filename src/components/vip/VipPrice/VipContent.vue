<template>
  <div>
    <div
      v-if="priceType === 'Mini会员'"
      class="MiniVip flex border h-full items-center"
    >
      <div
        class="left flex justify-between"
        :class="{ active: selected == false }"
      >
        <div class="ml-12">
          <p>7天</p>
          <p class="text-xl whitespace-nowrap">
            <strong> US$1.4<span class="text-sm">/天</span> </strong>
          </p>
        </div>
        <div class="ml-40 w-36">
          <p class="price">费用US$9.9</p>
          <div class="select-btn" style="display: inline-block">
            <span class="sel-0">选择</span>
            <span class="sel-1">已选</span>
          </div>
        </div>
      </div>
      <div class="right w-48 h-full border-l flex flex-col justify-center">
        <p>LoveHottie会员</p>
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
        <p class="text-20px">US${{ item.price }}/月</p>
        <p class="text-28px">节省{{ item.save }}%</p>
        <p class="text-14px">费用US${{ item.priceTotle }}</p>
        <div class="select-btn" style="display: inline-block">
          <span class="sel-0">选择</span>
          <span class="sel-1">已选</span>
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
      selected:false,
    };
  },
  methods: {
    changeColor(index) {
      this.currentIndex = index;
      console.log(this.list[index].price);
      this.$emit('getPrice',this.list[index].price)

    },
    
  },
  // mounted(){
  //   console.log(this.list);
  // }
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
    padding: 34px;
  }
  .right {
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

