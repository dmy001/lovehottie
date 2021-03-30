<template>
  <div class="screenModal">
    <div id="loginBox" class="loginBox">
      <div class="login-close" v-on:click="closeBox">
        <img src="@images/index/close.png" />
      </div>
      <div class="login-box-container">
        <div class="login-logo">
          <img :src="STATICBASEURI + 'images/new_index/login_logo.png'" />
        </div>
        <div class="input-control">
          <input :placeholder="userHodler" />
        </div>
        <div class="input-control">
          <input :placeholder="passwordHodler" />
        </div>
        <div>
          <div class="text-base-color1">{{ findPassword }}</div>
        </div>
        <div class="btn-control">
          <button class="btn btn-actived">{{ loginBtn }}</button>
        </div>
        <div class="btn-control">
          <button class="btn">{{ lookBtn }}</button>
        </div>
        <div class="other-login-icon">
          <img src="~@images/index/fb.png" />
          <img src="~@images/index/wb.png" />
          <img src="~@images/index/qq.png" />
        </div>

        <div>
          <span class="fontGray">{{ noUsernumber }}</span>
          <a class="text-base-color1">{{ registeNow }}</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LoginBox",
  data() {
    return {
      login: "登录",
      userHodler: "GaGa号/手机号/邮箱",
      passwordHodler: "密码",
      findPassword: "忘记密码",
      loginBtn: "登录",
      lookBtn: "先看看",
      noUsernumber: "没有账号？",
      registeNow: "立即注册",
    };
  },
  methods: {
    closeBox() {
      this.$emit("closeBox");
    },
  },
};
</script>
<style lang="scss" scoped>
@import "@src/assets/css/index/loginBox";
.btn-control {
  button {
    width: 300px;
  }
}
</style>
