<template>
  <div class="contentLeft">
    <div class="flex flex-row h-60 leftop">
      <img
        :src="STATICBASEURI + '/images/default/female.png'"
        alt=""
        class="mCS_img_loaded relative"
      />
      <div class="flex flex-col l15">
        <p class="text-black ari cursor-pointer">
          <router-link to="PersonHome">可爱小怪咖</router-link>
          <img
            :src="STATICBASEURI + '/images/mem_offline.png'"
            alt=""
            class="inline"
            @click.stop="showLine"
          />
          <ul class="lineStatus" v-if="lineStatus">
            <li>
              <img src="../../assets/images/index/mem_online.png" alt="" class="inline-block">
              在线
            </li>
            <li>
              <img :src="STATICBASEURI + '/images/mem_offline.png'" alt="" class="inline-block">
              隐身
            </li>
          </ul>
        </p>
        <p class="text-12px text-gray-500 ari" style="margin-top: 8px">
          GaGaID: 40473864
        </p>
        <p class="icons1">
          <span class="vipIcon no_hy"></span>
          <span class="yhjIcon noHasCoupon"></span>
        </p>
      </div>
    </div>
    <div class="flex fsgz w-5/6 text-gray-500">
      <div id="fens" class="cursor-pointer">
        粉丝<span class="like_me_cnt">0</span>
      </div>
      |
      <div id="flow" class="cursor-pointer">
        关注<span class="me_like_cnt">0</span>
      </div>
    </div>
    <div class="lf-cz flex justify-between">
      <button
        class="money rounded-2xl bg-buttonColor cursor-pointer"
        data-explain="0 金币"
        data-suffix="金币"
      >
        <span></span>
        <div id="totalMoney">0</div>
      </button>
      <button
        class="fanyi rounded-2xl bg-buttonColor cursor-pointer"
        data-explain="0 字符"
        data-suffix="字符"
      >
        <span class="fy"></span>
        <div id="totalTranslate">0</div>
      </button>
    </div>
    <div class="lf-lb">
      <button class="rounded-2xl bg-buttonColor cursor-pointer">
        <span class="inline-block fy"></span>
        <div id="redPacketSendHeart" class="inline-block">心动红包</div>
      </button>
    </div>
    <div class="lf-lb flex flex-row leftMessage cursor-pointer">
     <span id="leftSixinIndexImg" class="inline-block "></span>
     <div id="leftSixinIndexText">
       我的消息
     </div>
     <div id="leftSixinNotice" class="inline-block absolute">
     </div>
    </div>
    <router-link to="/home/vip">
    <div class="lf-lb flex flex-row cursor-pointer lkmLeft">
     <span id="leftLikeMeIndexImg" class="inline-block lkm"></span>
     <div id="leftLikeMeIndexText">
       升级会员
     </div>
    </div>
    </router-link>

     <div class="lf-lb flex flex-row cursor-pointer mlkLeft">
     <span id="leftIlikeIndexImg" class="inline-block mlk"></span>
     <div id="leftIlikeIndexText">
      <router-link to='PersonHome'>我的动态</router-link> 
     </div>
    </div>
    <router-link to="visitor">
     <div class="lf-lb flex flex-row cursor-pointer eachLeft">
     <span id="leftFriendIndexImg" class="inline-block each-lk"></span>
     <div id="leftFriendIndexText">
      我的访客
     </div>
    </div>
    </router-link>
     <div class="lf-lb flex flex-row cursor-pointer AdvertisementLeft">
     <span id="leftAdvertisementIndexImg" class="inline-block Advertisement"></span>
     <div id="leftAdvertisementIndexText">
       广告管理
     </div>
    </div>
    <div class="ggw1">
      <img src="https://statics.gagahi.com/images/ggw.jpg" alt="">
      <span class="ad_span">广告</span>
    </div>
  </div>
</template>
<script>
export default {
  name: "contentLeft",
  data() {
    return {
      lineStatus:false
    };
  },
  methods: {
    showLine() {
      this.lineStatus = true
    },
    // 点击空白处关闭隐身
   bodyCloseMenus() {
   let self = this;
    if (self.lineStatus == true){
     self.lineStatus = false;
    }
   }
  },
  mounted() {
  document.addEventListener("click", this.bodyCloseMenus);
 },
 beforeDestroy() {
  document.removeEventListener("click", this.bodyCloseMenus);
 },
};
</script>
<style lang="scss" scoped>
.contentLeft {
  width: 248px;
  background: #fff;
  padding: 15px;
  position: fixed;
  top: 66px;
  font-size: 14px;
  height: 78%;
  max-height: calc(100% - 196px);
  .leftop {
    margin-bottom: 15px;
    margin-top: 14px;
    .ari {
      font-family: Arial;
    }
    .mCS_img_loaded {
      width: 60px;
      height: 60px;
      border-radius: 50%;
      -webkit-border-radius: 50%;
      -moz-border-radius: 50%;
      z-index: 1;
    }
    .inline {
      display: inline;
      margin-left: 30px;
      margin-top: -2px;
    }
    .l15 {
      margin-left: 15px;
      text-align: left;
      line-height: 20px;
    }
    .icons1 span {
      width: 20px;
      height: 20px;
      display: inline-block;
      cursor: pointer;
    }
    .no_hy {
      background: url("~@images/index/icon_vip_gray.png") no-repeat;
      background-position: 1px 6px;
    }
    .noHasCoupon {
      background: url("~@images/index/icon_sale_gray.png") no-repeat;
      background-position: 1px 6.4px;
    }
    .lineStatus{
      @apply fixed text-center z-100;
      top:100px;
      margin-left: 120px;
      width: 89px;
      height: 62px;
      background: #fff;
      border-radius: 5px;
      border: 1px solid #d9d9d9;
      li{
        height:30px;
        line-height: 30px;
      }
      li:hover{
        background:rgb(241,241,241);
      }
    }
  }
  .fsgz {
    justify-content: space-around;
    margin: 0 auto 20px;
    span {
      display: inline-block;
      margin-left: 10px;
      color: #333;
    }
  }
  .lf-cz {
    margin-bottom: 20px;
    button {
      height: 29px;
      width: 90px;
      border: none;
      outline: none;
      overflow: visible;
    }
    button:hover {
      background: rgb(221, 218, 218);
    }
    .money span {
      display: inline-block;
      width: 20px;
      height: 22px;
      background: url("~@images/index/little.png") -1px -640px no-repeat;
      vertical-align: top;
      margin-right: 5px;
      margin-top: 5px;
    }
    #totalMoney,
    #totalTranslate {
      display: inline-block;
      max-width: 45px;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      line-height: 29px;
    }
    .fanyi span {
      display: inline-block;
      width: 20px;
      height: 22px;
      background: url("~@images/index/little.png") -1px -662px no-repeat;
      vertical-align: top;
      margin-right: 5px;
      margin-top: 5px;
    }
  }
  .lf-lb {
    margin-bottom: 28px;
    position: relative;
    button {
      width: 90%;
      height: 29px;
      color: #fd4545;
      border: none;
      outline: none;
      margin-top: -10px;
    }
    button:hover {
      background: rgb(221, 218, 218);
    }
    #redPacketSendHeart {
      line-height: 25px;
      max-width: 120px;
    }
    span {
      width: 25px;
      height: 20px;
      vertical-align: middle;
      margin-right: 12px;
    }
    .fy {
      background: url("~@images/index/icon_hreat1.gif") no-repeat;
    }
    #leftSixinIndexImg{
         background: url("~@images/index/indexIcon.png") -72px -2px no-repeat 
    }
    #leftSixinNotice{
      background: #FA5A4B;
      color: white;
      width: 8px;
      height: 8px;
      border-radius: 50%;
      text-align: center;
      line-height: 21px;
      font-size: 12px;
      top: 2px;
      right: 9px;
    }
    .lkm{
      background: url("~@images/index/indexIcon.png") -29px -53px no-repeat;
    }
     .mlk{
      background: url("~@images/index/indexIcon.png") -77px -30px no-repeat;
    }
     .each-lk{
      background: url("~@images/index/indexIcon.png") -77px -55px no-repeat;
    }
     .Advertisement{
      background: url("~@images/index/Advertisement.png") 4px 0 no-repeat;
    }
  }
  .leftMessage:hover  #leftSixinIndexText, .lkmLeft:hover #leftLikeMeIndexText,.mlkLeft:hover #leftIlikeIndexText,.eachLeft:hover #leftFriendIndexText,.AdvertisementLeft:hover #leftAdvertisementIndexText{
    color:rgb(49,80,152)
  }
  .leftMessage:hover  #leftSixinIndexImg{
   background-position: -47px -2px;
  }
  .lkmLeft:hover .lkm{
    background-position: 0px -53px;
  }
   .mlkLeft:hover .mlk{
    background-position: -52px -30px;
  }
  .eachLeft:hover .each-lk{
    background-position: -52px -54px;
  }
   .AdvertisementLeft:hover .Advertisement{
    background: url("~@images/index/Advertisement_blue.png") 4px 0 no-repeat;
  }
  .ggw1{
    width: 200px;
    height: 240px;
    overflow: hidden;
    position: relative;
    margin: 0 auto;
  }
  .ad_span {
    position: absolute;
    left: 0;
    bottom: 0;
    background: rgba(0, 0, 0, .5);
    line-height: 22px;
    height: 22px;
    font-size: 12px;
    color: #fff;
    padding: 0 10px;
    z-index: 1;
}
}
</style>