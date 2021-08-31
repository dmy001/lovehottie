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
          <input :placeholder="userHodler" v-model="userNumber" />
        </div>
        <div class="input-control">
          <input
            type="password"
            :placeholder="passwordHodler"
            v-model="password"
            @keydown.enter="toLogin"
          />
        </div>
        <div>
          <div class="text-base-color1">{{ findPassword }}</div>
        </div>
        <div class="btn-control">
          <button class="btn btn-actived" @click="toLogin()">
            {{ loginBtn }}
          </button>
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
      <div class="w-full flex justify-center mb-px15">
        <div>
          <span class="text-base-color4">{{ $trans("没有账号") }}?</span>
          <span
            class="text-base-color2 cursor-pointer ml-px10"
            @click="$emit('changeBox')"
            >{{ $trans("立即注册") }}</span
          >
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
      userNumber: "",
      passwordHodler: "密码",
      password: "",
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
    async toLogin() {
      this.loginBtn = " $trans('登录中')";
      const res = await this.$api.login({
        userName: this.userNumber,
        passWord: this.password,
        type: 1,
        code: "",
      });

      let data = res.data;
      if (data.success) {
        window.sessionStorage.setItem("isLogin", true);
        this.$router.push("home");
      } else {
        alert(data.msg);
        this.loginBtn = "$trans('登录')";
      }
    },
  },
};
</script>
<style lang="scss" scoped>
@import "@styles/index/loginBox";
.btn-control {
  button {
    width: 300px;
  }
}
</style>
