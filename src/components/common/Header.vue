<template>
  <div
    class="home-header fixed z-1000 w-full h-px50 bg-gradient-to-r from-base-color2 to-base-color1"
  >
    <div class="w-px1200 h-full mx-auto flex justify-between items-center">
      <div
        class="flex h-full justify-start items-center text-white text-px14 font-bold"
      >
        <img :src="STATICBASEURI + '/images/logo.png'" />
        <div
          class="flex justify-center items-center h-full w-px72 ml-px15 bg-base-color3 cursor-pointer"
        >
          偶遇
        </div>
        <div
          class="flex justify-center items-center h-full w-px72 ml-px15 cursor-pointer"
        >
          动态
        </div>
      </div>

      <div class="flex h-full justify-start items-center text-px14 text-white">
        <div
          class="flex h-px24 bg-base-color3 rounded-px15 justify-between items-center"
        >
          <input
            type="text"
            class="flex w-px120 search-input text-white font-bold text-px14"
            placeholder="请输入昵称"
          />
          <!-- <img src="~@images/little.png" /> -->
          <label class="flex search-icon m-px3" />
        </div>
        <button class="header-btn ml-px15 text-base-color1">
          {{ upMoney }}
        </button>
        <button class="header-btn ml-px15 text-base-color1">
          {{ upGrade }}
        </button>
        <div class="relative cursor-pointer msg-info header-info ml-px15">
          <span class="absolute info-num">1</span>
          <label class="inline-block w-full h-full"></label>
          <div class="absolute -bottom-full triangle-top"></div>
          <div class="absolute info-panl flex">
            <div>
              <msg-info-item v-for="i in 10" :key="i" />
            </div>
          </div>
        </div>
        <div class="relative cursor-pointer friend-info header-info ml-px15">
          <span class="absolute info-num">1</span>
          <label class="inline-block w-full h-full"></label>
          <div class="absolute -bottom-full triangle-top"></div>
          <div class="absolute info-panl"></div>
        </div>
        <div class="relative cursor-pointer set-info header-info ml-px15">
          <!-- <span class="absolute info">1</span> -->
          <label class="inline-block w-full h-full"></label>
          <div class="absolute -bottom-full triangle-top"></div>
          <div class="absolute info-panl"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MsgInfoItem from "@components/common/MsgInfoItem.vue";

export default {
  name: "homeHeader",
  data() {
    return {
      upMoney: "充值",
      upGrade: "升级",
    };
  },
  components: {
    "msg-info-item": MsgInfoItem,
  },
};
</script>

<style scoped lang="scss">
input::placeholder {
  color: white;
}
.search-icon {
  width: 34px;
  height: 30px;
  background: url("~@images/little.png") -17px -704px no-repeat;
  cursor: pointer;
}
.search-input {
  border: none;
  background: none;
  outline: none;
  margin-left: 10px;
  flex-grow: 1;
  flex-shrink: 1;
}
.header-btn {
  background-color: white;
  width: 65px;
  height: 22px;
  outline: none;
}
.header-btn:hover {
  background-color: $baseColor5;
}

.header-info {
  width: 24px;
  height: 22px;
  .info-num {
    width: 18px;
    height: 18px;
    top: -10px;
    right: -9px;
    background-color: #d24040;
    border-radius: 50%;
  }
  .triangle-top {
    bottom: -15px;
    left: -4px;
    display: none;
  }
  .info-panl {
    width: 360px;
    height: 400px;
    padding: 8px;
    background-color: white;
    border-radius: 10px;
    bottom: -415px;
    left: -260px;
    display: none;
    & > div {
      height: calc(100% - 16px);
      overflow-y: scroll;
    }
  }
  &:hover .triangle-top,
  &:hover .info-panl {
    display: block;
  }
}
.msg-info {
  label {
    background: url("~@images/little.png") 1px -513px no-repeat;
  }
}
.friend-info label {
  background: url("~@images/little.png") 0 -540px no-repeat;
}
.set-info label {
  background: url("~@images/little.png") 0 -566px no-repeat;
}

//  /*滚动条样式*/
.info-panl > div::-webkit-scrollbar {
  width: 4px;
}
.info-panl > div::-webkit-scrollbar-thumb {
  border-radius: 10px;
  -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
  background: rgba(0, 0, 0, 0.2);
}
.info-panl > div::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
  border-radius: 0;
  background: rgba(0, 0, 0, 0.1);
}
</style>