<template>
  <section>
    <div class="overflow-hidden relative w-full">
      <ul class="flex" :style="[sliderActive]">
        <li v-for="(item, index) in images" :key="item.id + index">
          <img
            class="cursor-pointer"
            :src="item.url"
            style="
              height: 120px;
              width: 123px;
              object-fit: cover;
              flex-shrink: 0;
            "
            alt=""
            srcset=""
            @click.stop="openImage(index)"
          />
          <!-- {{ item.id }} -->
        </li>
      </ul>
      <!-- 图片左右图标 -->
      <div class="">
        <div
          class="prev absolute cursor-pointer"
          @click="prev()"
          v-if="images.length >= 6"
          href=""
        ></div>
        <div
          class="next absolute cursor-pointer"
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
      @func1="closeBigImg1"
      :imagesUrl="this.images[currentIndex].url + '?imageView2/2/w/560/h/630'"
      @leftBtn="leftImage()"
      @rightBtn="rightImage()"
    ></BigImage>
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
    closeBigImg1(value) {
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
  top: 44px;
  left: 8px;
  z-index: 1;
  background: url("../../assets/images/person/little1.png") -80px -566px
    no-repeat;
}
.prev:hover {
  background: url("../../assets/images/person/little1.png") -42px -567px;
}
.next {
  width: 14px;
  height: 23px;
  top: 44px;
  right: 8px;
  z-index: 1;
  background: url("../../assets/images/person/little1.png") 0px -598px no-repeat;
}
.next:hover {
  background: url("../../assets/images/person/little1.png") -28px -599px
    no-repeat;
}
</style>