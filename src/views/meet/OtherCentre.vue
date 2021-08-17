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
        <div class="like-topr mt-4 mr-8">
          <span class="message"></span>
          <span class="friends"
            ><div
              style="
                width: 240px;
                height: 100px;
                background: url('https://statics.lovehottie.com/web-pc//images/user-help.png')
                  no-repeat;
                position: absolute;
                left: -11px;
                bottom: -28px;
                padding-left: 88px;
                font-size: 18px;
                color: #fff;
                z-index: 999999;
                pointer-events: none;
                display: none;
              "
            >
              猛戳这里，添加好友
            </div>
            <div class="friend-tip">加为好友</div>
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
          class="text-center"
          style="
            height: 122px;
            line-height: 120px;
            background-color: rgb(238, 238, 238);
          "
        >
          <dl class="flex">
            <dt>
              <a href="javascript:void(0)" @click="openImgDialog()"
                ><img
                  src="https://images.gagahi.com/Z-7357d388f80d4c919e04cb6e7c2e9b41?imageView2/5/w/123/h/120"
                  alt=""
              /></a>
            </dt>
            <dt>
              <a href="javascript:void(0)" @click="openImgDialog()"
                ><img
                  src="https://images.gagahi.com/Z-7357d388f80d4c919e04cb6e7c2e9b41?imageView2/5/w/123/h/120"
                  alt=""
              /></a>
            </dt>
          </dl>
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
          <div class="ml-2 w-full">
            <p class="text-left mt-1 border">
              <span style="color: #90a0bc; font-family: Arial">Sandy</span>
              <span class="ml-2" style="color: #999; font-size: 12px"
                >2019-05-13 12:05</span
              >
            </p>
            <p class="contentText border mt-2 text-left">
              お会いできてうれしいです
            </p>
            <p class="border mt-2 text-left">
              <span class="imgboxs" style="width: 87px; height: 87px">
                <img
                  src="https://images.gagahi.com/Z-2f71e8c7d56f487ca3debc5826268a59?imageView2/5/w/87/h/87"
                  alt=""
                />
              </span>
              <span class="imgboxs" style="width: 87px; height: 87px">
                <img
                  src="https://images.gagahi.com/Z-1c713d7c62b14b06be3b6e6dc3fd0642?imageView2/5/w/87/h/87"
                  alt=""
                />
              </span>
              <span>
                <img
                  src="https://images.gagahi.com/Z-9e6ecf0aff16423881d874c369032d15?imageView2/5/w/87/h/87"
                  alt=""
                />
              </span>
            </p>
            <div class="detail text-left">
              <p class="inlineblock">
                <i class="detailIcon"></i>
                <span>5</span>
              </p>
              <p
                class="inlineblock ml-5"
                @mousemove="mousemove"
                @mouseleave="mouseLeave"
              >
                <i class="worldIcon border relative mt-2">
                  <div
                    class="border rounded-md transType mt-1"
                    style="display: block"
                    v-show="showLanguage"
                  >
                    <span class="ulBg"></span>
                    <ul
                      class="
                        contentName
                        flex flex-wrap
                        justify-around
                        text-sm text-black
                        not-italic
                        px-2
                        p-0
                      "
                      @mousemove="mousemove1"
                      @mouseleave="mouseLeave1"
                    >
                      <li
                        class="mt-1 px-1"
                        v-for="(item, index) in country"
                        :key="index"
                      >
                        {{ item }}
                      </li>
                    </ul>
                  </div>
                </i>
              </p>
            </div>
            <p class="textInput"></p>
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
    };
  },
  methods: {
    openImgDialog() {
      console.log(111);
    },
    mousemove() {
      this.showLanguage = !this.showLanguage;
    },
    mouseLeave() {
      this.showLanguage = !this.showLanguage;
    },
    mousemove1() {
      this.mousemove();
    },
    mouseLeave1() {
      this.mouseLeave();
    },
  },
};
</script>

<style lang="scss" scoped>
.like-topr .message {
  background-position-x: 0px;
  background-position-y: -529px;
}
.like-topr span {
  display: inline-block;
  width: 38px;
  height: 38px;
  background: no-repeat url("../../assets/images/person/little1.png") -42px -457px;
  cursor: pointer;
  margin-left: 20px;
}
.like-topr .friends {
  background-position-x: -1px;
  background-position-y: -280px;
}
.friend-tip {
  display: none;
  text-align: center;
  font-size: 12px;
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
.detail {
  background: #fff none repeat scroll 0 0;
  color: #999;
  height: 20px;
  max-width: 100%;
  padding: 10px;
}
.inlineblock {
  display: inline-block;
  vertical-align: middle;
}
.detailIcon {
  background: rgba(0, 0, 0, 0) url("../../assets/images/dynamic.png") no-repeat
    scroll 0 0;
  display: inline-block;
  margin-bottom: -3px;
  margin-right: 5px;
  cursor: pointer;
  background-position-x: -26px;
  background-position-y: -48px;
  height: 16px;
  width: 19px;
}
.worldIcon {
  cursor: pointer;
  height: 18px;
  width: 18px;
  background: rgba(0, 0, 0, 0) url("../../assets/images/dynamic.png") no-repeat
    scroll 0 0;
  background-position-x: -54px;
  background-position-y: -48px;
  display: inline-block;
  margin-bottom: -3px;
  margin-right: 5px;
}
.transType {
  width: 147px;
  height: 110px;
  background-color: inherit;
  left: -30px;
  top: 15px;
  padding-top: 6px;
  position: absolute;
  z-index: 1000;
  background: #fff;
}
.ulBg {
  width: 20px;
  height: 30px;
  position: absolute;
  left: 30px;
  top: -13px;
  z-index: 2;
  background: url("../../assets/images/person/IMicon.png") 0px -75px repeat;
}
.textInput {
  border-top: 1px solid #e7e7e7;
  background: #fafafa;
  padding: 20px;
}
.contentName :hover {
  color: $baseColor1;
  background-color: #e7e7e7;
}
//
</style>