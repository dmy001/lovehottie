<template>
  <div id="header">
    <div class="head-left">
      <img :src="STATICBASEURI + '/images/new_index/logo.png'" />
      <span>语言</span>
    </div>
    <div class="head-right">
      <div class="btn-control register-btn">
        <button @click="$emit('showRegister')">{{ reginster }}</button>
      </div>
      <div class="btn-control login-btn">
        <button @click="$emit('showLogin')">{{ login }}</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      login: "登录",
      reginster: "注册",
    };
  },
};
</script>

<style lang="scss" scoped>
#header {
  width: 1200px;
  margin: 20px auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  left: 50%;
  transform: translate(-50%);
  z-index: $zIndexMax;
  font-size: $font14;
  .head-left {
    display: flex;
    justify-content: center;
    align-items: center;
    color: #ffffff;
    img {
      margin-right: 20px;
    }
  }
  .head-right {
    display: flex;
    .btn-control {
      margin-right: 20px;
      button {
        height: 40px;
        min-width: 100px;
        border-radius: 20px;
        text-align: center;
        border: 1px solid $btnColor;
        background-color: rgba(0, 0, 0, 0);
        outline: none;
        cursor: pointer;
        color: #ffffff;
        font-weight: bold;
      }
    }

    .register-btn button {
      background-color: $btnColor;
    }
  }
}
</style>