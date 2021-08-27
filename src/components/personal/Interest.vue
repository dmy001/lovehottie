<template>
  <div
    class="w-2/3 rounded-2xl border border-solid border-gray-400 p-5 relative"
  >
    <div class="border-b border-dashed border-gray-400 pb-4">
      <p
        v-for="(item, index) in interests"
        :key="index"
        class="
          px-2
          w-20
          h-8
          bg-yellow-50
          rounded-2xl
          text-center
          leading-8
          text-sm
          inline-block
          mr-2
          mt-2
        "
      >
        {{ item }}
      </p>
    </div>

    <div class="">
      <p
        v-for="(it, index) in randomArr"
        :key="index"
        class="
          px-2
          w-20
          h-8
          border border-solid border-gray-400
          rounded-2xl
          text-center
          leading-8
          text-sm
          inline-block
          mr-2
          mt-2
          cursor-pointer
        "
        @click="checked($event)"
      >
        {{ hobby[it] }}
      </p>
    </div>
    <div class="absolute right-2 bottom-2" @click="freshen">
      <i class="inline-block align-middle"></i
      ><span class="align-middle">刷新</span>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      hobby: [
        "篮球",
        "新闻",
        "娱乐",
        "体育",
        "读书",
        "美容",
        "音乐",
        "骑行",
        "健身",
        "宠物",
        "电影",
        "90后",
        "牧业",
        "瑜伽",
        "赛场",
      ],
      interests: [],
      randomArr: [],
    };
  },
  methods: {
    checked(e) {
      let value = e.target.innerHTML;
      if (this.interests.includes(value)) {
        this.interests.splice(this.interests.indexOf(value), 1);
      } else {
        this.interests.push(value);
      }
    },
    freshen() {
      var nums = [];
      for (var i = 0; nums.length < 11; i++) {
        var s = Math.ceil(Math.random() * 11);
        if (!nums.includes(s)) {
          nums[nums.length] = s;
        }
      }
      this.randomArr = nums;
    },

  },
  mounted(){
    this.freshen()
  }
};
</script>
<style lang="scss" scoped>
i {
  width: 15px;
  height: 15px;
  background: url("~@images/person/little1.png") -85px -768px no-repeat;
}
</style>