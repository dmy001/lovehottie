<template>
  <div class="home">
    <Header @showLogin="showLogin" @showRegister="showRegister" />
    <div class="sectionBox section1">
      <div class="content">
        <div class="titleBox">
          <div class="title">跨越语言， 向世界SayHi</div>
          <div class="titleText">GaGa拥有来自100多个国家的注册会员</div>
          <div class="titleText">是聊天，交友，分享趣事的绝佳平台</div>
        </div>
        <div class="bottom_index"></div>
      </div>
    </div>
    <div class="sectionBox section2">
      <div class="content">
        <div class="titleBox">
          <div class="title">很高兴认识你</div>
          <div class="titleText">进入GaGaHi的世界，结识更多异国朋友……</div>
        </div>
        <img
          :src="baseURI + '/images/new_index/page2_1.png'"
          alt=""
          class="page2_1"
        />
        <img
          :src="baseURI + '/images/new_index/page2_2.png'"
          alt=""
          class="page2_2"
        />
        <img
          :src="baseURI + '/images/new_index/page2_3.png'"
          alt=""
          class="page2_3"
        />
        <img
          :src="baseURI + '/images/new_index/page2_5.png'"
          alt=""
          class="page2_5"
        />
      </div>
    </div>
    <div class="sectionBox section3">
      <div class="content">
        <div class="titleBox">
          <div class="title">让语言拉近彼此</div>
          <div class="titleText">在线即时聊天，畅想国际化多语种沟通乐趣</div>
        </div>
        <img
          :src="baseURI + '/images/new_index/page3_2.png'"
          alt=""
          class="page3_2"
        />
        <img
          :src="baseURI + '/images/new_index/page3_1.png'"
          alt=""
          class="page3_1"
        />
      </div>
    </div>
    <div class="sectionBox section4">
      <div class="content">
        <div class="titleBox">
          <div class="title">让他们了解你</div>
          <div class="titleText">朋友圈国际化、无限大，让世界变得触手可及</div>
        </div>
        <img
          :src="baseURI + '/images/new_index/page3_2.png'"
          alt=""
          class="page3_2"
        />
        <img
          :src="baseURI + '/images/new_index/page3_1.png'"
          alt=""
          class="page3_1"
        />
      </div>
    </div>
    <div class="sectionBox section5">
      <div class="content">
        <div class="titleBox">
          <div class="title">面对面视频直播</div>
          <div class="titleText">
            在线观看直播，异国风情尽收眼底，面对面拉近彼此距离
          </div>
        </div>
        <div class="live_list">
          <img :src="baseURI + '/images/new_index/page_live_1.png'" alt="" />
          <img :src="baseURI + '/images/new_index/page_live_2.png'" alt="" />
          <img :src="baseURI + '/images/new_index/page_live_3.png'" alt="" />
        </div>
      </div>
    </div>
    <div class="sectionBox section6">
      <div class="content">
        <div class="titleBox">
          <div class="title">多元化体验</div>
          <div class="titleText">甜蜜、开心、轻松邂逅你的Ta</div>
        </div>
        <div class="GaGa_box">
          <img
            :src="baseURI + '/images/new_index/page5_1.png'"
            alt=""
            class="section5_logo"
          />
          GaGa
          <img
            :src="baseURI + '/images/new_index/page5_1_1.png'"
            alt=""
            class="section5_tip"
          />
        </div>
        <div class="GaGa_box">
          <img
            :src="baseURI + '/images/new_index/page5_1.png'"
            alt=""
            class="section5_logo"
          />
          GaGa
          <img
            :src="baseURI + '/images/new_index/page5_1_1.png'"
            alt=""
            class="section5_tip"
          />
        </div>
      </div>
    </div>
    <div class="sectionBox section7"></div>
    <Login v-if="loginState" @closeBox="closeLoginBox" />
    <Register v-if="registerState" />
  </div>
</template>

<script>
import Login from "@components/index/Login.vue";
import Register from "@components/index/Register.vue";
import Header from "@components/index/Header.vue";

export default {
  name: "Home",
  data() {
    return {
      loginState: false,
      registerState: false,
      baseURI: process.env.VUE_APP_STATICURI,
    };
  },
  components: {
    // HelloWorld,
    Login,
    Register,
    Header,
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
.home {
  width: 100%;
  overflow: hidden;
  .sectionBox {
    height: 969px;
    width: 100%;
    overflow: hidden;
    .content {
      width: 1200px;
      margin: 0 auto;
      height: 969px;
      position: relative;
      .titleBox {
        color: #333;
        padding-top: 140px;
        width: 100%;
        .title {
          font-size: 48px;
          margin-bottom: 28px;
          font-weight: bold;
        }
        .titleText {
          font-size: 30px;
        }
      }
    }
  }
  .section1 {
    background: url(https://sources.gagahi.com/zh_CN_bg111.jpg) center center
      no-repeat;
    background-size: 1920px 969px;
    .content {
      .titleBox {
        width: 100%;
        position: absolute;
        top: 43%;
        left: 50%;
        transform: translate(-50%, -50%);
        color: #fff;
        .title {
          font-size: 60px;
          margin-bottom: 45px;
          font-weight: bold;
        }
        .titleText {
          font-size: 30px;
          margin-bottom: 10px;
        }
      }
      .bottom_index {
        width: 30px;
        height: 30px;
        border-right: 1px solid #fff;
        border-bottom: 1px solid #fff;
        position: absolute;
        bottom: 50px;
        left: 0;
        right: 0;
        margin: auto;
        transform: rotate(45deg);
        cursor: pointer;
      }
    }
  }
  .section2 {
    background: url("~@images/index/zh_CN_bg2.jpg") center center no-repeat;
    background-size: 1920px 969px;
    .content {
      .page2_1 {
        position: absolute;
        top: 410px;
        left: 546px;
        z-index: 100;
        opacity: 1;
      }
      .page2_2 {
        position: absolute;
        bottom: 350px;
        right: 330px;
        z-index: 99;
        opacity: 1;
      }
      .page2_3 {
        position: absolute;
        bottom: 350px;
        left: 330px;
        z-index: 99;
        opacity: 1;
      }
      .page2_5 {
        position: absolute;
        top: 730px;
        left: 550px;
        width: 100px;
        opacity: 1;
      }
    }
  }
  .section3 {
    background: url("~@images/index/zh_CN_bg3.jpg") center center no-repeat;
    background-size: 1920px 969px;
    .content {
      .titleBox {
        color: #fff;
        padding-top: 140px;
        width: 100%;
      }
      .page3_2 {
        position: absolute;
        top: 365px;
        left: 288px;
        opacity: 1;
      }
      .page3_1 {
        position: absolute;
        bottom: 160px;
        right: 268px;
        opacity: 1;
      }
    }
  }
  .section4 {
    background: url("~@images/index/zh_CN_bg4.jpg") center center no-repeat;
    background-size: 1920px 969px;
    .content {
      .page3_2 {
        position: absolute;
        top: 365px;
        left: 288px;
        opacity: 1;
      }
      .page3_1 {
        position: absolute;
        bottom: 160px;
        right: 268px;
        opacity: 1;
      }
    }
  }
  .section5 {
    background: url("~@images/index/section_live.jpg") center center no-repeat;
    background-size: 1920px 969px;
    .content {
      .titleBox[data-v-fae5bece] {
        color: #333;
        padding-top: 0px;
        width: 100%;
      }
      .live_list {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        margin-top: 60px;
      }
    }
  }
  .section6 {
    background: url("~@images/index/zh_CN_bg5.jpg") center center no-repeat;
    background-size: 1920px 969px;
    .content {
      text-align: center;
      .GaGa_box {
        width: 185px;
        position: absolute;
        top: 320px;
        left: 510px;
        .section5_logo {
          width: 100%;
          margin-bottom: 15px;
          cursor: pointer;
        }
        .section5_tip {
          position: relative;
          left: -190px;
          bottom: 20px;
          z-index: 99;
          display: none;
          opacity: 1;
        }
      }
      .GaGa_box:hover .section5_logo {
        transform: translateZ(0) scale(1.1);
      }
      .GaGa_box:hover .section5_tip {
        position: relative;
        left: -160px;
        display: block;
        width: 504px;
        animation-name: section5_tip;
        animation-duration: 1s;
        bottom: 10px;
      }
      @keyframes section5_tip {
        0% {
          opacity: 0;
        }
        100% {
          opacity: 1;
        }
      }
    }
  }

  .section7 {
    background: url("~@images/index/zh_CN_bg6.jpg") center center no-repeat;
    background-size: 1920px 969px;
  }
}
</style>
