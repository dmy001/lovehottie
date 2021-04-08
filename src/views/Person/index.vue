<template>
  <div>
    <div class="top">
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
        <div class="left">
          <Input
            v-model="value17"
            maxlength="500"
            show-word-limit
            type="textarea"
            :border="false"
            placeholder="想和大家分享什么"
            style="width: 240px; border: none"
            class="leftText placeholder-gray-800"
            :rows="9"
          />
          <div class="leftFoot">
            <div class="footLeft">
              <i class="bg_icon expression"></i>
              <i class="bg_icon img_icon"></i>
            </div>
            <div class="footRight">发送</div>
          </div>
        </div>
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
          <div class="dynamic_right float-left ml-px15 text-left">
            <p>
              <span class="mr-px15 text-base-color1">可爱小怪咖</span>
              <span class="text-xs">03-03 13:12</span>
            </p>
            <p class="content_text">我不知道啊 不知道</p>
            <div class="ml-px15 mt-px15 dynamic_icon">
              <span class="bg_icon message_icon mr-px3"></span
              ><span class="text-gray-400">2</span>
              <span class="bg_circle ml-px15"></span>
            </div>
            <div class="dynamic_input mt-px15">
              <p
                class="dynamic_p cursor-pointer"
                @click.stop="inputShow = true"
                v-if="inputShow == false"
              >
                喜欢你有趣的点评～
              </p>
              <div v-if="inputShow" class="dynamic_btn">
                <Input
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
import imgUpload from "@components/uploadImg.vue";
export default {
  data() {
    return {
      modalPhoto: false,
      inputShow: false,
      value17: "",
    };
  },
  components: {
    imgUpload,
  },
  methods: {
    cancel() {
      //  this.$Message.info('')
    },
    // 点击空白处关闭评论
    bodyCloseMenus() {
      let self = this;
      if (self.inputShow == true) {
        self.inputShow = false;
      }
    },
  },
  mounted() {
    document.addEventListener("click", this.bodyCloseMenus);
  },
  beforeDestroy() {
    document.removeEventListener("click", this.bodyCloseMenus);
  },
};
</script>
<style lang="scss">
.top {
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
  overflow: hidden;
  .shareList {
    padding: 20px;
    background: #fff;
    .left,
    .content,
    .right {
      width: 262px;
      height: 235px;
      background: #fff none repeat scroll 0 0;
      border: 1px solid #dcdcdc;
      border-radius: 5px;
    }
    textarea.ivu-input {
      width: 240px;
      height: 148px;
      padding-bottom: 12px;
      color: #333;
      margin: 20px 0 5px 0;
    }
    .leftFoot {
      height: 40px;
      padding: 10px;
      margin-top: 20px;
      background: #f9f9f9;
      border-bottom-left-radius: 5px;
      border-bottom-right-radius: 5px;
      .footLeft {
        @apply float-left;

        .expression {
          background-position: -73px -1px;
          cursor: pointer;
          height: 18px;
          width: 18px;
        }
        .img_icon {
          background-position: -98px -2px;
          cursor: pointer;
          height: 16px;
          width: 18px;
          margin-left: 15px;
        }
      }
      .footRight {
        width: 54px;
        height: 24px;
        background: #fff none repeat scroll 0 0;
        border-radius: 30px;
        line-height: 24px;
        color: #999;
        font-size: 12px;
        @apply float-right cursor-pointer text-center;
      }
      .footRight:hover {
        background: $baseColor1;
        color: #fff;
      }
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
    }
    .dynamic_input {
      width: 100%;
      overflow: hidden;
      border-top: 1px solid #e7e7e7;
      background: #fafafa;
      padding: 20px;
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
          background: $baseColor6 none repeat scroll 0 0;
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
    }
    .ivu-input-word-count {
      left: 7px;
      width: 30%;
      font-size: 14px;
      background: #fafafa;
    }
  }
}
</style>