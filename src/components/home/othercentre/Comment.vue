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
              class="mt-2 text-left"
              style="word-break: break-all; word-wrap: break-word"
            >
              お会いできてうれしいです
            </p>
            <!-- 评论图片 -->
            <div class="mt-2 text-left flex flex-wrap" style="width: 262px">
              <div
                class="relative cursor-pointer float-left overflow-hidden"
                style=""
                v-for="(item, index) in images"
                :key="index"
              >
                <img
                  @click.stop="openCommentImage(index)"
                  :src="item.url"
                  :style="[imagesRule]"
                  alt=""
                  style="object-fit: cover; flex-shrink: 0"
                />
              </div>
            </div>
            <!-- 留言按钮和地球 -->
            <div class="flex items-center h-5 ml-px15 mt-px15 relative">
              <!-- 留言 -->
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
              <!-- 地球 -->
              <EarthImg class="mt-1"></EarthImg>
            </div>
            <div
              class="mt-2 w-full overflow-hidden px-5 py-5"
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
                    <div class="float-left">
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
                      <div class="mt-1 mb-2.5">
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
              <div class="pl-5 pr-5 text-left" style="background: #fafafa">
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
                    class="
                      textArea
                      px-1.5
                      py-1.5
                      w-full
                      h-full
                      rounded-lg
                      mx-0
                      my-0
                      inline-block
                      cursor-text
                    "
                    id="sellineName"
                    autofocus="autofocus"
                    name=""
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
                    <div
                      class="
                        text-white
                        cursor-pointer
                        text-xs
                        h-8
                        leading-6
                        text-center
                        pr-4
                        pl-4
                        pb-1.5
                        mr-5
                      "
                      style="
                        border-radius: 30px;
                        background: #ff625a none repeat scroll 0 0;
                      "
                      @click="sendBtn()"
                    >
                      <i class="senI h-6 w-3.5 inline-block -mb-0.5"></i>
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
        :imagesUrl="
          this.images[currentIndex].url.replace(
            /w\/[\d]+\/h\/[\d]+/g,
            'w/560/h/630'
          )
        "
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
import EarthImg from "@/components/home/othercentre/EarthImg";
export default {
  components: {
    CommentBigImg,
    Report,
    EarthImg,
  },
  data() {
    return {
      //他人主页中没有动态显示为空图
      haveInformation: false,
      //控制评论列表显示
      listShow: false,
      //控制举报图标显示
      showWarning: false,
      //留言图标显示
      showicon: true,
      //默认textarea显示的文本
      placeholder: "发布评论",
      //textarea的文本内容
      inputContent: "",
      //默认textarea为关闭
      inputShow: false,
      //评论区大图默认为关闭
      bigCommentImage: false,
      //举报画面默认关闭
      modal: false,
      //点击图片的下标
      currentIndex: -1,
      //控制显示评论区中的图片宽高
      imagesRule: { width: "", height: "" },
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
          url: "https://images.gagahi.com/Z-fdfa8c4ef0654815a24c272ec6a7048f",
          id: 1,
        },
        {
          url: "https://sources.lovehottie.com/Z-46bf8472037348108d79df0ff38d6472",
          id: 1,
        },

        {
          url: "https://sources.lovehottie.com/Z-7ede8c79f7aa4b5395aee84366610c3b",
          id: 1,
        },
        {
          url: "https://sources.lovehottie.com/Z-a63fc13ceaf5455ab658e46616de5832",
          id: 1,
        },
        {
          url: "https://sources.lovehottie.com/Z-7674e1dffc174fca9644795bf136dcfc",
          id: 1,
        },
        {
          url: "https://sources.lovehottie.com/Z-3a361d75db074a8c901935d2cd6065c2",
          id: 1,
        },
        {
          url: "https://sources.lovehottie.com/Z-aa6a10a7a8484303aad13b0ac850dab4",
          id: 1,
        },
        {
          url: "https://sources.lovehottie.com/9f62e7940110484b9d638c544ed82a18",
          id: 1,
        },
      ],
    };
  },
  methods: {
    changemadel(value) {
      console.log(value);
      this.modal = value;
    },
    //鼠标移入移除事件
    mousemoveWarning() {
      this.showWarning = true;
    },
    mouseleaveWarning() {
      this.showWarning = false;
    },
    // 点击评论图片原图关闭
    showIcon() {
      this.showicon = !this.showicon;
    },
    // 点击评论区图片展示大图
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
    //点击显示评论区
    mineMessage() {
      this.placeholder = "发布评论";
    },
    //评论
    onMessage(name) {
      this.placeholder = `回复：` + name;
    },
    //点击发送添加留言
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
    //关闭大图
    closeCommentImg(value) {
      this.bigCommentImage = value;
    },
    // 点击举报打开页面
    warning() {
      this.modal = !this.modal;
    },
    // 大图翻页
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
  // computed: {
  //   imagesRule() {
  //     let a = this.images.length;
  //     if (a > 9) {
  //       alert("图片不能大于9张");
  //     }
  //     if (a == 1) {
  //       this.images[0].url = this.images[0].url + `?imageView2/2/w/262/h/262`;
  //     }
  //     return 0;
  //   },
  // },

  mounted() {
    document.addEventListener("click", this.closeSel);
    //判断图片大小
    /**
     * 图片等于1张宽高为262
     */
    let a = this.images.length;
    if (a > 9) {
      alert("图片不能大于9张");
    }
    if (a == 1) {
      this.imagesRule = {
        width: "262px",
        height: "262px",
      };
      this.images[0].url = this.images[0].url + `?imageView2/2/w/262/h/262`;
    }
    /**
     * 图片等于2张或者等于4张宽高为131
     */
    if (a == 2 || a == 4) {
      this.imagesRule = {
        width: "131px",
        height: "131px",
      };
      this.images.forEach((item, index) => {
        this.images[index].url = item.url + `?imageView2/2/w/131/h/131`;
        console.log(this.images[index]);
      });
    }

    /**
     * 图片大于5张或者等于三张宽高为87
     */
    if (a == 3 || a >= 5) {
      this.imagesRule = {
        width: "87px",
        height: "87px",
      };
      this.images.forEach((item, index) => {
        this.images[index].url = item.url + `?imageView2/2/w/87/h/87`;
      });
    }
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
.bg_icon {
  background: url("~@images/dynamic.png") no-repeat;
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
  .ul_bg1 {
    background: url("~@images/person/IMicon.png") 0px -75px repeat;
  }
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
.comment_list {
  @apply w-full;
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
    }
    .bg_circleSmall:hover .trans-type2 {
      display: block;
    }
  }
}
.textArea {
  border: 1px solid rgb(204, 204, 204);
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  text-rendering: auto;
  color: -internal-light-dark(black, white);
  letter-spacing: normal;
  word-spacing: normal;
  text-transform: none;
  text-indent: 0px;
  text-shadow: none;
  appearance: auto;
  background-color: -internal-light-dark(rgb(255, 255, 255), rgb(59, 59, 59));
  -webkit-rtl-ordering: logical;
  flex-direction: column;
  resize: auto;
  white-space: pre-wrap;
  overflow-wrap: break-word;
  column-count: initial !important;
  font: 400 13.3333px Arial;
}

.senI {
  background: rgba(0, 0, 0, 0) url("../../../assets/images/dynamic.png")
    no-repeat scroll 0 0;
  background-position-x: -251px;
  background-position-y: 6px;
  vertical-align: middle;
}
</style>