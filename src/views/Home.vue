<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <div>
      <button @click="showRegister">注册</button>
      <button @click="showLogin">登录</button>
      <button @click="closeLoginBox">关闭登录框</button>
    </div>
    <Login v-if="loginState" />
    <Register v-if="registerState" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import Login from "@components/index/Login.vue";
import Register from "@components/index/Register.vue";

export default {
  name: "Home",
  data() {
    return {
      loginState: false,
      registerState: false,
    };
  },
  components: {
    HelloWorld,
    Login,
    Register,
  },
  methods: {
    showLogin() {
      this.loginState = true;
      this.registerState = false;
    },
    showRegister() {
      this.registerState = true;
      this.loginState = false;
    },
    closeLoginBox() {
      this.registerState = false;
      this.loginState = false;
    },
  },
};
</script>
