<template>
  <div class="screenModal">
    <div id="registerBox" class="loginBox">
      {{ register }}
    </div>
  </div>
</template>

<script>
export default {
  name: "RegisterBox",
  data() {
    return {
      register: "注册",
    };
  },
};
</script>
<style lang="scss" scoped>
// @import "@src/assets/css/index/loginBox";
</style>