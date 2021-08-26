<template>
  <div class="RechargeGold">
    <div class="header h-12 flex items-center pl-5">
      <span class="align-middle"> {{ $trans("您账户可用金币数") }}: </span>
      <span class="text-red-500 font-bold align-middle ml-2 text-18px">0</span>
      <i class="inline-block align-middle m-2"></i>
    </div>
    <div class="content flex border w-full mt-5">
      <div class="left w-2/3">
        <div class="top flex flex-wrap">
          <div
            v-for="(item, index) in list"
            :key="index"
            class="border content-item flex-auto"
            :class="{ active: index === currentIndex&&inputCount===false }"
            @click="changeColor(index)"
          >
            <i class="inline-block mt-4 gold"></i>
            <i
              class="inline-block absolute rightGb"
              v-show="index === currentIndex&&inputCount===false"
            ></i>
            <p class="text-3xl">{{ item.gold }}</p>
            <p class="text-xs mt-2">{{ item.money }}</p>
            <div class="select-btn mt-4" style="display: inline-block">
              <span class="sel-0" v-show="!(index === currentIndex&&inputCount===false)">{{
                $trans("选择")
              }}</span>
              <span class="sel-1">{{ $trans("已选") }}</span>
            </div>
          </div>
        </div>
            
        <div class="bottom border flex flex-col pt-10 pb-8" :class="{ active: inputCount===true }" @click="changeSelect" >
          <div class="flex mx-auto "  >
            <p>{{ $trans("其他金额") }}：</p>
            <input class="border rounded-3xl" type="text" v-model="payPrice" @input="payPrice = payPrice.replace(/[^\d]/g,'')" />
            <!-- @keyup.enter='search' @input='search($event)' -->
            <i class="inline-block ml-2"></i>
          </div>
          <p>{{ $trans("需支付") }}{{ payPrice }}{{ $trans("美元") }}</p>
        </div>
      </div>
      <div class="right w-1/3">
        <h3>{{ $trans("您可以用金币做很多事情：") }}</h3>
        <p
          v-for="(item, index) in message"
          :key="index"
          class="mt-5 ml-2 text-left"
        >
          <i class="inline-block"></i><span> {{ $trans(item) }} </span>
        </p>
      </div>
    </div>
    <section class="bottom">
    <PayInfo isDaller="false" />
    <PayButton payType="立即充值" />
    </section>
  </div>
</template>

<script>
import PayInfo from "@components/Vip/PayInfo/PayInfo.vue";
import PayButton from "@components/Vip/PayInfo/payButton.vue";

export default {
  components: {
    PayInfo,
    PayButton,
  },
  data() {
    return {
      list: [
        { gold: "20", money: "US$20 (CN¥120)" },
        { gold: "50", money: "US$50 (CN¥300)" },
        { gold: "100", money: "US$100 (CN¥600)" },
        { gold: "200", money: "US$200 (CN¥1200)" },
        { gold: "500", money: "US$500 (CN¥3000)" },
        { gold: "1000", money: "US$1000 (CN¥6000)" },
      ],
      message: [
        "给您喜欢的人赠送一份精美礼物",
        "发送翻译私信，让您和ta畅聊无阻, 让您和ta无障碍嗨聊",
        "发送金币红包，给对方一个惊喜",
        "出现在首页，让更多人看到您",
        "使用金币升级为会员，享受更多特权",
      ],
      inputCount:false,
      currentIndex: 0,
      currentPrice: 0,
      payPrice: 1314,
    };
  },
  methods: {
    // 选择商品，
    changeColor(index) {    
      this.inputCount = false

      this.currentIndex = index;
      this.currentPrice = this.list[index].gold;
    },
    changeSelect(){
      this.inputCount = true
    }
    // search(event){
    //   console.log(event.currentTarget.value);
    // }
  },
};
</script>

<style lang='scss' scoped>
@import "@styles/vips.scss";
.RechargeGold {
  i {
    height: 20px;
    width: 20px;
  }
  .header {
    background: #fff8ef;
    i {
      background: url("~@images/person/little1.png") 2px -502px no-repeat;
    }
  }
  .content {
    height: 458px;
    .left {
      .top {
        .content-item {
          width: 164px;
          height: 169px;
          position: relative;
          .gold {
            background: url("~@images/person/little1.png") 0px -500px no-repeat;
          }
          .rightGb {
            z-index: 1;
            right: -10px;
            top: -10px;
            width: 21px;
            height: 21px;
            background: url("~@images/person/little1.png") 0 -201px no-repeat;
          }
        }
      }
      .bottom {
        input {
          text-indent: 10px;
          outline: none;
        }
        i {
          background: url("~@images/person/little1.png") 0px -500px no-repeat;
        }
      }
    }
    .right {
      width: 250px;
      height: 450px;
      i {
        width: 8px;
        height: 16px;
        background: url("~@images/person/little1.png") -100px -1038px no-repeat;
      }
    }
  }
  .active {
    background: rgb(255, 243, 217);
    border-right-color: rgb(250, 188, 63);
    border-bottom-color: rgb(250, 188, 63);
    box-shadow: rgb(153 153 153) 0px 0px 10px;
  }
}
</style>