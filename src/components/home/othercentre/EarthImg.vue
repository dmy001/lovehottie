<template>
  <section>
    <div class="bigBg w-5 h-5 relative">
      <div class="bgEarth ml-6 absolute cursor-pointer w-5 h-5"></div>
      <div
        class="selectLang w-36 h-28 hidden absolute"
        style="z-index: 1; top: 22px"
      >
        <div
          class="ul_bg w-5 h-7 absolute -top-3"
          style="z-index: 2; left: 27px"
        ></div>
        <ul>
          <li data-type="en">English</li>
          <li data-type="zh">简体中文</li>
          <li data-type="cht">繁體中文</li>
          <li data-type="kor">한국어</li>
          <li data-type="ru">Pусский</li>
          <li data-type="de">Deutsch</li>
          <li data-type="spa">Español</li>
          <li data-type="jp">日本語</li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>
<style lang="scss" scoped>
.selectLang {
  display: none;
}
ul {
  height: 101px;
  background-color: #fff;
  border: solid 1px #dcdcdc;
  border-radius: 4px;
  padding: 7px 0 0 5px;
  li {
    margin-bottom: 0;
    width: 66px;
    line-height: 20px;
    height: 24px;
    color: #333;
    @apply text-center float-left cursor-pointer;
  }
  li:hover {
    color: $fontColor1;
  }
}
.bgEarth {
  background: url("~@images/dynamic.png") no-repeat;
  background-position: -54px -48px;
}
.bgEarth:hover {
  background-position: -54px -26px;
}
.bigBg:hover .selectLang {
  display: block;
}

.ul_bg {
  background: url("~@images/person/IMicon.png") 0px -75px repeat;
}
</style>