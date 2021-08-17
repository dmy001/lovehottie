<template>
  <div class="RechargeGold">
  
    <div class="header h-9 bg-yellow-100 flex items-center pl-5">
     <span class="align-middle">您账户可用金币数:</span> <span class="text-red-500 font-bold">0</span>
      <i class="inline-block align-middle"></i>
    </div>
    <div class="content flex border w-full">
      <div class="left border w-2/3">
        <div class="top flex flex-wrap">
          <div
            v-for="(item, index) in list"
            :key="index"
            class="border content-item"
            :class="{'active': index === currentIndex }"
             @click="changeColor(index)"
          >
            <i class="inline-block"></i>
            <p class="text-3xl mt-2">{{item.gold}}</p>
            <p class="text-xs mt-2">{{item.money}}</p>
            <button class="border w-14 h-7 rounded-xl mt-3">{{item.Ischange}}</button>
          </div>
        </div>
        <div class="bottom flex flex-col mt-10 ">
          <div class="flex mx-auto ">
            <p>其他金额：</p>
            <input class="border rounded-3xl"   type="text" :value="payPrice" />
            <i class="inline-block ml-5"></i>
          </div>
          <p>需支付{{payPrice}}美元</p>
        </div>
      </div>

      <div class="right w-1/3">
        <h3>您可以用金币做很多事情：</h3>
        <p v-for="(item,index) in message" :key="index" class="mt-5">
          <i class="inline-block"></i><span>{{item}}</span>
        </p>
        
      </div>
    </div>
    <PayInfo />
    <Discount />
  </div>
</template>

<script>
import PayInfo from "@components/vip/PayInfo/PayInfo.vue";
import Discount from "@components/vip/PayInfo/Discount.vue";
export default {
  components: {
    PayInfo,
    Discount,
  },
  data() {
    return {
      list: [
        { gold: "20", money: "US$20 (CN¥120)" ,Ischange:'选择'},
        { gold: "50", money: "US$50 (CN¥300)" ,Ischange:'选择'},
        { gold: "100", money: "US$100 (CN¥600)" ,Ischange:'选择'},
        { gold: "200", money: "US$200 (CN¥1200)" ,Ischange:'选择'},
        { gold: "500", money: "US$500 (CN¥3000)" ,Ischange:'选择'},
        { gold: "1000", money: "US$1000 (CN¥6000)" ,Ischange:'选择'},
      ],
      message:[
        '给您喜欢的人赠送一份精美礼物',
        '发送翻译私信，让您和ta畅聊无阻, 让您和ta无障碍嗨聊',
        '发送金币红包，给对方一个惊喜',
        '出现在首页，让更多人看到您',
        '使用金币升级为会员，享受更多特权',
      ],
      currentIndex: 0,
      payPrice:0
    };
  },
  methods: {
    changeColor(index) {
      this.currentIndex = index;
      // 1.0
      this.list.map(item=>{
        item.Ischange = '选择'
      })
      this.list[index].Ischange = '已选'
    },
  },
};
</script>

<style lang='scss' scoped>
.RechargeGold {
  .header {
    i {
      height: 20px;
      width: 20px;
      background: url("~@images/person/little1.png") 0px -500px no-repeat;
    }
  }
  .content {
    width: 747px;
    height: 458px;
    .left {
      .top {
        .content-item {
          // flex-shrink:0;
          width: 164px;
          //  弹性布局    一行的个数
          height: 169px;
          i {
            height: 20px;
            width: 20px;
            background: url("~@images/person/little1.png") 0px -500px no-repeat;
          }
          button {
            color: #ff8a00;
            border-color: #ff8a00;
          }
        }
      }
      .bottom {
        i {
          height: 20px;
          width: 20px;
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
  .active{
    background: rgb(255, 243, 217);
    border-right-color: rgb(250, 188, 63);
    border-bottom-color: rgb(250, 188, 63);
    box-shadow: rgb(153 153 153) 0px 0px 10px;
  }
}
</style>