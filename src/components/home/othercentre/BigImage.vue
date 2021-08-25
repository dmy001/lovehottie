<template>
  <div class="imageBigBg h-screen">
    <div
      class="imageBig left-1/3"
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
              <div class="slide_item" imgid="61163a5293d24eeba0605320b5ca5830">
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
  </div>
</template>

<script>
export default {
  //   props: {
  //     bigImage: Boolean,
  //   },
  data() {
    return {
      images: [
        "https://images.gagahi.com/Z-298ee8d8262c451e80eedf09c8d0dabc?imageView2/5/w/123/h/120",
      ],
    };
  },
  methods: {
    //点击其他地方关闭大图片
    closeBigImage(event) {
      const currentCli = document.getElementById("sellineImg");
      if (currentCli) {
        if (!currentCli.contains(event.target)) {
          this.bigImage = false;
          this.$emit("func", this.bigImage);
        }
      }
    },
    //关闭大图
    closeImg() {
      this.bigImage = false;
      this.$emit("func", this.bigImage);
    },
  },
  mounted() {
    document.addEventListener("click", this.closeBigImage);
  },
};
</script>

<style lang="scss" scoped>
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
  position: fixed;
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
          background: url("../../../assets/images/dynamic.png") no-repeat;
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
          background: url("../../../assets/images/dynamic.png") no-repeat;
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
.closedImg {
  background: url("~@images/iconClosed.png") -46px 1px no-repeat;
  cursor: pointer;
  z-index: 20;
}
.closedImg:hover {
  background: url("~@images/iconClosed.png") -46px -38px no-repeat;
  cursor: pointer;
}
.imageBigBg {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 1000;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
}
</style>