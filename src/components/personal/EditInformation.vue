<template>
  <div>
    <div>
      <ul>
        <li class="flex flex-row">
          <div class="w-1/4 flex justify-end object-cover">
            <img
              class="
                w-16
                h-16
                mt-5
                rounded-full
                object-cover
                align-middle
                
              "
              :src="base64Img"
              alt=""
            />
          </div>
          <div class="w-3/4 flex justify-start ml-2">
            <button
              class="
                w-24
                h-8
                leading-8
                text-gray-400
                mt-9
                ml-1
                border border-solid border-gray-300
                rounded-2xl
                focus:outline-none
              "
              @click="editHeader = true"
            >
              {{ $trans("编辑照片") }}
            </button>
          </div>
        </li>
        <li class="flex justify-between text-sm mt-3">
          <span class="w-1/4 text-right text-gray-400 pr-2"
            >{{ $trans("昵称") }}:</span
          >
          <label class="w-3/4 text-left">
            <input
              class="
                w-1/2
                h-8
                rounded-2xl
                border border-solid border-gray-300
                p-4
                focus:outline-none
              "
              type="text"
              maxlength="16"
            />
          </label>
        </li>
        <li class="flex justify-between text-sm mt-5">
          <span class="w-1/4 text-right text-gray-400 pr-2"
            >ID{{ $trans("号") }}:</span
          >
          <label class="w-3/4 text-left">
            <input
              class="
                w-1/2
                h-8
                rounded-2xl
                border border-solid border-gray-300
                p-4
                outline-none
              "
              type="text"
            />
          </label>
        </li>
        <li class="flex justify-between text-sm mt-5">
          <span class="w-1/4 text-right text-gray-400 pr-2"
            >{{ $trans("年龄") }}:</span
          >
          <label class="w-3/4 text-left space-x-3">
            <Select class="w-28 h-8" v-model="year">
              <Option v-for="(it, index) in years" :value="it" :key="index">
                {{ it }}</Option
              >
            </Select>
            <Select class="w-28 h-8" v-model="month">
              <Option v-for="(it, index) in months" :value="it" :key="index">
                {{ it }}
              </Option>
            </Select>
            <Select class="w-28 h-8" v-model="day">
              <Option v-for="(it, index) in days" :value="it" :key="index">
                {{ it }}
              </Option>
            </Select>
          </label>
        </li>
        <li class="flex justify-between text-sm mt-5">
          <span class="w-1/4 text-right text-gray-400 pr-2"
            >{{ $trans("性别") }}:</span
          >
          <label class="w-3/4 text-left">
            <RadioGroup>
              <Radio label="女"> </Radio>
              <Radio label="男"> </Radio>
            </RadioGroup>
          </label>
        </li>
        <li class="flex justify-between text-sm mt-5">
          <span class="w-1/4 text-right text-gray-400 pr-2"
            >{{ $trans("职业") }}:</span
          >
          <label class="w-3/4 text-left">
            <Select class="w-1/2 h-8" :placeholder="$trans('其他')">
              <Option v-for="(it, index) in job" :value="it" :key="index">
              </Option>
            </Select>
          </label>
        </li>
        <li
          class="city flex justify-between text-sm mt-5 cursor-pointer"
          @click="toSetCity = true"
        >
          <span class="w-1/4 text-right text-gray-400 pr-2"
            >{{ $trans("国家") }}:</span
          >
          <label class="w-3/4 text-left">
            <input
              class="
                w-1/2
                h-8
                rounded-2xl
                border border-solid border-gray-300
                p-4
                focus:outline-none
                cursor-pointer
              "
              type="text"
            />
            <span class="w-1/2 flex justify-end">
              <img class="h-2 -mt-5 mr-5" src="~@images/xld.png" />
            </span>
          </label>
        </li>
        <li class="flex justify-between text-sm mt-5">
          <span class="w-1/4 text-right text-gray-400 pr-2"
            >{{ $trans("语言") }}:</span
          >
          <label class="w-3/4 text-left">
            <Select class="w-1/2 h-8" placeholder="English">
              <Option v-for="(it, index) in language" :value="it" :key="index">
              </Option>
            </Select>
          </label>
        </li>
        <li class="flex justify-between text-sm mt-5">
          <span class="w-1/4 text-right text-gray-400 pr-2"
            >{{ $trans("身高") }}(cm):</span
          >
          <label class="w-3/4 text-left">
            <input
              class="
                w-1/2
                h-8
                rounded-2xl
                border border-solid border-gray-300
                p-4
                outline-none
              "
              type="text"
              maxlength="16"
              value=""
            />
          </label>
        </li>
        <li class="flex justify-between text-sm mt-5">
          <span class="w-1/4 text-right text-gray-400 pr-2"
            >{{ $trans("体重") }}(kg):</span
          >
          <label class="w-3/4 text-left">
            <input
              class="
                w-1/2
                h-8
                rounded-2xl
                border border-solid border-gray-300
                p-4
                focus:outline-none
              "
              type="text"
              maxlength="16"
              value=""
            />
          </label>
        </li>
        <li class="flex justify-between text-sm mt-5">
          <span class="w-1/4 text-right text-gray-400 pr-2"
            >{{ $trans("个性签名") }}:</span
          >
          <span class="w-3/4 text-left">
            <textarea
              class="
                w-1/2
                h-20
                rounded-2xl
                border border-solid border-gray-300
                p-4
                outline-none
              "
              value=""
            />
          </span>
        </li>
        <li class="flex justify-between text-sm mt-5">
          <span class="w-1/4 text-right text-gray-400 pr-2"
            >{{ $trans("兴趣") }}:</span
          >
          <div class="w-3/4 text-left">
            <Interest></Interest>
          </div>
        </li>
        <li class="ml-48 mt-8 pb-10">
          <SaveButton
            :title="$trans('保存')"
            :name="$trans('取消')"
          ></SaveButton>
        </li>
      </ul>
    </div>
    <!-- 选择国家 -->
    <Modal
      v-model="toSetCity"
      title="$trans('选择国家')"
      width="600"
      footer-hide
      :closable="false"
    >
      <p slot="header">
        <span class="text-white">{{ $trans("选择国家") }}</span>
        <span
          class="closed w-9 h-9 rounded-full -top-2 -right-3 absolute"
          @click="toSetCity = false"
        ></span>
      </p>
      <City></City>
      <section class="absolute bottom-10 w-full text-center space-x-5">
        <button
          class="w-20 h-8 bg-red-400 rounded-2xl text-white focus:outline-none"
          @click="toSetCity = false"
        >
          {{ $trans("确定") }}
        </button>
        <button
          class="
            w-20
            h-8
            focus:outline-none
            rounded-2xl
            border border-solid border-gray-400
          "
          @click="toSetCity = false"
        >
          取消
        </button>
      </section>
    </Modal>
    <!-- 上传头像 -->
    <Modal
      v-model="editHeader"
      footer-hide
      width="500"
      title="修改头像信息"
      :closable="false"
      class="modify"
    >
      <p slot="header">
        <span class="text-white">修改头像信息</span>
        <span
          class="closed w-9 h-9 rounded-full -top-2 -right-3 absolute"
          @click="editHeader = false"
        ></span>
      </p>
      <section>
        <div class="h-10 border-b border-solid border-gray-400 mx-5">
          <span
            class="
              h-10
              leading-10
              border-b-2 border-solid border-blue-500
              cursor-pointer
              inline-block
            "
            >本地上传</span
          >
        </div>
        <div class="w-full relative top-20">
          <Upload
            class="flex justify-center"
            :show-upload-list="false"
            :before-upload="handleUpload"
            :on-success="handleSuccess"
            :format="['jpg', 'jpeg', 'png']"
            :max-size="2048"
            :on-format-error="handleFormatError"
            :on-exceeded-size="handleMaxSize"
            action="//jsonplaceholder.typicode.com/posts/"
          >
            <div
              class="
                w-28
                h-10
                rounded-3xl
                bg-red-400
                text-white text-base
                leading-10
                text-center
                mx-auto
                cursor-pointer
              "
              @click="editHeader = false"
            >
              选择图片
            </div>
          </Upload>
          <p class="text-gray-400 text-center mt-3">
            支持JPG,JPEG,PNG,BMP,GIF格式，且文件小于5M
          </p>
          <p class="mx-5 mt-5">
            注意：您的头像必须是您本人清晰可辨的单人照，让人看清您的样子，并符合您的年龄和性别，不可包含裸露内容。
          </p>
        </div>
      </section>
    </Modal>
    <!-- 编辑头像缩略图 -->
    <Modal
      v-model="editSmallHeader"
      title="编辑缩略图"
      width="600"
      footer-hide
      :closable="false"
    >
      <p slot="header">
        <span class="text-white">编辑缩略图</span>
        <span
          class="closed w-9 h-9 rounded-full -top-2 -right-3 absolute"
          @click="editSmallHeader = false"
        ></span>
      </p>
      <section class="mx-5 flex justify-between mt-5">
        <div
          class="relative flex justify-center items-center"
          style="
            width: 410px;
            height: 300px;
            border: 1px solid #ccc;
            float: left;
          "
        >
          <img
            v-if="base64Img"
            class="w-3/4 h-4/5 object-contain"
            :src="base64Img"
          />
        </div>
        <div
          class="relative right-5 flex flex-col justify-between text-center"
          style="width: 60px"
        >
          预览：
          <div class="mx-auto">
            <img
              style="
                width: 60px;
                height: 60px;
                border-radius: 50%;
                object-fit: contain;
              "
              :src="base64Img"
            />
          </div>
          <p class="mb15 tc">60*60</p>
          <div class="mx-auto">
            <img
              style="
                width: 45px;
                height: 45px;
                border-radius: 50%;
                object-fit: contain;
              "
              :src="base64Img"
            />
          </div>
          <p class="mb15 tc">45*45</p>
          <div class="mx-auto">
            <img
              style="
                width: 30px;
                height: 30px;
                border-radius: 50%;
                object-fit: contain;
              "
              :src="base64Img"
            />
          </div>
          <p class="tc">30*30</p>
        </div>
      </section>
      <section class="absolute bottom-10 w-full text-center space-x-5">
        <button
          class="w-20 h-8 focus:outline-none bg-red-400 rounded-2xl text-white"
          @click="upload"
        >
          保存
        </button>
        <button
          class="
            w-20
            h-8
            focus:outline-none
            rounded-2xl
            border border-solid border-gray-400
          "
          @click="editSmallHeader = false"
        >
          {{ $trans("取消") }}
        </button>
      </section>
    </Modal>
  </div>
</template>
<script>
import Interest from "@components/personal/Interest.vue";
import City from "@components/personal/City.vue";
import SaveButton from "@components/personal/SaveButton.vue";
export default {
  components: {
    Interest,
    City,
    SaveButton,
  },
  data() {
    return {
      year: 0,
      month: 0,
      day: 1,
      years: Array.from(
        { length: 100 },
        (item, index) => index + 1910
      ).reverse(),
      months: Array.from({ length: 12 }, (item, index) => index + 1),
      job: [
        "文案",
        "客户经理",
        "文员",
        "销售",
        "设计",
        "程序员",
        "会计",
        "模特",
        "商人",
      ],
      language: [
        "English",
        "简体中文",
        "繁體中文",
        "한국어",
        "Pусский",
        "Deutsch",
        "Español",
        "日本語",
      ],
      //   show: false,
      set: false,
      editHeader: false,
      editSmallHeader: false,
      toSetCity: false,

      file: null,
      base64Img: null,
    };
  },
  computed: {
    days: {
      get: function () {
        return Array.from(
          { length: new Date(this.year, this.month, 0).getDate() },
          (item, index) => index + 1
        );
      },
    },
  },
  methods: {
    handleUpload(file) {
      this.editSmallHeader = true;

      this.file = file;
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        const _base64 = reader.result;
        this.base64Img = _base64;
        // console.log(_base64);

        // console.log(...this.imgList)
      };
      // return false;
    },
    upload() {
      // this.loadingStatus = true;
      this.editSmallHeader = false;
      setTimeout(() => {
        this.file = null;
        // this.loadingStatus = false;
        this.$Message.success("Success");
      }, 1500);
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
  },
};
</script>
<style lang="scss" >
.closed {
  background: url("~@images/iconClosed.png") 0 -39px no-repeat;
  cursor: pointer;
  z-index: 20;
}
.closed:hover {
  background: url("~@images/iconClosed.png") 0 0 no-repeat;
  cursor: pointer;
}
.city span {
  background-image: url(https://statics.lovehottie.com/web-pc/images/xld.png)
    no-repeat;
  cursor: pointer;
  vertical-align: top;
}
.modify .ivu-modal-content {
  height: 400px;
}
</style>