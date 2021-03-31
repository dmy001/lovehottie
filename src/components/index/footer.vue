<template>
  <div id="footer">
    <div class="foot">
      <div class="jz w995">
        <p>
          关注GaGaHi
          <a
            title="Twitter"
            href="https://twitter.com/GaGaHi01"
            class="twitter_bg"
            target="_blank"
          ></a>

          <a
            title="SINA"
            class="xinlang"
            href="http://weibo.com/p/1006065251819220/home?from=page_100606&amp;mod=TAB#place"
            target="_blank"
            style="vertical-align: middle"
          ></a>
        </p>
        <p>
          <a href="https://www.gagahi.com/Platform/abutUs" target="_blank"
            >关于我们</a
          >
          |
          <a href="https://www.gagahi.com/Platform/friendssafe" target="_blank"
            >安全交友</a
          >
          |
          <a
            href="https://www.gagahi.com/Platform/privacyclause"
            target="_blank"
            >隐私条款</a
          >
          |
          <a href="https://www.gagahi.com/Platform/help" target="_blank"
            >帮助中心</a
          >
          |
          <a href="https://www.gagahi.com/Platform/contactus" target="_blank"
            >联系我们</a
          ><br />
          <span class="copy-words"
            >©<span class="year">2021</span> 郑州中业科技股份有限公司
            &nbsp;&nbsp;增值电信业务经营许可证：豫B2-20190716&nbsp;&nbsp;<a
              href="https://beian.miit.gov.cn"
              target="_blank"
              >豫ICP备11032422号-7</a
            ><br
          /></span>
          <span class="copy-words"
            ><a
              href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=41019702002081"
              target="_blank"
              class="monitor"
            ></a
            ><a
              href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=41019702002081"
              target="_blank"
              >豫公网安备 41019702002081号</a
            ><img
              src="https://s.gagahi.com/web-pc//images/wenhuajingying.png"
              alt=""
              style="width: 27px; vertical-align: middle; margin-top: -3px;display: inline;"
            /><a
              href="http://sq.ccm.gov.cn/ccnt/sczr/service/business/emark/toDetail/444d25ed5fea4d5f84b803881b80426a"
              target="_blank"
              >豫网文〔2018〕10602-157号</a
            ><a
              href="https://images.gagahi.com/acf9340148144e639a576cc13eb2fb7f.png"
              target="_blank"
              >&nbsp;&nbsp;|&nbsp;营业执照</a
            ></span
          >
        </p>
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
#footer {
  height: auto !important;
  display: table;
  table-layout: fixed;
  width: 100%;
  font-size: 14px;
  color: #fff;
  font-weight: bold;
  .foot {
    background: #555;
    padding: 20px 0;
    color: #fff;
    text-align: center;
    line-height: 38px;
  }
  .w995 {
    width: 945px;
    margin: 0 auto
  }
  a {
    color: #fff;
  }
  .twitter_bg {
    display: inline-block;
    width: 26px;
    vertical-align: middle;
    height: 26px;
    margin-right: 18px;
    background: url('~@images/index/twitter_bg.png');
    background-size: 26px 26px;
  }
  .xinlang {
   display: inline-block;
    width: 26px;
    height: 26px;
    background: url('~@images/index/img_sina_microblog.png');
    background-size: 26px 26px;
  }
 .copy-words {
    display: inline;
}
.monitor {
    background: url('~@images/index/monitor.png') no-repeat;
    display: inline-block;
    width: 19px;
    height: 24px;
    position: relative;
    top: 9px;
    margin-right: 6px;
}
}
</style>