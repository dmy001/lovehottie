<template>
  <div class="screenModal">
    <div id="loginBox" class="loginBox">
      <div></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LoginBox",
  data() {
    return {
      login: "登录",
    };
  },
};
</script>
<style lang="scss" scoped>
@import "@src/assets/css/index/loginBox";
</style>
