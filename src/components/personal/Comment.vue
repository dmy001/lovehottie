<template>
  <div class="mt-px15 bg-white w-full pb-10">
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
        @mousemove="mouseInner = true"
        @mouseleave="mouseInner = false"
      >
        <p class="flex flex-row">
          <span class="mr-px15 text-base-color1">可爱小怪咖</span>
          <span class="text-xs mt-1">03-03 13:12</span>
          <span
            v-show="mouseInner"
            class="absolute right-0"
            @click.stop="isDelete = true"
            ><img class="w-5 cursor-pointer" src="~@images/error.png"
          /></span>
        </p>
        <section class="content_text flex-col flex">
          <p class="">我不知道啊 不知道</p>
          <div class="px-5">
            <div
              class="imgboxs mt-2 mr-2"
              style="
                object-fit: cover;
                flex-shrink: 0;
                width: 262px;
                height: 262px;
                min-height: 87px;
                min-width: 87px;
                float:left;
              "
              v-for="(item, index) in images"
              :key="index"
            >
              <img
                @click.stop="openCommentImage(index)"
                :src="item"
                alt=""
                class="w-32 object-fit: cover;cursor: pointer;"
                style="
                  object-fit: cover;
                  width: 262px;
                  height: 262px;
                  cursor: pointer;
                "
              />
            </div>
          </div>
        </section>

        <div class="ml-px15 mt-px15 dynamic_icon relative">
          <span
            class="bg_icon message_icon mr-px3"
            @click.stop="openList"
          ></span
          ><span class="text-gray-400">{{ this.contentList.length }}</span>
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
                  <div
                    class="right_text"
                  >
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
                      <div
                        class=" relative inline-block align-middle"
                        style="margin-left: 6px"
                        @click="deleteComment"
                      >
                        <i class="icon close_icon delComment -mt-0.5"></i>
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
    <section>
      <!-- 评论图片放大 -->
      <CommentBigImg
        v-if="bigCommentImage"
        @func="closeCommentImg"
        :images="images"
        :imagesUrl="this.images[currentIndex] + '?imageView2/2/w/560/h/630'"
        @leftBtn="leftImage"
        @rightBtn="rightImage"
      ></CommentBigImg>
    </section>
  </div>
</template>
<script>
import CommentBigImg from "@/components/home/othercentre/CommentBigImg";
export default {
  components: {
    CommentBigImg,
  },
  data() {
    return {
      currentIndex: -1,
      bigCommentImage: false,
      inputShow: false,
      value17: "",
      listShow: false,
      mouseComment: false,
      isDelete: false,
      mouseInner: false,
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
      images: [
        "https://sources.lovehottie.com/Z-7941c6ea659d4e04b1f4e7e816eea308",
        "https://images.gagahi.com/",
        "https://images.gagahi.com/A-614b46d091d84696bf32bb34ef16e943",
        "https://sources.gagahi.com/ac4b849baad14bcdbd6fe80940f09a10",
        "https://sources.lovehottie.com/Z-7941c6ea659d4e04b1f4e7e816eea308",
        "https://images.gagahi.com/",
      ],
    };
  },
  methods: {
    openList() {
      if (this.contentList.length > 0) {
        this.listShow = !this.listShow;
      } else {
        this.inputShow = true;
      }
    },
    closeSel(event) {
      var currentCli = document.getElementById("sellineName");
      if (currentCli) {
        if (!currentCli.contains(event.target)) {
          this.inputShow = false;
        }
      }
    },
    deleteComment() {
      this.contentList.splice(this.index, 1);
    },
    openCommentImage(index) {
      this.bigCommentImage = true;
      console.log(index);
      this.currentIndex = index;
    },
    closeCommentImg(value) {
      this.bigCommentImage = value;
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
};
</script >
<style lang="scss" scoped>
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
  .delComment{
    display: none;
  }
  .right_text:hover .delComment{
    display: block;
  }
}
</style>