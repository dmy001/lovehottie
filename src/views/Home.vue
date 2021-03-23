<template>
  <div class="home">
    <div class="sectionBox section1">
       <div class="titleBox">
          <div class="title">
             跨越语言， 向世界SayHi
          </div>
       </div>
    </div>
    <div class="section">
        <div class="sectionBox section2">
        
    </div>
    </div>
       <div class="section">
        <div class="sectionBox section3">
       
    </div>
    </div>
    <div class="section">
        <div class="sectionBox section4">
       
    </div>
    </div>
      <div class="section">
        <div class="sectionBox section5">
       
    </div>
    </div>
    <div class="section">
        <div class="sectionBox section6">
       
    </div>
    </div>
    <div class="section">
        <div class="sectionBox section7">
       
    </div>
    </div>
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
<style lang="scss" scoped>
.home{
  width: 100%;
  overflow: hidden;
}
.sectionBox {
  height: 969px;
  width: 100%;
  overflow: hidden;
}
.section1 {
  background: url(https://sources.gagahi.com/zh_CN_bg111.jpg) center center no-repeat;
  background-size: 1920px 969px;
}
.section{
  display: table;
  table-layout: fixed;
  width: 100%;
}
.section2{
  background: url('../assets/image/zh_CN_bg2.jpg') center center no-repeat;
  background-size: 1920px 969px;
}
.section3{
  background: url('../assets/image/zh_CN_bg3.jpg') center center no-repeat;
  background-size: 1920px 969px;
}
.section4{
  background: url('../assets/image/zh_CN_bg4.jpg') center center no-repeat;
  background-size: 1920px 969px;
}
.section5{
  background: url('../assets/image/section_live.jpg') center center no-repeat;
  background-size: 1920px 969px;
}
.section6{
  background: url('../assets/image/zh_CN_bg5.jpg') center center no-repeat;
  background-size: 1920px 969px;
}
.section7{
  background: url('../assets/image/zh_CN_bg6.jpg') center center no-repeat;
  background-size: 1920px 969px;
}
</style>
