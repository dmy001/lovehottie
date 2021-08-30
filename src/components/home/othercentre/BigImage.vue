<template>
  <div
    class="fixed top-0 left-0 bottom-0 right-0 w-full h-full"
    style="z-index: 1000; background-color: rgba(0, 0, 0, 0.3)"
  >
    <div
      class="left-1/3 m-0 p-0 bg-white rounded-2xl fixed"
      style="
          z-index: 19891023;
          width: 600px;
          height: 630px;
          top: 145.5px ;rgba（0，0，0，0．7）;
          box-shadow: 0px 0px 3px rgb(0 0 0 / 20%);
          -webkit-animation-fill-mode: both;
          animation-fill-mode: both;
          -webkit-animation-duration: 0.3s;
          animation-duration: 0.3s;
        "
    >
      <span
        class="
          closedImg
          w-9
          h-9
          rounded-full
          -top-2
          -right-3
          absolute
          cursor-pointer
        "
        style="z-index: 20"
        @click="closeImg()"
      ></span>
      <div
        class="relative pt-2.5 pb-6 px-6 overflow-auto"
        style="height: 630px"
        id="sellineImg"
      >
        <div
          class="absolute left-0 top-0 w-full bg-black rounded-2xl"
          style="height: 630px"
        >
          <div
            class="
              left-5
              overflow-hidden
              bg-black
              relative
              rounded-2xl
              float-left
            "
            style="width: 560px; height: 630px"
          >
            <div
              class="
                imageBigDetailImgLeft
                inline-block
                cursor-pointer
                absolute
                left-5
                top-1/2
                -mt-6
                w-8
                h-12
              "
              style="z-index: 3"
              @click="leftImage()"
            ></div>
            <div
              class="
                imageBigDetailImgRight
                inline-block
                absolute
                cursor-pointer
                w-8
                h-12
                right-5
                top-1/2
                -mt-6
              "
              style="z-index: 3"
              @click="rightImage()"
            ></div>
            <div
              class="
                text-base text-white
                absolute
                bottom-3
                left-4
                cursor-pointer
              "
              style="text-shadow: 0px 0px 3px #000; z-index: 1"
            >
              {{ $trans("原始尺寸") }}
            </div>
            <div
              class="
                left-7
                text-base text-white
                absolute
                bottom-3
                cursor-pointer
              "
              style="
                z-index: 1;
                text-shadow: 0px 0px 3px #000;
                display: none !important;
              "
              data-url
              data-i
            >
              {{ $trans("重置") }}
            </div>
            <div
              class="bd flex items-center text-center"
              style="height: 630px; width: 560px"
            >
              <div
                class="w-full inline-block"
                style="max-height: 630px"
                imgid="61163a5293d24eeba0605320b5ca5830"
              >
                <div class="inline">
                  <img :src="imagesUrl" class="relative my-0 mx-auto" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    // images: Array,
    imagesUrl: String,
    // bigImage: Boolean,
  },
  data() {
    return {
      // images: [
      //   "https://images.gagahi.com/Z-298ee8d8262c451e80eedf09c8d0dabc?imageView2/5/w/123/h/120",
      // ],
    };
  },
  methods: {
    //点击其他地方关闭大图片
    closeBigImage(event) {
      const currentCli = document.getElementById("sellineImg");
      if (currentCli) {
        if (!currentCli.contains(event.target)) {
          this.$emit("func1", this.bigImage);
        }
      }
    },
    //关闭大图
    closeImg() {
      this.$emit("func", this.bigImage);
    },
    leftImage() {
      this.$emit("leftBtn");
    },
    rightImage() {
      this.$emit("rightBtn");
    },
  },
  mounted() {
    document.addEventListener("click", this.closeBigImage);
  },
};
</script>

<style lang="scss" scoped>
.imageBigDetailImgLeft {
  background: url("../../../assets/images/dynamic.png") no-repeat;
  background-position: -123px 0;
}
.imageBigDetailImgRight {
  background: url("../../../assets/images/dynamic.png") no-repeat;
  background-position: -159px 0;
}
.closedImg {
  background: url("~@images/iconClosed.png") -46px 1px no-repeat;
}
.closedImg:hover {
  background: url("~@images/iconClosed.png") -46px -38px no-repeat;
  cursor: pointer;
}
</style>