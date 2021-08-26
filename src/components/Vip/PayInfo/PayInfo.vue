<template>
  <div class="pay mt-5">
    <p class="text-left header">
      {{$trans('选择支付方式')}}:
      <span class="text-orangeFont"
        >（{{$trans('温馨提示：1金币仅需1美元，为避免到账延迟，请勿选择电子支票。')}}）</span
      >
    </p>
    <hr />
    <div class="flex payBtn my-5 justify-between">
      <div
        v-for="(item, index) in list"
        :key="index"
        v-show="(index==1&&isDaller=='true')||index!=1"
        class="zfb border px-8 py-2 rounded-md relative"
        :class="{ active: currentIndex == index }"
        @click="changePay(index)"
      >
        <img :src="item.src" alt="" />
        <i
          v-show="currentIndex == index"
          class="inline-block w-6 h-6 absolute -right-3 -bottom-3"
        ></i>
      </div>
    </div>
    <div class="paypal">
      <div class="border">
        <img
          class="mx-auto pt-2"
          src="../../../assets/images/PayPal.svg"
          alt=""
        />
      </div>
      <div class="border">
        <img
          class="mx-auto pt-2 inline-block"
          src="../../../assets/images/payLater.svg"
          alt=""
        />
        <span class="text-base">{{$trans('Pay Later')}}</span>
      </div>
      <div class="border">
        <img
          class="mx-auto inline-block align-middle"
          src="../../../assets/images/xinyongka.svg"
          alt=""
        />
        <span class="text-base leading-10 align-middle xinyongka">{{$trans('借记卡或信用卡')}}</span>
      </div>
      <div>
        <span class="text-xs "> {{$trans('技术支持提供方')}}：</span
        ><img
          class="inline-block"
          src="../../../assets/images/PayPal.svg"
          alt=""
        />
      </div>
    </div>
  </div>
</template>

<script>
import zfb from "../../../assets/images/zfb.png";

import daller from "../../../assets/images/daller.png";

export default {
  props:{
    isDaller:{
      type:String,
      default:"true"
    }
  },
  data() {
    return {
      list: [{ src: zfb }, { src: daller }],
      currentIndex: 0,
    };
  },
  methods: {
    changePay(index) {
      this.currentIndex = index;
    },
  },
};
</script>

<style lang='scss' scoped>
.pay {
  .payBtn {
    width: 332px;
    .zfb {
      i {
        background: url("~@images/person/little1.png") -0px -201px no-repeat;
      }
    }
  }
  .paypal {
    div {
      width: 332px;
      height: 45px;
      margin-top: 10px;
      background-color: rgb(255, 196, 57);
    }
    div:nth-child(3) {
      background-color: rgb(44, 46, 47);
      color: white;
    }
    div:nth-child(4) {
      background-color: white;
      color: rgb(123, 131, 136);
      img {
        width: 50px;
        height: 16px;
      }
    }
  }
}
.active {
  background-color: rgb(255, 243, 217);
  border: 1px solid rgb(250, 188, 63);
}
.xinyongka{
  position: static;
  visibility: visible;
  max-width: 0%;
  opacity: 0;
  overflow: hidden;
  animation: show-text 1s 0s forwards;
   
}
</style>