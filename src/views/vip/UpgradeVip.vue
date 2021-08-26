<template>
  <div class="UpgradeVip">
    <div class="flex flex-col">
      <VipHeader title="Mini会员" bgClassName="headerImg1" />
      <MiniVip
        :selectIndex="selectIndex"
        @changeSelectId="changeSelectId"
        @getPrice="getPrice2"
      />
      <VipFooter
        :descrip="descrip"
        :descriptionList="descriptionList"
        title="Mini会员"
      />

      <VipHeader title="VIP会员" bgClassName="headerImg2" />
      <div class="relative border VIP">
      <VipContent 
        :selectIndex="selectIndex"
        @changeSelectId="changeSelectId"
        :list="itemList"
        @getPrice="getPrice2"
      />
       <i
        class="absolute   inline-block -top-5 -left-5"
      ></i></div>
      <VipFooter
        :descrip="descrip1"
        :descriptionList="descriptionList1"
        title="VIP会员"
      />

      <VipHeader title="高级会员" bgClassName="headerImg3" />
      <VipContent
        :selectIndex="selectIndex"
        @changeSelectId="changeSelectId"
        :list="itemList2"
        @getPrice="getPrice2"
      />
      <VipFooter
        :descrip="descrip2"
        :descriptionList="descriptionList2"
        title="高级会员"
      />
    </div>
    <PayInfo />
    <Discount :price="currentPrice" />
    <PayButton payType="立即充值" />
  </div>
</template>

<script>
import PayInfo from "@components/Vip/PayInfo/PayInfo.vue";
import Discount from "@components/Vip/PayInfo/Discount.vue";
import PayButton from "@components/Vip/PayInfo/payButton.vue";
import VipHeader from "@components/Vip/VipPrice/VipHeader.vue";
import VipContent from "@components/Vip/VipPrice/VipContent.vue";
import VipFooter from "@components/Vip/VipPrice/VipFooter.vue";
import MiniVip from "@components/Vip/VipPrice/MiniVip.vue";
export default {
  components: {
    VipHeader,
    PayButton,
    VipContent,
    VipFooter,
    PayInfo,
    Discount,
    MiniVip,
  },
  data() {
    return {
      itemListMini: [{ id: 0, price: "9.9" }],
      selectIndex: 0,
      itemList: [
        {
          id: 1,
          time: 12,
          price: "124.91",
          save: 40,
          priceTotle: "1499",
        },
        {
          id: 2,
          time: 6,
          price: "149.83",
          save: 30,
          priceTotle: "999",
        },
        {
          id: 3,
          time: 3,
          price: "163.33",
          save: 20,
          priceTotle: "499",
        },
        {
          id: 4,
          time: 1,
          price: "199.00",
          save: 5,
          priceTotle: "199",
        },
      ],
      itemList2: [
        {
          id: 5,
          time: 12,
          price: "150",
          save: 40,
          priceTotle: "150",
        },
        {
          id: 6,
          time: 6,
          price: "90",
          save: 30,
          priceTotle: "90",
        },
        {
          id: 7,
          time: 3,
          price: "50",
          save: 20,
          priceTotle: "50",
        },
        {
          id: 8,
          time: 1,
          price: "20",
          save: 5,
          priceTotle: "20",
        },
      ],

      descrip: [
        "每天50条聊天权限",
        "会员专属标识",
        "每月免费查看3张模糊图",
        "赠送一张价值30金币VIP优惠券",
      ],
      descrip1: [
        "1500/天免费翻译字符",
        "3个10min翻译vip",
        "vip专属表情包",
        "无限免费查看模糊图",
        "无限免费赠送虚拟礼物",
        "消息已读通知",
      ],
      descrip2: [
        "无限发消息",
        "赠送一张价值30金币VIP优惠券",
        "每月免费查看10张模糊图",
        "每月免费赠送5个虚拟礼物",
        "会员专属标识",
      ],

      descriptionList: [
        {
          name: "每天50条聊天权限",
          descrip:
            "每天50条消息权限，给你向世界Say Hi的体验。（若翻译需另收费）",
        },
        {
          name: "优惠券",
          descrip:
            "赠送一张价值30金币VIP优惠券：购买MiNi会员赠送价值30金币VIP优惠券一张，帮助你节省购买会员的费用。",
        },
        {
          name: "模糊图",
          descrip:
            "免费查看3张模糊图：会员期间免费查看3张模糊图，给你高清体验。",
        },
        {
          name: "会员权限",
          descrip:
            "会员专属标识：您的昵称会增加会员专属标识，彰显等级魅力，让ta一眼看到你。",
        },
        {
          name: "阅后即焚免费无限使用",
          descrip: "消息、国际圈等均可免费无限使用阅后即焚功能",
        },
      ],
      descriptionList1: [
        {
          name: "1500/天免费翻译字符",
          descrip:
            "开启VIP，在消息中尊享最优质的免费人工翻译服务，无限畅聊，拉近你和ta的距离。",
        },
        {
          name: "3个10min翻译vip",
          descrip: "开启VIP，即可享受3个10min翻译vip权限",
        },
        {
          name: "无限免费查看模糊图",
          descrip: "无限制的查看模糊图片，给你高清体验。",
        },
        {
          name: "无限免费赠送虚拟礼物",
          descrip: "虚拟礼物无限免费赠送，成功引起ta的注意",
        },
        {
          name: "消息已读通知",
          descrip:
            "还在纠结对方是否已经看到你的信息？成为vip，这些都不是问题。",
        },
        {
          name: "无限发消息",
          descrip:
            "发送消息不受限，想发多少看你心情。（信息若需翻译则另收费）",
        },
        {
          name: "主页可无限制展示照片",
          descrip: "您的主页可无限制展示照片，更加全面的展示自己。",
        },
        {
          name: "会员专属标识",
          descrip: "您的昵称会增加会员专属标识，彰显等级魅力，让ta一眼看到你。",
        },
        {
          name: "优先推荐",
          descrip: "您会被优先推荐给新用户，获得更多的交友机会。",
        },
        {
          name: "谁在暗恋你，vip告诉你",
          descrip: "查看谁给您偷偷点赞，恰好你也对ta感兴趣，就别犹豫。",
        },
      ],
      descriptionList2: [
        {
          name: "无限发消息",
          descrip:
            "发送消息不受限，想发多少看你心情。（信息若需翻译则另收费）",
        },
        {
          name: "优惠券",
          descrip:
            "赠送一张价值30金币VIP优惠券：购买高级会员会员赠送价值30金币VIP优惠券一张，帮助你节省购买会员的费用。",
        },
        {
          name: "优先推荐",
          descrip: "您会被优先推荐给新用户，获得更多的交友机会。",
        },
        {
          name: "每月免费查看10张模糊图",
          descrip: "每个月能够查看 10 张聊天中的模糊图片，给你高清体验",
        },
        {
          name: "每月免费赠送5个虚拟礼物",
          descrip: "5个虚拟礼物每月免费赠送，给热聊中的ta一个惊喜",
        },
        {
          name: "会员专属标识",
          descrip: "您的昵称会增加会员专属标识，彰显等级魅力，让ta一眼看到你。",
        },
        {
          name: "主页可无限制展示照片",
          descrip: "您的主页可无限制展示照片，更加全面的展示自己。",
        },
        {
          name: "阅后即焚免费无限使用",
          descrip: "消息、国际圈等均可免费无限使用阅后即焚功能",
        },
      ],
      currentPrice: "",
    };
  },
  methods: {
    changeSelectId(id) {
      this.selectIndex = id;
    },
    getPrice2(value) {
      this.currentPrice = value;
    },
  },
};
</script>

<style lang='scss' scope>
.UpgradeVip {
  width: 756px;
  .VIP {
          background: #FFFCF6;
    i{
    width: 54px;
    height: 54px;
    background: url("../../assets/images/person/little1.png") no-repeat -56px -1158px;
    }
  } 
}

</style>
