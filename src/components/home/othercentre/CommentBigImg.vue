<template>
  <div class="imageBigBg h-screen">
    <section id="sellineImg">
      <div
        style="
          z-index: 1;
          width:860px;
          height: 630px;
          top: 145.5px ;rgba（0，0，0，0．7）;
        "
        class="left-1/4 fixed"
      >
        <!-- 左侧 -->
        <div
          class="imageTextBig"
          style="z-index: 19891023; width: 560px; height: 630px"
        >
          <div class="imageBigContent">
            <div class="imageBigDetail">
              <div class="imageBigDetailImg">
                <div class="imageBigDetailImgLeft" @click="leftImage()"></div>
                <div class="imageBigDetailImgRight" @click="rightImage()"></div>
                <div class="bigger">原始尺寸</div>
                <div class="normal hide" data-url data-i>重置</div>
                <div class="bd slide_bd">
                  <div
                    class="slide_item"
                    imgid="61163a5293d24eeba0605320b5ca5830"
                  >
                    <div class="js_img_border">
                      <img
                        :src="imagesUrl"
                        class=""
                        style="position: relative; margin: 0 auto"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- 右侧 -->
        <div class="imageTextBigRight">
          <div class="imageTextBigRightDetail">
            <!-- 右侧顶部说说内容和留言内容 -->
            <div class="detailTop">
              <div class="pl-3 pr-2">
                <!-- 头像昵称时间 -->
                <div class="flex">
                  <!-- 头像 -->
                  <div style="width: 45px; height: 45px">
                    <img
                      src="https://images.gagahi.com/A-52b1e4ab64144bd597935df5c8bf96e3"
                      alt=""
                      style="
                        border-radius: 50%;
                        max-width: 100%;
                        max-height: 100%;
                        width: 100%;
                        height: 100%;
                      "
                    />
                  </div>
                  <!-- 昵称，时间 -->
                  <div class="ml-1">
                    <div
                      class="text-left"
                      style="font-size: 14px; color: #2d57a1"
                    >
                      Sally
                    </div>
                    <div style="font-size: 12px; color: #696969">
                      2019-05-12 09:41
                    </div>
                  </div>
                </div>
                <!-- 说说内容 -->
                <div class="pt-2 text-left">
                  Hello. I am new here.welcome to chat
                </div>
                <!-- 说说和举报图标 -->
                <div class="pl-2 pr-2" style="padding: 10px">
                  <div class="flex justify-between">
                    <div>
                      <i class="imgLeft ml-5 align-text-top"> </i>
                      <div
                        class="imgLeftText ml-2 inline-block"
                        style="color: #999"
                      >
                        {{ commentList.length }}
                      </div>
                    </div>
                    <div>
                      <a
                        class="imgRight align-text-top"
                        @click="warning()"
                        title="举报"
                      ></a>
                    </div>
                  </div>
                </div>
              </div>
              <!-- 评论所有内容 -->
              <div v-if="commentList.length > 0">
                <div
                  v-for="(item, index) in commentList"
                  :key="index"
                  style="
                    border-top: 1px solid #e9e9e9;
                    height: auto;
                    padding: 10px 10px 0px 12px;
                  "
                >
                  <!-- 评论头像昵称文字 -->
                  <div class="flex mt-2" style="">
                    <!-- 头像 -->
                    <div style="width: 30px; height: 30px">
                      <img
                        src="https://sources.gagahi.com/3e8b932396c54c7da7fa5407ddb61dc4"
                        alt=""
                        style="
                          border-radius: 50%;
                          max-width: 100%;
                          max-height: 100%;
                          width: 100%;
                          height: 100%;
                          cursor: pointer;
                        "
                      />
                    </div>
                    <div class="ml-1 w-full mb-4">
                      <!-- 昵称，时间 -->
                      <div class="text-left -mt-2">
                        <span style="color: #90a0bc; font-size: 12px"
                          >{{ item.name }}
                        </span>
                        <span
                          class=""
                          style="font-size: 12px; color: #ccc; margin-left: 8px"
                          >{{ item.time }}</span
                        >
                      </div>
                      <!-- 文字 -->
                      <div class="text-left" style="line-height: 18px">
                        <span
                          class="align-middle"
                          style="font-size: 12px !important"
                        >
                          {{ item.content }}
                        </span>
                        <!-- 语言选择 -->
                        <i class="commentEarth relative ml-2 align-middle">
                          <!-- @mousemove="moveEarth"
                          @mouseleave="leaveEarth" -->
                          <div
                            class="commentEarthLan absolute"
                            style="top: -117px"
                          >
                            <i class="lanI"></i>
                            <ul
                              class="lanUl"
                              style="background-color: #fff; font-size: 14px"
                            >
                              <li langs-lang="en">English</li>
                              <li langs-lang="zh">简体中文</li>
                              <li langs-lang="cht">繁體中文</li>
                              <li langs-lang="kor">한국어</li>
                              <li langs-lang="ru">Pусский</li>
                              <li langs-lang="de">Deutsch</li>
                              <li langs-lang="spa">Español</li>
                              <li langs-lang="jp">日本語</li>
                            </ul>
                          </div>
                        </i>
                        <!-- 评论图标 -->
                        <i
                          class="commentText ml-2 align-middle"
                          @click.stop="commentShow = !commentShow"
                        >
                        </i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- 右侧底部input内容 -->
            <div style="height: 13px"></div>
            <!-- 点击评论前 -->
            <div
              @click.stop="commentShow = true"
              v-show="commentShow == false"
              class="text-left"
              style="
                cursor: text;
                color: #999;
                height: 30px;
                padding: 0 20px;
                line-height: 30px;
                border: 1px solid #dcdcdc;
                border-radius: 30px;
                margin: 0 15px;
              "
            >
              发表评论
            </div>
            <!-- 点击评论 -->
            <div style="margin: 0 15px">
              <div
                v-show="commentShow"
                style="
                  background: #fff none repeat scroll 0 0;
                  border-radius: 15px;
                  position: relative;
                  z-index: 2;
                  opacity: 1;
                "
              >
                <textarea
                  v-model="inputContent1"
                  id="commentLeave"
                  name=""
                  style="
                    height: 66px;
                    padding: 10px;
                    width: 256px;
                    font-size: 12px;
                    background: rgba(0, 0, 0, 0) none repeat scroll 0 0;
                    border: medium none;
                    color: #333;
                    outline: medium none;
                  "
                  maxlength="240"
                ></textarea>
              </div>
              <div
                class="text-left flex justify-between"
                style="
                  background: #f9f9f9 none repeat scroll 0 0;
                  height: auto;
                  padding: 10px 10px 0;
                "
              >
                <span class="" style="color: #999"
                  >{{ inputContent1.length }}/240</span
                >
                <div
                  class="pr-4 pl-4"
                  style="
                    background: #ff625a none repeat scroll 0 0;
                    color: #fff;
                    border-radius: 30px;
                    color: #999;
                    cursor: pointer;
                    font-size: 12px;
                    height: 30px;
                    text-align: center;
                  "
                  @click="submitComment()"
                >
                  <i class="submitIcon"></i>
                </div>
              </div>
            </div>
          </div>
          <span
            class="closedImg w-9 h-9 rounded-full -top-2 -right-3 absolute"
            @click="closeCommentImg()"
          ></span>
        </div>
      </div>
    </section>
    <section>
      <!-- 举报 -->
      <Report v-if="modal"></Report>
    </section>
  </div>
</template>

<script>
import Report from "@/components/home/othercentre/Report";

export default {
  components: {
    Report,
  },
  props: {
    images: Array,
    imagesUrl: String,
  },
  data() {
    return {
      commentShow: false,
      //大图的评论
      inputContent1: "",
      modal: false,
      commentList: [
        {
          name: "XiongCB",
          time: "2019-05-12 15:18",
          content: "来郑州玩 ",
          number: 323,
        },
      ],
      // images: [
      //   "https://images.gagahi.com/Z-298ee8d8262c451e80eedf09c8d0dabc?imageView2/5/w/123/h/120",
      // ],
    };
  },
  methods: {
    warning() {
      this.modal = !this.modal;
      //   this.$emit("func", this.modal);
    },
    submitComment() {
      const sendValue = document.getElementById("commentLeave");
      console.log(sendValue.value);
      if (sendValue.value != "") {
        this.commentList.push({
          name: "可爱小怪咖333",
          time: "03-03 12:12",
          content: sendValue.value,
          number: 323,
        });
      }
      this.inputContent1 = "";
    },
    closeCommentImg() {
      this.bigCommentImage = false;
      this.$emit("func", this.bigCommentImage);
    },
    //点击其他地方关闭大图评论
    commentLeave(event) {
      const currentCli = document.getElementById("commentLeave");
      if (currentCli) {
        if (!currentCli.contains(event.target)) {
          this.commentShow = false;
        }
      }
    },
    leftImage() {
      this.$emit("leftBtn");
    },
    rightImage() {
      this.$emit("rightBtn");
    },
    //点击其他地方关闭大图
    // closeImgComment(event) {
    //   const currentCli = document.getElementById("sellineImg");
    //   if (currentCli) {
    //     if (!currentCli.contains(event.target)) {
    //       this.bigCommentImage = false;
    //       this.$emit("func", this.bigCommentImage);
    //     }
    //   }
    // },
  },
  mounted() {
    document.addEventListener("click", this.commentLeave);
    document.addEventListener("click", this.closeImgComment);
  },
};
</script>

<style lang="scss" scoped>
.imageTextBig {
  animation-name: bounceIn;
  margin: 0;
  padding: 0;
  background-color: #fff;
  -webkit-background-clip: content;
  box-shadow: 0px 0px 3px rgb(0 0 0 / 20%);
  border-top-left-radius: 15px;
  border-bottom-left-radius: 15px;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
  -webkit-animation-duration: 0.3s;
  animation-duration: 0.3s;
  position: absolute;
  .imageBigContent {
    position: relative;
    padding: 10px 25px 25px 25px;
    overflow: auto;
    height: 630px;
    .imageBigDetail {
      position: absolute;
      left: 0;
      top: 0;
      height: 630px;
      width: 100%;
      background: #000;
      border-top-left-radius: 15px;
      border-bottom-left-radius: 15px;
      .imageBigDetailImg {
        left: 20px;
        overflow: hidden;
        background: #000;
        position: relative;
        width: 530px;
        height: 630px;
        border-radius: 15px;
        border-bottom-right-radius: 0;
        border-top-right-radius: 0;
        float: left;
        .imageBigDetailImgLeft {
          background: url("../../../assets/images/dynamic.png") no-repeat;
          display: inline-block;
          background-position: -123px 0;
          z-index: 3;
          cursor: pointer;
          position: absolute;
          left: 20px;
          top: 50%;
          margin-top: -23px;
          width: 32px;
          height: 47px;
        }
        .imageBigDetailImgRight {
          background: url("../../../assets/images/dynamic.png") no-repeat;
          display: inline-block;
          background-position: -159px 0;
          z-index: 3;
          cursor: pointer;
          width: 32px;
          height: 47px;
          position: absolute;
          right: 20px;
          top: 50%;
          margin-top: -23px;
        }
        .bigger {
          font-size: 16px;
          color: #fff;
          position: absolute;
          bottom: 12px;
          left: 15px;
          z-index: 1;
          text-shadow: 0px 0px 3px #000;
          cursor: pointer;
        }
        .normal {
          left: 27px;
          font-size: 16px;
          color: #fff;
          position: absolute;
          bottom: 12px;
          left: 15px;
          z-index: 1;
          text-shadow: 0px 0px 3px #000;
          cursor: pointer;
        }
        .hide {
          display: none !important;
        }
        .slide_bd {
          height: 630px;
          width: 530px;
          display: flex;
          align-items: center;
          text-align: center;
          .slide_item {
            width: 100%;
            display: inline-block;
            max-height: 630px;
            .js_img_border {
              display: inline;
            }
          }
        }
      }
    }
  }
}
.imageTextBigRight {
  float: right;
  border-bottom-right-radius: 14px;
  background: #f9f9f9;
  width: 300px;
  height: 630px;
  position: relative;
  border-radius: 14px;
  border-bottom-left-radius: 0;
  border-top-left-radius: 0;
  .imageTextBigRightDetail {
    max-height: 100%;
    height: 630px;
    .detailTop {
      max-height: 494px;
      padding-top: 16px;
      background-color: #fff;
    }
  }
}
.imgLeft {
  cursor: pointer;
  background: url("../../../assets/images/dynamic.png") no-repeat;
  display: inline-block;
  background-position: -26px -48px;
  height: 16px;
  width: 19px;
}
.imgLeft:hover {
  background-position: -26px -26px;
}
.imgLeftText {
  font-family: "Microsoft YaHei", "微软雅黑", arial, "HanHei SC", "PingFang SC",
    "lucida grande", tahoma, verdana, sans-serif;
  font-size: 14px;
}
.imgRight {
  background: url("../../../assets/images/dynamic.png") no-repeat;
  display: inline-block;
  background-position: -83px -26px;
  width: 20px;
  height: 17px;
}
.imgRight a {
  text-decoration: none;
  color: #333;
}
.commentEarth {
  cursor: pointer;
  background: url("../../../assets/images/dynamic.png") no-repeat;
  display: inline-block;
  background-position: -25px -2px;
  width: 13px;
  height: 13px;
  .commentEarthLan {
    color: #333;
    font-style: normal;
    position: absolute;
    left: -30px;
    width: 136px;
    padding: 10px 5px;
    border: 1px solid #e9e9e9;
    border-radius: 5px;
    background: #fff;
    z-index: 99;
    display: none;
  }
  .lanI {
    width: 20px;
    height: 30px;
    position: absolute;
    left: 30px;
    top: -13px;
    z-index: 2;
    background: url("~@images/person/IMicon.png") 0px -75px repeat;
    top: 100px;
    background-position: -208px -73px;
  }
  .lanUl li {
    padding: 0 5px;
    line-height: 22px;
    float: left;
    cursor: pointer;
  }
}
.commentEarth:hover {
  .commentEarthLan {
    display: block;
  }
}
.commentText {
  background: url("../../../assets/images/dynamic.png") no-repeat;
  display: inline-block;
  cursor: pointer;
  background-position: -45px -3px;
  width: 15px;
  height: 12px;
}
.submitIcon {
  background: url("../../../assets/images/dynamic.png") no-repeat;
  display: inline-block;
  background-position: -251px 8px;
  height: 24px;
  width: 14px;
}
.closedImg {
  background: url("~@images/iconClosed.png") -46px 1px no-repeat;
  cursor: pointer;
  z-index: 20;
}
.closedImg:hover {
  background: url("~@images/iconClosed.png") -46px -38px no-repeat;
  cursor: pointer;
}
.imageBigBg {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  z-index: 1001;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
}
</style>