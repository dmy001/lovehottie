<template>
  <div class="bg-white">
    <div class="w-11/12 h-9 bg-yellow-100 flex items-center pl-5">
      剩余字符：<span class="text-yellow-500 font-bold">0个</span>字符
      <div class="ml-4">VIP人物：</div>
      <span class="text-yellow-500 font-bold">0</span>
      <div class="ml-1">
        | 翻译包：<span class="text-yellow-500 font-bold">0</span>
      </div>
    </div>
    <div class="w-11/12 border mt-5 grid grid-cols-3"
 >
      <div
        v-for="(item, index) in list"
        :key="index"
        class="border bg-no-repeat bg-left-top"
        @click="changeColor(index)"
        :class="{ 'bg-yellow-100': index === selectedIndex }"
        :style="{
        backgroundImage:index == 0 ? 'url(' + require('../../assets/images/mini.png') + ')':0,
      }"
      >
        <p class="text-yellow-500 font-bold text-2xl mt-10">{{ item.glod }}</p>
        <p class="mt-1 text-gray-500">人物</p>
        <p class="font-bold text-xl mt-2 mb-2 text-black">{{ item.money }}</p>
        <p class="text-yellow-500 text-xl">{{ item.save }}</p>
        <button
          class="mt-6 mb-3 text-sm border border-yellow-500 w-16 h-7 rounded-xl"
          :class="[
            index === selectedIndex
              ? 'text-white bg-yellow-500'
              : 'text-yellow-500',
          ]"
        >
          选择
        </button>
      </div>
      
      
      
    </div>
    <div>
      <PayInfo />
      <Discount />
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
        { glod: "500", money: "19.99美元", save: "节省10%" },
        { glod: "2,000", money: "69.99美元", save: "节省10%" },
        { glod: "5,000", money: "169.99美元", save: "节省5%" },
        { glod: "10,000", money: "299.99美元", save: "节省15%" },
        { glod: "20,000", money: "599.99美元", save: "节省15%" },
        { glod: "30,000", money: "799.99美元", save: "节省25%" },
      ],
      selectedIndex: 2,
    };
  },
  methods: {
    changeColor(index) {
      this.selectedIndex = index;
    },
  },
};
</script>