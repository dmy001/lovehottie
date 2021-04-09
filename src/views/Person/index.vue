<template>
  <div class="relative">
    <div class="topUser">
      <img
        :src="STATICBASEURI + '/images/default/female.png'"
        alt=""
        class="avatar"
      />
      <div class="topRight ml-px10">
        <div class="personName">
          可爱小怪咖
          <span class="inline-block"></span>
        </div>
        <div>
          <span>女，</span>
          <span>18，</span>
          <span>中国，</span>
          <span>GaGaID:40473864</span>
        </div>
      </div>
    </div>
    <div class="photo">
      <div class="upload float-left" @click="modalPhoto = true">
        <img src="../../assets/images/person/upload.jpg" alt="" />
      </div>
      <div class="imgList float-left">
        <p>尚无展示照片，挑选相册中的照片展示到这里吧</p>
        <img
          src="../../assets/images/person/open.png"
          alt=""
          title="打开相册"
          class="imgShow"
        />
        <!-- 打开相册 -->
      </div>
    </div>
    <div class="personContent mt-px15">
      <div class="shareList flex justify-between">
        <editDynamic></editDynamic>
        <div class="content">
          <div class="content_top">礼物(0)</div>
          <div class="content_bottom">还未收到礼物</div>
        </div>
        <div class="right">
          <div class="content_top">好友(0)</div>
          <div class="content_bottom">还未收到礼物</div>
        </div>
      </div>
     
      <div class="mt-px15 bg-white w-full">
        <div class="dynamic">
          <div class="dynamic_left float-left">
            <img
              :src="STATICBASEURI + '/images/default/female.png'"
              alt=""
              class="avatarLeft"
            />
          </div>
          <div
            class="dynamic_right float-left ml-px10 text-left"
            style="width: 92%; position: relative"
          >
            <p>
              <span class="mr-px15 text-base-color1">可爱小怪咖</span>
              <span class="text-xs">03-03 13:12</span>
            </p>
            <p class="content_text">我不知道啊 不知道</p>
            <div class="ml-px15 mt-px15 dynamic_icon relative">
              <span
                class="bg_icon message_icon mr-px3"
                @click.stop="openList"
              ></span
              ><span class="text-gray-400">2</span>
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

            <div class="dynamic_input mt-px15">
              <!-- 评论列表 -->
              <div v-if="listShow">
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
                              class="message_iconSmall inline-block cursor-pointer"
                              @click.stop="inputShow = true"
                            ></i>
                          </div>
                          <div
                            class="relative inline-block align-middle"
                            style="margin-left: 5px"
                          >
                            <i
                              class="bg_circleSmall relative inline-block cursor-pointer"
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
              <p
                class="dynamic_p cursor-pointer"
                @click.stop="inputShow = true"
                v-if="inputShow == false"
              >
                喜欢你有趣的点评～
              </p>
              <div v-if="inputShow" class="dynamic_btn">
                <Input
                  id="sellineName"
                  v-model="value17"
                  maxlength="240"
                  show-word-limit
                  type="textarea"
                  placeholder="发布评论"
                  style="width: 100%; height: 100px"
                  class="leftText placeholder-gray-800"
                  :rows="2"
                />
                <div class="send_btn float-right">
                  <i class="bg_icon send_i"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 图片弹出框 -->
    <Modal
      v-model="modalPhoto"
      title="上传图片"
      width="600"
      footer-hide
      @on-cancel="cancel"
    >
      <p slot="header">
        <span class="text-white">上传图片</span>
      </p>
      <imgUpload></imgUpload>
    </Modal>
  </div>
</template>
<script>
import editDynamic from "@components/editDynamic.vue"
import imgUpload from "@components/uploadImg.vue";

export default {
  data() {
    return {
      modalPhoto: false,
      inputShow: false,
      value17: "",
      listShow: false,
      emojiShow:false,
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
    };
  },
  components: {
    imgUpload,
    editDynamic
  },
  methods: {
    openList() {
      if (this.contentList.length > 0) {
        this.listShow = !this.listShow;
      } else {
        this.inputShow = true;
      }
    },
    cancel() {
      //  this.$Message.info('')
    },
    // 点击空白处关闭评论
    closeSel(event) {
      var currentCli = document.getElementById("sellineName");
      if (currentCli) {
        if (!currentCli.contains(event.target)) {
          this.inputShow = false;
        }
      }
    },
  },
  mounted() {
    document.addEventListener("click", this.closeSel);
  },
  beforeDestroy() {
    document.removeEventListener("click", this.bodyCloseMenus);
  },
};
</script>
<style lang="scss" >
.topUser {
  width: 100%;
  background: #fff;
  height: 100px;
  padding: 20px;
  @apply flex flex-row items-center;
  .avatar {
    width: 60px;
    height: 60px;
    @apply rounded-1/2;
  }
  .topRight {
    font-size: 14px;
    @apply flex flex-col  text-left text-black;
    .personName {
      font-size: 16px;
      @apply text-base-color1;
      span {
        width: 20px;
        height: 20px;
        background: url("~@images/index/little.png") 0 -616px no-repeat;
        vertical-align: middle;
      }
    }
  }
}
.photo {
  width: 856px;
  height: 120px;
  margin: 0 auto;
  position: relative;
  .imgList {
    height: 120px;
    width: 733px;
    line-height: 120px;
    background-color: rgb(238, 238, 238);
  }
  .imgShow {
    position: absolute;
    top: 10px;
    right: 10px;
    cursor: pointer;
  }
}
.bg_icon {
  background: url("~@images/person/dynamic.png") no-repeat;
  display: inline-block;
}
.personContent {
  width: 856px;
  .shareList {
    padding: 20px;
    background: #fff;
    .content,
    .right {
      width: 262px;
      height: 235px;
      background: #fff none repeat scroll 0 0;
      border: 1px solid #dcdcdc;
      border-radius: 5px;
    }
    .content_top {
      width: 100%;
      height: 40px;
      line-height: 40px;
      background: #f9f9f9;
    }
    .content_bottom {
      @apply mt-px15;
    }
  }
  .dynamic {
    padding: 20px;
    overflow: hidden;
    padding-bottom: 50px;
    .dynamic_left img {
      width: 45px;
      height: 45px;
      border-radius: 50%;
    }
    .content_text {
      width: 722px;
      margin-top: 4px;
      line-height: 24px;
    }
    .dynamic_icon {
      height: 20px;
      @apply flex items-center;

      .bg_circle {
        background: url("~@images/person/dynamic.png") no-repeat;
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
              background: url("~@images/person/little1.png") -20px -632px
                no-repeat;
            }
            .message_iconSmall:hover {
              background-position: -58px -632px;
            }
            .bg_circleSmall {
              width: 13px;
              height: 13px;
              background: url("~@images/person/little1.png") -2px -631px
                no-repeat;
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
      .ivu-input-word-count {
        left: 7px;
        width: 30%;
        font-size: 14px;
        background: #fafafa;
      }
      .ivu-input,
      .ivu-input:focus,
      .ivu-input:hover {
        outline: none;
        border: 1px solid #cccccc;
        box-shadow: 0 0 0 2px transparent;
      }
    }
    .dynamic_p {
      background: #fff none repeat scroll 0 0;
      border: 1px solid #dcdcdc;
      border-radius: 20px;
      color: #999;
      font-size: 12px;
      height: 30px;
      line-height: 30px;
      padding: 0 20px;
      width: 94%;
      position: relative;
    }
    .dynamic_btn {
      position: relative;
      .send_btn {
        right: 10px;
        top: 75px;
        width: 44px;
        height: 29px;
        border-radius: 30px;
        background: $baseColor2 none repeat scroll 0 0;
        color: #fff;
        font-size: 12px;
        @apply cursor-pointer absolute text-center;
        .send_i {
          background-position: -251px 8px;
          height: 24px;
          width: 14px;
        }
      }
    }
    .fanyi_circle:hover .trans-type {
      display: block;
    }
  }
}
.show {
  display: block;
}
.hide {
  display: none;
}
</style>