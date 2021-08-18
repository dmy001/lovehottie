<template>
  <div class="VipFooter relative border">
    <div class="text-left ml-4">
      <h3 class="font-bold py-4">成为{{ title }}会员，您可享受很多特权 :</h3>
      <div v-show="flag">
        <span v-for="(item, index) in descrip" :key="index" class="ml-6">
          <i class="inline-block align-middle footerImg"></i>
          <span class="align-middle break-normal">{{ item }}</span>
        </span>
        <div class="downArr mt-5 -mb-5">
      <p>查看更多特权</p>
      <i class="inline-block" @click="showInfo"></i>
    </div>
      </div>
      <div v-show="!flag">
        <div v-for="(item, index) in descriptionList" :key="index" class="mt-2">
          <p class="text-px14">{{ item.name }}</p>
          <p class="text-px14 text-descrip">
            {{ item.descrip }}
          </p>
        </div>
        <div class="upArr mt-5 -mb-5">
        <p>收起</p>
      <i class="inline-block" @click="showInfo"></i>
    </div>
      </div>
    </div>
    
  </div>
</template>

<script>
export default {
  props: {
    descriptionList: Array,
    title: String,
    descrip: Array,
  },
  data() {
    return {
      flag: true,
    };
  },
  methods: {
    showInfo() {
      this.flag = !this.flag;
    },
  },
};
</script>

<style lang="scss" scoped>
.VipFooter {
  width: 756px;
  .footerImg {
    width: 18px;
    height: 12px;
    background: url("~@images/person/little1.png") -100px -1038px no-repeat;
  }
  .downArr {
    i {
      width: 30px;
      height: 30px;
      background: url("~@images/person/little1.png") -80px -870px no-repeat;
    }
  }
}
</style>