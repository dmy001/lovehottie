<template>
  <div class="bg-white">
    <section
      class="
        w-full
        h-12
        leading-normal
        bg-blue-100
        border-t border-gray-300 border-solid
        flex
        justify-between
      "
    >
      <span class="text-left mt-4 ml-5">设置</span>
      <span class="text-right text-gray-400 mt-4 mr-5">返回个人主页>></span>
    </section>
    <!-- 个人资料设置部分 -->
    <section class="">
      <SetUpHeader
        title="您的个人资料"
        @writeInformation="writeInformation"
      ></SetUpHeader>
      <!--个人信息展示部分-->
      <div v-show="!show">
        <div class="w-1/4 flex justify-end ">
          <img
            class="
              w-16
              mt-5
              shadow
              rounded-full
              max-w-full
              h-auto
              align-middle
              border-none
            "
            src="https://www.creative-tim.com/learning-lab/tailwind-starter-kit/img/team-2-800x800.jpg"
            alt=""
          />
        </div>
        <ShowContent :content="informations" v-show="!show"></ShowContent>
      </div>
      <!--个人信息编辑部分-->
      <div v-show="show">
        <ul>
          <li class="flex flex-row">
            <div class="w-1/4 flex justify-end ">
              <img
                class="
                  w-16
                  mt-5
                  shadow
                  rounded-full
                  max-w-full
                  h-auto
                  align-middle
                  border-none
                "
                src="https://www.creative-tim.com/learning-lab/tailwind-starter-kit/img/team-2-800x800.jpg"
                alt=""
              />
            </div>
            <div class="w-3/4 flex justify-start ml-2">
              <span
                class="
                  w-24
                  h-8
                  leading-8
                  text-gray-400
                  mt-9
                  ml-1
                  border border-solid border-gray-300
                  rounded-2xl
                "
                >编辑照片</span
              >
            </div>
          </li>
          <li class="flex justify-between text-sm  mt-3 ">
            <span class="w-1/4 text-right text-gray-400  pr-2 ">昵称:</span>
            <label class="w-3/4 text-left">
              <input class="w-1/2 h-7 rounded-xl border border-solid border-gray-300" type="text" maxlength="16" value="" />
            </label>
          </li>
        </ul>
      </div>
    </section>
    <!-- 账号设置部分-->
    <section>
      <SetUpHeader title="您的账号"></SetUpHeader>
      <ShowContent :content="account"></ShowContent>
    </section>
    <!-- 认证 -->
    <section>
      <SetUpHeader title="认证"></SetUpHeader>
      <p class="mt-5">邮箱未认证</p>
    </section>
    <!-- 隐私 -->
    <section>
      <SetUpHeader title="隐私"></SetUpHeader>
      <div>
        <ul class="space-y-5 mt-5">
          <li class="flex justify-between text-sm">
            <span class="w-1/4 text-right text-gray-400"
              >是否公开我的个人档案？：</span
            >
            <span class="w-3/4 text-left">公开</span>
          </li>
          <li class="flex justify-between text-sm">
            <span class="w-1/4 text-right text-gray-400">加好友申请：</span>
            <span class="w-3/4 text-left">允许任何人添加</span>
          </li>
          <li class="flex justify-between text-sm">
            <span class="w-1/4 text-right text-gray-400"
              >是否公开我的动态点赞：</span
            >
            <span class="w-3/4 text-left">公开</span>
          </li>
          <li class="flex justify-between text-sm">
            <span class="w-1/4 text-right text-gray-400"
              >是否公开我的动态评论：</span
            >
            <span class="w-3/4 text-left">公开</span>
          </li>
        </ul>
      </div>
    </section>
    <!-- 通知 -->
    <section>
      <SetUpHeader title="通知"></SetUpHeader>
      <div>
        <ul class="space-y-5 mt-5">
          <li class="flex justify-between text-sm">
            <span class="w-1/4 text-right text-gray-400">当有人喜欢你：</span>
            <span class="w-3/4 text-left">是</span>
          </li>
          <li class="flex justify-between text-sm">
            <span class="w-1/4 text-right text-gray-400">当有访客：</span>
            <span class="w-3/4 text-left">是</span>
          </li>
          <li class="flex justify-between text-sm">
            <span class="w-1/4 text-right text-gray-400">收到礼物：</span>
            <span class="w-3/4 text-left">是</span>
          </li>
          <li class="flex justify-between text-sm">
            <span class="w-1/4 text-right text-gray-400">离线邮件通知：</span>
            <span class="w-3/4 text-left">是</span>
          </li>
        </ul>
      </div>
    </section>
  </div>
</template>
<script>
import SetUpHeader from "@components/personal/SetUpHeader.vue";
import ShowContent from "@components/personal/ShowContent.vue";
export default {
  data() {
    return {
      informations: [
        { title: "昵称", value: "嘟嘟" },
        { title: "ID号", value: "1354635" },
        { title: "年龄", value: "23" },
        { title: "性别", value: "女" },
        { title: "职业", value: "IT" },
        { title: "国家", value: "中国" },
        { title: "语言", value: "English" },
        { title: "身高(cm)", value: "165" },
        { title: "体重(kg)", value: "90" },
        { title: "个性签名", value: "dfgfhhgjjjffhhhhfdh" },
        { title: "兴趣", value: "dfhhgvvbhgh" },
      ],
      account: [
        { title: "金币", value: 0 },
        { title: "会员级别", value: "普通会员" },
        { title: "翻译包字符数", value: 0 },
        { title: "邮箱", value: " " },
        { title: "手机号码", value: " " },
        { title: "密码", value: "****" },
      ],
      show: false,
    };
  },
  components: {
    SetUpHeader,
    ShowContent,
  },
  methods: {
    writeInformation() {
      this.show = !this.show;
    },
  },
};
</script>
<style lang="scss" scoped>
.set-information {
  width: 20px;
  height: 20px;
  background: url(/img/little.c7c7e4e0.png) 0 -616px no-repeat;
  vertical-align: middle;
}
</style>