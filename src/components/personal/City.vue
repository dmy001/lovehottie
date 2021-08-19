<template>
  <div>
    <!-- <section
        class="h-12 rounded-t-2xl flex justify-between pl-3"
        style="background-color: #e63561"
      >
        <p class="text-left mt-3 text-white">选择国家</p>
        <span
          class="closed w-9 h-9 rounded-full -mt-3 -mr-1"
          @click="close()"
        ></span>
      </section> -->

    <section class="flex justify-center mt-5 pb-5">
      <ul class="flex flex-row space-x-20 text-center text-base cursor-pointer">
        <li
          :class="{ actived: currentIndex == 0 }"
          class="w-12 rounded-full"
          @click="setCity(0)"
        >
          A-G
        </li>
        <li
          :class="{ actived: currentIndex == 1 }"
          class="w-12 rounded-full"
          @click="currentIndex = 1"
        >
          H-M
        </li>
        <li
          :class="{ actived: currentIndex == 2 }"
          class="w-12 rounded-full"
          @click="currentIndex = 2"
        >
          N-S
        </li>
        <li
          :class="{ actived: currentIndex == 3 }"
          class="w-12 rounded-full"
          @click="currentIndex = 3"
        >
          T-Z
        </li>
      </ul>
    </section>
    <section class="h-80 flex justify-center ml-20 overflow-y-scroll">
      <div v-show="currentIndex == 0" class="">
          <span
            v-for="(it, index) in cityList"
            :key="index"
            :class="{active: isSelect ==index }"
            class="
              w-28
              cursor-pointer
              leading-8
              text-sm
              inline-block
              text-left
              float-left
              mx-5
              mt-2
            "
            @click="bindColor(index)"
          >
            {{ it }}
          </span>
      
        <!-- <span
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
            
            mx-5
            mt-2
          "
          @click="checked($event)"
        >
          {{ it }}
        </span> -->
      </div>
    </section>
  </div>
</template>
<script>
// import Button from "@components/personal/Button.vue";
export default {
  components: {
    // Button,
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
        "郑州市",
        "洛阳市",
        "焦作市",
        "商丘市",
        "信阳市",
        "周口市",
        "鹤壁市",
        "安阳市",
        "濮阳市",
        "驻马店市",
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
        "郑州市",
        "洛阳市",
        "焦作市",
        "商丘市",
        "信阳市",
        "周口市",
        "鹤壁市",
        "安阳市",
        "濮阳市",
        "驻马店市",
      ],
      currentIndex: 0,
      isSelect: false,
    };
  },
  methods: {
    setCity(key) {
      this.currentIndex = key;
    },

    bindColor(index) {
      this.isSelect = index;
    },
  },
};
</script>
<style lang="scss" scoped>
.active {
  color: rgba(20, 97, 238, 0.932);
}
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
.actived:hover {
  background-color: #2d57a1;
}
.actived {
  background-color: #2d57a1;
  color: white;
}
</style>
