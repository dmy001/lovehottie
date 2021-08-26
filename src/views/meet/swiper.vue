<template>
  <section>
    <div style="overflow: hidden; position: relative; width: 100%">
      <ul class="flex" :style="[sliderActive]">
        <li v-for="(item, index) in images" :key="item.id + index">
          <img :src="item.url" style="width: 123px" alt="" srcset="" />
          <!-- {{ item.id }} -->
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
    <BigImage v-if="bigImg"></BigImage>
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
      sliderActive: {
        transform: `translateX(-240px)`,
        transition: "transform 0.5s",
      },
      images: [
        {
          url: "https://images.gagahi.com/Z-298ee8d8262c451e80eedf09c8d0dabc?imageView2/5/w/120/h/120",
          id: 1,
        },
        {
          url: "https://images.gagahi.com/Z-298ee8d8262c451e80eedf09c8d0dabc?imageView2/5/w/120/h/120",
          id: 2,
        },
        {
          url: "https://images.gagahi.com/Z-fdfa8c4ef0654815a24c272ec6a7048f?imageView2/5/w/120/h/120",
          id: 3,
        },
        {
          url: "https://images.gagahi.com/Z-298ee8d8262c451e80eedf09c8d0dabc?imageView2/5/w/120/h/120",
          id: 4,
        },
        {
          id: 5,
          url: "https://images.gagahi.com/Z-fdfa8c4ef0654815a24c272ec6a7048f?imageView2/5/w/120/h/120",
        },
        {
          id: 6,
          url: "https://images.gagahi.com/Z-298ee8d8262c451e80eedf09c8d0dabc?imageView2/5/w/120/h/120",
        },
        {
          id: 7,
          url: "https://images.gagahi.com/Z-fdfa8c4ef0654815a24c272ec6a7048f?imageView2/5/w/120/h/120",
        },
        {
          id: 8,
          url: "https://images.gagahi.com/Z-298ee8d8262c451e80eedf09c8d0dabc?imageView2/5/w/120/h/120",
        },
        {
          id: 9,
          url: "https://images.gagahi.com/Z-298ee8d8262c451e80eedf09c8d0dabc?imageView2/5/w/120/h/120",
        },
        {
          id: 10,
          url: "https://images.gagahi.com/Z-fdfa8c4ef0654815a24c272ec6a7048f?imageView2/5/w/120/h/120",
        },
        {
          id: 11,
          url: "https://images.gagahi.com/Z-298ee8d8262c451e80eedf09c8d0dabc?imageView2/5/w/120/h/120",
        },
        {
          id: 12,
          url: "https://images.gagahi.com/Z-298ee8d8262c451e80eedf09c8d0dabc?imageView2/5/w/120/h/120",
        },
        {
          id: 13,
          url: "https://images.gagahi.com/Z-298ee8d8262c451e80eedf09c8d0dabc?imageView2/5/w/120/h/120",
        },
        {
          id: 14,
          url: "https://images.gagahi.com/Z-298ee8d8262c451e80eedf09c8d0dabc?imageView2/5/w/120/h/120",
        },
        {
          id: 15,
          url: "https://images.gagahi.com/Z-298ee8d8262c451e80eedf09c8d0dabc?imageView2/5/w/120/h/120",
        },
      ],
    };
  },
  mounted() {
    const pre = this.images.slice(-2);
    const next = this.images.slice(0, 7);
    this.images = [...pre, ...this.images, ...next];
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
</style>