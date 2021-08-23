<template>
  <div >
    <div
      
      class="imgs w-72 h-48 bg-gray-400 object-contain relative float-left mr-8 mt-5"
      @click="scale = true"
    >
      <img class="w-40" :src="imageList[currentIndex]" />
    </div>
    <div v-show="scale" v-if="this.imageList.length > 1">
      <ul>
        <li @click="gotoPage(prevIndex)">&lt;</li>
        <li
          v-for="(img, index) in imageList"
          :key="index"
          :class="{current:currentIndex == index}" 
          @click="gotoPage(index)"
        >
          {{ index + 1 }}
        </li>
        <li @click="gotoPage(nextIndex)">&gt;</li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      currentIndex: 0,
      scale: false,
      imageList: [
        {
          imgUrl:
            "https://sources.lovehottie.com/Z-46599cbc00cf4b6093ad83da14621ed7",
        },
        {
          imgUrl:
            "https://sources.lovehottie.com/Z-46599cbc00cf4b6093ad83da14621ed7",
        },
        {
          imgUrl:
            "https://sources.lovehottie.com/Z-46599cbc00cf4b6093ad83da14621ed7",
        },
        {
          imgUrl:
            "https://sources.lovehottie.com/Z-46599cbc00cf4b6093ad83da14621ed7",
        },
      ],
    };
  },
  computed: {
  //上一张
  prevIndex() {
    if(this.currentIndex == 0) {
      return this.dataList.length - 1;
    }else{
      return this.currentIndex - 1;
    }
  },
  //下一张
  nextIndex() {
    if(this.currentIndex == this.dataList.length - 1) {
      return 0;
    }else {
      return this.currentIndex + 1;
    }
  }
}
};
</script>
