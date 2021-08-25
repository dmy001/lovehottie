<template>  
       <Upload
        multiple
        type="drag"
        action="//jsonplaceholder.typicode.com/posts/">
        <div style="padding: 20px 0">
            <span type="ios-cloud-upload" class="chooseImg bg-base-color1 ">{{$trans("选择图片")}}</span>
            <p class="text-gray-400">{{$trans("或将照片拖到这里，单次最多可选9张")}}</p>
        </div>
    </Upload>
</template>
<script>
    export default {
        data(){
          return {
          }
        },
          methods: {
      }
    }
</script>
<style lang="scss" scoped>
  .chooseImg{
    width: 130px;
    height: 40px;
    overflow: hidden;
    border-radius:20px ;
    line-height: 40px;
    color: #fff;
    margin: 0 auto;
    margin-bottom: 10px;
    font-size: 16px;
    @apply cursor-pointer block text-center;
  }
</style>