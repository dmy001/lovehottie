<template>
  <div>
    <Upload
      v-show="selectImg"
      multiple
      type="drag"
      :show-upload-list="false"
      :before-upload="handleUpload"
      :on-success="handleSuccess"
      action="//jsonplaceholder.typicode.com/posts/"
      class="image1"
    >
      <div style="padding: 20px 0">
        <span type="ios-cloud-upload" class="chooseImg bg-base-color1">{{
          $trans("选择图片")
        }}</span>
        <p class="text-gray-400">
          {{ $trans("或将照片拖到这里，单次最多可选9张") }}
        </p>
      </div>
    </Upload>
    <div v-show="addImg" class="mt-20  ">
      <div
        v-for="(item, index) in imgList"
        :key="index"
        class="bg-gray-400
               
              float-left
              px-4 
              mr-2
              mb-2"
        
      >
        <img
          v-if="base64Img"
          :src="item"
          class="w-32 h-32 object-cover  "
        />
      </div>
      <div>
        <Upload
          multiple
          :before-upload="handleUpload"
          :show-upload-list="false"
          :format="['jpg', 'jpeg', 'png']"
          :max-size="2048"
          action="//jsonplaceholder.typicode.com/posts/"
        >
          <img src="~@images/person/more.jpg" class="cursor-pointer" />
        </Upload>

      </div>
        
      <p class="text-black">共{{ this.imgList.length }},还能上传{{ 9 - this.imgList.length }}张。</p>
      <div class="absolute bottom-5 w-full text-center">
        <span class="chooseImg   bg-red-500">一键上传</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      addImg: false,
      selectImg: true,
      imgList: [],
      file: null,
      base64Img: null,
    };
  },

  methods: {
    handleSuccess() {
      // console.log(file);
      // file.url =
      //   "https://images.gagahi.com/Z-298ee8d8262c451e80eedf09c8d0dabc";
      // file.name = "7eb99afb9d5f317c912f08b5212fd69a";
    },
    handleUpload(file) {
      this.selectImg = false;
      this.addImg = true;
      this.file = file;
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        const _base64 = reader.result;
        this.base64Img = _base64;
        // console.log(_base64);

        this.imgList.push(this.base64Img);
        // console.log(...this.imgList)
      };
      // return false;
    },
  },
};
</script>
<style lang="scss" scoped>
.chooseImg {
  width: 130px;
  height: 40px;
  overflow: hidden;
  border-radius: 20px;
  line-height: 40px;
  color: #fff;
  margin: 0 auto;
  margin-bottom: 10px;
  font-size: 16px;
  @apply cursor-pointer block text-center;
}
.viewImg > .ivu-upload-drag {
  border: none;
}
</style>