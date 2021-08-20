<template>
  <div class="translateVip">
    <div class="header h-9 bg-yellow-100 flex items-center pl-5">
      <span class="align-middle">您账户可用翻译VIP: </span>
      <span class="text-red-500 font-bold">0min</span>
      <i class="inline-block align-middle"></i>
    </div>
    <div class="content flex border w-full mt-5">
      <div class="left w-3/5 border">
        <div class="top flex h-full">
          <div
            v-for="(item, index) in list"
            :key="index"
            class="border content-item flex-auto relative"
            :class="{ active: index === currentIndex }"
            @click="changeColor(index)"
          >
            <i class="inline-block absolute" v-show="index === currentIndex"></i>
            <p class="text-28px text-orangeFont">{{ item.time }}</p>
            <p class="text-xl">min</p>
            <p class="text-20px text-orangeFont">节省{{ item.save }}%</p>
            <p class="text-18px mt-10">费用US${{ item.price }}</p>
            <div class="select-btn mt-3" style="display: inline-block">
              <span class="sel-0" v-show="!(index === currentIndex)">选择</span>
              <span class="sel-1">已选</span>
            </div>
          </div>
        </div>
      </div>

      <div class="right w-2/5">
        <p
          v-for="(item, index) in message"
          :key="index"
          class="mt-5 ml-2 text-left"
        >
          <i class="inline-block"></i><span>{{ item }}</span>
        </p>
      </div>
    </div>
    <PayInfo />
    <payButton payType="立即充值" />
  </div>
</template>

<script>
import PayInfo from "@components/vip/PayInfo/PayInfo.vue";
import payButton from "@components/vip/PayInfo/payButton.vue";

export default {
  components: {
    PayInfo,
    payButton,
  },
  data() {
    return {
      list: [
        { time: 10, save: 10, price: 10, Ischange: "选择" },
        { time: 30, save: 15, price: 20, Ischange: "选择" },
        { time: 60, save: 25, price: 30, Ischange: "选择" },
      ],
      message: [
        "在翻译会员有效时长内可无限免费使用平台内翻译，包含聊天翻译、动态翻译、探索翻译等；",
        "翻译会员生效时间，以购买完成为开始，相应时长后结束。",
      ],
      currentIndex: 0,
      currentPrice: 0,
    };
  },
  methods: {
    changeColor(index) {
      this.currentIndex = index;
      this.currentPrice = this.list[index].price;
    },
  },
};
</script>


<style lang='scss'>
@import "@styles/vips.scss";

.translateVip {
  .content {
    .left {
      height: 250px;
      .top {
        .content-item {
          background: #fffcf6;
          i {
            z-index: 1;
          right: -10px;
          top: -10px;
          width: 21px;
          height: 21px;
          background: url("~@images/person/little1.png") 0 -201px no-repeat;
        }
        }
      }
    }
    .right {
      i {
        width: 8px;
        height: 16px;
        background: url("~@images/person/little1.png") -100px -1038px no-repeat;
      }
    }
    .active {
      background-color: white !important;
      box-shadow: 0 0 10px #999;
    }
  }
}
</style>