<template>
  <div class="left relative">
    <label>
      <Input
        id="textarea"
        v-model="value17"
        maxlength="500"
        show-word-limit
        type="textarea"
        :border="false"
        :placeholder="$trans('想和大家分享什么')"
        style="width: 240px; border: none"
        class=" leftText placeholder-gray-800"
        :rows="9"
      />
    </label>

    <div class="leftFoot">
      <div class="footLeft">
        <i class="bg_icon expression" @click="emojiShow = !emojiShow"></i>
        <i class="bg_icon img_icon" @click="imgShow = !imgShow"></i>
        <div v-show="emojiShow" class="emojiStyle">
          <span class="z-1000 triangle_icon"></span>
          <div class="sticker z-100">
            <div class="emoji-content">
              <img
                v-for="emojiIndex in 90"
                :key="emojiIndex"
                :src="`https://statics.gagahi.com/IM/img/qqFace/${
                  emojiIndex - 1
                }.gif`"
                alt
                srcset
                class="emoji-item"
                @click="selectEmoji(emojiIndex)"
              />
            </div>
          </div>
        </div>
        <!-- 本地上传 -->
        <div v-if="imgShow" class="upload_img flex items-start flex-col p-px3">
          <span class="z-1000 iocn icon_top"></span>
          <div class="w-full p-px10 flex justify-between">
            {{ $trans("本地上传") }}
            <i class="iocn close_icon" @click="imgShow = false"></i>
          </div>

          <div class="mt-px100 ml-px3">
            <span class="block text-12px mb-px10 text-base-color5 text-left"
              >{{ $trans("共") }}{{ uploadList.length
              }}{{ $trans("张，还能上传")
              }}<span>{{ 9 - uploadList.length }}</span
              >{{ $trans("张") }}
            </span>

            <Upload
              ref="upload"
              :show-upload-list="false"
              :on-success="handleSuccess"
              :format="['jpg', 'jpeg', 'png']"
              :max-size="2048"
              :on-format-error="handleFormatError"
              :on-exceeded-size="handleMaxSize"
              :before-upload="handleBeforeUpload"
              :on-progress="handleProgress"
              multiple
              type="drag"
              action="https://jsonplaceholder.typicode.com/posts/"
              style="display: inline-block; width: 78px"
            >
              <div style="width: 78px; height: 78px; line-height: 78px">
                <Icon
                  type="md-add"
                  size="30"
                  class="text-base-iconColor"
                ></Icon>
              </div>
            </Upload>
            <div
              class="demo-upload-list"
              v-for="(item, index) in uploadList"
              :key="index"
            >
              <template v-if="!showProgress">
                <img :src="item" />
                <div class="demo-upload-list-cover">
                  <Icon
                    type="ios-trash-outline"
                    @click.native="handleRemove(item)"
                  ></Icon>
                </div>
              </template>
              <template v-else>
                <Progress
                  v-if="showProgress"
                  :percent="percentage"
                  hide-info
                ></Progress>
              </template>
            </div>
          </div>
        </div>
      </div>
      <div class="footRight">
        {{ $trans("发送") }}
      </div>
    </div>
  </div>
</template>
<script>
import  emoji from '../utils/emoji.js';
export default {
  data() {
    return {
      showProgress: false,
      percentage: null,
      emojiShow: false,
      value17: "",
      currentStickerId: 0,
      showBuyPop: false,
      imgShow: false,
      imgName: "",
      visible: false,
      uploadList: [],
      photoList: [],
      file: null,
      EmojiList:emoji,
    };
  },
  methods: {
    // 选中emoji
    selectEmoji(emojiIndex) {
      this.emojiShow = false;
      this.value17 = this.value17 + this.EmojiList[emojiIndex - 1] 

    },
    handleView(name) {
      this.imgName = name;
      this.visible = true;
    },
    handleRemove(file) {
      const fileList = this.$refs.upload.fileList;
      this.$refs.upload.fileList.splice(fileList.indexOf(file), 1);
    },
    handleSuccess(res, file) {
      file.url =
        "https://o5wwk8baw.qnssl.com/7eb99afb9d5f317c912f08b5212fd69a/avatar";
      file.name = "7eb99afb9d5f317c912f08b5212fd69a";
    },
    handleFormatError(file) {
      this.$Notice.warning({
        title: "The file format is incorrect",
        desc:
          "File format of " +
          file.name +
          " is incorrect, please select jpg or png.",
      });
    },
    handleMaxSize(file) {
      this.$Notice.warning({
        title: "Exceeding file size limit",
        desc: "File  " + file.name + " is too large, no more than 2M.",
      });
    },
    handleBeforeUpload(file) {
      const check = this.uploadList.length < 5;
      if (!check) {
        this.$Notice.warning({
          title: "Up to five pictures can be uploaded.",
        });
      }
      // return check;
      this.file = file;
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        const _base64 = reader.result;
        this.base64Img = _base64;
        // console.log(_base64);

        this.uploadList.push(this.base64Img);
        // console.log(...this.imgList)
      };
    },
    handleProgress() {
      // console.log("上传中", event); // 继承了原生函数的 event 事件
      // console.log("上传中 file", file); // 上传的文件
      // console.log("上传中 fileList", fileList); // 上传文件列表包含file
      // // this.uploadList=fileList
      // // console.log(...this.uploadList)
      // event.target.onprogress = (event) => {
      //   let uploadPercent = parseFloat(
      //     ((event.loaded / event.total) * 100).toFixed(2)
      //   );
      //   this.showProgress = true;
      //   this.percentage = uploadPercent;
      // };
    },
  },
  mounted() {
    // this.uploadList = this.$refs.upload.fileList;
  },
};
</script>
<style lang="scss">
.personContent {
  .shareList {
    .left {
      width: 262px;
      height: 235px;
      background: #fff none repeat scroll 0 0;
      border: 1px solid #dcdcdc;
      border-radius: 5px;
      .leftText {
        margin: 20px 10px 5px 11px;
      }
      textarea.ivu-input {
        width: 240px;
        height: 148px;
        padding-bottom: 12px;
        color: #333;
      }
      .ivu-input:focus {
        border: none;
        outline: none;
        box-shadow: 0 0 0 2px transparent;
      }
      .ivu-input-word-count {
        right: 5px;
        bottom: -20px;
        font-size: 14px;
        background: #fff;
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
    }
  }

  ::-webkit-scrollbar {
    width: 5px;
    background-color: #d8d8d8;
  }

  /* 滚动槽 */
  ::-webkit-scrollbar-track {
    border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #bfc1c4;
  }
  .triangle_icon {
    width: 15px;
    height: 10px;
    background: url("~@images/person/IMicon.png") -310px -82px no-repeat;
  }
  .emojiStyle {
    span {
      position: absolute;
      bottom: 30px;
      left: 10px;
      right: 14px;
      display: block;
    }
    .sticker {
      min-height: 200px;
      width: 440px;
      border: 1px #e8e8e8 solid;
      border-radius: 5px;
      box-shadow: 0px 0px 5px #dfdfdf;
      background-color: #fff;
      position: absolute;
      bottom: 39px;
      right: 15px;

      .emoji-content {
        min-height: 182px;
        padding: 10px;
        .emoji-item {
          width: 24px;
          height: 24px;
          margin: 1px;
          float: left;
          cursor: pointer;
        }
      }
    }
  }
  .upload_img {
    position: absolute;
    z-index: 99999;
    top: 239px;
    left: 0;
    width: 100%;
    background: #fff;
    border-radius: 5px;
    border: 1px solid #dcdcdc;
    .iocn {
      background: url("~@images/person/dynamic.png") no-repeat;
    }
    .icon_top {
      position: absolute;
      top: -7px;
      left: 45px;
      width: 9px;
      height: 7px;
      background-position: -270px 0;
    }
    .close_icon {
      float: right;
      display: inline;
      cursor: pointer;
      background-position: -232px -3px;
      width: 10px;
      height: 10px;
    }
    .ivu-upload {
      float: left;
      margin-right: 6px;
      margin-bottom: 2px;
    }
    .ivu-upload-drag {
      height: 78px;
      display: flex;
      margin-top: 0;
      justify-content: center;
      align-items: center;
    }
    .demo-upload-list {
      display: inline-block;
      width: 78px;
      height: 78px;
      text-align: center;
      line-height: 78px;
      border: 1px solid transparent;
      border-radius: 4px;
      overflow: hidden;
      background: #fff;
      position: relative;
      box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);
      margin-right: 4px;
      float: left;
      margin-bottom: 4px;
    }
    .demo-upload-list img {
      width: 100%;
      height: 100%;
    }
    .demo-upload-list-cover {
      display: none;
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      background: rgba(0, 0, 0, 0.6);
    }
    .demo-upload-list:hover .demo-upload-list-cover {
      display: block;
    }
    .demo-upload-list-cover i {
      color: #fff;
      font-size: 20px;
      cursor: pointer;
      margin: 0 2px;
    }
  }
}
</style>
