<template>
  <section>
    <div style="overflow: hidden; position: relative; width: 100%">
      <ul class="flex" :style="[sliderActive]">
        <li v-for="(item, index) in images" :key="item.id + index" class="imgs">
          <img
            :src="item.url"
            style="
              height: 120px;
              width: 123px;
              cursor: pointer;
              object-fit: cover;
              flex-shrink: 0;
            "
            alt=""
            srcset=""
            @click.stop="openImage(index)"
          />
          <div
            class="h-8 w-full bottom-0 absolute z-10 cursor-pointer bgBlack"
            style="width: 123px"
          >
            <div class="delImg mt-2 ml-24" @click="toDelImg(index)"></div>
          </div>
        </li>
      </ul>
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
    <!-- 大图 -->
    <BigImage
      v-if="bigImg"
      @func="closeBigImg"
      :imagesUrl="this.images[currentIndex].url + '?imageView2/2/w/560/h/630'"
      @leftBtn="leftImage()"
      @rightBtn="rightImage()"
    ></BigImage>
    <!-- 删除图片 -->
    <Modal
      v-model="delImg"
      :closable="false"
      title="提示"
      width="300"
      footer-hide
      class="delete"
    >
      <p slot="header">
        <span class="text-white">提示</span>
        <span
          class="closed w-9 h-9 rounded-full -top-2 -right-3 absolute"
          @click.stop="delImg = false"
        ></span>
      </p>
      <div>
        <section style="height: 100px; width: 100%">
          <p>该照片所在动态也会一并删除。</p>
        </section>
        <section class="absolute bottom-10 w-full text-center space-x-5">
          <button
            class="w-20 h-8 bg-red-400 rounded-2xl text-white"
            @click.stop="ensureDel()"
          >
            确定
          </button>
          <button
            class="w-20 h-8 rounded-2xl border border-solid border-gray-400"
            @click.stop="delImg = false"
          >
            取消
          </button>
        </section>
      </div>
    </Modal>
  </section>
  <!-- </div> -->
</template>

<script>
import BigImage from "@/components/home/othercentre/BigImage";
export default {
  components: {
    BigImage,
  },
  data() {
    return {
      index: 0,
      modalIndex: false,
      delImg: false,
      bigImg: false,
      currentIndex: -1,
      sliderActive: {
        transform: `translateX(-240px)`,
        transition: "transform 0.5s",
      },
      images: [
        {
          url: "https://images.gagahi.com/Z-298ee8d8262c451e80eedf09c8d0dabc",
          id: 1,
        },
        {
          url: "https://images.gagahi.com/Z-298ee8d8262c451e80eedf09c8d0dabc",
          id: 2,
        },
        {
          url: "https://images.gagahi.com/Z-fdfa8c4ef0654815a24c272ec6a7048f",
          id: 3,
        },
        {
          url: "https://images.gagahi.com/Z-298ee8d8262c451e80eedf09c8d0dabc",
          id: 4,
        },
        {
          id: 5,
          url: "https://images.gagahi.com/Z-fdfa8c4ef0654815a24c272ec6a7048f",
        },
        {
          id: 6,
          url: "https://images.gagahi.com/Z-298ee8d8262c451e80eedf09c8d0dabc",
        },
        {
          id: 7,
          url: "https://images.gagahi.com/Z-fdfa8c4ef0654815a24c272ec6a7048f",
        },
        {
          id: 8,
          url: "https://images.gagahi.com/Z-298ee8d8262c451e80eedf09c8d0dabc",
        },
        {
          id: 9,
          url: "https://images.gagahi.com/Z-298ee8d8262c451e80eedf09c8d0dabc",
        },
        {
          id: 10,
          url: "https://images.gagahi.com/Z-fdfa8c4ef0654815a24c272ec6a7048f",
        },
        {
          id: 11,
          url: "https://images.gagahi.com/Z-298ee8d8262c451e80eedf09c8d0dabc",
        },
        {
          id: 12,
          url: "https://images.gagahi.com/Z-298ee8d8262c451e80eedf09c8d0dabc",
        },
        {
          id: 13,
          url: "https://images.gagahi.com/Z-298ee8d8262c451e80eedf09c8d0dabc",
        },
        {
          id: 14,
          url: "https://images.gagahi.com/Z-298ee8d8262c451e80eedf09c8d0dabc",
        },
        {
          id: 15,
          url: "https://images.gagahi.com/Z-298ee8d8262c451e80eedf09c8d0dabc",
        },
      ],
    };
  },
  methods: {
    toDelImg(index) {
      console.log(index);
      this.modalIndex = index;
      this.delImg = true;
    },
    ensureDel() {
      console.log(this.modalIndex);
      this.images.splice(this.modalIndex, 1);
      this.delImg = false;
    },
    prev() {
      this.index -= 1;
      if (this.index === -2) {
        // setTimeout(() => {
        this.index = this.images.length - 10;
        this.sliderActive = {
          transform: `translateX(${(this.index + 2) * -123}px)`,
          transition: "transform 0s",
        };
        setTimeout(() => {
          this.prev();
        });
        // }, 400);
      } else {
        this.sliderActive = {
          transform: `translateX(${(this.index + 2) * -123}px)`,
          transition: "transform 0.5s",
        };
      }
    },
    nextImg() {
      this.index += 1;
      if (this.index === 14) {
        // setTimeout(() => {
        this.index = -2;
        this.sliderActive = {
          transform: `translateX(${(this.index + 2) * -123}px)`,
          transition: "transform 0s",
        };
        setTimeout(() => {
          this.nextImg();
        });
        // }, 400);
      } else {
        this.sliderActive = {
          transform: `translateX(${(this.index + 2) * -123}px)`,
          transition: "transform 0.5s",
        };
      }
    },
    closeBigImg(value) {
      this.bigImg = value;
    },
    openImage(index) {
      this.bigImg = true;
      console.log(index);
      this.currentIndex = index;
    },
    leftImage() {
      --this.currentIndex;
      if (this.currentIndex === 0) {
        this.currentIndex = this.images.length - 9;
      }
      console.log(this.currentIndex);
    },
    rightImage() {
      this.currentIndex += 1;
      if (this.currentIndex === this.images.length - 9) {
        this.currentIndex = 0;
      }
      console.log(this.currentIndex);
    },
  },
  mounted() {
    const pre = this.images.slice(-2);
    const next = this.images.slice(0, 7);
    this.images = [...pre, ...this.images, ...next];
  },
};
</script>
<style lang= 'scss'  scoped>
/* div > img {
  float: left;
} */
.prev {
  width: 14px;
  height: 23px;
  position: absolute;
  top: 44px;
  left: 8px;
  z-index: 1;
  cursor: pointer;
  background: url("../../assets/images/person/little1.png") -80px -566px
    no-repeat;
}
.prev:hover {
  background: url("../../assets/images/person/little1.png") -42px -567px;
}
.next {
  width: 14px;
  height: 23px;
  position: absolute;
  top: 44px;
  right: 8px;
  z-index: 1;
  cursor: pointer;
  background: url("../../assets/images/person/little1.png") 0px -598px no-repeat;
}
.next:hover {
  background: url("../../assets/images/person/little1.png") -28px -599px
    no-repeat;
}
.delImg {
  width: 20px;
  height: 18px;
  background: url(~@images/person/little1.png) -78px -628px no-repeat;
  display: none;
}
.bgBlack {
  background: none;
}
.imgs:hover .delImg {
  display: block;
}
.imgs:hover .bgBlack {
  background-color: rgba(3, 3, 3, 0.294);
}
</style>