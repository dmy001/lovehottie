<template>
  <div class="bg-white transPackage">
    <div class="h-9 bg-yellow-100 flex items-center pl-5">
      {{$trans('您账户可用字符数：')}}<span class="text-yellow-500 font-bold mr-1">0</span
      >{{$trans('字符')}}
      <div class="ml-4">VIP{{$trans('字符')}}：</div>
      <span class="text-yellow-500 font-bold">0</span>
      <div class="ml-1">
        | {{$trans('翻译包')}}：<span class="text-yellow-500 font-bold">0</span>
      </div>
    </div>
    <div class="border mt-5 grid grid-cols-3">
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
        <p class="text-yellow-500 font-bold text-2xl mt-10">{{ item.char }}</p>
        <p class="mt-1 text-gray-500">{{$trans('字符')}}</p>
        <p class="font-bold text-xl mt-2 mb-2 text-black">${{ item.money }}</p>
        <p class="text-yellow-500 text-xl mb-6">{{$trans('节省')}}{{ item.save }}</p>
        <p
          v-if="!(index === selectedIndex)"
          class="
            choose
            pt-0.5
            text-sm
            border border-yellow-500
            rounded-xl
            text-yellow-500
          "
        >
          选择
        </p>
        <p
          v-else
          class="choose pt-0.5 text-sm border border-yellow-500 rounded-xl"
          :class="[
            index === selectedIndex
              ? 'text-white bg-yellow-500'
              : 'text-yellow-500',
          ]"
        >
          {{$trans('已选')}}
        </p>
      </div>
    </div>
    <div>
      <PayInfo />
      <Discount :price="currentPrice" />
      <PayButton payType="立即购买" />
    </div>
  </div>
</template>

<script>
import PayInfo from "@components/Vip/PayInfo/PayInfo.vue";
import Discount from "@components/Vip/PayInfo/Discount.vue";
import PayButton from "@components/Vip/PayInfo/payButton.vue";
export default {
  components: {
    PayInfo,
    Discount,
    PayButton,
  },
  data() {
    return {
      list: [
        { char: '500', money: 19.99, save: '10%'},
        { char: '2,000', money: 69.99, save: '10%'},
        { char: '5,000', money: 169.99, save: '5%' },
        { char: '10,000', money: 299.99, save: '15%' },
        { char: '20,000', money: 599.99, save: '15%' },
        { char: '30,000', money: 799.99, save: '25%' },
      ],
      selectedIndex: 2,
      currentPrice: "",
    };
  },
  methods: {
    /**
    * 改变下标
    * 
    * 向支付组件发送价格
    * @param {*} index 下标
    */
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
  .choose {
    width: 60px;
    height: 28px;
    margin: 17px auto;
  }
}
</style>