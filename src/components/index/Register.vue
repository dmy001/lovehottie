<template>
  <div class="screenModal">
    <div id="registerBox" class="loginBox">
      <div class="login-close" v-on:click="$emit('closeBox')">
        <img src="@images/index/close.png" />
      </div>
      <div class="login-box-container">
        <div class="login-logo">
          <img :src="STATICBASEURI + 'images/new_index/login_logo.png'" />
        </div>
        <div class="input-control phoneNum">
          <countryCodeSelector
            :countryCode.sync="locationCode"
          ></countryCodeSelector>
          <input
            :placeholder="phoneNumHolder"
            v-model="phoneNum"
            oninput="value=value.replace(/[^\d]/g,'').length>11?value.slice(0,11):value.replace(/[^\d]/g,'')"
          />
        </div>
        <div class="input-control vilifyCode">
          <input :placeholder="vilifyHolder" v-model="imageCode" />
          <img
            @click="ran = Math.random()"
            :src="DOMAIN + '/imageServlet?' + ran"
          />
        </div>
        <div class="input-control vilifyCodePhone">
          <input :placeholder="vilifyHolder" v-model="vilifyCodePhone" />
          <div
            class="vilify-btn cursor-pointer"
            :class="{ 'not-click': getCoding }"
            @click="sendMobileCode"
          >
            <div v-if="!getCoding">{{ getVilifyCodeTxt }}</div>
            <div v-if="getCoding">{{ countTime }}s</div>
          </div>
        </div>
        <div class="input-control">
          <input :placeholder="passwordHolder" v-model="password" />
        </div>

        <div class="input-control sexChoose">
          <Select v-model="sexDefult" style="width: 300px" placeholder="性别">
            <Option
              v-for="(item, index) in ['男', '女']"
              :value="item"
              :key="index"
              >{{ item }}</Option
            >
          </Select>
        </div>
        <div
          class="input-control dateChoose flex justify-between"
          style="width: 300px"
        >
          <Select v-model="selYear" style="width: 90px" placeholder="年份">
            <Option v-for="y in yearsOption()" :value="y" :key="y + 'a'">{{
              y
            }}</Option>
          </Select>
          <Select v-model="selMonth" style="width: 90px" placeholder="月份">
            <Option v-for="m in monthOption()" :value="m" :key="m + 'a'">{{
              m
            }}</Option>
          </Select>
          <Select v-model="selDay" style="width: 90px" placeholder="日">
            <Option v-for="d in daysOption()" :value="d" :key="d + 'a'">{{
              d
            }}</Option>
          </Select>
        </div>
        <div class="input-control selLang">
          <Select
            v-model="language"
            style="width: 300px"
            :placeholder="languageHolder"
          >
            <Option
              v-for="(item, index) in langArr"
              :value="item"
              :key="index"
              >{{ item }}</Option
            >
          </Select>
        </div>
        <div class="flex flex-row flex-around-center">
          <div class="btn-control">
            <button class="btn">{{ lookBtn }}</button>
          </div>
          <div class="btn-control" @click="toRegister">
            <button class="btn btn-actived">{{ registerBtn }}</button>
          </div>
        </div>

        <div class="other-login-icon">
          <img src="~@images/index/fb.png" />
          <img src="~@images/index/wb.png" />
          <img src="~@images/index/qq.png" />
        </div>
      </div>
      <div class="w-full flex justify-center mb-px15">
        <div>
          <span class="text-base-color4">{{$trans("已有账号")}}?</span>
          <span
            class="text-base-color2 cursor-pointer ml-px10"
            @click="$emit('changeBox')"
            >{{$trans("立即登录")}}</span
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import countryCodeSelector from "vue-country-code-selector";
export default {
  name: "RegisterBox",
  components: {
    countryCodeSelector,
  },
  data() {
    return {
      register: "注册",
      phoneNumHolder: "手机号码",
      locationCode: 86,
      phoneNum: "",
      vilifyHolder: "验证码",
      imageCode: "",
      vilifyCodePhone: "",
      passwordHolder: "密码",
      password: "",
      sexHolder: "性别",
      sex: "",
      yearHolder: "年份",
      year: "",
      monthHolder: "月",
      month: "",
      dayHolder: "日",
      day: "",
      languageHolder: "语言",
      language: "",
      lookBtn: "先看看",
      registerBtn: "注册",
      ran: 1,
      sexDefult: "",
      selYear: "",
      selMonth: "",
      selDay: "",
      langArr: [
        "English",
        "简体中文",
        "繁體中文",
        "한국어",
        "Pусский",
        "Deutsch",
        "Español",
        "日本語",
      ],
      langId: "zh_CN",
      getVilifyCodeTxt: "获取验证码",
      getCoding: false,
      countTime: 0,
    };
  },
  methods: {
    yearsOption() {
      let curYear = new Date().getFullYear();
      let years = Array.from({ length: 101 }).map(() => curYear--);
      return years;
    },
    monthOption() {
      console.log(this.selYear);

      let month = Object.keys(Array.from({ length: 12 })).map(
        (item) => +item + 1
      );
      return month;
    },
    daysOption() {
      let len = 30;
      if (this.selMonth == 2) {
        // 瑞年判断
        len =
          (this.selYear % 100 != 0 && this.selYear % 4 === 0) ||
          this.selYear % 400 === 0
            ? 29
            : 28;
      }
      if ([1, 3, 5, 7, 8, 10, 12].includes(this.selMonth)) {
        len = 31;
      }
      let days = Object.keys(Array.from({ length: len })).map(
        (item) => +item + 1
      );
      return days;
    },
    toRegister() {
      let birthday = this.selYear + "-" + this.selMonth + "-" + this.selDay;
      console.log({
        mobile: this.phoneNum,
        locationCode: this.vilifyCode,
        mobileCode: this.vilifyCodePhone,
        pwd: this.password,
        birthday: birthday,
        sex: this.sex,
        language: this.language,
      });
    },
    async sendMobileCode() {
      let checkParams = {
        mobile: +this.phoneNum,
        locationCode: +this.locationCode,
      };

      const check_res = await this.$api.regist.checkMobile(checkParams);
      if (check_res.data.success) {
        this.getCoding = true;
        let timer = setInterval(() => {
          if (this.countTime++ >= 60) {
            this.getCoding = false;
            this.countTime = 0;
            clearInterval(timer);
          }
        }, 1000);
      } else {
        alert(check_res.data.msg);
      }

      let params = {
        mobileNumber: +this.phoneNum,
        locationCode: +this.locationCode,
        langId: this.langId,
        imageCode: this.imageCode,
      };
      try {
        let mobileCode_res = await this.$api.regist.getMobileCode(params);
        console.log(mobileCode_res);
        if (mobileCode_res.data.code != 200) {
          alert(mobileCode_res.data.msg);
        }
      } catch (e) {
        console.log(e);
      }
    },
  },
};
</script>
<style lang="scss">
.intl-tel-input-container .flag-list-box {
  background-color: white !important;
  width: 300px !important;
  .list-item {
    text-align: left;
  }
}
.input-control.sexChoose,
.input-control.selLang,
.input-control.dateChoose {
  .ivu-select-selection {
    height: 40px;
    border: 1px solid;
    @apply border-none;
    background-color: $inputBgColor;
    box-shadow: none;
    .ivu-select-selected-value,
    .ivu-select-placeholder {
      line-height: 40px;
      color: #9ca3af;
    }
    &:focus {
      @apply border-base-color2;
    }
  }
}
.input-control.sexChoose,
.input-control.selLang {
  text-align: left;
  .ivu-select-selection {
    padding-left: 12px;
  }
}
.ivu-select-item-selected,
.ivu-select-item-selected:hover {
  @apply text-base-color2;
}
</style>
<style lang="scss" scoped>
@import "@styles/index/loginBox";
.flex-around-center {
  width: 300px;
  justify-content: space-around;
  align-items: center;
}
.input-control.phoneNum,
.input-control.vilifyCode,
.input-control.vilifyCodePhone {
  display: flex;
  width: 300px;
  align-items: center;
  background-color: $inputBgColor;
  input {
    width: auto;
  }
  img {
    height: 30px;
  }
  .vilify-btn {
    width: 100px;
    height: 45px;
    padding-left: 10px;
    @apply bg-white flex items-center justify-center;

    & > div {
      height: 30px;
      width: 90px;
      border-radius: 22px;
      border: 1px solid;
      @apply flex items-center justify-center border-base-color1 text-base-color1 bg-white;
    }
  }
}
.not-click {
  pointer-events: none;
  background-color: gray;
}
</style>