<template>
  <div>
    <div class="VIP flex relative">
      <div
        v-for="(item, index) in list"
        :key="index"
        :class="{ active: selectIndex === item.id }"
        @click="changeSelectId(item)"
        class="border content-item flex-auto"
      >
        <p class="text-base">{{ item.time }}</p>
        <p class="text-20px">US${{ item.price }}/{{ $trans("月") }}</p>
        <p class="text-28px">{{ $trans("节省") }}{{ item.save }}%</p>
        <p class="text-14px">{{ $trans("费用") }}US${{ item.priceTotle }}</p>
        <div class="select-btn" style="display: inline-block">
          <span class="sel-0" v-show="!(selectIndex === item.id)">{{
            $trans("选择")
          }}</span>
         <span class="sel-1" v-show="(selectIndex === item.id)">{{ $trans("已选") }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    list: {
      type: Array,
    },
    selectIndex: Number,
  },
  data() {
    return {
      currentIndex: 0,
    };
  },
  methods: {
    /**
    * 选中每项价格
    * 向父组件发送id
    * 向支付组件发送价格
    * @param {*} item  子项
    */
    changeSelectId(item) {
      this.$emit("changeSelectId", item.id);
      this.$emit("getPrice", item.priceTotle);
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

.VIP {
  .content-item {
    width: 188px;
    height: 248px;
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

