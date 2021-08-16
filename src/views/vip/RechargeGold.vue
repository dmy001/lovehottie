<template>
  <div class="RechargeGold">
    <div class="header text-left">
      <span class="align-middle text-px14">您账户可用金币数: 0 </span>
      <i class="inline-block align-middle"></i>
    </div>
    <div class="content flex border w-full">
      <div class="left border w-2/3">
        <div class="top flex">
          <div class="border content-item">
            <i class="inline-block"></i>
            <p class="text-px20">20</p>
            <p class="text-px18">US$20 (CN¥120)</p>
            <button class="">选择</button>
          </div>
          <div class="border content-item">
            <i class="inline-block"></i>
            <p class="text-px20">20</p>
            <p class="text-px18">US$20 (CN¥120)</p>
            <button class="">选择</button>
          </div>
          <div class="border content-item">
            <i class="inline-block"></i>
            <p class="text-px20">20</p>
            <p class="text-px18">US$20 (CN¥120)</p>
            <button class="">选择</button>
          </div>
        </div>
        <div class="bottom">
          <div class="flex">
            <p>其他金额：</p>
            <input class="border" type="text" value="" />
            <i class="inline-block"></i>
          </div>
          <p>需支付***美元</p>
        </div>
      </div>

      <div class="right w-1/3">
        <h3>您可以用金币做很多事情：</h3>
        <p class="mt-5">
          <i class="inline-block"></i><span>给您喜欢的人赠送一份精美礼物</span>
        </p>
        <p class="mt-5">
          <i class="inline-block"></i
          ><span>发送翻译私信，让您和ta畅聊无阻, 让您和ta无障碍嗨聊</span>
        </p>
        <p class="mt-5">
          <i class="inline-block"></i><span>发送金币红包，给对方一个惊喜</span>
        </p>
        <p class="mt-5">
          <i class="inline-block"></i><span>出现在首页，让更多人看到您</span>
        </p>
        <p class="mt-5">
          <i class="inline-block"></i
          ><span>使用金币升级为会员，享受更多特权</span>
        </p>
      </div>
    </div>
    <PayInfo/>
    <Discount/>
  </div>
</template>

<script>
import PayInfo from '@components/vip/PayInfo/PayInfo.vue'
import Discount from '@components/vip/PayInfo/Discount.vue'
export default {
  components:{
    PayInfo,
    Discount
  }
};
</script>

<style lang='scss'>
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
          // width: 165px;
          //  弹性布局    一行的个数
          height: 169px;
          i {
            height: 20px;
            width: 20px;
            background: url("~@images/person/little1.png") 0px -500px no-repeat;
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
}
</style>