<template>
  <div>
    <div class="w-3/5 rounded-2xl bg-white">
      <section
        class="h-12 rounded-t-2xl flex justify-between pl-3"
        style="background-color: #e63561"
      >
        <p class="text-left mt-3 text-white">选择国家</p>
        <span
          class="closed w-9 h-9 rounded-full -mt-3 -mr-1"
          @click="close()"
        ></span>
      </section>
      <section class="flex justify-center mt-5 pb-5">
        <ul class="flex flex-row space-x-20 text-base cursor-pointer">
          <li
            ref="bgColor"
            :class="{ actived: currentIndex == 0 }"
            class="w-12 rounded-full bg-transparent"
            @click="setCity(0)"
          >
            A-G
          </li>
          <li
            :class="{ actived: currentIndex == 1 }"
            class="w-12"
            @click="currentIndex = 1"
          >
            H-M
          </li>
          <li
            :class="{ actived: currentIndex == 2 }"
            class="w-12"
            @click="currentIndex = 2"
          >
            N-S
          </li>
          <li
            :class="{ actived: currentIndex == 3 }"
            class="w-12"
            @click="currentIndex = 3"
          >
            T-Z
          </li>
        </ul>
      </section>
      <section class="pb-48">
        <ul v-show="currentIndex == 0" class="ml-10">
          <li
            v-for="(it, index) in cityList"
            :key="index"
            class="
              w-28
              cursor-pointer
              leading-8
              text-sm
              inline-block
              text-left
              float-left
              border border-solid border-gray-400
              mx-5
              mt-2
            "
            @click="checked($event)"
          >
            {{ it }}
          </li>
        </ul>
      </section>
      <section class="flex justify-center pt-5 mt-5 bottom-5 z-5 relative">
        <Button title="确定" name="取消"></Button>
      </section>
    </div>
  </div>
</template>
<script>
import Button from "@components/personal/Button.vue";
export default {
  components: {
    Button,
  },
  data() {
    return {
      cityList: [
        "安道尔",
        "阿联酋",
        "阿富汗",
        "安提瓜和巴布达",
        "安圭拉",
        "阿尔巴尼亚",
        "安哥拉",
        "美国",
        "巴黎",
        "加拿大",
      ],
      currentIndex: 0,
    };
  },
  methods: {
    close() {},
    setCity(key) {
      this.currentIndex = key;
      //  var bgColor = this.$refs.bgColor;
      // bgColor.style.backgroundColor="transparent"
    },
  },
};
</script>
<style lang="scss" scoped>
.closed {
  background: url("~@images/iconClosed.png") 0 -39px no-repeat;
  cursor: pointer;
}
.closed:hover {
  background: url("~@images/iconClosed.png") 0 0 no-repeat;
  cursor: pointer;
}
li:hover {
  background-color: rgba(228, 226, 226, 0.3);
  border-radius: 12px;
}
// li:active {
//   background-color: #2d57a1;
//   color: white;
// }
.actived {
  background-color: #2d57a1;
  color: white;
}
</style>
