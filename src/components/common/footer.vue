<template>
  <div class="footer z-10 w-full bg-base-bgFooterColor">
    <div class="w-px1200 mx-auto pt-px15">
      <p>
        <a href="https://www.gagahi.com/Global/changeLanguage?lang=en-us"
          >English</a
        >
        |
        <a href="https://www.gagahi.com/Global/changeLanguage?lang=ja-jp"
          >日本語</a
        >
        |
        <a href="https://www.gagahi.com/Global/changeLanguage?lang=ru-ru"
          >русский</a
        >
        |
        <a href="https://www.gagahi.com/Global/changeLanguage?lang=es-es"
          >Español</a
        >
        |
        <a href="https://www.gagahi.com/Global/changeLanguage?lang=zh-cn"
          >简体中文</a
        >
        |
        <a href="https://www.gagahi.com/Global/changeLanguage?lang=zh-tw"
          >繁體中文</a
        >
        |
        <a href="https://www.gagahi.com/Global/changeLanguage?lang=ko-kr"
          >한국어</a
        >
        |
        <a href="https://www.gagahi.com/Global/changeLanguage?lang=de-de"
          >Deutsch</a
        >
      </p>
      <p>
        <a href="https://www.gagahi.com/Platform/abutUs" target="_blank"
          >{{$trans("关于我们")}}</a
        >
        |
        <a href="https://www.gagahi.com/Platform/friendssafe" target="_blank"
          >{{$trans("安全交友")}}</a
        >
        |
        <a href="https://www.gagahi.com/Platform/privacyclause" target="_blank"
          >{{$trans("隐私条款")}}</a
        >
        |
        <a href="https://www.gagahi.com/Platform/help" target="_blank"
          >{{$trans("帮助中心")}}</a
        >
        |
        <a href="https://www.gagahi.com/Platform/contactus" target="_blank"
          >{{$trans("联系我们")}}</a
        >
      </p>
      <div
        class="top fixed right-0 cursor-pointer z-1000"
        style="width: auto; bottom: 85px"
      >
        <div class="scroll_t" style="width: auto; height: auto; border: none">
          <img src="https://s.gagahi.com/web-pc//images/icon_up.png" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
};
</script>
<style lang="scss" scoped>
.footer {
  height: 100px;
  line-height: 30px;
}
.footer a {
  color: #282e3c;
  margin: 0 5px;
  font-family: "瀹嬩綋";
  font-size: 13px;
}
a:hover {
  color: rgb(49, 80, 152);
}
.top {
  width: 55px;
}
</style>