<template>
  <div class="home">
    <div class="sectionBox section1">
       <div class="titleBox">
          <div class="title">
             跨越语言， 向世界SayHi
          </div>
       </div>
    </div>
    <div class="section">
        <div class="sectionBox section2">
        
    </div>
    </div>
       <div class="section">
        <div class="sectionBox section3">
       
    </div>
    </div>
    <div class="section">
        <div class="sectionBox section4">
       
    </div>
    </div>
      <div class="section">
        <div class="sectionBox section5">
       
    </div>
    </div>
    <div class="section">
        <div class="sectionBox section6">
       
    </div>
    </div>
    <div class="section">
        <div class="sectionBox section7">
       
    </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    // HelloWorld
  }
}
</script>
<style lang="scss" scoped>
.home{
  width: 100%;
  overflow: hidden;
}
.sectionBox {
  height: 969px;
  width: 100%;
  overflow: hidden;
}
.section1 {
  background: url(https://sources.gagahi.com/zh_CN_bg111.jpg) center center no-repeat;
  background-size: 1920px 969px;
}
.section{
  display: table;
  table-layout: fixed;
  width: 100%;
}
.section2{
  background: url('../assets/image/zh_CN_bg2.jpg') center center no-repeat;
  background-size: 1920px 969px;
}
.section3{
  background: url('../assets/image/zh_CN_bg3.jpg') center center no-repeat;
  background-size: 1920px 969px;
}
.section4{
  background: url('../assets/image/zh_CN_bg4.jpg') center center no-repeat;
  background-size: 1920px 969px;
}
.section5{
  background: url('../assets/image/section_live.jpg') center center no-repeat;
  background-size: 1920px 969px;
}
.section6{
  background: url('../assets/image/zh_CN_bg5.jpg') center center no-repeat;
  background-size: 1920px 969px;
}
.section7{
  background: url('../assets/image/zh_CN_bg6.jpg') center center no-repeat;
  background-size: 1920px 969px;
}
</style>
