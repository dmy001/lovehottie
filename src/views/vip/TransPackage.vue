<template>
  <div class="bg-white transPackage">
    <div class="w-11/12 h-9 bg-yellow-100 flex items-center pl-5">
      剩余字符：<span class="text-yellow-500 font-bold">0个</span>字符
      <div class="ml-4">VIP人物：</div>
      <span class="text-yellow-500 font-bold">0</span>
      <div class="ml-1">
        | 翻译包：<span class="text-yellow-500 font-bold">0</span>
      </div>
    </div>
    <div class="w-11/12 border mt-5 grid grid-cols-3">
      <div
        v-for="(item, index) in list"
        :key="index"
        class="border bg-no-repeat bg-left-top site"
        @click="changeColor(index)"
        :class="[
          index === selectedIndex
            ? 'bg-yellow-100 shadow-2xl border-l-0 border-t-0 border-yellow-300'
            : 'bg-white',
        ]"
        :style="{
          backgroundImage:
            index == 0
              ? 'url(' + require('../../assets/images/mini.png') + ')'
              : 0,
        }"
      >
        <p :class="{ rightGb: index === selectedIndex }"></p>
        <p class="text-yellow-500 font-bold text-2xl mt-10">{{ item.glod }}</p>
        <p class="mt-1 text-gray-500">人物</p>
        <p class="font-bold text-xl mt-2 mb-2 text-black">
          {{ item.money }}美元
        </p>
        <p class="text-yellow-500 text-xl mb-6">{{ item.save }}</p>
        <p
          class="choose pt-0.5 text-sm border border-yellow-500 rounded-xl"
          :class="[
            index === selectedIndex
              ? 'text-white bg-yellow-500'
              : 'text-yellow-500',
          ]"
        >
          选择
        </p>
      </div>
    </div>
    <div>
      <PayInfo />
      <Discount :price="currentPrice" />
      <payButton payType="现在买" />
    </div>
  </div>
</template>

<script>
import PayInfo from "@components/vip/PayInfo/PayInfo.vue";
import Discount from "@components/vip/PayInfo/Discount.vue";
import payButton from "@components/vip/PayInfo/payButton.vue";
export default {
  components: {
    PayInfo,
    Discount,
    payButton,
  },
  data() {
    return {
      list: [
        { glod: "500", money: "19.99", save: "节省10%" },
        { glod: "2,000", money: "69.99", save: "节省10%" },
        { glod: "5,000", money: "169.99", save: "节省5%" },
        { glod: "10,000", money: "299.99", save: "节省15%" },
        { glod: "20,000", money: "599.99", save: "节省15%" },
        { glod: "30,000", money: "799.99", save: "节省25%" },
      ],
      selectedIndex: 2,
      currentPrice: "",
    };
  },
  methods: {
    changeColor(index) {
      this.selectedIndex = index;
      this.currentPrice = this.list[index].money;
    },
  },
};
</script>
<style lang='scss'>
.transPackage {
  .site {
    position: relative;
  }
  .rightGb {
    position: absolute;
    width: 21px;
    z-index: 1;
    height: 21px;
    background: url("~@images/person/little1.png") 0 -201px no-repeat;
    top: -6px;
    right: -5px;
  }
  .choose{
    width:60px;
    height:28px;
    margin:17px auto;
  }
}
</style>