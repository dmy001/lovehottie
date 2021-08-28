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
        <div class="ml-2 w-full pb-4" style="border-bottom: 1px dashed #ccc">
          <p
            class="mb-2.5 text-base text-left"
            style="color: #90a0bc; font-family: Arial"
          >
            Sandy
          </p>
          <p class="text-left mb-2.5" style="color: #696969">
            <span>{{ $trans("女") }}</span> ,<span>35</span> ,<span>美国</span>
            ,<span>ID:40215904</span>
          </p>
          <p class="text-left mb-2.5" style="color: #696969">
            {{ $trans("个性签名") }}：
          </p>
          <p class="text-left mb-2.5">
            <span
              class="border mr-2 px-4 py-1 rounded-2xl"
              v-for="(item, index) in interests"
              :key="index"
              >{{ item }}</span
            >
          </p>
        </div>
      </div>
      <div class="bg-white flex justify-between">
        <div
          class="
            rounded-2xl
            w-24
            text-center
            py-1.5
            text-sm text-white
            ml-20
            mt-4
            h-8
            cursor-pointer
          "
          style="background: #ff625a"
        >
          {{ $trans("给他惊喜") }}
        </div>
        <div class="mt-4 mr-8">
          <span
            class="message w-10 h-10 ml-5 inline-block cursor-pointer"
          ></span>
          <span class="friends w-10 h-10 ml-5 inline-block">
            <div
              class="
                friendsImg
                w-60
                h-24
                absolute
                -left-3
                bottom-7
                pl-20
                text-lg text-white
                hidden
                pointer-events-none
              "
              style=""
            >
              {{ $trans("猛戳这里，添加好友") }}
            </div>
            <div
              class="
                friend-tip
                hidden
                -ml-5
                -mt-8
                absolute
                w-28
                h-10
                text-xs text-center
              "
            >
              <span class="text-white -ml-1.5 inline-block mt-1.5">
                {{ $trans("加为好友") }}
              </span>
            </div>
          </span>
          <span class="gift inline-block w-10 h-10 ml-5 cursor-pointer"></span>
        </div>
      </div>
    </section>
    <section
      class="h-12 py-0 px-5"
      style="background: #dfebff; line-height: 50px"
    >
      <div class="text-left">
        <span class="mr-4">
          <span>{{ $trans("职业") }}：医生</span>
        </span>
        <span class="mr-4 ml-4">
          <span>{{ $trans("语言") }}：中文(简体)</span>
        </span>
        <span class="mr-4 ml-4">
          <span>{{ $trans("身高") }}：165cm</span>
        </span>
        <span class="mr-4 ml-4">
          <span>{{ $trans("体重") }}：49公斤</span>
        </span>
      </div>
    </section>
    <section>
      <div class="">
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
          {{ $trans("对方尚无展示照片") }}
        </div>
        <!-- 有照片 -->
        <!-- 轮播 -->
        <Swiper></Swiper>
      </div>
    </section>
    <section>
      <!-- 评论区 -->
      <Comment></Comment>
    </section>
  </div>
</template>

<script>
import Comment from "../../components/home/othercentre/Comment.vue";
import Swiper from "@/views/meet/swiper";
export default {
  components: {
    Comment,
    Swiper,
  },
  data() {
    return {
      interests: ["户外", "70后", "美容", "奔驰", "聚会"],
      haveImage: false,
      showLanguage: false,
      bigImage: false,
    };
  },
  methods: {},
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
}
.message:hover {
  background-position-x: -41px;
  background-position-y: -527px;
}
.friends {
  background: no-repeat url("../../assets/images/person/little1.png") -1px -280px;
}
.friends:hover {
  background-position-x: -45px;
  background-position-y: -280px;
}
.friends:hover .friend-tip {
  background: no-repeat url("../../assets/images/person/little1.png") -0px -370px;
  display: block;
}
.friendsImg {
  background: url("https://statics.lovehottie.com/web-pc//images/user-help.png")
    no-repeat;
  background-position-x: -1px;
  background-position-y: -280px;
  z-index: 999999;
}
.gift {
  background: no-repeat url("../../assets/images/person/little1.png") -42px -457px;
}
.gift:hover {
  background-position-x: 0px;
  background-position-y: -457px;
}
</style>