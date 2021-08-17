<template>
  <div class="w-2/3 rounded-2xl border border-solid border-gray-400 p-5">
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
        v-for="(it, index) in hobby"
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
        "
        @click="checked($event)"
      >
        {{ it }}
      </p>
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
      ],
      interests: [],
    };
  },
  methods: {
    checked(e) {
      let value = e.target.innerHTML;

      if (this.interests.includes(value)) {
        //   console.log(this.interests.indexOf(value));
            this.interests=this.interests.slice(this.interests.indexOf(value),1) 
      } else {
        this.interests.push(value);
      }
    },
  },
};
</script>