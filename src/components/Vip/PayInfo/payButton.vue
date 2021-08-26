<template>
  <div>
    <button
      class="w-32 h-10 text-base my-16"
      :class="{ active: selected }"
      ref="child"
      @click="pay"
    >
      {{ $trans(payname) }}
    </button>
  </div>
</template>

<script>
export default {
  props: {
    payType: String,
  },
  data() {
    return {
      selected: false,
      payname: this.payType,
    };
  },
  methods: {
    pay() {
      this.selected = true;
      this.payname = "正在跳转...";
      console.log(this.payname);
    },
    // debounce(callback, delay) {
    //   var timer = null;
    //   return function () {
    //     var args = arguments;
    //     var that = this;
    //     clearTimeout(timer);
    //     timer = setTimeout(function(){
    //       callback.apply(that,args);
    //     },delay);
    //   };
    // },
  },
  // computed:{
  //   payname:function(){
  //     return this.payType
  //   }
  // }
};
</script>

<style lang='scss' scoped>
.active {
  background: rgb(153, 153, 153);
}
button {
  background-color: #ff625a;
  color: white;
  border-radius: 30px;
  outline: none;
}
</style>