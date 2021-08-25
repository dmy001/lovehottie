<template>
  <div id="header">
    <div class="head-left pr-px10 pl-px10 relative">
      <img :src="STATICBASEURI + '/images/new_index/logo.png'" />
      <div
        class="inline-block cursor-pointer"
        @mouseover="langListShow = true"
        @mouseleave="langListShow = false"
      >
        <span class="inline-block p-px3">{{ $trans("语言") }}</span>
        <i class="lang-arrow-icon"></i>
        <div v-if="langListShow" class="langList text-black">
          <div
            v-for="(lan, key) in langArr"
            :key="key"
            :class="{ 'lang-selected': lan == selectLan ? true : false }"
            @click="chooseLan"
          >
            {{ lan }}
          </div>
        </div>
      </div>
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
      langListShow: false,
      selectLan: "简体中文",
    };
  },
  methods: {
    chooseLan(e) {
      this.selectLan = e.target.innerText.replace(/\s/g, "");
    },
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
.langList {
  width: 112px;
  background-color: #dcdcdc;
  border-radius: 5px;
  @apply cursor-pointer absolute;
  top: 30px;
  right: -30px;

  div {
    padding: 3px 0;
    &:hover {
      @apply text-base-color1;
    }
  }
}
.lang-selected {
  @apply text-base-color1;
}
.lang-arrow-icon {
  display: inline-block;
  width: 20px;
  height: 8px;
  background: url("~@images/down.png") no-repeat;
  vertical-align: middle;
  margin-left: 3px;
}
</style>