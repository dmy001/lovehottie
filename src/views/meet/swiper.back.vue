<template>
  <!-- <div style="overflow: hidden; position: relative; width: 615px">
    <div
      style="
        width: 1599px;
        position: relative;
        overflow: hidden;
        padding: 0px;
        margin: 0px;
        left: -123px;
        transition: 0.5s;
      "
      ref="container"
    >
      <img
        src="https://images.gagahi.com/Z-bc97f4846aa84c07b3ca1cc2af5b4db9?imageView2/5/w/123/h/120"
        alt=""
      />
      <img
        src="https://images.gagahi.com/Z-fdfa8c4ef0654815a24c272ec6a7048f?imageView2/5/w/123/h/120"
        alt=""
      />
      <img
        src="https://images.gagahi.com/Z-298ee8d8262c451e80eedf09c8d0dabc?imageView2/5/w/123/h/120"
        alt=""
      />
      <img
        src="https://images.gagahi.com/Z-b697f292318d481caa2807f73af51b1d?imageView2/5/w/123/h/120"
        alt=""
      />
      <img
        src="https://images.gagahi.com/Z-bc97f4846aa84c07b3ca1cc2af5b4db9?imageView2/5/w/123/h/120"
        alt=""
      />
      <img
        src="https://images.gagahi.com/Z-fdfa8c4ef0654815a24c272ec6a7048f?imageView2/5/w/123/h/120"
        alt=""
      />
      <img
        src="https://images.gagahi.com/Z-298ee8d8262c451e80eedf09c8d0dabc?imageView2/5/w/123/h/120"
        alt=""
      />
      <img
        src="https://images.gagahi.com/Z-b697f292318d481caa2807f73af51b1d?imageView2/5/w/123/h/120"
        alt=""
      />
      <img
        src="https://images.gagahi.com/Z-bc97f4846aa84c07b3ca1cc2af5b4db9?imageView2/5/w/123/h/120"
        alt=""
      />
    </div>
    <p href="" @click="up">22222</p>
    <p href="" @click="next">\></p> -->
  <div style="overflow: hidden; position: relative; width: 100%">
    <div
      class="text-center relative"
      style="
        line-height: 120px;
        background-color: rgb(238, 238, 238);
        width: 1599px;
        overflow: hidden;
        padding: 0px;
        margin: 0px;
        left: 0px;
        transition: 0.5s;
      "
      ref="container"
    >
      <!-- 图片 -->
      <dl>
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
    </div>
    <!-- 图片左右图标 -->
    <div class="">
      <div class="prev" @click="prev()" v-if="images.length >= 6" href=""></div>
      <div
        class="next"
        @click="nextImg()"
        v-if="images.length >= 6"
        href=""
      ></div>
    </div>
  </div>

  <!-- </div> -->
</template>

<script>
export default {
  data() {
    return {
      index: 1,
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
        "https://images.gagahi.com/Z-298ee8d8262c451e80eedf09c8d0dabc?imageView2/5/w/123/h/120",
        "https://images.gagahi.com/Z-298ee8d8262c451e80eedf09c8d0dabc?imageView2/5/w/123/h/120",
        "https://images.gagahi.com/Z-298ee8d8262c451e80eedf09c8d0dabc?imageView2/5/w/123/h/120",
      ],
    };
  },
  methods: {
    prev() {
      if (this.index == 1) {
        this.index = 7;
      } else this.index -= 1;
      this.$refs.container.style.left = this.index * -123 + "px";
    },
    nextImg() {
      if (this.index == 7) this.index = 1;
      else this.index += 1;
      this.$refs.container.style.left = this.index * -123 + "px";
    },
  },
};
</script>
<style lang= 'scss'  scoped>
div > img {
  float: left;
}
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