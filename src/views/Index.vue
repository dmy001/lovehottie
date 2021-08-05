<template>
  <div class="home">
    <div class="sectionBox section1">
      <Header @showLogin="showLogin" @showRegister="showRegister" />
      <div class="content">
        <div class="titleBox">
          <div class="title">跨越语言， 向世界SayHi</div>
          <div class="titleText">GaGa拥有来自100多个国家的注册会员</div>
          <div class="titleText">是聊天，交友，分享趣事的绝佳平台</div>
        </div>
        <div class="bottom_index" @click="nextPage"></div>
      </div>
    </div>
    <div class="sectionBox section2">
      <div class="content">
        <div class="titleBox">
          <div class="title">很高兴认识你</div>
          <div class="titleText">进入GaGaHi的世界，结识更多异国朋友……</div>
        </div>
        <img
          :src="STATICBASEURI + '/images/new_index/page2_1.png'"
          alt=""
          :class="['page2_1', { fadein: show }]"
          ref="page2_1"
          v-if="show"
        />
        <img
          :src="STATICBASEURI + '/images/new_index/page2_2.png'"
          alt=""
          :class="['page2_2', { active: show1 }]"
          ref="page2_2"
        />
        <img
          :src="STATICBASEURI + '/images/new_index/page2_3.png'"
          alt=""
          :class="['page2_3', { active: show1 }]"
          ref="page2_3"
        />
        <img
          :src="STATICBASEURI + '/images/new_index/page2_5.png'"
          alt=""
          ref="page2_5"
          :class="['page2_5', { fadein: show }]"
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
          :src="STATICBASEURI + '/images/new_index/page3_2.png'"
          alt=""
          :class="['page3_2', { fadeImg_in: showImg }]"
        />
        <img
          :src="STATICBASEURI + '/images/new_index/page3_1.png'"
          alt=""
          :class="['page3_1', { fadeImg_bottom: showImg }]"
        />
      </div>
    </div>
    <div class="sectionBox section4">
      <div class="content">
        <div class="titleBox">
          <div class="title">让他们了解你</div>
          <div class="titleText">朋友圈国际化、无限大，让世界变得触手可及</div>
        </div>
        <div class="swiper-container topBanner" ref="topBanner">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <img
                class="page4_1"
                :src="STATICBASEURI + '/images/new_index/page4_1.png'"
              />
            </div>
            <div class="swiper-slide">
              <img
                class="page4_2"
                :src="STATICBASEURI + '/images/new_index/page4_2.png'"
              />
            </div>
            <div class="swiper-slide">
              <img
                class="page4_3"
                :src="STATICBASEURI + '/images/new_index/page4_3.png'"
              />
            </div>
            <div class="swiper-slide">
              <img
                class="page4_4"
                :src="STATICBASEURI + '/images/new_index/page4_4.png'"
              />
            </div>
            <div class="swiper-slide">
              <img
                class="page4_5"
                :src="STATICBASEURI + '/images/new_index/page4_5.png'"
              />
            </div>
          </div>
          <div class="swiper-pagination"></div>
        </div>
      </div>
    </div>
    <!-- <div class="section sectionBox section5">
      <div class="content">
        <div class="titleBox">
          <div class="title">面对面视频直播</div>
          <div class="titleText">
            在线观看直播，异国风情尽收眼底，面对面拉近彼此距离
          </div>
        </div>
        <div class="live_list">
          <img
            :src="STATICBASEURI + '/images/new_index/page_live_1.png'"
            alt=""
          />
          <img
            :src="STATICBASEURI + '/images/new_index/page_live_2.png'"
            alt=""
          />
          <img
            :src="STATICBASEURI + '/images/new_index/page_live_3.png'"
            alt=""
          />
        </div>
      </div>
    </div> -->
    <div class="sectionBox section6">
      <div class="content">
        <div class="titleBox">
          <div class="title">多元化体验</div>
          <div class="titleText">甜蜜、开心、轻松邂逅你的Ta</div>
        </div>
        <div class="GaGa_box">
          <img
            :src="STATICBASEURI + '/images/new_index/page5_1.png'"
            alt=""
            class="section5_logo"
            @mouseenter="enter"
            @mouseleave="leave"
          />
          GaGa
          <img
            :src="STATICBASEURI + '/images/new_index/page5_1_1.png'"
            alt=""
            :class="['section5_tip', { showImg: firstShow }]"
          />
        </div>
        <div class="Game_box">
          <img
            :src="STATICBASEURI + '/images/new_index/page5_2.png'"
            alt=""
            class="section5_logo"
            @mouseenter="enterSecond"
            @mouseleave="leaveSecond"
          />
          Game
          <img
            :src="STATICBASEURI + '/images/new_index/page5_2_2.png'"
            alt=""
            :class="['section5_tip', { showImg2: secondShow }]"
          />
        </div>
        <div class="Travel_box">
          <img
            class="section5_logo"
            :src="STATICBASEURI + '/images/new_index/page5_3.png'"
            @mouseenter="enterThree"
            @mouseleave="leaveThree"
          />
          Travel
          <img
            :class="['section5_tip', { showImg3: threeShow }]"
            style="left: -95px; width: 325px; margin-top: 10px"
            :src="STATICBASEURI + '/images/new_index/page5_3_3.png'"
          />
        </div>
        <div class="Love_box">
          <img
            class="section5_logo"
            :src="STATICBASEURI + '/images/new_index/page5_4.png'"
            @mouseenter="enterFour"
            @mouseleave="leaveFour"
          />
          Love
          <img
            :class="['section5_tip', { showImg4: fourShow }]"
            style="left: -138px; width: 368px; top: 0"
            :src="STATICBASEURI + '/images/new_index/page5_4_4.png'"
          />
        </div>
        <div class="Explore_box">
          <img
            class="section5_logo"
            :src="STATICBASEURI + '/images/new_index/page5_5.png'"
            @mouseenter="enterFive"
            @mouseleave="leaveFive"
          />
          Explore
          <img
            :class="['section5_tip', { showImg5: fiveShow }]"
            style="width: 504px"
            :src="STATICBASEURI + '/images/new_index/page5_5_5.png'"
          />
        </div>
      </div>
    </div>
    <div class="sectionBox section7">
      <div class="login_box">
        <img
          :src="STATICBASEURI + '/images/new_index/zh_CN_page6_88.png'"
          alt=""
          class="section6_iphone"
        />
        <div class="download">
          <div class="download_code">
            <img
              :src="STATICBASEURI + '/public/images/qrpic.png'"
              style="margin-top: 10px; margin-left: 10px"
            />
          </div>
          <div class="download_text">手机扫码下载</div>
          <a
            id="apkUrl"
            href="https://play.google.com/store/apps/details?id=com.zoneyet.lovehottie"
            target="blank"
            ><img
              class="dow_btn"
              style="margin: 20px 0"
              :src="STATICBASEURI + '/images/new_index/page6_3.png'"
          /></a>
          <a
            href="https://itunes.apple.com/cn/app/gaga-ga-ga-kua-yue-yu-yan/id1051978194?mt=8"
            target="blank"
            ><img
              class="dow_btn"
              :src="STATICBASEURI + '/images/new_index/page6_4.png'"
          /></a>
        </div>
      </div>
    </div>
    <Login
      v-if="loginState"
      @closeBox="closeLoginBox"
      @changeBox="showRegister"
    />
    <Register
      v-if="registerState"
      @closeBox="closeLoginBox"
      @changeBox="showLogin"
    />
    <Footer />
  </div>
</template>

<script>
import Login from "@components/index/Login.vue";
import Register from "@components/index/Register.vue";
import Header from "@components/index/Header.vue";
import Footer from "@components/index/footer.vue";
export default {
  name: "Home",
  data() {
    return {
      loginState: false,
      registerState: false,
      show: false,
      show1: false,
      showImg: false,
      firstShow: true,
      secondShow: false,
      threeShow: false,
      fourShow: false,
      fiveShow: false,
    };
  },
  components: {
    // HelloWorld,
    Login,
    Register,
    Header,
    Footer,
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
    // 轮播
    newbannerInit() {
      let self = this;
      self.$nextTick(function() {
        const topSwiper = new window.Swiper(".topBanner", {
          autoplay: {
            delay: 1500,
          },
          slidesPerView: 5,
          spaceBetween: 0,
          centeredSlides: true,
          loop: true,
        });
        self.topSwiper = topSwiper;
      });
    },
    nextPage() {
      window.scrollTo({
        top: 969,
        behavior: "smooth",
      });
    },
    handleScroll() {
      var scrollTop =
        window.pageXOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      if (scrollTop >= 490) {
        this.show = true;
        setTimeout(() => {
          this.show1 = true;
        }, 800);
      }
      if (scrollTop >= 1450) {
        this.showImg = true;
      }
    },
    enter() {
      this.firstShow = true;
    },
    leave() {
      this.firstShow = false;
    },
    enterSecond() {
      this.secondShow = true;
      this.firstShow = false;
    },
    leaveSecond() {
      this.secondShow = false;
    },
    enterThree() {
      this.threeShow = true;
      this.firstShow = false;
    },
    leaveThree() {
      this.threeShow = false;
    },
    enterFour() {
      this.fourShow = true;
      this.firstShow = false;
    },
    leaveFour() {
      this.fourShow = false;
    },
    enterFive() {
      this.fiveShow = true;
      this.firstShow = false;
    },
    leaveFive() {
      this.fiveShow = false;
    },
  },
  created() {
    this.newbannerInit();
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
    this.timer = setInterval(() => {
      if (
        !this.secondShow &&
        !this.threeShow &&
        !this.fourShow &&
        !this.fiveShow
      ) {
        this.firstShow = true;
      }
    }, 2000);
  },
  beforeDestroy() {
    clearInterval(this.timer);
  },
};
</script>
<style lang="scss" scoped>
.home {
  width: 100%;
  overflow: hidden;
  min-width: 1200px;
  font-size: 14px;
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
    background: url($baseImgURI+"zh_CN_bg111.jpg") center center no-repeat;
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
        opacity: 0;
      }
      .page2_2 {
        position: absolute;
        bottom: 350px;
        right: 330px;
        z-index: 99;
        visibility: 0;
        opacity: 0;
      }
      .page2_3 {
        position: absolute;
        bottom: 350px;
        left: 330px;
        z-index: 99;
        opacity: 0;
      }
      .page2_5 {
        position: absolute;
        top: 730px;
        left: 550px;
        width: 100px;
        opacity: 0;
      }
      @keyframes page2_1 {
        0% {
          opacity: 0;
        }
        100% {
          opacity: 1;
        }
      }
      .fadein {
        animation-name: page2_1;
        animation-duration: 0.4s;
        opacity: 1;
      }
      @keyframes page2_2 {
        from {
          bottom: 300px;
        }
        to {
          bottom: 350px;
        }
        0% {
          opacity: 0;
        }
        100% {
          opacity: 1;
        }
      }
      .active {
        animation: page2_2;
        animation-duration: 0.5s;
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
        opacity: 0;
      }
      .page3_1 {
        position: absolute;
        bottom: 160px;
        right: 268px;
        opacity: 0;
      }
      @keyframes page3_2 {
        from {
          top: 260px;
        }
        to {
          top: 365px;
        }
        0% {
          opacity: 0;
        }
        100% {
          opacity: 1;
        }
      }
      @keyframes page3_1 {
        from {
          bottom: 60px;
        }
        to {
          bottom: 160px;
        }
        0% {
          opacity: 0;
        }
        100% {
          opacity: 1;
        }
      }
      .fadeImg_in {
        animation: page3_2;
        animation-duration: 0.4s;
        opacity: 1;
      }
      .fadeImg_bottom {
        animation: page3_1;
        animation-duration: 0.4s;
        opacity: 1;
      }
    }
  }
  .section4 {
    background: url("~@images/index/zh_CN_bg4.jpg") center center no-repeat;
    background-size: 1920px 969px;
    .content {
      width: 1200px;
      margin: 0 auto;
      height: 969px;
      position: relative;
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
      .swiper-container {
        width: 1580px;
        left: -190px;
        top: 80px;
      }
      .swiper-slide {
        opacity: 0.5;
      }
      .swiper-slide-active,
      .swiper-slide-next,
      .swiper-slide-prev {
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
      position: relative;
      .section5_tip {
        position: relative;
        left: -190px;
        bottom: 20px;
        z-index: 99;
        display: none;
        opacity: 0;
      }
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
        .showImg {
          position: relative;
          left: -160px;
          display: block;
          width: 504px;
          animation-name: section5_tip;
          animation-duration: 1s;
          bottom: 10px;
          opacity: 1;
        }
      }
      .GaGa_box:hover .section5_logo {
        transform: translateZ(0) scale(1.1);
      }
      .Game_box {
        width: 120px;
        top: 270px;
        left: 230px;
        position: absolute;
        .showImg2 {
          left: -190px;
          display: block;
          width: 504px;
          animation-name: section5_tip;
          animation-duration: 1s;
          bottom: 10px;
          opacity: 1;
        }
      }
      .Game_box:hover .section5_logo {
        transform: translateZ(0) scale(1.1);
      }
      .Travel_box {
        width: 130px;
        top: 435px;
        left: 850px;
        position: absolute;
        .showImg3 {
          position: relative;
          left: -95px;
          display: inline;
          width: 325px;
          animation-name: section5_tip;
          animation-duration: 1s;
          opacity: 1;
        }
      }
      .Travel_box:hover .section5_logo {
        transform: translateZ(0) scale(1.1);
      }
      .Love_box {
        width: 90px;
        top: 293px;
        left: 973px;
        position: absolute;
        .showImg4 {
          position: relative;
          left: -138px;
          display: inline;
          width: 368px;
          animation-name: section5_tip;
          animation-duration: 1s;
          opacity: 1;
        }
      }
      .Love_box:hover .section5_logo {
        transform: translateZ(0) scale(1.1);
      }
      .Explore_box {
        width: 120px;
        top: 470px;
        left: 120px;
        position: absolute;
        .showImg5 {
          position: relative;
          left: -190px;
          display: inline;
          width: 504px;
          animation-name: section5_tip;
          animation-duration: 1s;
          opacity: 1;
        }
      }
      .Explore_box:hover .section5_logo {
        transform: translateZ(0) scale(1.1);
      }
      .section5_logo {
        margin-bottom: 15px;
        cursor: pointer;
        width: 100%;
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
    .login_box {
      width: 1200px;
      margin: 0 auto;
      height: 969px;
      position: relative;
      display: flex;
      flex-direction: row;
      .section6_iphone {
        margin-top: 118px;
        width: 338px;
        height: 690px;
      }
      .download {
        position: absolute;
        top: 210px;
        left: 470px;
        width: 260px;
        text-align: center;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        .download_code {
          width: 240px;
          height: 240px;
          background: #fff;
          border-radius: 10px;
          margin: 0 auto;
        }
        .download_text {
          color: #fff;
          margin: 20px 0;
        }
      }
    }
  }
}
</style>
