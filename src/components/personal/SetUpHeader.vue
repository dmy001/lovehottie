<template>
  <div
    class="
      w-11/12
      border-b border-gray-300 border-solid
      mt-5
      mx-auto
      text-left text-lg
    "
  >
    {{ title }}
    <span class="set-information inline-block" @click="write"></span>
  </div>
</template>
<script>
export default {
  props: {
    title: String,
  },
  methods:{
    write(){
       this.$emit('writeInformation')
    }
  }
};
</script>
<style lang="scss" scoped>
.set-information {
  width: 20px;
  height: 20px;
  background: url(/img/little.c7c7e4e0.png) 0 -616px no-repeat;
  vertical-align: middle;
  cursor: pointer;
}
</style>