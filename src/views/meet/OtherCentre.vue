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
        <!-- 没有照片 -->
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
        <!-- 有照片 -->
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
          <dl style="">
            <dt class="flex overflow-hidden">
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
                :src="item"
                alt=""
              />
            </dt>
          </dl>
          <!-- 图片左右图标 -->
          <div class="">
            <div
              class="prev"
              @click="prev()"
              v-if="images.length >= 6"
              href=""
            ></div>
            <div
              class="next"
              @click="nextImg()"
              v-if="images.length >= 6"
              href=""
            ></div>
          </div>
        </div>
        <!-- 轮播 -->
        <Swiper></Swiper>
      </div>
    </section>
    <section>
      <!-- 图片放大 -->
      <BigImage v-if="bigImage" @func="closeImg"></BigImage>
      <!-- 评论区 -->
      <Comment></Comment>
    </section>
  </div>
</template>

<script>
import Comment from "../../components/home/othercentre/Comment.vue";
import BigImage from "../../components/home/othercentre/BigImage.vue";
import Swiper from "@/views/meet/swiper";
export default {
  components: {
    Comment,
    BigImage,
    Swiper,
  },
  data() {
    return {
      interests: ["户外", "70后", "美容", "奔驰", "聚会"],
      haveImage: false,
      showLanguage: false,
      bigImage: false,
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
      ],
    };
  },
  methods: {
    closeImg(value) {
      this.bigImage = value;
    },
  },
  mounted() {
    // document.addEventListener("click", this.closeBigImage);
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

.contentName :hover {
  color: $baseColor1;
  background-color: #e7e7e7;
}
// .prev {
//   width: 14px;
//   height: 23px;
//   position: absolute;
//   top: 44px;
//   left: 8px;
//   z-index: 1;
//   cursor: pointer;
//   background: url("../../assets/images/person/little1.png") -80px -566px
//     no-repeat;
// }
// .prev:hover {
//   background: url("../../assets/images/person/little1.png") -42px -567px;
// }
// .next {
//   width: 14px;
//   height: 23px;
//   position: absolute;
//   top: 44px;
//   right: 8px;
//   z-index: 1;
//   cursor: pointer;
//   background: url("../../assets/images/person/little1.png") 0px -598px no-repeat;
// }
// .next:hover {
//   background: url("../../assets/images/person/little1.png") -28px -599px
//     no-repeat;
// }
</style>