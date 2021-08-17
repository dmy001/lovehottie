<template>
  <div class="pay">
    <p class="text-left header">
      选择支付方式:
      <span class=""
        >（温馨提示：1金币仅需1美元，为避免到账延迟，请勿选择电子支票。）</span
      >
    </p>
    <hr />
    <div class="flex payBtn my-5">
      <!-- 整合成一个 -->
      <div
        class="zfb border px-8 py-2 rounded-md"
        :class="{ active: value == true }"
        @click="changePay"
      >
        <img src="../../../assets/images/zfb.png" alt="" />
        <i v-show="value == true" class="inline-block"></i>
      </div>
      <div
        class="daller ml-8 border px-8 py-2 rounded-md"
        :class="{ active: value == false }"
        @click="changePay"
      >
        <img src="../../../assets/images/daller.png" alt="" />
        <i v-show="value == false" class="inline-block"></i>
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
        <span class="text-base">Pay Later</span>
      </div>
      <div class="border">
        <img
          class="mx-auto pt-2 inline-block align-middle"
          src="../../../assets/images/xinyongka.svg"
          alt=""
        />
        <span class="text-base leading-8 align-middle">借记卡或信用卡</span>
        <!-- 字和图片不居中 -->
      </div>
      <div>
    <span class="text-xs">  技术支持提供方 ：</span><img class="inline-block" src="../../../assets/images/PayPal.svg" alt="" />
    </div>
    </div>

    
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: false,
    };
  },
  methods: {
    changePay() {
      this.value = !this.value;
    },
  },
};
</script>

<style lang='scss' scoped>
.pay {
  margin-top: 20px;
  .header {
    span {
      color: #f8a00f;
    }
  }
  .payBtn {
    .zfb {
      position: relative;
      i {
        position: absolute;
        right: -8px;
        bottom: -8px;
        width: 21px;
        height: 21px;
        background: url("~@images/person/little1.png") -0px -201px no-repeat;
      }
    }
    .daller {
      position: relative;
      i {
        position: absolute;
        right: -8px;
        bottom: -8px;
        width: 21px;
        height: 21px;
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
      img{
        width: 50px;
        height:16px;
      }
    }
  }
}
.active {
  background-color: rgb(255, 243, 217);
  border: 1px solid rgb(250, 188, 63);
}
</style>