<template>
  <div class="">
    <section class="border bg-white pb-4">
      <div class="flex h-full mt-5 ml-5">
        <img
          class="rounded-full"
          style="width: 60px; height: 60px"
          src="https://images.gagahi.com/A-614b46d091d84696bf32bb34ef16e943"
          alt=""
        />
        <div
          class="border ml-2 w-full pb-4"
          style="border-bottom: 1px dashed #ccc"
        >
          <p
            class="border mb-2.5 text-base text-left"
            style="color: #90a0bc; font-family: Arial"
          >
            Sandy
          </p>
          <p class="border text-left mb-2.5" style="color: #696969">
            <span>女</span> ,<span>35</span> ,<span>美国</span> ,<span
              >ID:40215904</span
            >
          </p>
          <p class="border text-left mb-2.5" style="color: #696969">
            个性签名：
          </p>
          <p class="border text-left mb-2.5">
            <span
              class="border mr-2 px-4 py-1 rounded-2xl"
              v-for="(item, index) in interests"
              :key="index"
              >{{ item }}</span
            >
          </p>
        </div>
      </div>
      <div class="border bg-white flex justify-between">
        <div
          class="
            border
            rounded-2xl
            w-24
            text-center
            py-1
            text-sm text-white
            ml-20
            mt-4
            h-8
          "
          style="
            background: #ff625a;
            background-image: initial;
            background-position-x: initial;
            background-position-y: initial;
            background-size: initial;
            background-repeat-x: initial;
            background-repeat-y: initial;
            background-attachment: initial;
            background-origin: initial;
            background-clip: initial;
            background-color: rgb(255, 98, 90);
          "
        >
          给他惊喜
        </div>
        <div class="mt-4 mr-8">
          <span class="message"></span>
          <span class="friends">
            <div class="friendsImg" style="">猛戳这里，添加好友</div>
            <div class="friend-tip">
              <span class="text-white -ml-1.5 inline-block mt-1.5">
                加为好友
              </span>
            </div>
          </span>
          <span class="gift"></span>
        </div>
      </div>
    </section>
    <section class="personInformation">
      <div class="text-left">
        <span class="mr-4">
          <span>职业：医生</span>
        </span>
        <span class="mr-4 ml-4">
          <span>语言：中文(简体)</span>
        </span>
        <span class="mr-4 ml-4">
          <span>身高：165cm</span>
        </span>
        <span class="mr-4 ml-4">
          <span>体重：49公斤</span>
        </span>
      </div>
    </section>
    <section>
      <div class="border">
        <div
          v-if="haveImage"
          class="text-center"
          style="
            height: 122px;
            line-height: 120px;
            background-color: rgb(238, 238, 238);
          "
        >
          对方尚无展示照片
        </div>
        <div
          class="text-center relative"
          style="
            line-height: 120px;
            background-color: rgb(238, 238, 238);
            width: 100%;
            overflow: hidden;
            padding: 0px;
            margin: 0px;
            left: 0px;
          "
        >
          <!-- 图片 -->
          <dl class="picul" style="">
            <dt
              class="flex overflow-hidden"
              :class="inAnimation ? 'Anim' : ''"
              @animationend="inAnimation = false"
            >
              <img
                style="
                  width: 123px;
                  height: 120px;
                  cursor: pointer;
                  object-fit: cover;
                  flex-shrink: 0;
                "
                v-for="(item, index) in images"
                :key="index"
                @click.stop="bigImage = true"
                v-show="index >= imgItem && index <= imgItem + 6"
                :src="item"
                alt=""
              />
            </dt>
            <!-- <dt>
              <a href="javascript:void(0)" @click="openImgDialog()"
                ><img
                  :src="this.images"
                  alt=""
                  style="display: block; width: 123px; height: 120px"
              /></a>
            </dt> -->
          </dl>
          <!-- 图片左右图标 -->
          <div class="">
            <div class="prev" @click="prev()" href=""></div>
            <div class="next" @click="nextImg()" href=""></div>
          </div>
        </div>
      </div>
    </section>
    <section class="mt-4 border bg-white py-5 px-5">
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
            <p class="text-left mt-1 border">
              <span style="color: #90a0bc; font-family: Arial">Sandy</span>
              <span class="ml-2" style="color: #999; font-size: 12px"
                >2019-05-13 12:05</span
              >
              <span
                style="float: right"
                v-show="showWarning"
                @click="warning()"
                class="talk_icon mr-px3 w-20"
              ></span>
            </p>
            <p class="contentText border mt-2 text-left">
              お会いできてうれしいです
            </p>
            <!-- 评论图片 -->
            <div class="border mt-2 text-left flex" style="">
              <div class="imgboxs" style="overflow: hidden">
                <img
                  src="https://images.gagahi.com/Z-298ee8d8262c451e80eedf09c8d0dabc?imageView2/5/w/123/h/120"
                  alt=""
                  style="
                    object-fit: cover;
                    flex-shrink: 0;
                    width: 87px;
                    height: 87px;
                  "
                />
              </div>
              <!-- <div class="imgboxs">
                <img
                  src="https://images.gagahi.com/Z-298ee8d8262c451e80eedf09c8d0dabc?imageView2/5/w/123/h/120"
                  alt=""
                />
              </div>
              <div class="imgboxs">
                <img
                  src="https://images.gagahi.com/Z-298ee8d8262c451e80eedf09c8d0dabc?imageView2/5/w/123/h/120"
                  alt=""
                />
              </div> -->
            </div>

            <!-- 留言按钮和地球 -->
            <div class="ml-px15 mt-px15 dynamic_icon relative">
              <span
                class="bg_icon message_icon mr-px3"
                @click.stop="openList"
              ></span>
              <span class="text-gray-400">2</span>
              <div class="fanyi_circle">
                <span class="bg_circle ml-px15"></span>
                <div class="trans-type">
                  <span class="ul_bg"></span>
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
            <div class="dynamic_input mt-2">
              <!-- 评论列表 -->
              <div class="text-left" v-if="listShow">
                <div
                  class="comment_list"
                  v-for="(item, index) in contentList"
                  :key="index"
                >
                  <div class="comment_content">
                    <div class="content_left float-left">
                      <img
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
                      <div class="right_text">
                        <span class="text-12px mr-px15">
                          {{ item.content }}
                        </span>
                        <div class="inline max-w-full icon_content absolute">
                          <div
                            class="inline-block align-middle"
                            style="margin-left: 20px"
                          >
                            <i
                              class="
                                message_iconSmall
                                inline-block
                                cursor-pointer
                              "
                              @click.stop="inputShow = true"
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
                            >
                              <div class="trans-type">
                                <span class="ul_bg"></span>
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
                  class="w-full py-1 pl-5 border"
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
                />
                <div v-if="inputShow">
                  <textarea
                    v-model="inputContent"
                    id="sellineName"
                    autofocus="autofocus"
                    name=""
                    class="textArea"
                    rows="2"
                    placeholder="发布评论"
                    style="outline: none"
                    maxlength="240"
                    show-word-limit
                  ></textarea>
                  <div class="flex justify-between ml-4 mt-1">
                    <span style="color: #999"
                      >{{ inputContent.length }}/240</span
                    >
                    <div class="sendBtn">
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
      <!-- 举报 -->
      <Modal
        v-model="modal1"
        title="举报"
        width="482"
        :styles="{ top: '150px' }"
        footer-hide
        :closable="false"
      >
        <p slot="header">
          <span class="text-white">举报</span>
          <span
            class="closed w-9 h-9 rounded-full -top-2 -right-3 absolute"
            @click="close()"
          ></span>
        </p>
        <div class="flex flex-wrap ml-16">
          <div
            v-for="(item, index) in complain"
            :key="index"
            class="w-28 mt-10"
          >
            <input
              type="radio"
              id="aa"
              v-model="redioVal"
              @change="getRadioVal"
              :value="item"
            />
            <label for="aa" class="ml-4 mr-4">{{ item }}</label>
          </div>
        </div>
        <div class="w-full flex justify-center">
          <button @click="submitBtn()" class="submitBtn mt-16">提交</button>
        </div>
      </Modal>
      <!-- 图片放大 -->
      <div
        class="imageBig left-1/3"
        v-if="bigImage"
        style="
          z-index: 19891023;
          width: 600px;
          height: 630px;
          top: 145.5px ;rgba（0，0，0，0．7）;
        "
      >
        <span
          class="closedImg w-9 h-9 rounded-full -top-2 -right-3 absolute"
          @click="closeImg()"
        ></span>
        <div class="imageBigContent" id="sellineImg">
          <div class="imageBigDetail">
            <div class="imageBigDetailImg">
              <div class="imageBigDetailImgLeft"></div>
              <div class="imageBigDetailImgRight"></div>
              <div class="bigger">原始尺寸</div>
              <div class="normal hide" data-url data-i>重置</div>
              <div class="bd slide_bd">
                <div
                  class="slide_item"
                  imgid="61163a5293d24eeba0605320b5ca5830"
                >
                  <div
                    class="js_img_border"
                    v-for="(item, index) in images"
                    :key="index"
                  >
                    <img
                      :src="item"
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
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      interests: ["户外", "70后", "美容", "奔驰", "聚会"],
      country: [
        "English",
        "简体中文",
        "繁體中文",
        "한국어",
        "русский",
        "Deutsch",
        "Español",
        "日本語",
      ],
      haveImage: false,
      haveInformation: false,
      showLanguage: false,

      bigImage: false,
      showWarning: false,
      modal1: false,
      inputShow: false,
      inputContent: "",
      listShow: false,
      contentList: [
        {
          name: "可爱小怪咖",
          time: "03-03 12:12",
          content: "大风吹啊吹32222222222222",
          number: 323,
        },
        {
          name: "可爱小怪咖",
          time: "03-03 12:12",
          content: "大风吹啊吹3213213",
          number: 323,
        },
        {
          name: "可爱小怪咖",
          time: "03-03 12:12",
          content: "大风吹啊吹321321",
          number: 323,
        },
      ],
      complain: [
        "垃圾广告",
        "淫秽色情",
        "虚假中奖",
        "敏感信息",
        "人身攻击",
        "骚扰他人",
        "骗子",
        "广告",
        "色情低俗",
        "违法",
        "政治敏感",
        "谣言",
        "骚扰信息",
      ],
      redioVal: "",
      images: [
        "https://images.gagahi.com/Z-298ee8d8262c451e80eedf09c8d0dabc?imageView2/5/w/123/h/120",
        "https://images.gagahi.com/Z-298ee8d8262c451e80eedf09c8d0dabc?imageView2/5/w/123/h/120",
        "https://images.gagahi.com/Z-fdfa8c4ef0654815a24c272ec6a7048f?imageView2/5/w/123/h/120",
        "https://images.gagahi.com/Z-298ee8d8262c451e80eedf09c8d0dabc?imageView2/5/w/123/h/120",
        "https://images.gagahi.com/Z-fdfa8c4ef0654815a24c272ec6a7048f?imageView2/5/w/123/h/120",
        "https://images.gagahi.com/Z-298ee8d8262c451e80eedf09c8d0dabc?imageView2/5/w/123/h/120",
        "https://images.gagahi.com/Z-fdfa8c4ef0654815a24c272ec6a7048f?imageView2/5/w/123/h/120",
        "https://images.gagahi.com/Z-298ee8d8262c451e80eedf09c8d0dabc?imageView2/5/w/123/h/120",
        "https://images.gagahi.com/Z-298ee8d8262c451e80eedf09c8d0dabc?imageView2/5/w/123/h/120",
        "https://images.gagahi.com/Z-fdfa8c4ef0654815a24c272ec6a7048f?imageView2/5/w/123/h/120",
        "https://images.gagahi.com/Z-298ee8d8262c451e80eedf09c8d0dabc?imageView2/5/w/123/h/120",
        "https://images.gagahi.com/Z-298ee8d8262c451e80eedf09c8d0dabc?imageView2/5/w/123/h/120",
        "https://images.gagahi.com/Z-298ee8d8262c451e80eedf09c8d0dabc?imageView2/5/w/123/h/120",
        "https://images.gagahi.com/Z-298ee8d8262c451e80eedf09c8d0dabc?imageView2/5/w/123/h/120",
      ],

      imgItem: 0,
      inAnimation: true,
    };
  },
  methods: {
    mousemoveWarning() {
      this.showWarning = true;
    },
    mouseleaveWarning() {
      this.showWarning = false;
    },
    warning() {
      this.modal1 = !this.modal1;
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
    //点击其他地方关闭大图片
    closeBigImage(event) {
      const currentCli = document.getElementById("sellineImg");
      if (currentCli) {
        if (!currentCli.contains(event.target)) {
          this.bigImage = false;
        }
      }
    },

    getRadioVal() {
      console.log(this.redioVal);
    },
    submitBtn() {
      console.log(this.redioVal);
      if (this.redioVal === "") {
        this.$Message.info("未选择选项内容");
        this.modal1 = !this.modal1;
      } else {
        this.$Message.success("举报成功");
        this.modal1 = !this.modal1;
      }
    },
    //关闭举报
    close() {
      this.modal1 = !this.modal1;
    },
    //关闭大图
    closeImg() {
      this.bigImage = !this.bigImage;
    },
    nextImg() {
      console.log(1);
      if (this.images.length >= 7) {
        this.imgItem = this.imgItem + 1;
        this.inAnimation = true;
      }
    },
    prev() {
      if (this.images.length >= 7) {
        this.imgItem -= 1;
      }
    },
  },

  mounted() {
    document.addEventListener("click", this.closeSel);
    document.addEventListener("click", this.closeBigImage);
  },
};
</script>

<style lang="scss" scoped>
.message {
  background: no-repeat url("../../assets/images/person/little1.png") -42px -457px;
  background-position-x: 0px;
  background-position-y: -529px;
  display: inline-block;
  width: 38px;
  height: 38px;
  cursor: pointer;
  margin-left: 20px;
}
.message:hover {
  background-position-x: -41px;
  background-position-y: -527px;
}

.friends {
  background: no-repeat url("../../assets/images/person/little1.png") -1px -280px;
  display: inline-block;
  width: 38px;
  height: 38px;
  cursor: pointer;
  margin-left: 20px;
}
.friends:hover {
  background-position-x: -45px;
  background-position-y: -280px;
}
.friend-tip {
  display: none;
}
.friends:hover .friend-tip {
  background: no-repeat url("../../assets/images/person/little1.png") -0px -370px;
  margin-left: -21px;
  margin-top: -30px;
  display: block;
  position: absolute;
  width: 120px;
  height: 40px;
  font-size: 12px;
  text-align: center;
}
.friendsImg {
  width: 240px;
  height: 100px;
  background: url("https://statics.lovehottie.com/web-pc//images/user-help.png")
    no-repeat;
  background-position-x: -1px;
  background-position-y: -280px;
  position: absolute;
  left: -11px;
  bottom: -28px;
  padding-left: 88px;
  font-size: 18px;
  color: #fff;
  z-index: 999999;
  pointer-events: none;
  display: none;
}
.gift {
  background: no-repeat url("../../assets/images/person/little1.png") -42px -457px;
  display: inline-block;
  width: 38px;
  height: 38px;
  cursor: pointer;
  margin-left: 20px;
}
.gift:hover {
  background-position-x: 0px;
  background-position-y: -457px;
}
.personInformation {
  height: 50px;
  background: #dfebff;
  line-height: 50px;
  padding: 0 20px;
}
.noInformation p {
  background: url("https://statics.lovehottie.com/web-pc/images/nocoupon.png")
    no-repeat 355px 45px;
  padding: 129px 0 29px 0;
  line-height: 48px;
  background-size: 95px;
}
.contentText {
  word-break: break-all;
  word-wrap: break-word;
}
.imgboxs {
  position: relative;
  cursor: pointer;
  float: left;
}

.bg_icon {
  background: url("~@images/person/dynamic.png") no-repeat;
  display: inline-block;
}
.dynamic_icon {
  height: 20px;
  @apply flex items-center;
  .bg_circle {
    background: url("~@images/dynamic.png") no-repeat;
    display: inline-block;
    background-position: -54px -48px;
    cursor: pointer;
    height: 18px;
    width: 18px;
  }

  .trans-type {
    width: 147px;
    height: 110px;
    background-color: inherit;
    position: absolute;
    display: none;
    left: 16px;
    top: 24px;
    z-index: 998;
    .ul_bg {
      width: 20px;
      height: 30px;
      position: absolute;
      left: 30px;
      top: -12px;
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

  .message_icon {
    background-position: -26px -48px;
    cursor: pointer;
    height: 16px;
    width: 19px;
  }
  .message_icon:hover {
    background-position: -26px -26px;
  }
  .bg_circle:hover {
    background-position: -54px -26px;
  }
  .fanyi_circle {
    line-height: 10px;
  }

  .fanyi_circle:hover .trans-type {
    display: block;
  }
}
.dynamic_input {
  width: 100%;
  overflow: hidden;
  border-top: 1px solid #e7e7e7;
  background: #fafafa;
  padding: 20px;
  .textInput {
    background: #fafafa;
    padding-left: 20px;
    padding-right: 20px;
  }
  .comment_list {
    overflow: hidden;
    @apply w-full;
    .content_left img {
      width: 36px;
      height: 36px;
      border-radius: 50%;
    }
    .right_text {
      margin-top: 4px;
      margin-bottom: 10px;
      .icon_content {
        padding: 0;
        background: none;
        color: #999;
        height: 20px;
        .message_iconSmall {
          display: inline-block;
          width: 14px;
          height: 12px;
          background: url("~@images/person/little1.png") -20px -632px no-repeat;
        }
        .message_iconSmall:hover {
          background-position: -58px -632px;
        }
        .bg_circleSmall {
          width: 13px;
          height: 13px;
          background: url("~@images/person/little1.png") -2px -631px no-repeat;
        }
        .bg_circleSmall:hover {
          background-position: -40px -631px;
        }
        .bg_circleSmall:hover .trans-type {
          display: block;
        }
        .trans-type {
          width: 147px;
          height: 110px;
          background-color: inherit;
          position: absolute;
          left: -30px;
          display: none;
          top: 19px;
          z-index: 998;
          .ul_bg {
            width: 20px;
            height: 30px;
            position: absolute;
            left: 30px;
            top: -12px;
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
      }
    }
  }
}

.contentName :hover {
  color: $baseColor1;
  background-color: #e7e7e7;
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
  background: rgba(0, 0, 0, 0) url("../../assets/images/dynamic.png") no-repeat
    scroll 0 0;
  background-position-x: -251px;
  background-position-y: 6px;
  display: inline-block;
  margin-bottom: -2px;
  vertical-align: middle;
}
.talk_icon {
  background: url("../../assets/images/person/little1.png") no-repeat -1px -735px;
  display: inline-block;
  cursor: pointer;
  height: 16px;
  width: 21px;
}
.talk_icon:hover {
  background-position: -25px -735px;
}
.submitBtn {
  background-color: #ff625a;
  border-color: #ff625a;
  color: #fff;
  line-height: 28px;
  margin-left: 6px;
  margin-right: 6px;
  padding-left: 15px;
  padding-right: 15px;
  font-size: 14px;
  border-radius: 45px;
  font-weight: 400;
  outline: none;
}
.closed {
  background: url("~@images/iconClosed.png") 0 -39px no-repeat;
  cursor: pointer;
  z-index: 20;
}
.closed:hover {
  background: url("~@images/iconClosed.png") 0 0 no-repeat;
  cursor: pointer;
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
.imageBig {
  animation-name: bounceIn;
  margin: 0;
  padding: 0;
  background-color: #fff;
  -webkit-background-clip: content;
  box-shadow: 0px 0px 3px rgb(0 0 0 / 20%);
  border-radius: 15px;
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
      border-radius: 15px;
      .imageBigDetailImg {
        left: 20px;
        overflow: hidden;
        background: #000;
        position: relative;
        width: 560px;
        height: 630px;
        border-radius: 15px;
        border-bottom-right-radius: 0;
        border-top-right-radius: 0;
        float: left;
        .imageBigDetailImgLeft {
          background: url("../../assets/images/dynamic.png") no-repeat;
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
          background: url("../../assets/images/dynamic.png") no-repeat;
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
          width: 560px;
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
.prev {
  width: 14px;
  height: 23px;
  position: absolute;
  top: 44px;
  left: 8px;
  z-index: 1;
  cursor: pointer;
  background: url("../../assets/images/person/little1.png") -80px -566px
    no-repeat;
}
.prev:hover {
  background: url("../../assets/images/person/little1.png") -42px -567px;
}
.next {
  width: 14px;
  height: 23px;
  position: absolute;
  top: 44px;
  right: 8px;
  z-index: 1;
  cursor: pointer;
  background: url("../../assets/images/person/little1.png") 0px -598px no-repeat;
}
.next:hover {
  background: url("../../assets/images/person/little1.png") -28px -599px
    no-repeat;
}

.Anim {
  animation: showMsg 0.6s;
}
@keyframes showMsg {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>