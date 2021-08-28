<template>
  <div class="VipFooter relative border">
    <div class="text-left ml-4">
      <h3 class="font-bold py-4">{{ $trans(`成为${title}，您可享受很多特权`) }} :</h3>
      <!-- <transition name="fade"> -->
        <div v-show="flag" class="down">
          <span v-for="(item, index) in descrip" :key="index" class="ml-6">
            <i class="inline-block align-middle footerImg"></i>
            <span class="align-middle break-normal">{{ $trans(item) }}</span>
          </span>
          <div class="downArr text-center mt-5 -mb-5">
            <p>{{ $trans('查看更多特权') }}</p>
            <i class="inline-block" @click="showInfo"></i>
          </div>
        </div>
      <!-- </transition> -->
      <div v-show="!flag" class="up">
        <div v-for="(item, index) in descriptionList" :key="index" class="mt-2">
          <p class="text-px14">{{ $trans(item.name) }}</p>
          <p class="text-px14 text-descrip">
            {{ $trans(item.descrip) }}
          </p>
        </div>
        <div class="upArr text-center mt-5 -mb-5">
          <p>{{$trans('收起')}}</p>
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
  // .fade-enter-active,
  // .fade-leave-active {
  //   transition: height 1s;
  // }
  // .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  //   height: 0px;
  // }
  
  i {
    width: 30px;
    height: 30px;
  }
  .footerImg {
    width: 18px;
    height: 12px;
    background: url("~@images/person/little1.png") -100px -1038px no-repeat;
  }
  .downArr {
    i {
      background: url("~@images/person/little1.png") -80px -870px no-repeat;
    }
  }
  .upArr {
    i {
      background: url("~@images/person/little1.png") -80px -812px no-repeat;
    }
  }
}
</style>