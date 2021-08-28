<template>
  <div>
    <section class="mt-4 bg-white py-5 px-5">
      <div v-if="haveInformation" class="noInformation pb-12">
        <p></p>
      </div>
      <div class="pb-12">
        <div class="flex">
          <img
            class="rounded-full"
            style="width: 45px; height: 45px"
            src="https://images.gagahi.com/A-614b46d091d84696bf32bb34ef16e943"
            alt=""
          />
          <div
            class="ml-2 w-full mr-3"
            @mousemove="mousemoveWarning"
            @mouseleave="mouseleaveWarning"
          >
            <p class="text-left mt-1">
              <span style="color: #90a0bc; font-family: Arial">Sandy</span>
              <span class="ml-2" style="color: #999; font-size: 12px"
                >2019-05-13 12:05</span
              >
              <span
                style="float: right"
                v-show="showWarning"
                @click="warning()"
                class="talk_icon mr-px3 inline-block cursor-pointer h-4 w-5"
              ></span>
            </p>
            <p
              class="contentText mt-2 text-left"
              style="word-break: break-all; word-wrap: break-word"
            >
              お会いできてうれしいです
            </p>
            <!-- 评论图片 -->
            <div class="mt-2 text-left flex" style="">
              <div
                class="imgboxs relative cursor-pointer float-left"
                style="overflow: hidden"
                v-for="(item, index) in images"
                :key="index"
              >
                <img
                  @click.stop="openCommentImage(index)"
                  :src="item.url"
                  alt=""
                  style="
                    object-fit: cover;
                    flex-shrink: 0;
                    width: 87px;
                    height: 87px;
                  "
                />
              </div>
            </div>
            <!-- 留言按钮和地球 -->
            <div class="dynamic_icon h-5 ml-px15 mt-px15 relative">
              <span
                class="bg_icon inline-block cursor-pointer h-4 w-5 mr-px3"
                @click.stop="openList"
                @click="showIcon()"
                :style="{
                  backgroundPosition:
                    showicon == true ? '-26px -48px' : '-26px -26px',
                }"
              >
              </span>
              <span class="text-gray-400">{{ contentList.length }}</span>
              <div class="fanyi_circle" style="line-height: 10px">
                <span
                  class="bg_circle ml-px15 inline-block cursor-pointer w-5 h-5"
                >
                </span>
                <div class="trans-type1 w-36 h-28 absolute hidden left-4 top-6">
                  <span class="ul_bg1 w-5 h-7 absolute left-7 -top-3"></span>
                  <ul>
                    <li data-type="en">English</li>
                    <li data-type="zh">简体中文</li>
                    <li data-type="cht">繁體中文</li>
                    <li data-type="kor">한국어</li>
                    <li data-type="ru">Pусский</li>
                    <li data-type="de">Deutsch</li>
                    <li data-type="spa">Español</li>
                    <li data-type="jp">日本語</li>
                  </ul>
                </div>
              </div>
            </div>
            <div
              class="dynamic_input mt-2 w-full overflow-hidden px-5 py-5"
              style="border-top: 1px solid #e7e7e7; background: #fafafa"
            >
              <!-- 评论列表 -->
              <div class="text-left" v-if="listShow">
                <div
                  class="comment_list overflow-hidden"
                  v-for="(item, index) in contentList"
                  :key="index"
                >
                  <div class="comment_content">
                    <div class="content_left float-left">
                      <img
                        class="w-9 h-9 rounded-full"
                        :src="STATICBASEURI + '/images/default/female.png'"
                        alt=""
                      />
                    </div>
                    <div
                      class="content_right ml-px10 float-left"
                      style="width: 656px"
                    >
                      <p>
                        <span class="mr-px15 text-base-color1 text-12px">{{
                          item.name
                        }}</span>
                        <span class="text-12px">{{ item.time }}</span>
                      </p>
                      <div class="right_text mt-1 mb-2.5">
                        <span class="text-12px mr-px15">
                          {{ item.content }}
                        </span>
                        <div
                          class="
                            icon_content
                            px-0
                            py-0
                            bg-none
                            h-5
                            inline
                            max-w-full
                            absolute
                          "
                          style="color: #999"
                        >
                          <div
                            class="inline-block align-middle"
                            style="margin-left: 20px"
                          >
                            <i
                              class="
                                message_iconSmall
                                inline-block
                                cursor-pointer
                                w-3.5
                                h-3
                              "
                              @click.stop="inputShow = true"
                              @click="onMessage(item.name)"
                            ></i>
                          </div>
                          <div
                            class="relative inline-block align-middle"
                            style="margin-left: 5px"
                          >
                            <i
                              class="
                                bg_circleSmall
                                relative
                                inline-block
                                cursor-pointer
                              "
                              style="width: 13px; height: 13px"
                            >
                              <div
                                class="
                                  trans-type2
                                  w-36
                                  h-28
                                  absolute
                                  hidden
                                  top-5
                                "
                                style="left: -30px"
                              >
                                <span
                                  class="ul_bg2 w-5 h-7 absolute left-7 -top-3"
                                ></span>
                                <ul>
                                  <li data-type="en">English</li>
                                  <li data-type="zh">简体中文</li>
                                  <li data-type="cht">繁體中文</li>
                                  <li data-type="kor">한국어</li>
                                  <li data-type="ru">Pусский</li>
                                  <li data-type="de">Deutsch</li>
                                  <li data-type="spa">Español</li>
                                  <li data-type="jp">日本語</li>
                                </ul>
                              </div>
                            </i>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <!-- 评论 -->
              <div class="textInput text-left">
                <input
                  type="text"
                  class="w-full py-1 pl-5"
                  style="
                    outline: none;
                    font-size: 12px;
                    border: 1px solid #dcdcdc;
                    border-radius: 20px;
                    cursor: pointer;
                  "
                  @click.stop="inputShow = true"
                  v-if="inputShow == false"
                  placeholder="喜欢你有趣的点评~"
                  @click="mineMessage()"
                />
                <div v-if="inputShow">
                  <textarea
                    v-model="inputContent"
                    id="sellineName"
                    autofocus="autofocus"
                    name=""
                    class="textArea"
                    rows="2"
                    :placeholder="this.placeholder"
                    style="outline: none"
                    maxlength="240"
                    show-word-limit
                  ></textarea>
                  <div class="flex justify-between ml-4 mt-1">
                    <span style="color: #999"
                      >{{ inputContent.length }}/240</span
                    >
                    <div class="sendBtn" @click="sendBtn()">
                      <i class="senI"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section>
      <!-- 评论图片放大 -->
      <CommentBigImg
        v-if="bigCommentImage"
        @func="closeCommentImg"
        :images="images"
        :imagesUrl="this.images[currentIndex].url + '?imageView2/2/w/560/h/630'"
        @leftBtn="leftImage"
        @rightBtn="rightImage"
      ></CommentBigImg>
    </section>
    <section>
      <Report v-if="modal"></Report>
    </section>
  </div>
</template>

<script>
import CommentBigImg from "@/components/home/othercentre/CommentBigImg";
import Report from "@/components/home/othercentre/Report";
export default {
  components: {
    CommentBigImg,
    Report,
  },
  data() {
    return {
      haveInformation: false,
      listShow: false,
      showWarning: false,
      showicon: true,
      placeholder: "发布评论",
      inputContent: "",
      inputShow: false,
      bigCommentImage: false,
      modal: false,
      currentIndex: -1,
      contentList: [
        {
          name: "可爱小怪咖",
          time: "03-03 12:12",
          content: "大风吹啊吹32222222222222",
          number: 323,
        },
        {
          name: "可爱小怪咖11",
          time: "03-03 12:12",
          content: "大风吹啊吹3213213",
          number: 323,
        },
        {
          name: "可爱小怪咖22",
          time: "03-03 12:12",
          content: "大风吹啊吹321321",
          number: 323,
        },
      ],
      images: [
        {
          url: "https://images.gagahi.com/Z-298ee8d8262c451e80eedf09c8d0dabc",
          id: 1,
        },
        {
          url: "https://images.gagahi.com/Z-298ee8d8262c451e80eedf09c8d0dabc",
          id: 2,
        },
        {
          url: "https://images.gagahi.com/Z-fdfa8c4ef0654815a24c272ec6a7048f",
          id: 3,
        },
      ],
    };
  },
  methods: {
    changemadel(value) {
      console.log(value);
      this.modal = value;
    },
    mousemoveWarning() {
      this.showWarning = true;
    },
    mouseleaveWarning() {
      this.showWarning = false;
    },
    showIcon() {
      this.showicon = !this.showicon;
    },
    openCommentImage(index) {
      this.bigCommentImage = true;
      console.log(index);
      this.currentIndex = index;
    },
    //评论显示
    openList() {
      if (this.contentList.length > 0) {
        this.listShow = !this.listShow;
      } else {
        this.inputShow = true;
      }
    },
    // 点击空白处关闭评论
    closeSel(event) {
      const currentCli = document.getElementById("sellineName");
      if (currentCli) {
        if (!currentCli.contains(event.target)) {
          this.inputShow = false;
        }
      }
    },
    mineMessage() {
      this.placeholder = "发布评论";
    },
    //评论
    onMessage(name) {
      this.placeholder = `回复：` + name;
    },
    sendBtn() {
      const sendValue = document.getElementById("sellineName");
      console.log(sendValue.value);
      if (sendValue.value != "") {
        this.contentList.push({
          name: "可爱小怪咖333",
          time: "2019-05-13 15:18",
          content: sendValue.value,
          number: 323,
        });
      }
      this.inputContent = "";
    },
    closeCommentImg(value) {
      this.bigCommentImage = value;
    },
    warning() {
      this.modal = !this.modal;
    },
    leftImage() {
      --this.currentIndex;
      if (this.currentIndex < 0) {
        this.currentIndex = this.images.length - 1;
      }
      console.log(this.currentIndex);
    },
    rightImage() {
      console.log(this.currentIndex);
      if (this.currentIndex === this.images.length - 1) {
        this.currentIndex = 0;
      } else {
        this.currentIndex += 1;
      }
    },
  },
  mounted() {
    document.addEventListener("click", this.closeSel);
  },
};
</script>

<style lang="scss" scoped>
.noInformation p {
  background: url("https://statics.lovehottie.com/web-pc/images/nocoupon.png")
    no-repeat 355px 45px;
  padding: 129px 0 29px 0;
  line-height: 48px;
  background-size: 95px;
}
.talk_icon {
  background: url("../../../assets/images/person/little1.png") no-repeat -1px -735px;
}
.talk_icon:hover {
  background-position: -25px -735px;
}
.contentText {
}
.imgboxs {
}
.dynamic_icon {
  @apply flex items-center;
  .bg_icon {
    background: url("~@images/person/dynamic.png") no-repeat;
    background-position: -26px -48px;
  }
  .bg_icon:hover {
    background-position: -26px -26px !important;
  }
  .bg_circle {
    background: url("~@images/dynamic.png") no-repeat;
    background-position: -54px -48px;
  }
  .bg_circle:hover {
    background-position: -54px -26px;
  }
  .trans-type1 {
    z-index: 998;
    .ul_bg1 {
      z-index: 2;
      background: url("~@images/person/IMicon.png") 0px -75px repeat;
    }
    ul {
      height: 101px;
      background-color: #fff;
      border: solid 1px #dcdcdc;
      border-radius: 4px;
      padding: 7px 0 0 5px;
      li {
        margin-bottom: 0;
        width: 66px;
        line-height: 20px;
        height: 24px;
        color: #333;
        @apply text-center float-left cursor-pointer;
      }
      li:hover {
        color: $fontColor1;
      }
    }
  }
  .fanyi_circle:hover .trans-type1 {
    display: block;
  }
}
.dynamic_input {
  .comment_list {
    @apply w-full;
    .content_left img {
    }
    .right_text {
      .icon_content {
        .message_iconSmall {
          background: url("~@images/person/little1.png") -20px -632px no-repeat;
        }
        .message_iconSmall:hover {
          background-position: -58px -632px;
        }
        .bg_circleSmall {
          background: url("~@images/person/little1.png") -2px -631px no-repeat;
        }
        .bg_circleSmall:hover {
          background-position: -40px -631px;
        }
        .trans-type2 {
          z-index: 998;
          .ul_bg2 {
            z-index: 2;
            background: url("~@images/person/IMicon.png") 0px -75px repeat;
          }
          ul {
            height: 101px;
            background-color: #fff;
            border: solid 1px #dcdcdc;
            border-radius: 4px;
            padding: 7px 0 0 5px;
            li {
              margin-bottom: 0;
              width: 66px;
              line-height: 20px;
              height: 24px;
              color: #333;
              @apply text-center float-left cursor-pointer;
            }
            li:hover {
              color: $fontColor1;
            }
          }
        }
        .bg_circleSmall:hover .trans-type2 {
          display: block;
        }
      }
    }
  }
  .textInput {
    background: #fafafa;
    padding-left: 20px;
    padding-right: 20px;
  }
}
.textArea {
  padding: 5px;
  border: 1px solid rgb(204, 204, 204);
  width: 100%;
  height: 100%;
  border-radius: 9px;
  margin: 0px;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  text-rendering: auto;
  color: -internal-light-dark(black, white);
  letter-spacing: normal;
  word-spacing: normal;
  text-transform: none;
  text-indent: 0px;
  text-shadow: none;
  display: inline-block;
  text-align: start;
  appearance: auto;
  background-color: -internal-light-dark(rgb(255, 255, 255), rgb(59, 59, 59));
  -webkit-rtl-ordering: logical;
  flex-direction: column;
  resize: auto;
  cursor: text;
  white-space: pre-wrap;
  overflow-wrap: break-word;
  column-count: initial !important;
  font: 400 13.3333px Arial;
}
.sendBtn {
  background: #ff625a none repeat scroll 0 0;
  color: #fff;
  cursor: pointer;
  font-size: 12px;
  height: 30px;
  line-height: 24px;
  text-align: center;
  border-radius: 30px;
  padding-right: 15px;
  padding-left: 15px;
  padding-bottom: 5px;
  margin-right: 20px;
}
.senI {
  height: 24px;
  width: 14px;
  background: rgba(0, 0, 0, 0) url("../../../assets/images/dynamic.png")
    no-repeat scroll 0 0;
  background-position-x: -251px;
  background-position-y: 6px;
  display: inline-block;
  margin-bottom: -2px;
  vertical-align: middle;
}
</style>