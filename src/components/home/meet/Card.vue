<template>
  <section
    class="flex flex-col justify-center items-center card-container text-px14"
  >
    <router-link to="otherCentre">
      <div class="card-img">
        <img
          class="max-h-full max-w-full inline-block"
          src="https://images.gagahi.com/A-614b46d091d84696bf32bb34ef16e943"
        />
      </div>
    </router-link>
    <div
      v-if="showInfo"
      @mousemove="moveCard"
      @mouseleave="leaveCard"
      class="w-full"
    >
      <div class="mt-px15 text-base-color2">Sherry</div>
      <div class="text-base-color4">19,{{ $trans("中国") }}</div>
    </div>
    <div
      v-if="showImage"
      @mousemove="moveCard1"
      @mouseleave="leaveCard1"
      class="w-full justify-center items-center flex"
    >
      <div class="emailImg w-10 h-10 my-0 mx-2.5 mt-2.5 cursor-pointer"></div>
    </div>
  </section>
</template>

<script>
import { getMineInformation } from "@api";
// import { getFindLoveIdList } from "@api";
export default {
  data() {
    return {
      showInfo: true,
      showImage: false,
    };
  },
  methods: {
    moveCard() {
      this.showInfo = false;
      this.showImage = true;
    },
    leaveCard() {
      this.showInfo = true;
      this.showImage = false;
    },
    moveCard1() {
      this.moveCard();
    },
    leaveCard1() {
      this.leaveCard();
    },
    //获取偶遇页面数据
    async getMineInformation() {
      await getMineInformation();
    },
    // async getFindLoveIdList() {
    //   await getFindLoveIdList();
    // },
  },
  mounted() {
    this.getMineInformation();
    // this.getFindLoveIdList();
  },
};
</script>

<style lang="scss" scoped>
.card-container {
  width: 186px;
  height: 252px;
  margin: 10px;
  border: 1px solid #dcdcdc;
  border-radius: 5px;
}
.card-img {
  width: 100%;
  height: 186px;
  text-align: center;
}
.emailImg {
  background: url("../../../assets/images/person/little1.png") 0 0 no-repeat;
  background-position: -43px -1px;
}
</style>