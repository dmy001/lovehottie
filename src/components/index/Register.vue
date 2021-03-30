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
        <div class="input-control">
          <input :placeholder="phoneNumHolder" v-model="phoneNum" />
        </div>
        <div class="input-control">
          <input :placeholder="vilifyHolder" v-model="vilifyCode" />
        </div>
        <div class="input-control">
          <input :placeholder="vilifyHolder" v-model="vilifyCodePhone" />
        </div>
        <div class="input-control">
          <input :placeholder="passwordHolder" v-model="password" />
        </div>
        <div class="input-control">
          <input :placeholder="sexHolder" v-model="sex" />
        </div>
        <div class="input-control">
          <input :placeholder="languageHolder" v-model="language" />
        </div>
        <div class="flex flex-row flex-around-center">
          <div class="btn-control">
            <button class="btn">{{ lookBtn }}</button>
          </div>
          <div class="btn-control">
            <button class="btn btn-actived">{{ registerBtn }}</button>
          </div>
        </div>

        <div class="other-login-icon">
          <img src="~@images/index/fb.png" />
          <img src="~@images/index/wb.png" />
          <img src="~@images/index/qq.png" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "RegisterBox",
  data() {
    return {
      register: "注册",
      phoneNumHolder: "手机号码",
      phoneNum: "",
      vilifyHolder: "验证码",
      vilifyCode: "",
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
    };
  },
};
</script>
<style lang="scss" scoped>
@import "@src/assets/css/index/loginBox";
.flex-around-center {
  width: 300px;
  justify-content: space-around;
  align-items: center;
}
</style>