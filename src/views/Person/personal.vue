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
      <span class="text-left mt-4 ml-5">{{ $trans("设置") }}</span>
      <router-link to="/home/PersonHome"
        ><button class="text-right text-gray-400 mt-4 mr-5 focus:outline-none">
          {{ $trans("返回个人主页") }}
        </button></router-link
      >
    </section>
    <!-- 个人资料设置部分 -->
    <section id="information" class="pt-10 -mt-10">
      <SetUpHeader
        :title="$trans('您的个人资料')"
        @writeInformation="writeInformation"
      ></SetUpHeader>
      <!--个人信息展示部分-->
      <div v-show="!show">
        <div class="w-1/4 flex justify-end">
          <img
            class="
              w-16
              mt-10
              shadow
              rounded-full
              max-w-full
              h-auto
              align-middle
              border-none
            "
            src="https://images.gagahi.com/?imageView2/2/w/560/h/630"
            alt=""
          />
        </div>
        <ShowContent :content="informations" v-show="!show"></ShowContent>
      </div>
      <!--个人信息编辑部分-->
      <div v-show="show">
        <EditInformation></EditInformation>
      </div>
    </section>
    <!-- 账号设置部分-->
    <section id="account" class="pt-10 -mt-10">
      <SetUpHeader
        :title="$trans('您的账号')"
        @writeInformation="setAccount"
      ></SetUpHeader>
      <ShowContent :content="account" v-show="!set"></ShowContent>
      <div v-show="set">
        <ul class="space-y-5 mt-5">
          <li class="flex justify-between text-sm">
            <span class="w-1/4 text-right text-gray-400"
              >{{ $trans("金币") }}：</span
            >
            <span class="w-3/4 text-left text-sm -mt-1">
              0
              <router-link to="/home/vip/RechargeGold">
                <button
                  class="
                    w-16
                    h-7
                    px-2
                    border border-solid border-gray-400
                    rounded-2xl
                    text-center
                    leading-7
                    ml-24
                    focus:outline-none
                  "
                >
                  {{ $trans("充值") }}
                </button>
              </router-link>
            </span>
          </li>
          <li class="flex justify-between text-sm">
            <span class="w-1/4 text-right text-gray-400"
              >{{ $trans("会员级别") }}：</span
            >
            <span class="w-3/4 text-left text-sm -mt-1">
              {{ $trans("普通会员") }}
              <router-link to="/home/vip/UpgradeVip">
                <button
                  class="
                    w-16
                    h-7
                    px-2
                    border border-solid border-gray-400
                    rounded-2xl
                    text-center
                    leading-7
                    ml-12
                    outline-none
                  "
                >
                  {{ $trans("升级") }}
                </button>
              </router-link>
            </span>
          </li>
          <li class="flex justify-between text-sm">
            <span class="w-1/4 text-right text-gray-400"
              >{{ $trans("翻译包字符数") }}：</span
            >
            <span class="w-3/4 text-left text-sm">0</span>
          </li>
          <li class="flex justify-between text-sm">
            <span class="w-1/4 text-right text-gray-400"
              >{{ $trans("邮箱") }}：</span
            >
            <label class="w-3/4 text-left"
              ><input
                class="
                  w-1/2
                  h-8
                  rounded-2xl
                  border border-solid border-gray-300
                  p-4
                  focus:outline-none
                "
                type="text"
                name="email"
            /></label>
          </li>
          <li class="flex justify-between text-sm">
            <span class="w-1/4 text-right text-gray-400"
              >{{ $trans("手机号") }}：</span
            >
            <label class="w-3/4 text-left"
              ><input
                class="
                  w-1/2
                  h-8
                  rounded-2xl
                  border border-solid border-gray-300
                  p-4
                  outline-none
                "
                type="text"
                name="phone"
            /></label>
          </li>
          <li class="flex justify-between text-sm">
            <span class="w-1/4 text-right text-gray-400"
              >{{ $trans("当前密码") }}：</span
            >
            <label class="w-3/4 text-left"
              ><input
                class="
                  w-1/2
                  h-8
                  rounded-2xl
                  border border-solid border-gray-300
                  p-4
                  focus:outline-none
                "
                type="text"
            /></label>
          </li>
          <li class="flex justify-between text-sm">
            <span class="w-1/4 text-right text-gray-400"
              >{{ $trans("新密码") }}：</span
            >
            <label class="w-3/4 text-left"
              ><input
                class="
                  w-1/2
                  h-8
                  rounded-2xl
                  border border-solid border-gray-300
                  p-4
                  outline-none
                "
                type="text"
            /></label>
          </li>
          <li class="flex justify-between text-sm">
            <span class="w-1/4 text-right text-gray-400"
              >{{ $trans("确认密码") }}：</span
            >
            <label class="w-3/4 text-left"
              ><input
                class="
                  w-1/2
                  h-8
                  rounded-2xl
                  border border-solid border-gray-300
                  p-4
                  focus:outline-none
                "
                type="password"
            /></label>
          </li>
          <li class="ml-48 mt-8">
            <SaveButton
              :title="$trans('保存')"
              :name="$trans('取消')"
            ></SaveButton>
          </li>
        </ul>
      </div>
    </section>
    <!-- 认证 -->
    <section>
      <SetUpHeader
        :title="$trans('认证')"
        @writeInformation="setIdentity"
      ></SetUpHeader>
      <div v-show="!identity">
        <p class="mt-5">{{ $trans("邮箱未认证") }}</p>
      </div>
      <!-- 认证设置部分 -->
      <div v-show="identity" class="flex flex-col">
        <section class="flex flex-row mt-5">
          <span class="float-left mt-4 ml-36 text-sm text-gray-400"
            >{{ $trans("认证邮箱") }}：</span
          >
          <input
            class="
              w-1/3
              h-8
              mt-2
              float-left
              ml-2
              rounded-l-full
              p-4
              outline-none
              border-solid border border-gray-400
            "
            type="text"
            name="fname"
            v-model="mailboxFilling"
          />
          <div
            class="
              w-24
              h-8
              float-left
              mt-2
              rounded-r-full
              border-l-0 border-solid border border-gray-400
              text-sm
              leading-8
              sendEmail
            "
            @click="judgeMailboxEmpty"
          >
            {{ $trans("发送邮件") }}
          </div>
        </section>
        <section class="mt-3">
          <span class="float-left ml-56">
            1、{{
              $trans("忘记登录密码后可通过此邮箱重置密码，让您的账户更安全")
            }}！
          </span>
          <span class="float-left ml-56">
            2、{{ $trans("如果您没有收到认证邮件，请联系客服提出您的问题") }}。
          </span>
        </section>
        <section class="ml-52 mt-8 mb-20">
          <SaveButton
            :title="$trans('保存')"
            :name="$trans('取消')"
          ></SaveButton>
        </section>
      </div>
    </section>
    <!-- 隐私 -->
    <section>
      <SetUpHeader
        :title="$trans('隐私')"
        @writeInformation="setSelf"
      ></SetUpHeader>
      <div v-show="!self">
        <ul class="space-y-5 mt-5">
          <li class="flex justify-between text-sm">
            <span class="w-1/4 text-right text-gray-400"
              >{{ $trans("是否公开我的个人档案") }}？：</span
            >
            <span class="w-3/4 text-left">{{ $trans("公开") }}</span>
          </li>
          <li class="flex justify-between text-sm">
            <span class="w-1/4 text-right text-gray-400"
              >{{ $trans("加好友申请") }}：</span
            >
            <span class="w-3/4 text-left">{{ $trans("允许任何人添加") }}</span>
          </li>
          <li class="flex justify-between text-sm">
            <span class="w-1/4 text-right text-gray-400"
              >{{ $trans("是否公开我的动态点赞") }}：</span
            >
            <span class="w-3/4 text-left">{{ $trans("公开") }}</span>
          </li>
          <li class="flex justify-between text-sm">
            <span class="w-1/4 text-right text-gray-400"
              >{{ $trans("是否公开我的动态评论") }}：</span
            >
            <span class="w-3/4 text-left">{{ $trans("公开") }}</span>
          </li>
        </ul>
      </div>
      <!-- 隐私设置部分 -->
      <div v-show="self">
        <ul class="space-y-5 mt-5">
          <li class="flex text-sm">
            <span class="w-1/4 text-right text-gray-400"
              >{{ $trans("是否公开我的个人档案") }}？：</span
            >
            <input
              type="radio"
              name="personalFiles"
              value="1"
              class="mt-1 ml-1 focus:outline-none"
            />
            <label class="ml-2">{{ $trans("民众") }} </label>
            <input
              type="radio"
              name="personalFiles"
              value="1"
              class="mt-1 ml-7 focus:outline-none"
            />
            <label class="ml-2">{{ $trans("朋友们") }}</label>
            <input
              type="radio"
              name="personalFiles"
              value="1"
              class="mt-1 ml-7 focus:outline-none"
            />
            <label class="ml-2">{{ $trans("限制自己") }}</label>
          </li>
          <li class="flex text-sm">
            <span class="w-1/4 text-right text-gray-400"
              >{{ $trans("好友请求") }}：</span
            >
            <input
              type="radio"
              name="friendRequest"
              value="1"
              class="mt-1 ml-1 focus:outline-none"
            />
            <label class="ml-2">{{ $trans("允许大家加我为好友") }}</label
            ><br />
            <input
              type="radio"
              name="friendRequest"
              value="1"
              class="mt-1 ml-7 focus:outline-none"
            />
            <label class="ml-2">{{ $trans("需要验证才能加我为好友") }}</label>
          </li>
          <li class="flex text-sm">
            <span class="w-1/4 text-right text-gray-400"
              >{{ $trans("是否透露我的喜好") }}：</span
            >
            <input
              type="radio"
              name="myPreferences"
              value="1"
              class="mt-1 ml-1 focus:outline-none"
            />
            <label class="ml-2">{{ $trans("民众") }}</label
            ><br />
            <input
              type="radio"
              name="myPreferences"
              value="1"
              class="mt-1 ml-7 focus:outline-none"
            />
            <label class="ml-2">{{ $trans("限制自己") }}</label>
          </li>
          <li class="flex text-sm">
            <span class="w-1/4 text-right text-gray-400"
              >{{ $trans("是否公开我的评论") }}：</span
            >
            <input type="radio" name="myComments" value="1" class="mt-1 ml-1" />
            <label class="ml-2">{{ $trans("民众") }}</label
            ><br />
            <input type="radio" name="myComments" value="1" class="mt-1 ml-7" />
            <label class="ml-2">{{ $trans("限制自己") }}</label>
            <input
              type="radio"
              name="myComments"
              value="1"
              class="mt-1 ml-1 focus:outline-none"
            />
            <label class="ml-2">民众</label><br />
            <input
              type="radio"
              name="myComments"
              value="1"
              class="mt-1 ml-7 focus:outline-none"
            />
            <label class="ml-2">限制自己</label>
          </li>
        </ul>
        <div class="ml-48 mt-8 mb-20">
          <SaveButton
            :title="$trans('保存')"
            :name="$trans('取消')"
          ></SaveButton>
        </div>
      </div>
    </section>
    <!-- 通知 -->
    <section>
      <SetUpHeader
        :title="$trans('通知')"
        @writeInformation="setNotice"
      ></SetUpHeader>
      <!-- 通知设置部分 -->
      <div v-show="!notice">
        <ul class="space-y-5 mt-5">
          <li class="flex justify-between text-sm">
            <span class="w-1/4 text-right text-gray-400"
              >{{ $trans("当有人喜欢你") }}：</span
            >
            <span class="w-3/4 text-left" v-show="picked">{{
              $trans("是")
            }}</span>
            <!-- <span class="w-3/4 text-left" v-show="picked">{{$trans('否')}}</span> -->
          </li>
          <li class="flex justify-between text-sm">
            <span class="w-1/4 text-right text-gray-400"
              >{{ $trans("当有访客") }}：</span
            >
            <span class="w-3/4 text-left" v-show="picked">{{
              $trans("是")
            }}</span>
            <!-- <span class="w-3/4 text-left" v-show="picked">{{$trans('否')}}</span> -->
          </li>
          <li class="flex justify-between text-sm">
            <span class="w-1/4 text-right text-gray-400"
              >{{ $trans("收到礼物") }}：</span
            >
            <span class="w-3/4 text-left" v-show="picked">{{
              $trans("是")
            }}</span>
            <!-- <span class="w-3/4 text-left" v-show="picked">{{$trans('否')}}</span> -->
          </li>
          <li class="flex justify-between text-sm">
            <span class="w-1/4 text-right text-gray-400"
              >{{ $trans("离线邮件通知") }}：</span
            >
            <span class="w-3/4 text-left" v-show="picked">{{
              $trans("是")
            }}</span>
            <!-- <span class="w-3/4 text-left" v-show="picked">{{$trans('否')}}</span> -->
          </li>
        </ul>
      </div>
      <!-- 通知设置部分 -->
      <div v-show="notice">
        <ul class="space-y-5 mt-5">
          <li class="flex justify-between text-sm">
            <label class="w-1/4 text-right text-gray-400" for="loveMe"
              >{{ $trans("当有其他人喜欢你") }}：</label
            >
            <label class="w-3/4 text-left"
              ><input
                class="loveMe focus:outline-none"
                type="checkbox"
                v-model="picked"
                value="loveMe"
            /></label>
          </li>
          <li class="flex justify-between text-sm">
            <label class="w-1/4 text-right text-gray-400" for="visitor"
              >{{ $trans("当有访客") }}：</label
            >
            <label class="w-3/4 text-left"
              ><input
                class="visitor focus:outline-none"
                type="checkbox"
                v-model="picked"
                value="visitor"
            /></label>
          </li>
          <li class="flex justify-between text-sm">
            <label class="w-1/4 text-right text-gray-400" for="receiveGifts"
              >{{ $trans("收到礼物") }}：</label
            >
            <label class="w-3/4 text-left"
              ><input
                class="receiveGifts focus:outline-none"
                type="checkbox"
                v-model="picked"
                value="receiveGifts"
            /></label>
          </li>
          <li class="flex justify-between text-sm">
            <label
              class="w-1/4 text-right text-gray-400"
              for="emailNotification"
              >{{ $trans("离线邮件通知") }}：</label
            >
            <label class="w-3/4 text-left"
              ><input
                class="emailNotification"
                type="checkbox"
                v-model="picked"
                value="emailNotification"
            /></label>
          </li>
        </ul>
        <div class="ml-48 mt-8 pb-32">
          <SaveButton
            :title="$trans('保存')"
            :name="$trans('取消')"
          ></SaveButton>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import SetUpHeader from "@components/personal/SetUpHeader.vue";
import ShowContent from "@components/personal/ShowContent.vue";
import EditInformation from "@components/personal/EditInformation.vue";
import SaveButton from "@components/personal/SaveButton.vue";

export default {
  data() {
    return {
      showEmail: false,
      mailboxFilling: [],
      picked: [],
      // toSetCity: false,
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
      year: 0,
      month: 0,
      day: 1,
      years: Array.from(
        { length: 100 },
        (item, index) => index + 1910
      ).reverse(),
      months: Array.from({ length: 12 }, (item, index) => index + 1),

      job: [
        "文案",
        "客户经理",
        "文员",
        "销售",
        "设计",
        "程序员",
        "会计",
        "模特",
        "商人",
      ],
      language: [
        "English",
        "简体中文",
        "繁體中文",
        "한국어",
        "Pусский",
        "Deutsch",
        "Español",
        "日本語",
      ],
      show: false,
      set: false,
      identity: false,
      self: false,
      notice: false,
    };
  },
  computed: {
    days: {
      get: function () {
        return Array.from(
          { length: new Date(this.year, this.month, 0).getDate() },
          (item, index) => index + 1
        );
      },
    },
  },
  components: {
    SetUpHeader,
    ShowContent,
    // Interest,
    // City,
    EditInformation,
    SaveButton,
  },
  methods: {
    writeInformation() {
      this.show = !this.show;
    },
    // close() {
    //   this.showModal = !this.showModal;
    //   // this.toSetCity=!this.toSetCity
    // },
    setAccount() {
      this.set = !this.set;
    },
    setIdentity() {
      this.identity = !this.identity;
    },
    setSelf() {
      this.self = !this.self;
    },
    setNotice() {
      this.notice = !this.notice;
    },
    judgeMailboxEmpty() {
      if (this.mailboxFilling === "") {
        this.showEmail = true;
      }
    },
  },
};
</script>
<style lang="scss" >
.set-information {
  width: 20px;
  height: 20px;
  background: url(/img/little.c7c7e4e0.png) 0 -616px no-repeat;
  vertical-align: middle;
}
// select{
//   -webkit-appearance: none;
//     -moz-appearance: none;
//     appearance:none;
//     background: url("~@images/triggle.png") right center no-repeat;
//     vertical-align: middle;
// }
.sendEmail:hover {
  background-color: red;
}

</style>